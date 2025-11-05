import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero3D = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/iO74mq3KeYTXVmpB/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to blend content, does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-400/10 via-emerald-300/5 to-slate-950/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm tracking-wide">Whimsical • Firefly • Interactive</span>
        </div>

        <h1 className="mt-6 font-['Mona Sans',Inter,ui-sans-serif] text-4xl font-extrabold leading-tight drop-shadow-sm sm:text-6xl">
          Hi, I’m Your Name
          <span className="block bg-gradient-to-r from-emerald-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">
            I craft playful 3D web experiences
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A whimsical portfolio with a glowing firefly companion—projects, certifications,
          and education in an interactive, animated world.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            <Rocket className="h-4 w-4 transition group-hover:rotate-12" />
            Explore Projects
          </button>
          <button
            onClick={() => scrollTo('certifications')}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            View Achievements
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
