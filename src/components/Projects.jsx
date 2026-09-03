import { motion } from 'framer-motion';
import { ExternalLink, Database, LineChart, Wallet } from 'lucide-react';

const projects = [
  {
    title: 'Pi Network Payment DApp',
    description: 'Web application integrating the Pi Web3 SDK for secure user authentication and dynamic testnet transaction processing.',
    tags: ['JavaScript', 'HTML', 'Pi SDK', 'Web3'],
    icon: Wallet,
    color: 'text-purple-400'
  },
  {
    title: 'Statistical Analytics Engine',
    description: 'Computational workflow utilizing statsmodels for automated hypothesis testing and Two-Way ANOVA data modeling.',
    tags: ['Python', 'statsmodels', 'Data Analysis'],
    icon: LineChart,
    color: 'text-emerald-400'
  },
  {
    title: 'Local Backend Architecture',
    description: 'Database administration and dynamic backend execution environment configured for local hosting and testing.',
    tags: ['PHP', 'XAMPP', 'SQL', 'Node.js'],
    icon: Database,
    color: 'text-blue-400'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            Selected engineering builds ranging from full-stack platforms to statistical analytics and dynamic interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 flex flex-col h-full hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 p-3 bg-slate-950/50 rounded-lg inline-block w-fit border border-slate-800 group-hover:border-indigo-500/30 transition-colors">
                <project.icon className={`w-6 h-6 ${project.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-950 text-slate-300 text-xs font-mono rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 border-t border-slate-800/80 pt-4">
                  <button className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors">
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}