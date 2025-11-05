import React, { useEffect, useRef, useState } from 'react';

// A glowy, starry cursor that follows the mouse with a slight lag
const CursorGlow = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(()n  => {
    let raf;
    const tick = () => {
      // Smooth follow (lerp)
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      const nx = pos.x + dx * 0.2;
      const ny = pos.y + dy * 0.2;
      setPos({ x: nx, y: ny });

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, pos.x, pos.y]);

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

      {/* Soft trailing aura tied to the real cursor position for responsiveness */}
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
