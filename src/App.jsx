import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Import your Footer component

export default function App() {
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
          <Projects />
          <Terminal />
          <Contact />
        </div>
      </main>

      {/* 2. Replace the inline footer with your component */}
      <Footer />
    </div>
  );
}