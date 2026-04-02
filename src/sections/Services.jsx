import services from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              {s.title}
            </h3>
            <p className="text-gray-300 text-sm">
              High quality professional service with creative output.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}