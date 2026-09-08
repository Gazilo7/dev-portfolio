import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Sparkles, X, Play } from 'lucide-react';
import InventoryDemo from './InventoryDemo';
import PosDemo from './PosDemo';
import RealEstateDemo from './RealEstateDemo';

const categories = ["All", "E-Commerce", "FinTech", "PropTech", "Operations", "Analytics"];

const projects = [
  {
    id: "inventory",
    title: "Retail & Boutique Inventory System",
    description: "A business-focused stock management system designed to track inventory in real-time, generate dynamic reorder alerts, and provide stock valuation.",
    category: "E-Commerce",
    badgeLabel: "E-Commerce & Retail",
    tags: ["React", "Tailwind CSS", "JavaScript", "State Management"],
    hasInteractiveDemo: true,
    githubUrl: "#"
  },
  {
    id: "pos",
    title: "Restaurant & Pharmacy POS System",
    description: "A point-of-sale billing terminal handling quick billing, instant digital invoice generation, and real-time revenue analytics.",
    category: "FinTech",
    badgeLabel: "FinTech & Payments",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    hasInteractiveDemo: true,
    githubUrl: "#"
  },
  {
    id: "realestate",
    title: "Real Estate & Property Listing Portal",
    description: "A high-conversion real estate platform with price filtering, automated lead generation via direct WhatsApp booking, and AI listing descriptions.",
    category: "PropTech",
    badgeLabel: "PropTech",
    tags: ["React", "Tailwind CSS", "AI Integration"],
    hasInteractiveDemo: true,
    githubUrl: "#"
  },
  {
    id: "fitness",
    title: "Gym & Fitness Membership Platform",
    description: "A complete portal for tracking recurring subscriptions, managing member access passes, and automated membership status logs.",
    category: "Operations",
    badgeLabel: "Operations Management",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    hasInteractiveDemo: false,
    githubUrl: "#"
  },
  {
    id: "web3pay",
    title: "Pi Network Web3 Payment DApp",
    description: "An integrated Web3 payment gateway prototype leveraging the Pi Network SDK for sandbox account authentication and testnet transactions.",
    category: "FinTech",
    badgeLabel: "Web3 Integration",
    tags: ["JavaScript", "Pi SDK", "Web3 Payment API"],
    hasInteractiveDemo: false,
    githubUrl: "#"
  },
  {
    id: "analytics",
    title: "Statistical Data Analytics Suite",
    description: "A quantitative analytical dashboard performing automated statistical calculations, two-way ANOVA models, and interactive visualizations.",
    category: "Analytics",
    badgeLabel: "Data Analytics",
    tags: ["Python", "JavaScript", "Statsmodels"],
    hasInteractiveDemo: false,
    githubUrl: "#"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDemo, setActiveDemo] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" /> Commercial Proof of Concepts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured Solutions & Engine Builds
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Production-ready business applications, interactive operational software, and automated workflows engineered for scale.
          </p>
        </div>{/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={"px-3 py-1.5 rounded-lg text-xs font-mono transition-all " +
                (activeCategory === cat
                  ? "bg-indigo-600 text-white font-semibold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800")}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-xl p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
                      {project.badgeLabel}
                    </span>
                    {project.hasInteractiveDemo && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Demo Ready
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/60">
                  {project.hasInteractiveDemo ? (
                    <button
                      onClick={() => setActiveDemo(project.id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold py-2 px-3 rounded-lg transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> Launch Interactive Demo
                    </button>
                  ) : (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-800/50 text-slate-500 text-xs font-mono py-2 px-3 rounded-lg cursor-not-allowed border border-slate-800"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> PoC Engine Preview Coming Soon
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>{/* Dynamic Demo Modal Overlay */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl my-auto"
            >
              {/* Close Button Header */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setActiveDemo(null)}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700 transition-all shadow-lg"
                >
                  <X className="w-4 h-4" /> Close Demo
                </button>
              </div>

              {/* Render Selected Demo Component */}
              {activeDemo === 'inventory' && <InventoryDemo />}
              {activeDemo === 'pos' && <PosDemo />}
              {activeDemo === 'realestate' && <RealEstateDemo />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}