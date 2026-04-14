"use client";
import { motion } from "framer-motion";

export default function Hero() {

  const scrollToProjects = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 pt-24 md:pt-20 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden bg-[#050505]"
    >
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #22d3ee 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-5 md:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">
            System_Active: v4.0
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 leading-[0.9] tracking-tighter">
          <span className="text-white">ANU</span> <br />
          <span
            className="text-transparent italic"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
          >
            RAWAL
          </span>
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl font-mono text-cyan-400 mb-6 md:mb-8 flex items-center justify-center md:justify-start gap-2"
        >
          <span className="opacity-50">&gt;</span> Aspiring Data Analyst
          <span className="w-2 h-5 bg-cyan-500 animate-[blink_1s_infinite]" />
        </motion.h2>

        <p className="text-gray-400 mb-8 md:mb-10 max-w-md md:max-w-lg text-sm sm:text-base md:text-lg font-light leading-relaxed mx-auto md:mx-0">
          Translating complex datasets into{" "}
          <span className="text-white font-medium italic underline decoration-cyan-500">
            actionable intelligence
          </span>
          . Specialized in SQL optimization, Power BI architectures, and Python modeling.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">

          {/* SCROLL BUTTON */}
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto relative group px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-black uppercase text-[10px] sm:text-xs tracking-widest overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-white transition-colors">
              Analyze Projects
            </span>
            <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          {/* GITHUB BUTTON */}
          <a
            href="https://github.com/bora23-04"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/10 text-white font-black uppercase text-[10px] sm:text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-500 text-center"
          >
            Open_Source_CV
          </a>

        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 relative flex justify-center items-center mt-6 md:mt-0"
      >
        {/* FLOAT CARD */}
        <div className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 z-20 hidden sm:block">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-black/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm shadow-2xl"
          >
            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-widest">
              Query_Efficiency
            </p>
            <p className="text-lg sm:text-xl font-black text-cyan-500">99.2%</p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_10s_linear_infinite_reverse]" />

          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-30" />

          <img
            src="/profile.jpg"
            alt="Anu Rawal"
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white/10 p-2"
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}