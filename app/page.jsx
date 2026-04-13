"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer"; // Imported the new footer

export default function Home() {
  // Reading the scroll progress for a high-end "Reading Bar" at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-obsidian">
      {/* CINEMATIC PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 origin-left z-[110] shadow-[0_0_10px_#22d3ee]" 
        style={{ scaleX }} 
      />

      {/* SECTION WRAPPERS */}
      <div className="flex flex-col gap-0 md:gap-12 relative z-10">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20"
        >
          <About />
        </motion.section>

        <section id="experience" className="py-20 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent">
          <Experience />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="portfolio" className="py-20 bg-grid-data">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* AMBIENT BACKGROUND DECOR */}
      <div className="fixed top-[20%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-[-1]" />
      
      {/* Subtle Scanline Effect for the Terminal feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}