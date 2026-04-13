import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Anu Rawal — Data Analyst & Insights Builder",
  description:
    "Portfolio of Anu Rawal, focused on data analysis, dashboards, and intelligent insights using SQL, Power BI, and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian text-white antialiased selection:bg-cyan-500/30 selection:text-white">
        
        {/* GLOBAL BACKGROUND ELEMENTS */}
        <div className="fixed inset-0 z-[-1] bg-grid-data pointer-events-none" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full z-[-1] pointer-events-none" />

        <Navbar />

        {/* MAIN CONTAINER: Optimized for Cinematic Content */}
        <main className="relative z-10 w-full min-h-screen">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            {children}
          </div>
        </main>

        {/* SYSTEM STATUS FOOTER (Optional/Subtle) */}
        <footer className="py-12 border-t border-white/5 bg-black/20">
          <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              © 2026_ANALYTICS_CORE
            </p>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                System: Optimal
              </span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}