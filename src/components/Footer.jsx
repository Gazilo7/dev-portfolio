import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/50 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Name & Copyright */}
        <div className="text-center md:text-left font-mono space-y-0.5">
          <p className="text-slate-200 text-sm font-medium">Shekwoyinugaza Markus</p>
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono">
          <a
            href="https://github.com/Gazilo7"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/Shekwoyinugaza Markus"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/Shekwoyinugaza"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            X
          </a>
          <a
            href="https://instagram.com/gazilo7"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/Shekwoyinugaza Markus"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/+2349052467059"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          Back to top <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}