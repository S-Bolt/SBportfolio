import { useState, useEffect } from "react";
import SbLogo from "./assets/sbLogo";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {scrolled && <SbLogo className="h-10 w-10" />}

          <span className="text-white font-bold text-xl">Sam Bolton</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition"
          >
            About
          </a>
          <a href="#tech" className="text-white hover:text-gray-300 transition">
            Tech Tools
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-300 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
