import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight, Sparkles } from 'lucide-react';

export default function Terminal({ onOpenDemo, activeDemo }) {
  const initialHistory = [
    { type: 'system', content: <span className="text-indigo-400 font-semibold font-['Fira_Code',monospace]">Welcome to Shekwoyinugaza Interactive CLI v2.4.0</span> },
    { type: 'system', content: <span className="text-slate-400 font-['Fira_Code',monospace]">Type "help" or enter a project number (1-6) to interact.</span> }
  ];

  const [input, setInput] = useState('');
  const [history, setHistory] = useState(initialHistory);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const projectList = [
    { id: 'inventory', num: '1', title: 'Retail & Boutique Inventory System', category: 'E-Commerce & Retail', desc: 'Automated stock management, low-inventory alerts, and sales auditing for retail owners.' },
    { id: 'pos', num: '2', title: 'Restaurant & Pharmacy POS System', category: 'FinTech & Payments', desc: 'Billing terminal with instant digital receipt generation and cash flow auditing.' },
    { id: 'realestate', num: '3', title: 'Real Estate Property Listing Portal', category: 'Real Estate Tech', desc: 'Property catalog dashboard with price/location filtering and automated buyer inquiry routing.' },
    { id: 'fitness', num: '4', title: 'Gym & Fitness Membership Platform', category: 'Business Operations', desc: 'Member onboarding, class scheduling, and subscription tracking portal.' },
    { id: 'web3pay', num: '5', title: 'Pi Network Web3 Payment DApp', category: 'FinTech & Web3', desc: 'Web3 financial integration utilizing Pi Network SDK for authentication and testnet payments.' },
    { id: 'analytics', num: '6', title: 'Statistical Data Analytics Suite', category: 'Data Analytics', desc: 'Data modeling environment using Python and statsmodels to run ANOVA procedures and model trends.' }
  ];

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Force-blur the terminal input whenever a demo modal is active
  useEffect(() => {
    if (activeDemo) {
      inputRef.current?.blur();
    }
  }, [activeDemo]);

  // Only focus input if no modal is active
  const handleTerminalClick = () => {
    if (!activeDemo) {
      inputRef.current?.focus();
    }
  };

  const handleLaunchProject = (projId) => {
    inputRef.current?.blur();
    if (onOpenDemo) {
      onOpenDemo(projId);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
    
    if (e.key === 'Enter' && input.trim()) {
      const command = input.trim().toLowerCase();
      let outputContent = null;

      // Check if command is a project number or ID match
      const matchedProject = projectList.find(p => p.num === command || command.includes(p.id));
      if (matchedProject) {
        handleLaunchProject(matchedProject.id);
        outputContent = (
          <span className="text-amber-400 font-['Fira_Code',monospace] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Launching interactive PoC demo for {matchedProject.title}...
          </span>
        );
      } else {
        switch (command) {
          case 'help':
            outputContent = (
              <div className="flex flex-col text-slate-300 gap-1 mt-1 font-['Fira_Code',monospace]">
                <span>Available commands:</span>
                <div className="grid grid-cols-[110px_1fr] pl-4 mt-2 gap-y-1">
                  <span className="text-indigo-300">about</span><span>Learn about me</span>
                  <span className="text-indigo-300">skills</span><span>Technical stack &amp; tools</span><span className="text-indigo-300">projects</span><span>View projects list</span>
                  <span className="text-indigo-300">1 - 6</span><span>Directly open project PoC modal</span>
                  <span className="text-indigo-300">clear</span><span>Reset terminal screen</span>
                </div>
              </div>
            );
            break;
          case 'about':
            outputContent = (
              <div className="text-slate-300 mt-1 font-['Fira_Code',monospace] leading-relaxed">
                Software engineering student specializing in full-stack web applications, database architecture (relational &amp; NoSQL), statistical quantitative modeling, and Web3 SDK integrations.
              </div>
            );
            break;
          case 'skills':
            outputContent = (
              <div className="flex flex-col text-slate-300 mt-1 gap-1 font-['Fira_Code',monospace]">
                <span className="text-emerald-400 font-semibold">Core Languages:</span>
                <span>C++, PHP, Python (Statsmodels), JavaScript (ES6+), SQL, HTML5/CSS3</span>
                <span className="text-emerald-400 font-semibold mt-2">Tools, Runtimes &amp; Environments:</span>
                <span>Node.js, React, Tailwind CSS, Vite, XAMPP, phpMyAdmin, MongoDB Compass, Git/GitHub, VS Code</span>
              </div>
            );
            break;
          case 'projects':
            outputContent = (
              <div className="flex flex-col text-slate-300 mt-1 gap-3 font-['Fira_Code',monospace]">
                <span className="text-slate-400 text-xs">(Click any title or type its number to launch the live demo)</span>
                {projectList.map((p) => (
                  <div key={p.id}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLaunchProject(p.id);
                      }}
                      className="text-left font-semibold text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {p.num}. {p.title} <span className="text-indigo-400 text-xs">[{p.category}]</span>
                    </button>
                    <p className="text-slate-400 text-sm mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            );
            break;
          case 'clear':
            setHistory(initialHistory);
            setInput('');
            return;
          default:
            outputContent = <span className="text-red-400 mt-1 font-['Fira_Code',monospace]">Command not recognized: "{command}". Type "help" or a number (1-6).</span>;
        }
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
          className="w-full bg-slate-950/80 backdrop-blur-sm border border-slate-800/80 rounded-xl shadow-2xl overflow-hidden font-mono text-sm cursor-text">
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
            className="p-6 h-[420px] overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
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
                placeholder='Type "help" or 1-6...'
                className="flex-1 bg-transparent outline-none border-none text-slate-100 placeholder-slate-700 focus:ring-0 w-full font-['Fira_Code',monospace]"
                style={{ fontsize: '16px' }}
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}