import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-5 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </motion.button>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-2 px-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-8 md:gap-10 text-white">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm text-gray-400">
          <p>
            &copy; 2025{" "}
            <span className="text-white font-medium">Suraj Kumar Bind</span>.
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
