import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, User, Mail, Code, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Terminal', href: '#terminal', icon: Terminal },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
    >
      <div className="max-w-6xl mx-auto glass-panel px-6 py-3 flex items-center justify-between relative">
        {/* Brand Logo */}
        {/* Brand Logo */}
<a href="#hero" className="flex items-center gap-2 font-bold text-lg text-white group">
  <img 
    src="/favicon.jpg" 
    alt="Profile" 
    className="w-8 h-8 rounded-lg object-cover border border-slate-700 group-hover:border-indigo-500 transition-all duration-300" 
  />
  <span>Dev<span className="text-indigo-400">Hub</span></span>
</a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-4 h-4 text-indigo-400" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Badge & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Available for Work</span>
            <span className="sm:hidden">Available</span>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 glass-panel flex flex-col gap-4 md:hidden border border-slate-800 bg-slate-950/95">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white py-1"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.header>
  );
}