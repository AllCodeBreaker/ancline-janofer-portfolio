export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white rounded-lg">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/5">
          <img
            src="ancline.png"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate designer specializing in graphic design,
            3D modeling, and visual storytelling. I focus on creating
            impactful and high-quality designs.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div>
              <h3 className="text-2xl font-bold text-white">50+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-sm text-gray-400">Clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}