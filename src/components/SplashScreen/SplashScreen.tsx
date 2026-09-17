import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, FlaskConical } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

// Multi-ring orbital configuration
const orbitals = [
  // Ring 1 - inner
  { radius: 62,  angle: 0,   size: 8,  color: '#14b8a6', glow: 'rgba(20,184,166,0.8)',  ring: 1 },
  { radius: 62,  angle: 120, size: 6,  color: '#a855f7', glow: 'rgba(168,85,247,0.8)',  ring: 1 },
  { radius: 62,  angle: 240, size: 5,  color: '#3b82f6', glow: 'rgba(59,130,246,0.8)',  ring: 1 },
  // Ring 2 - outer
  { radius: 100, angle: 45,  size: 7,  color: '#f59e0b', glow: 'rgba(245,158,11,0.8)',  ring: 2 },
  { radius: 100, angle: 165, size: 5,  color: '#06b6d4', glow: 'rgba(6,182,212,0.8)',   ring: 2 },
  { radius: 100, angle: 285, size: 6,  color: '#ec4899', glow: 'rgba(236,72,153,0.8)',  ring: 2 },
  // Ring 3 - outermost
  { radius: 138, angle: 20,  size: 4,  color: '#84cc16', glow: 'rgba(132,204,22,0.8)',  ring: 3 },
  { radius: 138, angle: 110, size: 5,  color: '#14b8a6', glow: 'rgba(20,184,166,0.8)',  ring: 3 },
  { radius: 138, angle: 200, size: 3,  color: '#a855f7', glow: 'rgba(168,85,247,0.8)',  ring: 3 },
  { radius: 138, angle: 290, size: 4,  color: '#f59e0b', glow: 'rgba(245,158,11,0.8)',  ring: 3 },
];

const loadingTexts = [
  'Initializing quantum synthesis...',
  'Loading molecular frameworks...',
  'Calibrating precision systems...',
  'Connecting to pharma network...',
  'Ready for excellence...',
];

export default function SplashScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 1.8;
      });
    }, 30);

    const textInterval = setInterval(() => {
      setTextIdx((i) => (i + 1) % loadingTexts.length);
    }, 900);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="splash-screen"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ background: '#030712' }}
      initial={{ opacity: 1 }}
      exit={{
        clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 100% 0%)'],
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Aurora background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(13,148,136,0.15) 40%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-20%', left: '-20%',
            animation: 'aurora-1 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(147,51,234,0.15) 40%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '-20%', right: '-20%',
            animation: 'aurora-2 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '30%', right: '10%',
            animation: 'aurora-3 22s ease-in-out infinite',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Centerpiece: Multi-ring Orbital Molecule */}
      <div className="relative flex items-center justify-center w-96 h-96">

        {/* Ring tracks */}
        {[{ s: 124, d: 18, c: '20,184,166' }, { s: 200, d: 12, c: '168,85,247' }, { s: 276, d: 10, c: '59,130,246' }].map((ring, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: ring.s, height: ring.s,
              border: `1px solid rgba(${ring.c},0.15)`,
              boxShadow: `0 0 20px rgba(${ring.c},0.05)`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: ring.d, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Orbiting particles */}
        {orbitals.map((orb, i) => {
          const rad = (orb.angle * Math.PI) / 180;
          const x = Math.cos(rad) * orb.radius;
          const y = Math.sin(rad) * orb.radius;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: orb.size,
                height: orb.size,
                backgroundColor: orb.color,
                boxShadow: `0 0 ${orb.size * 3}px ${orb.glow}, 0 0 ${orb.size * 6}px ${orb.glow.replace('0.8', '0.3')}`,
                left: `calc(50% + ${x}px - ${orb.size / 2}px)`,
                top:  `calc(50% + ${y}px - ${orb.size / 2}px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.18,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Center logo container */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative z-10 flex flex-col items-center justify-center rounded-3xl"
          style={{
            padding: '18px',
            background: 'rgba(255,255,255,0.97)',
            boxShadow: '0 0 60px rgba(20,184,166,0.4), 0 0 120px rgba(20,184,166,0.15), 0 20px 60px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.9)',
          }}
        >
          <img
            src="/logo.png"
            alt="Quest Pharma"
            className="w-28 sm:w-32 h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Brand text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-center z-10"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3"
          style={{
            background: 'rgba(20,184,166,0.1)',
            border: '1px solid rgba(20,184,166,0.25)',
          }}
        >
          <Sparkles className="w-3 h-3 text-teal-400 animate-pulse" />
          <span className="text-teal-300 text-xs font-bold tracking-widest uppercase">Molecules for Quality Life</span>
        </div>

        {/* Animated cycling text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={textIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium text-slate-500 h-5"
          >
            {loadingTexts[textIdx]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-col items-center gap-3 z-10 w-72"
      >
        <div
          className="w-full rounded-full overflow-hidden"
          style={{
            height: '3px',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #0d9488, #14b8a6, #a855f7, #3b82f6)',
              boxShadow: '0 0 12px rgba(20,184,166,0.8)',
            }}
          />
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="text-[11px] font-mono text-slate-600">{Math.round(progress)}%</span>
          <button
            onClick={onComplete}
            className="text-[11px] font-semibold text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1"
          >
            Skip <FlaskConical className="w-3 h-3" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
