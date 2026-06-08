const topics = ['Machine Learning', 'AI Agents', 'Deep Learning', 'Data Analytics', 'Scientific Computing', 'Advanced Backend Systems'];

const CurrentlyLearning = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">📘 <span className="text-accent">Currently Learning</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(t => (
          <div key={t} className="bg-secondary/60 p-5 rounded-xl border border-accent/20 text-center text-xl font-medium hover:shadow-accent/20 shadow-md transition">
            {t}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurrentlyLearning;
