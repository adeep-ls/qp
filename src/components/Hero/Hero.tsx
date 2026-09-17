import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, Activity, Shield, Beaker, FlaskConical, Globe2 } from 'lucide-react';
import { useRef } from 'react';
import InteractiveMoleculeCanvas from '../InteractiveMoleculeCanvas/InteractiveMoleculeCanvas';
import { useSplash } from '../../context/SplashContext';

// Word-by-word reveal variant
const wordVariant = {
  hidden: { y: '105%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const headline1 = 'Scale, Purity & Precision'.split(' ');
const headline2 = 'In'.split(' ');

const badges = [
  {
    icon: Beaker,
    text: '35+ Commercial Products',
    sub: 'Active Catalog',
    bg: 'bg-teal-500/10 dark:bg-teal-500/15',
    textCol: 'text-teal-700 dark:text-teal-300',
    border: 'border-teal-300/60 dark:border-teal-500/30',
    pos: 'top-[22%] left-[4%]',
    duration: 4.2,
  },
  {
    icon: Sparkles,
    text: '15+ Yrs Scientific Expertise',
    sub: 'Hyderabad R&D Team',
    bg: 'bg-purple-500/10 dark:bg-purple-500/15',
    textCol: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-300/60 dark:border-purple-500/30',
    pos: 'top-[26%] right-[4%]',
    duration: 4.8,
  },
  {
    icon: Activity,
    text: '24/7 Reaction Operations',
    sub: 'Zero Liquid Discharge',
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    textCol: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-300/60 dark:border-blue-500/30',
    pos: 'bottom-[22%] right-[5%]',
    duration: 5.2,
  },
  {
    icon: Shield,
    text: 'cGMP Quality Assured',
    sub: 'Multistage QC/QA',
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    textCol: 'text-amber-700 dark:text-amber-300',
    border: 'border-amber-300/60 dark:border-amber-500/30',
    pos: 'bottom-[20%] left-[5%]',
    duration: 4.5,
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { isSplashActive } = useSplash();
  const animState = isSplashActive ? 'hidden' : 'visible';

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient transition-colors duration-300 pt-20"
    >
      {/* 0. Aurora / Mesh Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-blob-1 absolute w-[700px] h-[700px] rounded-full blur-[130px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.9) 0%, rgba(13,148,136,0.6) 40%, transparent 70%)',
            top: '-15%', left: '-10%',
          }}
        />
        <div
          className="aurora-blob-2 absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(147,51,234,0.5) 40%, transparent 70%)',
            top: '10%', right: '-15%',
          }}
        />
        <div
          className="aurora-blob-3 absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.5) 40%, transparent 70%)',
            bottom: '5%', left: '20%',
          }}
        />
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      {/* 1. Real-time Interactive Molecular Canvas Background */}
      <InteractiveMoleculeCanvas />

      {/* 2. Ambient Colorful Swirling Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] rounded-full blur-[110px] opacity-25 dark:opacity-35 pointer-events-none"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #14b8a6, #a855f7, #3b82f6, #f59e0b, #14b8a6)',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* 3. Floating Badges with synchronized entrance */}
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.div
            key={b.text}
            className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-md shadow-lg dark:shadow-2xl z-10 cursor-pointer ${b.bg} ${b.border} ${b.pos}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isSplashActive
                ? { opacity: 0, scale: 0.8 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, -16, 0],
                    rotate: [0, i % 2 === 0 ? 1.5 : -1.5, 0],
                  }
            }
            transition={{
              opacity: { duration: 0.5, delay: 0.2 + i * 0.1 },
              scale: { duration: 0.5, delay: 0.2 + i * 0.1 },
              y: { duration: b.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
              rotate: { duration: b.duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
            }}
            whileHover={{ scale: 1.08, y: -20, transition: { duration: 0.2 } }}
          >
            <div className={`p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 shadow-sm ${b.textCol}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <p className={`text-xs font-black tracking-tight ${b.textCol}`}>{b.text}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{b.sub}</p>
            </div>
          </motion.div>
        );
      })}

      {/* 4. Center Typography & Kinetic Interactions */}
      <motion.div
        style={{ y, opacity: op }}
        className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 w-full pt-8 pb-16 sm:pt-12 sm:pb-20 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={isSplashActive ? { opacity: 0, y: 15 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <span className="pill pill-teal shadow-md shadow-teal-500/10 dark:shadow-teal-500/20 text-xs sm:text-sm py-1.5 px-4">
            <span className="relative flex h-2 w-2">
              <span className="ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            APIs &amp; Pharmaceutical Intermediates · Hyderabad, India
          </span>
        </motion.div>

        {/* Dynamic Multi-line Kinetic Headline — Grand, impactful, perfectly proportioned */}
        <h1 className="text-[clamp(2.25rem,4.3vw,4.2rem)] font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white mb-5 select-none">
          <span className="block overflow-hidden pb-1">
            {headline1.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate={animState}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </span>

          <span className="block overflow-hidden pb-1">
            {headline2.map((word, i) => (
              <motion.span
                key={i}
                custom={i + headline1.length}
                variants={wordVariant}
                initial="hidden"
                animate={animState}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              custom={headline1.length + 1}
              variants={wordVariant}
              initial="hidden"
              animate={animState}
              className="inline-block text-gradient-animated"
            >
              Bulk Drugs
            </motion.span>
          </span>

          <span className="block overflow-hidden pb-1">
            <motion.span
              custom={headline1.length + 2}
              variants={wordVariant}
              initial="hidden"
              animate={animState}
              className="inline-block text-gradient-animated"
            >
              &amp; Intermediates.
            </motion.span>
          </span>
        </h1>

        {/* Subtitle with fade up — Visible up to global markets */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isSplashActive ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-7 font-normal"
        >
          Quest Pharma delivers high-purity API intermediates and bulk drug products from our state-of-the-art Hyderabad manufacturing complex to global markets.
        </motion.p>

        {/* Action Buttons with magnetic spring physics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSplashActive ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Action Button: Deep Executive Slate with Glowing Teal Accent & Crisp White Text */}
          <Link
            to="/products"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-teal-500/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-700/80 hover:border-teal-400/50"
          >
            <span>Explore 35+ Products</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4 text-teal-400 group-hover:text-cyan-300 transition-colors" />
            </motion.span>
          </Link>

          {/* Secondary Action Button: Frosted Glass Capsule */}
          <Link
            to="/infrastructure"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/90 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-md shadow-slate-900/5 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-300 hover:shadow-xl hover:shadow-teal-500/10 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Tour Manufacturing Plant
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>
        </motion.div>

        {/* Metric Counters with visual pulsing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSplashActive ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 sm:mt-14 inline-flex items-center gap-8 sm:gap-14 px-8 py-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-lg"
        >
          {[
            { num: '35+', label: 'Commercial APIs' },
            { num: '15+', label: 'Years Expertise' },
            { num: '100%', label: 'cGMP Compliance' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-none">
                {s.num}
              </p>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Cue with smooth bounce */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-6 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-4 h-7 rounded-full border-2 border-teal-500/40 flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-teal-500"
            />
          </div>
          <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
            Scroll To Explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
