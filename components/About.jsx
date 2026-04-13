"use client";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Queries Executed", value: "500+" },
    { label: "Dashboards Built", value: "12" },
    { label: "Accuracy Rate", value: "98.4%" },
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5">
      
      {/* HEADER WITH DATA DECOR */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">
          System_<span className="text-cyan-500">Overview</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* LEFT: BIO & STATS (8 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              I specialize in turning <span className="text-white font-medium italic underline decoration-cyan-500/50">fragmented data</span> into clear, actionable business intelligence. 
            </p>
            <p className="text-gray-500 leading-relaxed">
              Based in India, I bridge the gap between complex SQL queries and executive-level Power BI dashboards. With a background in B.Tech CS, I focus on the structural integrity of data and the visual story it tells.
            </p>
          </div>

          {/* MINI STATS COUNTER */}
          <div className="grid grid-cols-3 gap-4 py-8 border-y border-white/5">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-white italic">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
             {["SQL", "Python", "Power BI", "Excel", "DAX"].map((skill) => (
               <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                 {skill}
               </span>
             ))}
          </div>
        </motion.div>

        {/* RIGHT: STRUCTURED EXPERIENCE & EDU (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-[#0a0a0a] border border-white/10 rounded-sm p-8 relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} 
          />

          <div className="relative z-10 space-y-10">
            {/* EDUCATION */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                Academic_Log
              </h3>
              <div className="border-l-2 border-cyan-500/30 pl-6 space-y-1">
                <p className="text-white font-bold italic">B.Tech Computer Science</p>
                <p className="text-sm text-gray-400">AI & Data Science Specialty</p>
                <p className="text-[11px] text-gray-500 font-mono">Kurukshetra University • 2023-2027</p>
              </div>
            </div>

            {/* RECENT EXPERIENCE */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-white/20 rounded-full" />
                Professional_Trace
              </h3>
              <div className="border-l-2 border-white/10 pl-6 space-y-2">
                <div>
                  <p className="text-white font-bold italic">Data Analyst Intern</p>
                  <p className="text-[11px] text-cyan-500 font-mono uppercase tracking-tighter">Unq Groups</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Automated weekly reporting pipelines and optimized SQL queries for internal dashboard performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}