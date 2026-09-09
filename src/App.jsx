import { useState, useEffect } from 'react';
import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeDemo, setActiveDemo] = useState(null);
  // Enforce top-scroll on initial load or refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-slate-800 selection:text-white font-sans overflow-x-hidden">
      {/* Background ambient lighting */}
      <GlowBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full pb-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24">
          <Projects activeDemo={activeDemo} setActiveDemo={setActiveDemo} />
          <Terminal onOpenDemo={(id) => setActiveDemo(id)} />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}