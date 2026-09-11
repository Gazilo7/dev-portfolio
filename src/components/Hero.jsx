import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import profilePic from '../assets/Shekwoyinugaza.JPG'; // Place your picture in src/assets/

export default function Hero() {
  const myName = "Shekwoyinugaza Markus"; // Update with your actual name
  const myTitle = "Full-stack Developer & AI-Driven Solutions Engineer";

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Fira_Code',monospace] break-words">
              {myName}
            </h1>
            <p className="text-xl font-medium text-indigo-400 font-['Fira_Code',monospace]">
              {myTitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-['Inter',sans-serif]"
          >
            Building high-conversion digital platforms, custom POS terminals, and AI-enhanced business tools. Combining full-stack engineering with modern AI workflows and quantitative analytics to automate daily operations.
          </motion.p>

          <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
  >
    {/* Explore Projects - Now the PRIMARY button */}
    <a
      href="#projects"
      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all w-full sm:w-auto"
    >
      Explore Projects
    </a>
    {/* Launch CLI - Now the SECONDARY button */}
    <a
      href="#terminal"
      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 transition-all w-full sm:w-auto"
    >
      Launch CLI <ChevronRight className="w-4 h-4" />
    </a>
  </motion.div>
</div>

        {/* Right Column: Profile Picture Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
        >
          {/* Ambient glow behind image */}
          <div className="absolute -inset-4 rounded-full bg-indigo-900/30 blur-2xl opacity-70"></div>
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-slate-950/50">
            <img 
              src={profilePic} 
              alt={myName}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"></div>
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 px-3 py-1 bg-emerald-500/90 text-slate-950 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg"><span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100 border-2 border-emerald-500"></span>
            </span>
            Available for Work
          </div>
        </motion.div>

      </div>
    </section>
  );
}