"use client";
import { motion } from "framer-motion";

const data = [
  {
    role: "Data Analytics Intern",
    company: "Infosys Springboard",
    duration: "2024 - Present",
    points: [
      "Extracted and cleaned multi-source datasets to ensure 99.9% data integrity.",
      "Conducted Exploratory Data Analysis (EDA) using Python to identify market trends.",
      "Designed dynamic Power BI dashboards for real-time KPI tracking."
    ],
    skills: ["Python", "Excel", "Analytics", "Power BI"]
  },
  {
    role: "ML Trainee",
    company: "Pickle.ai",
    duration: "2023 - 2024",
    points: [
      "Engineered predictive models using Scikit-Learn with optimized hyper-parameters.",
      "Managed data preprocessing pipelines for high-volume unstructured data.",
      "Leveraged Pandas & NumPy for complex matrix manipulations."
    ],
    skills: ["ML", "Pandas", "NumPy", "Scikit-Learn"]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/5 bg-[#050505]"
    >
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white">
          Professional_<span className="text-cyan-500">Trace</span>
        </h2>
        <div className="h-[1px] w-full sm:flex-grow bg-gradient-to-r from-cyan-500/30 to-transparent" />
      </div>

      <div className="relative space-y-10 sm:space-y-12">
        
        {/* CENTER LINE */}
        <div className="absolute left-2 sm:left-3 md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent md:block hidden" />

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* DOT */}
            <div className="absolute left-0 sm:left-1 md:left-1/2 md:translate-x-[-50%] top-2 md:top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_#22d3ee] z-10" />

            {/* CONTENT */}
            <div className="flex-1 pl-6 sm:pl-8 md:pl-0">
              <div className="p-5 sm:p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-sm hover:border-cyan-500/50 transition-all duration-500 group">
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black italic uppercase text-white tracking-tighter leading-none mb-1">
                      {item.role}
                    </h3>
                    <p className="text-cyan-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-gray-600 bg-white/5 px-2 py-1 w-fit">
                    {item.duration}
                  </span>
                </div>

                {/* POINTS */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      <span className="text-cyan-500 font-mono mt-1 text-[10px] sm:text-xs">
                        0{idx + 1}
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* SKILLS */}
                <div className="flex gap-2 flex-wrap">
                  {item.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-[8px] sm:text-[9px] font-mono border border-white/10 text-gray-500 uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SPACER */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}