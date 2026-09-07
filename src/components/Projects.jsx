import { motion } from 'framer-motion';
import { FolderGit2, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Retail & Boutique Inventory System",
    description: "A business-focused stock management system designed to track inventory in real-time, generate automated low-stock alerts, and streamline daily sales logging for retail owners.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Gym & Fitness Membership Portal",
    description: "A client management platform handling member registration, class scheduling, and automated subscription tracking to streamline fitness business operations.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Pi Network Payment DApp",
    description: "Web3 integration utilizing the Pi Network SDK to process authentication and testnet transactions directly inside web applications.",
    tags: ["JavaScript", "HTML5", "Web3 SDK", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Statistical Data Analytics Suite",
    description: "Data modeling and quantitative analysis environment using Python and statsmodels to run ANOVA procedures and present statistical findings.",
    tags: ["Python", "statsmodels", "Jupyter", "Pandas"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10"
      >
        <div className="flex items-center gap-3">
          <FolderGit2 className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight font-['Fira_Code',monospace]">
            Featured Solutions & Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    {project.featured ? "Commercial Solution" : "Technical Build"}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-['Fira_Code',monospace]">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div><div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800/60">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="text-xs text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}