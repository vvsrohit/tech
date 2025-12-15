export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      text: "This challenge was an amazing way to learn Git and React. Highly recommend!",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "UX Designer",
      text: "The tasks were well-structured and easy to follow. A great experience for beginners.",
    },
    {
      id: 3,
      name: "Charlie Davis",
      role: "Software Engineer",
      text: "I loved the collaborative aspect. The project structure is clean and modern.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}