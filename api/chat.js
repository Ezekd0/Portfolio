export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const systemPrompt = `You are IDEAL AI, the virtual assistant for Victor Clement Udoma's personal portfolio website.
Victor Clement Udoma is a Python Developer, Backend Engineer, AI Bot Developer, Data Science student, and Co-Founder of Ideal Technology.
His tech stack includes:
- Backend: Python, FastAPI, Flask, Django
- Data Science: Pandas, NumPy, Machine Learning, Data Analytics, MATLAB
- Databases: PostgreSQL, MySQL, MongoDB
- Tools: Git, GitHub, Linux, Postman, WordPress, JavaScript

Key details about Victor:
- Co-founded Ideal Technology in 2023 to build AI automation and scalable backends for SMEs.
- Completed 28+ projects, built 12+ AI bots, and has 4150+ coding hours.
- Developed the web platform for the "Ibom Blockchain Xperience" (https://www.ibomblockchain.com/), West Africa's largest blockchain movement, facilitating community events and Web3 ecosystem integration.
- Email: victor@idealtech.com
- He is currently learning Machine Learning, AI Agents, Deep Learning, Data Analytics, and Scientific Computing.

Answer questions about Victor, his work, Ideal Technology, Ibom Blockchain Xperience, and his skills in an encouraging, highly professional, and concise tone. Direct recruiters and clients to use the Contact form or email if they want to get in touch with him.`;

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
