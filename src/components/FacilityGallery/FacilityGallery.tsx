import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowUpRight, Sparkles, Building2, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: string;
  image: string;
  title: string;
  category: string;
  tag: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 'img10',
    image: '/img10.jpeg',
    title: 'Analytical Quality Control Testing Laboratory',
    category: 'Quality Control',
    tag: 'HPLC & GC-HS',
  },
  {
    id: 'img5',
    image: '/img5.jpeg',
    title: 'Multi-Story Chemical Synthesis & Reaction Block',
    category: 'Production Block',
    tag: 'cGMP Compliant',
  },
  {
    id: 'img7',
    image: '/img7.jpeg',
    title: 'Reaction Block Elevation & Exhaust Scrubbers',
    category: 'Facility Architecture',
    tag: 'Classified Areas',
  },
  {
    id: 'img9',
    image: '/img9.jpeg',
    title: 'Central Plant Grounds & Utility Infrastructure',
    category: 'Infrastructure',
    tag: 'WHO-GMP Standard',
  },
  {
    id: 'img4',
    image: '/img4.jpeg',
    title: 'Eco-Friendly Campus Walkway & Green Belt',
    category: 'EHS & Environment',
    tag: '100% ZLD',
  },
  {
    id: 'img11',
    image: '/img11.jpeg',
    title: 'Effluent Treatment & Multi-Effect Evaporators',
    category: 'Environmental Safety',
    tag: 'Zero Liquid Discharge',
  },
];

export default function FacilityGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const total = galleryImages.length;
  const timerRef = useRef<number | null>(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || lightbox) return;
    timerRef.current = window.setInterval(() => {
      next();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, lightbox, next]);

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

  const currentItem = galleryImages[active];

  return (
    <section className="relative py-16 sm:py-22 bg-white text-slate-900 overflow-hidden select-none">
      {/* ── Subtle Background Patterns ── */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-blue-400/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Verified Manufacturing Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Manufacturing Facility <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
              Take an inside look at our cGMP synthesis reactor halls, quality control instrumentation, and environmental utilities.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-all shadow-2xs hover:scale-105 cursor-pointer"
              title={isPlaying ? 'Pause Slideshow' : 'Start Slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-teal-600" /> : <Play className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Active Counter Badge */}
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="font-black text-teal-700">{String(active + 1).padStart(2, '0')}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{String(total).padStart(2, '0')}</span>
            </div>

            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 text-xs font-bold transition-all hover:scale-105 shadow-2xs"
            >
              All {total} Photos <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setLightbox(true)}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-600 hover:text-white text-slate-600 border border-slate-200 transition-all hover:scale-105 cursor-pointer shadow-2xs"
              title="Fullscreen View"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── 3D Multi-Card Carousel Stage ── */}
        <div
          className="relative h-[340px] sm:h-[420px] md:h-[470px] flex items-center justify-center perspective-[1400px] overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
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
                  x: `${offset * 66}%`,
                  scale: isCenter ? 1 : Math.abs(offset) === 1 ? 0.78 : 0.60,
                  zIndex: isCenter ? 40 : 10 - Math.abs(offset),
                  opacity: isCenter ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.25,
                  rotateY: offset * -12,
                  z: isCenter ? 60 : -100,
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
                  width: 'clamp(300px, 58vw, 760px)',
                  aspectRatio: '16/10',
                  zIndex: isCenter ? 40 : 10 - Math.abs(offset),
                }}
              >
                {/* Outer Card Shell */}
                <div
                  className={`w-full h-full rounded-3xl overflow-hidden transition-all duration-500 relative ${
                    isCenter
                      ? 'shadow-2xl shadow-teal-500/20 ring-4 ring-teal-500/20 border-2 border-teal-500/60'
                      : 'shadow-lg border border-slate-200 hover:border-teal-400/50'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />

                  {/* Soft top-down glass gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Frosted veil on side cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-white/40 hover:bg-white/20 backdrop-blur-[1px] transition-colors duration-300 pointer-events-none" />
                  )}

                  {/* Center Card Informational Caption Overlay */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between gap-3 pointer-events-none"
                    >
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/90 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-md">
                          <Building2 className="w-3 h-3" />
                          {item.tag}
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-200 font-medium opacity-90">
                          Category: {item.category}
                        </p>
                      </div>

                      <div className="shrink-0 p-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* ── Navigation Arrows ── */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-4 z-40 w-12 h-12 rounded-2xl bg-white/95 hover:bg-teal-600 hover:text-white text-slate-700 backdrop-blur-md border border-slate-200 transition-all flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-4 z-40 w-12 h-12 rounded-2xl bg-white/95 hover:bg-teal-600 hover:text-white text-slate-700 backdrop-blur-md border border-slate-200 transition-all flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* ── Thumbnail Strip Selector Below ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-6 overflow-x-auto py-2 scrollbar-none">
          {galleryImages.map((item, idx) => {
            const isSel = active === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActive(idx)}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 shrink-0 cursor-pointer ${
                  isSel
                    ? 'w-14 sm:w-16 h-10 sm:h-11 ring-2 ring-teal-500 shadow-md scale-105'
                    : 'w-10 sm:w-12 h-8 sm:h-9 opacity-60 hover:opacity-100 hover:scale-105 border border-slate-200'
                }`}
                aria-label={`Jump to photo ${idx + 1}`}
              >
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                {isSel && <div className="absolute inset-0 bg-teal-500/20" />}
              </button>
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
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-6"
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
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-white/10 hover:bg-teal-500 hover:text-slate-950 text-white border border-white/15 transition-all cursor-pointer z-20 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-white/10 hover:bg-teal-500 hover:text-slate-950 text-white border border-white/15 transition-all cursor-pointer z-20 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Center Image & Meta */}
            <div
              className="flex flex-col items-center max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentItem.image}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[72vh] max-w-full rounded-3xl object-contain shadow-2xl border border-white/15 mb-4 ring-2 ring-teal-400/40"
              />

              <div className="text-center text-white">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">
                  {currentItem.tag} • {currentItem.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold mb-1">{currentItem.title}</h4>
                <p className="text-xs text-slate-400 font-mono">
                  Image {active + 1} of {total}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
