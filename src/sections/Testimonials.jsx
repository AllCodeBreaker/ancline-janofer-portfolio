import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 text-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      <h2 className="text-3xl font-bold mb-12 text-white">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition"
          >
            <p className="text-gray-300 mb-4">"{t.text}"</p>
            <h4 className="font-semibold text-white">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}