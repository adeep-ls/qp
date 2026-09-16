import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

const orbitals = [
  { radius: 68,  angle: 0,   size: 7,  color: '#14b8a6', glow: 'rgba(20, 184, 166, 0.6)', duration: 3.2 },
  { radius: 68,  angle: 120, size: 5,  color: '#a855f7', glow: 'rgba(168, 85, 247, 0.6)', duration: 3.2 },
  { radius: 68,  angle: 240, size: 6,  color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.6)', duration: 3.2 },
  { radius: 105, angle: 45,  size: 6,  color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.6)', duration: 4.8 },
  { radius: 105, angle: 165, size: 4,  color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.6)',  duration: 4.8 },
  { radius: 105, angle: 285, size: 5,  color: '#ec4899', glow: 'rgba(236, 72, 153, 0.6)', duration: 4.8 },
];

export default function SplashScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2.5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="splash-screen"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none bg-slate-950 text-white"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {/* Background ambient lighting effects */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full opacity-35 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0d9488 0%, #7c3aed 45%, #2563eb 80%, transparent 100%)',
        }}
      />

      {/* Centerpiece: Orbital Molecule System */}
      <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80">
        {/* Outer orbital track */}
        <motion.div
          className="absolute rounded-full border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]"
          style={{ width: 210, height: 210 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner orbital track */}
        <motion.div
          className="absolute rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
          style={{ width: 136, height: 136 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

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
                boxShadow: `0 0 10px ${orb.glow}`,
                left: `calc(50% + ${x}px - ${orb.size / 2}px)`,
                top: `calc(50% + ${y}px - ${orb.size / 2}px)`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Central Logo Container */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-center p-3 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl shadow-teal-500/20 border border-white/20"
        >
          <img
            src="/logo.png"
            alt="Quest Pharma"
            className="w-28 sm:w-32 h-auto object-contain drop-shadow-sm"
          />
        </motion.div>
      </div>

      {/* Brand Slogan */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-center z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-2">
          <Sparkles className="w-3 h-3 text-teal-400 animate-pulse" />
          Molecules for Quality Life
        </div>
        <p className="text-sm font-medium text-slate-400">
          Initializing pharmaceutical excellence...
        </p>
      </motion.div>

      {/* Progress & Skip */}
      <div className="mt-8 flex flex-col items-center gap-4 z-10 w-64">
        <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden p-[1px] border border-slate-700/50">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-400 via-teal-300 to-purple-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-500">
          <span>{Math.round(progress)}%</span>
          <button
            onClick={onComplete}
            className="hover:text-teal-400 transition-colors underline underline-offset-4 cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
