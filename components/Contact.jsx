"use client";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiMessageSquare } from "react-icons/fi";

const socialLinks = [
  {
    name: "Email",
    icon: <FiMail />,
    handle: "anurawal2324@gmail.com",
    url: "mailto:anurawal2324@gmail.com",
    color: "hover:text-cyan-400",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    handle: "Anu Rawal",
    url: "https://www.linkedin.com/in/anu-rawal-49986b316/",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    handle: "@anurawal",
    url: "https://github.com/bora23-04",
    color: "hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: <FiMessageSquare />,
    handle: "Message Directly",
    url: "https://wa.me/9991465541",
    color: "hover:text-green-400",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">
            Network_Status: Available
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-4 sm:mb-6">
          Establish_<span className="text-cyan-500">Link</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-5 sm:p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02]"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <span
                className={`text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-500 transition-all duration-300 group-hover:scale-110 ${link.color}`}
              >
                {link.icon}
              </span>
              <h3 className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-[0.3em] text-gray-400 mb-1">
                {link.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-white font-medium opacity-60 group-hover:opacity-100 transition-opacity break-all">
                {link.handle}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center border-t border-white/5 pt-10 sm:pt-16 md:pt-20"
      >
        <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-3 sm:mb-4">
          Ready to drive <span className="text-cyan-500">measurable impact?</span>
        </p>

        <p className="text-gray-500 max-w-xl md:max-w-2xl text-xs sm:text-sm font-light leading-relaxed mb-6 sm:mb-8">
          Whether you need a full-scale data architecture or specific analytical insights,
          connect with me via any of the professional links above to discuss your next project.
        </p>

        {/* LOCATION TAG */}
        <div className="flex items-center gap-3 sm:gap-4 text-[8px] sm:text-[9px] font-mono text-gray-700 uppercase tracking-[0.3em] sm:tracking-[0.4em] flex-wrap justify-center">
          <span>Remote / Global</span>
          <span className="w-1 h-1 bg-white/10 rounded-full" />
          <span>2026_Edition</span>
        </div>
      </motion.div>
    </section>
  );
}