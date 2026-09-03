import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Database } from 'lucide-react';

export default function About() {
  const capabilities = [
    {
      title: 'Problem-First Engineering',
      description: 'Starting with core system constraints, identifying high-leverage data signals, and structuring reliable backend logic.',
      icon: Cpu,
    },
    {
      title: 'Data & Database Architecture',
      description: 'Designing normalized schemas, executing clean queries, and optimizing statistical models using Python and SQL.',
      icon: Database,
    },
    {
      title: 'Secure Web Systems',
      description: 'Integrating modern SDKs, managing local server environments, and building authenticated API connections.',
      icon: ShieldCheck,
    },
    {
      title: 'High-Performance UI',
      description: 'Crafting responsive, clean interfaces using React, Tailwind CSS, and smooth micro-interactions.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Horizontal scale reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Engineering <span className="text-indigo-400">Approach</span>
          </h2>
          <p className="text-slate-400 text-base">
            Systems designed around real-world constraints, clean architecture, and long-term maintainability.
          </p>
        </motion.div>

        {/* Capability Cards Grid - Alternating horizontal slide reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const xOffset = idx % 2 === 0 ? -40 : 40;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="glass-panel p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group rounded-2xl bg-slate-900/40 backdrop-blur-sm cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}