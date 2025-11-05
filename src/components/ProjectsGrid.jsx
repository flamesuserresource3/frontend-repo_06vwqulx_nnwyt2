import React from 'react';
import { Code2, Gamepad2, Palette, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Starlit Quest',
    tag: 'WebGL • Three.js',
    description:
      'An interactive 3D mini-game with collectible stars, smooth physics, and cozy vibes.',
    icon: <Gamepad2 className="h-5 w-5" />,
    accent: 'from-fuchsia-400 to-pink-400',
  },
  {
    title: 'Fantasia UI Kit',
    tag: 'Design • Components',
    description:
      'A whimsical component library inspired by magical forests and pastel gradients.',
    icon: <Palette className="h-5 w-5" />,
    accent: 'from-cyan-400 to-teal-400',
  },
  {
    title: 'Nebula Portfolio',
    tag: 'Next.js • Motion',
    description:
      'A motion-rich personal site with parallax scenes and character mascots.',
    icon: <Sparkles className="h-5 w-5" />,
    accent: 'from-violet-400 to-indigo-400',
  },
  {
    title: 'Code Garden',
    tag: 'DX • Open Source',
    description:
      'Developer tooling that grows like a garden—seed, sprout, and bloom your ideas.',
    icon: <Code2 className="h-5 w-5" />,
    accent: 'from-rose-400 to-orange-400',
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">Playable, interactive, and delightfully animated.</p>
          </div>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 sm:inline-block">
            3D • Motion • Design
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className={`absolute -right-24 -top-24 h-52 w-52 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl`} />
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  {p.icon}
                  <span>{p.tag}</span>
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    className="rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow-pink-500/30 transition hover:bg-pink-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
