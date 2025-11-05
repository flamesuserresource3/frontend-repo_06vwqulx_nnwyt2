import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

const certifications = [
  {
    name: 'Certified Web 3D Developer',
    org: 'OpenXR Academy',
    year: '2024',
    color: 'from-amber-300 to-yellow-400',
  },
  {
    name: 'Frontend Performance Pro',
    org: 'Perf School',
    year: '2023',
    color: 'from-emerald-300 to-teal-400',
  },
  {
    name: 'Motion Design Essentials',
    org: 'Animate Lab',
    year: '2022',
    color: 'from-sky-300 to-cyan-400',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative scroll-mt-24 bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Certifications</h2>
            <p className="mt-2 text-white/70">Milestones that power my journey.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 sm:flex">
            <ShieldCheck className="h-4 w-4" /> Verified
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {certifications.map((c, idx) => (
            <li
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-30 blur-3xl`} />
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <Award className="h-4 w-4" />
                  <span>{c.year}</span>
                </div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-white/75">{c.org}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/70">
                  <Sparkles className="h-4 w-4" />
                  Celebrating growth and mastery
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
