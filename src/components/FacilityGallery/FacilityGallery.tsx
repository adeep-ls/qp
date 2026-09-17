import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, Maximize2, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface GalleryImage {
  id: string;
  image: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'img1',  image: '/img1.jpeg'  },
  { id: 'img2',  image: '/img2.jpeg'  },
  { id: 'img3',  image: '/img3.jpeg'  },
  { id: 'img4',  image: '/img4.jpeg'  },
  { id: 'img5',  image: '/img5.jpeg'  },
  { id: 'img6',  image: '/img6.jpeg'  },
  { id: 'img7',  image: '/img7.jpeg'  },
  { id: 'img8',  image: '/img8.jpeg'  },
  { id: 'img9',  image: '/img9.jpeg'  },
  { id: 'img10', image: '/img10.jpeg' },
  { id: 'img11', image: '/img11.jpeg' },
];

export default function FacilityGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const total = galleryImages.length;

  const next = useCallback(() => {
    setActive(prev => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive(prev => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#08101e] via-[#050b16] to-[#08101e] text-white overflow-hidden select-none">
      {/* ── Multi-color ambient aura background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Center glowing teal spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[360px] bg-gradient-to-r from-teal-500/20 via-cyan-500/15 to-indigo-500/15 blur-[140px] rounded-full" />
        {/* Top-right violet aura */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[220px] bg-purple-500/10 blur-[110px] rounded-full" />
        {/* Bottom-left emerald aura */}
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[220px] bg-emerald-500/10 blur-[110px] rounded-full" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/15 to-cyan-500/15 border border-teal-500/30 text-teal-300 text-[10px] font-bold uppercase tracking-widest mb-2 shadow-sm shadow-teal-500/20">
              <Sparkles className="w-3 h-3 text-teal-400" />
              Verified Plant Photography
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Manufacturing Facility{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Active Counter Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="font-black text-teal-300">{String(active + 1).padStart(2, '0')}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{String(total).padStart(2, '0')}</span>
            </div>

            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 hover:from-teal-500 hover:to-cyan-400 hover:text-slate-950 text-teal-300 border border-teal-500/30 text-xs font-bold transition-all hover:scale-105 shadow-sm shadow-teal-500/20"
            >
              All 11 Photos <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setLightbox(true)}
              className="p-2 rounded-xl bg-white/5 hover:bg-teal-500 hover:text-slate-950 text-white border border-white/10 transition-all hover:scale-105 cursor-pointer backdrop-blur-md"
              title="Fullscreen View"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── 3D Multi-Card Carousel Stage ── */}
        <div className="relative h-[290px] sm:h-[350px] md:h-[400px] flex items-center justify-center perspective-[1400px] overflow-hidden">
          {galleryImages.map((item, index) => {
            const offset = getOffset(index);
            const isVisible = Math.abs(offset) <= 2;
            if (!isVisible) return null;

            const isCenter = offset === 0;

            return (
              <motion.div
                key={item.id}
                className="absolute cursor-pointer"
                initial={false}
                animate={{
                  x: `${offset * 52}%`,
                  scale: isCenter ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.66,
                  zIndex: isCenter ? 30 : 20 - Math.abs(offset),
                  opacity: isCenter ? 1 : Math.abs(offset) === 1 ? 0.55 : 0.2,
                  rotateY: offset * -15,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => {
                  if (isCenter) {
                    setLightbox(true);
                  } else {
                    setActive(index);
                  }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  width: 'clamp(310px, 58vw, 720px)',
                  aspectRatio: '16/10',
                }}
              >
                {/* Outer Card Shell */}
                <div
                  className={`w-full h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                    isCenter
                      ? 'shadow-[0_25px_60px_-15px_rgba(20,184,166,0.35)] ring-2 ring-teal-400 border-2 border-teal-400/70'
                      : 'shadow-xl border border-white/10 hover:border-teal-400/40'
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />

                  {/* Soft top-down glass sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />

                  {/* Dark frosted veil on side cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-slate-950/60 hover:bg-slate-950/30 backdrop-blur-[1px] transition-colors duration-300" />
                  )}

                  {/* Inner glowing highlight ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            );
          })}

          {/* ── Glowing Frosted Glass Navigation Controls ── */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 z-40 w-12 h-12 rounded-2xl bg-slate-900/80 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:text-slate-950 text-teal-300 backdrop-blur-xl border border-teal-500/30 transition-all flex items-center justify-center cursor-pointer shadow-xl shadow-teal-500/20 hover:scale-110 active:scale-95"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 z-40 w-12 h-12 rounded-2xl bg-slate-900/80 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:text-slate-950 text-teal-300 backdrop-blur-xl border border-teal-500/30 transition-all flex items-center justify-center cursor-pointer shadow-xl shadow-teal-500/20 hover:scale-110 active:scale-95"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* ── Luminous Pagination Bar ── */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {galleryImages.map((_, idx) => {
            const isSel = active === idx;
            return (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSel
                    ? 'w-10 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 shadow-md shadow-teal-400/70'
                    : 'w-2 bg-white/20 hover:bg-white/50 hover:w-3'
                }`}
                aria-label={`Jump to photo ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 hover:bg-teal-500 hover:text-slate-950 text-white border border-white/15 transition-all cursor-pointer z-20 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Chevrons */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:text-slate-950 text-white border border-white/15 transition-all cursor-pointer z-20 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:text-slate-950 text-white border border-white/15 transition-all cursor-pointer z-20 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Center Image */}
            <div
              className="flex flex-col items-center max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <motion.img
                key={galleryImages[active].image}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                src={galleryImages[active].image}
                alt=""
                className="max-h-[76vh] max-w-full rounded-3xl object-contain shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-white/15 mb-4 ring-1 ring-teal-400/30"
              />

              {/* Minimal Counter Badge */}
              <span className="px-4 py-1.5 rounded-full bg-slate-900/80 text-teal-300 text-xs font-mono font-bold border border-teal-500/30 shadow-md">
                {active + 1} / {total}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
