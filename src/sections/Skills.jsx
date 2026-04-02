export default function Skills() {
  const skills = [
    "Photoshop",
    "Blender",
    "FL Studio",
    "After Effects",
    "Premiere Pro",

  ];

  return (
    <section className="py-10 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="flex gap-10 animate-scroll whitespace-nowrap text-gray-300">
        {skills.concat(skills).map((s, i) => (
          <span key={i} className="text-lg font-medium">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}