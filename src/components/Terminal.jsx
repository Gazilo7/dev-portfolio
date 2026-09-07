import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

export default function Terminal() {
  const initialHistory = [
    { type: 'system', content: <span className="text-indigo-400 font-semibold font-['Fira_Code',monospace]">Welcome to Shekwoyinugaza Interactive CLI v1.0.0</span> },
    { type: 'system', content: <span className="text-slate-400 font-['Fira_Code',monospace]">Type "help" to see available commands.</span> }
  ];

  const [input, setInput] = useState('');
  const [history, setHistory] = useState(initialHistory);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const command = input.trim().toLowerCase();
      let outputContent = null;

      switch (command) {
        case 'help':
          outputContent = (
            <div className="flex flex-col text-slate-300 gap-1 mt-1 font-['Fira_Code',monospace]">
              <span>Available commands:</span>
              <div className="grid grid-cols-[100px_1fr] pl-4 mt-2 gap-y-1">
                <span className="text-indigo-300">about</span><span>Learn about me</span>
                <span className="text-indigo-300">skills</span><span>My technical stack</span>
                <span className="text-indigo-300">projects</span><span>View my work</span>
                <span className="text-indigo-300">clear</span><span>Reset terminal</span>
              </div>
            </div>
          );
          break;
        case 'about':
          outputContent = (
            <div className="text-slate-300 mt-1 font-['Fira_Code',monospace] leading-relaxed">
              Software engineering and computer science student based in Nigeria. Specialized in full-stack platforms, statistical analytics, and dynamic interfaces.
            </div>
          );
          break;
        case 'skills':
          outputContent = (
            <div className="flex flex-col text-slate-300 mt-1 gap-1 font-['Fira_Code',monospace]">
              <span className="text-emerald-400">Languages:</span><span>C++, PHP, Python, SQL, JavaScript</span>
              <span className="text-emerald-400 mt-2">Tools & Environments:</span><span>XAMPP, Node.js, MongoDB Compass, Git</span>
            </div>
          );
          break;
        case 'projects':
          outputContent = (
            <div className="flex flex-col text-slate-300 mt-1 gap-3 font-['Fira_Code',monospace]">
              <div>
                <span className="text-white font-semibold">1. Retail & Boutique Inventory System</span> <span className="text-indigo-400 text-xs">[E-Commerce & Retail]</span>
                <p className="text-slate-400 text-sm mt-0.5">Automated stock management, low-inventory alerts, and sales auditing for retail owners.</p>
              </div>
              <div>
                <span className="text-white font-semibold">2. Restaurant & Pharmacy POS System</span> <span className="text-indigo-400 text-xs">[FinTech & Payments]</span>
                <p className="text-slate-400 text-sm mt-0.5">Billing terminal with instant digital receipt generation and cash flow auditing.</p>
              </div>
              <div>
                <span className="text-white font-semibold">3. Real Estate Property Listing Portal</span> <span className="text-indigo-400 text-xs">[Real Estate Tech]</span>
                <p className="text-slate-400 text-sm mt-0.5">Property catalog dashboard with price/location filtering and automated buyer inquiry routing.</p></div>
              <div>
                <span className="text-white font-semibold">4. Gym & Fitness Membership Platform</span> <span className="text-indigo-400 text-xs">[Business Operations]</span>
                <p className="text-slate-400 text-sm mt-0.5">Member onboarding, class scheduling, and subscription tracking portal.</p>
              </div>
              <div>
                <span className="text-white font-semibold">5. Pi Network Web3 Payment DApp</span> <span className="text-indigo-400 text-xs">[FinTech & Web3]</span>
                <p className="text-slate-400 text-sm mt-0.5">Web3 financial integration utilizing Pi Network SDK for authentication and testnet payments.</p>
              </div>
              <div>
                <span className="text-white font-semibold">6. Statistical Data Analytics Suite</span> <span className="text-indigo-400 text-xs">[Data Analytics]</span>
                <p className="text-slate-400 text-sm mt-0.5">Data modeling environment using Python and statsmodels to run ANOVA procedures and model trends.</p>
              </div>
            </div>
          );
          break;
        case 'clear':
          setHistory(initialHistory);
          setInput('');
          return;
        default:
          outputContent = <span className="text-red-400 mt-1 font-['Fira_Code',monospace]">Command not recognized: {command}. Type "help"</span>;
      }

      setHistory((prev) => [
        ...prev,
        { type: 'input', content: <span className="text-slate-100 flex items-center gap-2 font-['Fira_Code',monospace]"><ChevronRight className="w-4 h-4 text-indigo-500 shrink-0" />{input}</span> },
        { type: 'output', content: outputContent }
      ]);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="py-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-3">
          <TerminalIcon className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight font-['Fira_Code',monospace]">Interactive Mode</h2>
        </div>

        <div 
          onClick={handleTerminalClick}
          className="w-full bg-slate-950/80 backdrop-blur-sm border border-slate-800/80 rounded-xl shadow-2xl overflow-hidden font-mono text-sm cursor-text"
        >
          <div className="flex items-center px-4 py-3 bg-slate-900/50 border-b border-slate-800/80 select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 text-xs text-slate-500 font-['Fira_Code',monospace]">guest@shekwoyinugaza: ~</span>
          </div>

          <div 
            ref={containerRef}
            className="p-6 h-[400px] overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
          >
            {history.map((line, index) => (
              <div key={index} className="flex flex-col">
                {line.content}
              </div>
            ))}
            
            <div className="flex items-center text-slate-100 mt-2">
              <ChevronRight className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none border-none text-slate-100 placeholder-slate-700 focus:ring-0 w-full font-['Fira_Code',monospace]"spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}