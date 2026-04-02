import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  // Replace the href values with your real profile links/phone
  const links = [
    { href: "https://www.linkedin.com/in/ancline-janofer-a41a57262/", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://www.instagram.com/anclinjanofer_", label: "Instagram", icon: FaInstagram },
    { href: "https://www.youtube.com/@kuttyentertainment9428", label: "YouTube", icon: FaYoutube },
    { href: "mailto:anclinejanofer28@gmail.com", label: "Email", icon: FaEnvelope },
    { href: "https://wa.me/9677771825", label: "WhatsApp", icon: FaWhatsapp },
  ];

  return (
    <section id="contact" className="py-20 px-6 text-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>

      <p className="text-gray-300 mb-8">Find me on these platforms or send a quick email.</p>

      <div className="flex justify-center gap-6">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-200 hover:text-white transition"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl hover:bg-purple-500 hover:text-white transition">
                <Icon />
              </div>
              <span className="text-sm text-gray-300">{l.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}