"use client";
import { motion } from "framer-motion";
import { FiArrowUp, FiTerminal } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/5 py-12 px-8 overflow-hidden">
      {/* BACKGROUND DECOR: Subtle Grid Fade */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid-data" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* LEFT: BRANDING & ROLE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <FiTerminal className="text-cyan-500 text-sm" />
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white">
                Anu <span className="text-cyan-500">Rawal</span>
              </h2>
            </div>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest leading-relaxed">
              Aspiring Data Analyst // Engineering Insights <br />
              Specialized in SQL • Power BI • Python
            </p>
          </div>

          {/* CENTER: SYSTEM STATUS */}
          <div className="hidden lg:flex flex-col items-center">
             <div className="flex items-center gap-6 px-6 py-3 border border-white/5 bg-white/[0.01] rounded-sm">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-mono text-gray-600 uppercase mb-1">Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-tighter">Live_Portfolio_v2</span>
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-white/5" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-mono text-gray-600 uppercase mb-1">Latency</span>
                  <span className="text-[10px] font-mono text-white font-bold tracking-tighter">14ms</span>
                </div>
                <div className="w-[1px] h-8 bg-white/5" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-mono text-gray-600 uppercase mb-1">Region</span>
                  <span className="text-[10px] font-mono text-white font-bold tracking-tighter">IN_DELHI</span>
                </div>
             </div>
          </div>

          {/* RIGHT: SCROLL TO TOP */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.4em]">
            © 2026 Designed & Built by Anu Rawal
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] font-mono text-gray-800 uppercase tracking-[0.2em]">Deployment: Vercel_01</span>
            <span className="text-[9px] font-mono text-gray-800 uppercase tracking-[0.2em]">Ref: 28.61° N, 77.20° E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}