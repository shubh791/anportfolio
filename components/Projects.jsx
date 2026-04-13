"use client";
import { motion } from "framer-motion";
import { FiGithub, FiDatabase, FiBarChart2, FiCpu, FiPieChart } from "react-icons/fi";

const projects = [
  {
    title: "Retail Sales Performance Dashboard",
    date: "Mar 2026",
    category: "Data Analysis",
    icon: <FiBarChart2 />,
    desc: "Interactive Power BI dashboard to optimize pricing, reduce losses, and improve decision-making. Features KPI tracking and trend analysis.",
    impact: "Loss Detection • Data-Driven Decisions",
    tech: ["Power BI", "DAX", "Python", "Excel"],
    github: "https://github.com/bora23-04/Sales-Profit-Analysis-Dashboard",
  },
  {
    title: "Ghost Kitchen Location Analysis",
    date: "Jan 2026",
    category: "Geospatial Analysis",
    icon: <FiPieChart />,
    desc: "Power BI dashboard using Yelp Open Dataset (5M+ reviews) to identify high-potential locations for kitchen expansion via Competition Scores.",
    impact: "5M+ Reviews • 90% Analysis Time Saved",
    tech: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/bora23-04/Ghost-Kitchen-Location-Analysis-Dashboard",
  },
  {
    title: "LLM Value Analyzer",
    date: "Nov 2025",
    category: "Model Optimization",
    icon: <FiCpu />,
    desc: "Streamlit dashboard analyzing cost vs. performance for 200+ LLMs. Features 'Value Quadrant' analysis for cost-effective model selection.",
    impact: "200+ LLMs • ROI Analysis",
    tech: ["Python", "Streamlit", "Pandas"],
    github: "https://github.com/bora23-04/LLM-Value-Analyzer",
  },
  {
    title: "Feather Fall – Bird Conservation ML",
    date: "Aug 2025",
    category: "Machine Learning",
    icon: <FiCpu />,
    desc: "Streamlit dashboard featuring ML classification of 867+ bird species with 97% accuracy. Includes interactive visualizations.",
    impact: "97% Accuracy • 867+ Species",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/bora23-04/Forecasting-Conservation-Risk-Levels-for-Birds-in-India",
  },
  {
    title: "Tesla Facility Insights Dashboard",
    date: "Nov 2024",
    category: "Operations Analysis",
    icon: <FiBarChart2 />,
    desc: "Comprehensive facility analytics and KPI tracking, reducing monthly reporting time by 60+ hours through automated pipelines.",
    impact: "60+ Hours Saved • Real-time KPIs",
    tech: ["Power BI", "DAX", "SQL", "Excel"],
    github: "https://github.com/bora23-04/-Tesla-Facility-Insights-Dashboard-on-power-bi",
  },
  {
    title: "Netflix Database Simulation",
    date: "Sep 2024",
    category: "Database Engineering",
    icon: <FiDatabase />,
    desc: "Robust SQL database simulation modeling Netflix's content management system with optimized query performance and complex schemas.",
    impact: "30% Query Efficiency Improvement",
    tech: ["SQL", "MySQL", "DB Design"],
    github: "https://github.com/bora23-04/sql_project_on_Netflix-",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 max-w-7xl mx-auto px-8">
      {/* SECTION HEADER */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
          Analytical_<span className="text-cyan-500">Repository</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/30 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-sm p-8 flex flex-col hover:border-cyan-500/50 transition-all duration-500"
          >
            {/* CATEGORY & DATE */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/5">
                <span className="text-cyan-500 text-[10px]">{p.icon}</span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-500">
                  {p.category}
                </span>
              </div>
              <span className="text-[9px] font-mono text-gray-700">{p.date}</span>
            </div>

            {/* TITLE & DESCRIPTION */}
            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-3 group-hover:text-cyan-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
              {p.desc}
            </p>

            {/* IMPACT HIGHLIGHT */}
            <div className="mb-6 p-3 bg-cyan-500/5 border-l-2 border-cyan-500">
              <p className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-tighter">
                {p.impact}
              </p>
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {p.tech.map((t, idx) => (
                <span key={idx} className="text-[9px] font-mono text-gray-500 border border-white/5 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            {/* ACTION: GITHUB ONLY */}
            <div className="border-t border-white/5 pt-6">
              <a 
                href={p.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors"
              >
                <FiGithub className="text-sm" /> 
                Inspect_Source_Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}