"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 noise" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-surface-600/10 rounded-full blur-3xl" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-mono text-sm tracking-wider mb-4"
            >
              FULL-STACK SOFTWARE ENGINEER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Abdelrahman <span className="text-gradient italic">Sayed</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-surface-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              I craft robust, scalable web applications with modern
              technologies. Passionate about building exceptional user
              experiences and architecting efficient backend systems that power
              healthcare and enterprise solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown size={18} className="animate-bounce" />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-6"
            >
              <span className="text-surface-500 text-sm">Find me on</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Abdelrahmansayed1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-surface-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-sayed-a096371a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-surface-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:abdelrahmansayedu@gmail.com"
                  className="p-2 text-surface-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-surface-600/20 rounded-full blur-2xl opacity-60" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-accent/30 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-surface-700 rounded-full" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-surface-800">
                <Image
                  src="/projects/profile.png"
                  alt="Abdelrahman Sayed"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full"
              >
                <span className="text-accent font-mono text-sm">{"< / >"}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-surface-700 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
