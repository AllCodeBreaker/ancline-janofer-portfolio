import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/80 backdrop-blur-md shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide cursor-pointer text-white">
          Ancline Janofer
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="text-gray-200 hover:text-purple-300 transition">
            About
          </a>
          <a href="#portfolio" className="text-gray-200 hover:text-purple-300 transition">
            Work
          </a>
          <a href="#services" className="text-gray-200 hover:text-purple-300 transition">
            Services
          </a>
          <a href="#contact" className="text-gray-200 hover:text-purple-300 transition">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-600 hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 text-white shadow-md px-6 py-4 space-y-4">
          <a href="#about" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-purple-300">About</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-purple-300">Work</a>
          <a href="#services" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-purple-300">Services</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-purple-300">Contact</a>
        </div>
      )}
    </nav>
  );
}