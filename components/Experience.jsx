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
    <section id="experience" className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5 bg-[#050505]">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
          Professional_<span className="text-cyan-500">Trace</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/30 to-transparent" />
      </div>

      <div className="relative space-y-12">
        {/* THE CENTER LINE (Visual Timeline) */}
        <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent hidden md:block" />

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TIMELINE DOT */}
            <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-0 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_#22d3ee] z-10" />

            {/* LEFT/RIGHT SIDE CONTENT */}
            <div className="flex-1">
              <div className={`p-8 bg-white/[0.02] border border-white/10 rounded-sm hover:border-cyan-500/50 transition-all duration-500 group`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black italic uppercase text-white tracking-tighter leading-none mb-1">
                      {item.role}
                    </h3>
                    <p className="text-cyan-500 font-mono text-xs uppercase tracking-[0.2em] font-bold">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 bg-white/5 px-2 py-1">
                    {item.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="text-cyan-500 font-mono mt-1">0{idx + 1}</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap">
                  {item.skills.map((s, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-[9px] font-mono border border-white/10 text-gray-500 uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SPACER FOR ALTERNATING LAYOUT */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}