import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for non-touch fine pointers
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (hasTouch || !isPointerFine) {
      return;
    }

    setIsDesktop(true);

    let ringX = 0, ringY = 0;
    let targetX = 0, targetY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringX = lerp(ringX, targetX, 0.15);
      ringY = lerp(ringY, targetY, 0.15);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el && el.closest('a, button, [role="button"], input, select, textarea, .card-lift, label')) {
        setHovering(true);
      }
    };
    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el && el.closest('a, button, [role="button"], input, select, textarea, .card-lift, label')) {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full transition-transform duration-75 ease-out"
        style={{
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          background: hovering ? 'linear-gradient(135deg, #a855f7, #ec4899)' : '#14b8a6',
          boxShadow: hovering ? '0 0 12px #a855f7' : '0 0 10px #14b8a6',
          willChange: 'transform',
        }}
      />
      {/* Magnetic outer glowing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full border border-teal-400/40 transition-all duration-200 ease-out backdrop-blur-[1px]"
        style={{
          width: hovering ? 52 : clicking ? 28 : 40,
          height: hovering ? 52 : clicking ? 28 : 40,
          borderColor: hovering ? '#c084fc' : '#2dd4bf',
          backgroundColor: hovering ? 'rgba(168, 85, 247, 0.08)' : 'rgba(20, 184, 166, 0.05)',
          opacity: 0.85,
          willChange: 'transform',
          transformOrigin: 'center center',
          margin: hovering ? '-6px 0 0 -6px' : clicking ? '6px 0 0 6px' : '0',
        }}
      />
    </>
  );
}
