"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-surface-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you. Drop me a message and I&apos;ll get back to you as soon as
            possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:abdelrahmansayedu@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-surface-800 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-surface-500 text-sm">Email</p>
                    <p className="text-surface-200 group-hover:text-accent transition-colors">
                      abdelrahmansayedu@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface-800 rounded-xl">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-surface-500 text-sm">Location</p>
                    <p className="text-surface-200">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-surface-400 text-sm font-mono mb-4">
                CONNECT WITH ME
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Abdelrahmansayed1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-800 rounded-xl text-surface-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-sayed-a096371a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-800 rounded-xl text-surface-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative p-6 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent" />
              <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
              <div className="relative">
                <h4 className="font-display text-xl text-white mb-2">
                  Looking for a developer?
                </h4>
                <p className="text-surface-400 text-sm mb-4">
                  I&apos;m currently available for freelance projects and
                  full-time opportunities.
                </p>
                <a
                  href="/projects/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium"
                >
                  Download Resume
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-surface-300 text-sm mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-surface-300 text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-surface-300 text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <span className="text-green-400">✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
