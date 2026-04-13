"use client";
import { motion } from "framer-motion";
import {
  SiPython,
  SiC,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiStreamlit,
  SiPostgresql,
} from "react-icons/si";

import {
  BiLineChart,
  BiBrain,
  BiData,
  BiCodeAlt,
  BiTerminal,
  BiBarChartAlt2
} from "react-icons/bi";

const skills = [
  {
    title: "Programming",
    icon: <BiCodeAlt className="text-cyan-500" />,
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "C Language", icon: <SiC /> },
    ],
  },
  {
    title: "Data Analysis",
    icon: <BiLineChart className="text-cyan-500" />,
    items: [
      { name: "Power BI", icon: <BiBarChartAlt2 /> }, // FIXED
      { name: "Excel", icon: <BiData /> },            // FIXED
      { name: "Matplotlib", icon: <BiLineChart /> },
    ],
  },
  {
    title: "Databases",
    icon: <BiData className="text-cyan-500" />,
    items: [
      { name: "SQL", icon: <BiTerminal /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Machine Learning",
    icon: <BiBrain className="text-cyan-500" />,
    items: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
    ],
  },
  {
    title: "Eco-System",
    icon: <BiTerminal className="text-cyan-500" />,
    items: [
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-8">
      
      {/* HEADER */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
          Technical_<span className="text-cyan-500">Stack</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/30 to-transparent" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-5 group-hover:opacity-20 transition">
              {category.icon}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">{category.icon}</span>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-md hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all"
                >
                  <span className="text-gray-400 group-hover:text-cyan-400 transition">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}