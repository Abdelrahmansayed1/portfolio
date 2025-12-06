"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-surface-400 text-sm"
          >
            <span>© {currentYear} Abdelrahman Sayed.</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="#about"
              className="text-surface-500 hover:text-accent transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-surface-500 hover:text-accent transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-surface-500 hover:text-accent transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-surface-500 hover:text-accent transition-colors text-sm"
            >
              Contact
            </a>
          </motion.nav>
        </div>
      </div>
    </footer>
  );
}
