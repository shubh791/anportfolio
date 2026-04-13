"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Dashboard", id: "home" },
    { name: "Query_Log", id: "about" },
    { name: "Visualizations", id: "portfolio" },
    { name: "Connect", id: "contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* LOGO: THE DATA POINT */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 overflow-hidden">
               <motion.div 
                animate={{ height: ["20%", "60%", "40%", "80%", "30%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-1 bg-cyan-500 mx-[1px]" 
               />
               <motion.div 
                animate={{ height: ["40%", "20%", "80%", "50%", "70%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1 bg-cyan-400 mx-[1px]" 
               />
               <motion.div 
                animate={{ height: ["70%", "40%", "30%", "60%", "20%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="w-1 bg-cyan-600 mx-[1px]" 
               />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black uppercase tracking-[0.3em] text-white">
              Anu <span className="text-cyan-500">Rawal</span>
            </h1>
            <span className="text-[8px] font-mono text-gray-500 tracking-widest leading-none">
              DATA_ANALYST_v2.0
            </span>
          </div>
        </div>

        {/* NAVIGATION: DATA FLOW STYLE */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-sm border border-white/10">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-5 py-2 group transition-all"
            >
              <span className={`relative z-10 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                hovered === i ? "text-white" : "text-gray-500"
              }`}>
                {link.name}
              </span>
              
              {/* Hover Indicator: Data Highlight */}
              {hovered === i && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-cyan-500/10 border-b-2 border-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA: SYSTEM CONNECT */}
        <button
          onClick={() => scrollTo("contact")}
          className="group relative flex items-center gap-3 px-6 py-2 bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-white transition-all duration-300"
        >
          <span className="relative z-10">Execute Query</span>
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse group-hover:bg-white" />
        </button>

      </div>

      {/* SYSTEM STATUS BAR (Subtle Detail) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </nav>
  );
}