import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  "home",
  "about",
  "skills",
  "projects",
  // "testimonials",
  "faq",
  // "visitor-messages",
  "contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll and update active link
  useEffect(() => {
    const handleScroll = () => {
      const offsets = links.map((link) => {
        const el = document.getElementById(link);
        return {
          id: link,
          top: el?.offsetTop || 0,
        };
      });

      const scrollY = window.scrollY + 100; // offset for navbar height
      const current = offsets.reverse().find((s) => scrollY >= s.top);
      setActive(current?.id || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-lg md:text-xl font-bold text-blue-400">
            <span className="block text-blue-400 text-sm md:text-base leading-tight">
              Crafting Digital Futures, Code by Code
            </span>
            <span className="block text-gray-400 text-xs md:text-sm">
              Shaping Careers Along the Way
            </span>
          </h1>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-white gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`capitalize hover:text-blue-400 transition-colors ${
                active === link ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-3 text-sm"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={toggleMenu}
              className={`block capitalize hover:text-blue-400 ${
                active === link ? "text-blue-400 font-medium" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
