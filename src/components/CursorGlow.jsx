import React, { useEffect, useRef } from 'react';

// Glowy custom cursor with smooth follow (desktop only)
const CursorGlow = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  // Using refs to avoid unnecessary re-renders during animation
  const targetRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    window.addEventListener('pointermove', onMove);

    const tick = () => {
      const { x: tx, y: ty } = targetRef.current;
      const { x: px, y: py } = posRef.current;

      // Smooth follow (lerp)
      const nx = px + (tx - px) * 0.2;
      const ny = py + (ty - py) * 0.2;
      posRef.current.x = nx;
      posRef.current.y = ny;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main glowing star */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 md:block"
        aria-hidden
      >
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 rotate-45 rounded-[2px] bg-white/90 shadow-[0_0_40px_10px_rgba(255,255,255,0.45)]" />
          <div className="absolute inset-0 -rotate-45 rounded-[2px] bg-emerald-300/90 mix-blend-screen blur-[1px]" />
          <div className="pointer-events-none absolute -inset-5 rounded-full bg-emerald-400/25 blur-2xl" />
        </div>
      </div>

      {/* Soft trailing aura tied to real cursor position */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[50] hidden -translate-x-1/2 -translate-y-1/2 md:block"
        aria-hidden
      >
        <div className="h-24 w-24 rounded-full bg-emerald-300/10 blur-3xl" />
      </div>
    </>
  );
};

export default CursorGlow;
