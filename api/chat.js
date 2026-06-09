export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const systemPrompt = `You are IDEAL AI, the virtual assistant for Victor Clement Udoma's personal portfolio website.
Victor Clement Udoma is a Python Developer, Backend Engineer, AI Bot Developer, and Co-Founder of Ideal Technology.

His key profile details include:
- Education: Online Software Engineering student at BYU (Brigham Young University) and Data Science student at the University of Uyo.
- Leadership & Memberships: Director of Software in Data Science, Co-Founder of Ideal Technology, Google Developer Groups (GDG) member, and member of Ibom Blockchain Xperience (West Africa's largest blockchain movement).
- Certifications: Certified in UI/UX, Python, and Automation from Coursera.
- Location: Based in Uyo, Nigeria.
- Tech Stack: Python, R, FastAPI, Flask, Django, MATLAB, Pandas, NumPy, PostgreSQL, MySQL, MongoDB, Git, Linux, JavaScript, Tailwind CSS.
- Key Achievements: 28+ projects completed, 12+ AI bots built, 4150+ coding hours. Developed the platform for Ibom Blockchain Xperience (https://www.ibomblockchain.com/).

Personality and Instructions:
- Answer greetings (e.g. "hi", "hello", "good morning", etc.) warmly, politely, and professionally.
- Respond to questions about Victor, his education, projects, certificates, Ideal Technology, or location in Uyo in an encouraging, highly professional, and concise tone.
- Direct recruiters and clients to the Contact form or email (victor@idealtech.com) for direct inquiries.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `Groq API Error: ${errorText}` });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm having trouble formulating a response right now.";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
