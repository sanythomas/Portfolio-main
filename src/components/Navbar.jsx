import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/40 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
  onClick={() => scrollToSection("hero")}
  className="flex items-center gap-3 cursor-pointer"
>
  <div
    className="
      w-10 h-10 md:w-12 md:h-12
      rounded-2xl shadow-md 
      bg-gradient-to-br from-[#F8EDED] via-[#D7C9FF] to-[#C3E5DF]
      flex items-center justify-center
      transition-all duration-300
      hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(215,201,255,0.7)]
    "
  >
    <span className="text-lg md:text-xl font-bold text-purple-700">
      ST
    </span>
  </div>

  <span className="hidden sm:inline text-lg font-semibold text-gray-800">
    Sany Mary Thomas
  </span>
</div>



        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("about")} className="hover:text-purple-600">
            About
          </button>

          <button onClick={() => scrollToSection("education")} className="hover:text-purple-600">
            Education
          </button>

          <button onClick={() => scrollToSection("experience")} className="hover:text-purple-600">
            Experience
          </button>
          
          <button onClick={() => scrollToSection("projects")} className="hover:text-purple-600">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-purple-600">
            Skills
          </button>

          <button onClick={() => scrollToSection("certifications")} className="hover:text-purple-600">
            Certifications
          </button>
          
          <button onClick={() => scrollToSection("contact")} className="hover:text-purple-600">
            Contact
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white/90 px-6 py-4 space-y-4 shadow-md"
        >
          <button onClick={() => scrollToSection("about")} className="block w-full text-left">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="block w-full text-left">
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className="block w-full text-left">
            Projects
          </button>
          <button onClick={() => scrollToSection("experience")} className="block w-full text-left">
            Experience
          </button>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left">
            Contact
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
