import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const education = [
  {
    title: 'Diploma in Computer Animation',
    place: 'Dreamlight Institute',
    period: '2021 – 2023',
    details: 'Focused on 3D character animation, storyboarding, and stylized rendering.',
    icon: GraduationCap,
  },
  {
    title: 'Bachelor of Technology (CSE)',
    place: 'Starlake College of Engineering',
    period: '2017 – 2021',
    details: 'Studied graphics programming, human-computer interaction, and web technologies.',
    icon: School,
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="relative scroll-mt-24 bg-slate-900 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Education</h2>
        <ol className="relative border-l border-white/10">
          {education.map((e, idx) => {
            const Icon = e.icon;
            return (
              <li key={idx} className="mb-10 ml-4">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-slate-800 text-white">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/80">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{e.place}</p>
                  <p className="mt-2 text-sm text-white/80">{e.details}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default EducationTimeline;
