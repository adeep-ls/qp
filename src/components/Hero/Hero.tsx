import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';

const bgImages = [
  '/facility-reactor.webp',
  '/hero-bg.webp',
  '/hero-reactors-v2.webp',
  '/hero-synthesis-v2.webp',
  '/hero-cleanroom-v2.webp',
];

const slideDuration = (index: number) => (index === 0 ? 5000 : 3000);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const apis = useCounter(150, 2200, 0, true);
  const years = useCounter(15, 2200, 0, true);

  // Preload upcoming slides so switching is instant without flicker
  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setCurrent(p => (p + 1) % bgImages.length);
    }, slideDuration(current));
    return () => clearTimeout(t);
  }, [current]);

  return (
    <div id="home" style={{ height: '100vh', minHeight: '600px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#071527' }}>

      {/* Crossfading background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImages[current]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,15,35,0.72) 0%, rgba(5,15,35,0.45) 55%, rgba(5,15,35,0.05) 100%)', zIndex: 2 }} />

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
        {bgImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 9999, background: i === current ? '#2dd4bf' : 'rgba(255,255,255,0.45)', border: 'none', cursor: 'pointer', transition: 'all 0.35s ease', boxShadow: i === current ? '0 0 8px rgba(45,212,191,0.6)' : 'none' }}
          />
        ))}
      </div>

      {/* Text content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 3rem' }}>
        <div style={{ maxWidth: 560 }}>

          <motion.h1 custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-black leading-[1.18] tracking-tight mb-5 select-none"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 3.1rem)' }}
          >
            <span className="text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Regulatory Standards in{' '}
            </span>
            <span
              className="inline-block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #2dd4bf 45%, #4ade80 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 24px rgba(45,212,191,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
              }}
            >
              APIs &amp; Intermediates
            </span>
          </motion.h1>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}
          >
            <Link to="/products" className="group inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-teal-500/30 hover:scale-[1.04] active:scale-95 transition-all duration-300">
              Explore Products
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link to="/about" className="group inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 hover:border-white/50 text-white font-semibold text-sm shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-300">
              Discover Quest Group
              <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
            </Link>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem', padding: '0.75rem 1.5rem', borderRadius: '0.875rem', background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {[
              { value: apis, suffix: '+', label: 'APIs & Intermediates' },
              { value: years, suffix: '+', label: 'Yrs Expertise' },
              { value: 100, suffix: '%', label: 'cGMP Compliance' },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ textAlign: 'left', paddingRight: i < arr.length - 1 ? '2rem' : 0, borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
                <p className="text-xl font-black text-white leading-none tabular-nums">{s.value}{s.suffix}</p>
                <p className="text-[10px] font-semibold text-teal-300 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
