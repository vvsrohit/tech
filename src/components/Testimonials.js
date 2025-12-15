export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Full Stack Dev",
      text: "The tasks in this challenge are perfectly scoped. Great for learning Next.js patterns.",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Student",
      text: "I finally understand how to use Git branches properly thanks to this workflow.",
    },
    {
      id: 3,
      name: "Jessica Alverez",
      role: "Designer",
      text: "The dark mode implementation was smoother than I expected. Love the design system!",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Community Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}