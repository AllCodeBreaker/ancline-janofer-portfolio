import { useState } from "react";
import projects from "../data/projects";

const categories = ["All", "3D", "Posters", "Editing", "Branding"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white rounded-lg">
      
      <h2 className="text-3xl font-bold text-center mb-10 text-white">My Work</h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              active === cat
                ? "bg-purple-500 text-white"
                : "bg-white/5 hover:bg-white/10 text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((p) => (
            <div
            key={p.id}
            onClick={() => setSelected(p)}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm opacity-80">{p.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 relative text-white border border-white/10">
            
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl text-gray-300"
            >
              ✕
            </button>

            <img
              src={selected.image}
              className="w-full rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold">{selected.title}</h3>
            <p className="text-gray-300">{selected.category}</p>
            <p className="mt-3 text-sm text-gray-300">
              High-quality design project showcasing creativity and detail.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}