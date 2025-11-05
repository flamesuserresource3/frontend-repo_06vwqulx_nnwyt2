import React from 'react';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import Certifications from './components/Certifications';
import EducationTimeline from './components/EducationTimeline';
import CursorGlow from './components/CursorGlow';
import { User } from 'lucide-react';

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white md:cursor-none">
      {/* Floating Nav */}
      <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm backdrop-blur-md shadow-lg">
          <button onClick={() => scrollTo('home')} className="rounded-full px-3 py-1 text-white/90 hover:bg-white/10">Home</button>
          <button onClick={() => scrollTo('projects')} className="rounded-full px-3 py-1 text-white/90 hover:bg-white/10">Projects</button>
          <button onClick={() => scrollTo('certifications')} className="rounded-full px-3 py-1 text-white/90 hover:bg-white/10">Certs</button>
          <button onClick={() => scrollTo('education')} className="rounded-full px-3 py-1 text-white/90 hover:bg-white/10">Education</button>
        </div>
      </nav>

      {/* Custom Cursor (desktop only) */}
      <CursorGlow />

      <Hero3D />
      <ProjectsGrid />
      <Certifications />
      <EducationTimeline />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 sm:flex-row">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-400 text-slate-900">
              <User className="h-5 w-5" />
            </span>
            <span>© {new Date().getFullYear()} Your Name</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#projects" className="hover:text-white" onClick={(e)=>{e.preventDefault();scrollTo('projects');}}>Projects</a>
            <a href="#certifications" className="hover:text-white" onClick={(e)=>{e.preventDefault();scrollTo('certifications');}}>Certifications</a>
            <a href="#education" className="hover:text-white" onClick={(e)=>{e.preventDefault();scrollTo('education');}}>Education</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
