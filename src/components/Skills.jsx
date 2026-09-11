import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'PHP', 'Python', 'SQL', 'C++', 'HTML/CSS']
    },
    {
      title: 'Tools & Environments',
      icon: Terminal,
      skills: ['Git', 'Node.js', 'MongoDB Compass', 'Postman', 'Vercel']
    },
    {
      title: 'Databases & Data',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'Statistical Modeling', 'Data Analysis']
    },
    {
      title: 'Frameworks & SDKs',
      icon: Layers,
      skills: ['React', 'Tailwind CSS', 'Pi Network SDK', 'Bootstrap']
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Technical <span className="text-indigo-400">Stack</span>
          </h2>
          <p className="text-slate-400 text-base">
            Core technologies, programming languages, and developer tools used to build robust systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8 border border-slate-800/80 hover:border-indigo-500/50 transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-md border border-slate-800/80 hover:border-indigo-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}