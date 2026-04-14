"use client";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Queries Executed", value: "500+" },
    { label: "Dashboards Built", value: "12" },
    { label: "Accuracy Rate", value: "98.4%" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/5"
    >
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white">
          System_<span className="text-cyan-500">Overview</span>
        </h2>
        <div className="h-[1px] w-full sm:flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6 sm:space-y-8"
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              I specialize in turning{" "}
              <span className="text-white font-medium italic underline decoration-cyan-500/50">
                fragmented data
              </span>{" "}
              into clear, actionable business intelligence.
            </p>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Based in India, I bridge the gap between complex SQL queries and executive-level Power BI dashboards. With a background in B.Tech CS, I focus on the structural integrity of data and the visual story it tells.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 py-6 sm:py-8 border-y border-white/5">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold mb-1">
                  {stat.label}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-black text-white italic">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["SQL", "Python", "Power BI", "Excel", "DAX"].map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-widest"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-[#0a0a0a] border border-white/10 rounded-sm p-5 sm:p-6 md:p-8 relative overflow-hidden"
        >
          {/* GRID PATTERN */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 space-y-8 sm:space-y-10">
            
            {/* EDUCATION */}
            <div>
              <h3 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                Academic_Log
              </h3>
              <div className="border-l-2 border-cyan-500/30 pl-4 sm:pl-6 space-y-1">
                <p className="text-white font-bold italic text-sm sm:text-base">
                  B.Tech Computer Science
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  AI & Data Science Specialty
                </p>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-mono">
                  Kurukshetra University • 2023-2027
                </p>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div>
              <h3 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-white/20 rounded-full" />
                Professional_Trace
              </h3>
              <div className="border-l-2 border-white/10 pl-4 sm:pl-6 space-y-2">
                <div>
                  <p className="text-white font-bold italic text-sm sm:text-base">
                    Data Analyst Intern
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-cyan-500 font-mono uppercase tracking-tighter">
                    Unq Groups
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
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