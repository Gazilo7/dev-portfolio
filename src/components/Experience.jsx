import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineering & Computer Science',
      institution: 'Higher Education / Technical Training',
      period: '2025 - Present',
      description: 'Focused on core software development, data analysis, database design, and building modular local server environments.',
      highlights: ['Statistical data modeling with Python', 'Backend scripting with PHP & SQL', 'Local server architecture using XAMPP']
    },
    {
      role: 'Full-Stack & DApp Development',
      institution: 'Independent Projects',
      period: '2025 - 2026',
      description: 'Engineered web applications integrated with blockchain SDKs and deployed interactive interfaces with modern frontend tooling.',
      highlights: ['Pi Network SDK integration for authentication & testnet payments', 'Responsive UI development with Tailwind CSS & React']
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Scale reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Experience & <span className="text-indigo-400">Milestones</span>
          </h2>
          <p className="text-slate-400 text-base">
            A track record of technical execution, academic progression, and practical system development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative rounded-2xl p-[1px] overflow-hidden bg-slate-800/80 transition-all duration-300"
            >
              {/* Continuous Rotating Border Effect */}
              <motion.div
                className="absolute inset-[-100%] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0 300deg, #6366f1 360deg)'
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear"
                }}
              />

              {/* Inner Card Content */}
              <div className="relative z-10 bg-slate-950/90 rounded-[15px] p-6 sm:p-8 space-y-4 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-300 text-sm font-medium">{exp.institution}</p>
                    </div></div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.highlights.map((item, i) => (
                    <span key={i} className="text-xs font-mono bg-slate-900/80 text-slate-400 px-2.5 py-1 rounded border border-slate-800/80 group-hover:border-indigo-500/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}