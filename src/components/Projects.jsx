import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Sparkles } from 'lucide-react';

const categories = ["All", "E-Commerce", "FinTech", "PropTech", "Operations", "Analytics"];

const projects = [
  {
    title: "Retail & Boutique Inventory System",
    description: "A business-focused stock management system designed to track inventory in real-time, generate automated low-stock alerts, and streamline daily sales logging for retail owners.",
    category: "E-Commerce",
    badgeLabel: "E-Commerce & Retail",
    tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Restaurant & Pharmacy POS System",
    description: "A point-of-sale billing terminal handling quick billing, instant digital invoice generation, and daily cash flow auditing to replace paper logbooks.",
    category: "FinTech",
    badgeLabel: "FinTech & Payments",
    tags: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real Estate & Property Listing Portal",
    description: "A property catalog dashboard allowing agents to list properties, filter listings by price/location, and convert buyers directly via automated WhatsApp/email inquiries.",
    category: "PropTech",
    badgeLabel: "Real Estate Tech",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Gym & Fitness Membership Platform",
    description: "A client management portal handling member registration, class scheduling, and automated subscription tracking to streamline fitness business operations.",
    category: "Operations",
    badgeLabel: "Business Operations",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Pi Network Web3 Payment DApp",
    description: "Web3 financial integration utilizing the Pi Network SDK to process authentication and testnet crypto transactions directly inside web applications.",
    category: "FinTech",
    badgeLabel: "FinTech & Web3",
    tags: ["JavaScript", "HTML5", "Web3 SDK", "REST API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Statistical Data Analytics Suite",
    description: "Quantitative analysis environment using Python and statsmodels to run ANOVA procedures, model trends, and export business intelligence data.",
    category: "Analytics",
    badgeLabel: "Data Analytics",
    tags: ["Python", "statsmodels", "Jupyter", "Pandas"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

function Card({ project }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Explicit string definition avoids JSX inline syntax parser conflicts
  const spotlightGradient = `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between overflow-hidden hover:border-indigo-500/50 transition-colors"
    >
      {/* Option 2: Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ background: spotlightGradient }}
      /><div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
            {project.badgeLabel}
          </span>
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="Source Code"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              title="Live Demo"
            >
              <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-['Fira_Code',monospace]">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800/60">
        {project.tags.map((tag, tIndex) => (
          <span
            key={tIndex}
            className="text-xs text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight font-['Fira_Code',monospace]">
              Featured Solutions & Projects
            </h2>
          </div>
          
        </div>

        {/* Option 1: Animated Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-800/60 pb-4">{categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 text-xs font-mono rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/50 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Card key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}