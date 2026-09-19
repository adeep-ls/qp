import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  ChevronRight,
  FlaskConical,
} from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';
import { useSplash } from '../../context/SplashContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const trustBadges = [
  { icon: ShieldCheck, label: 'Schedule M / WHO-GMP' },
  { icon: Award, label: 'ISO 9001:2015 Certified' },
  { icon: Globe2, label: 'Global Regulatory Ready' },
  { icon: FlaskConical, label: 'Zero Liquid Discharge (ZLD)' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { isSplashActive } = useSplash();
  const show = !isSplashActive;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0px', '60px']);

  const apis = useCounter(35, 2200, 0, show);
  const years = useCounter(15, 2200, 0, show);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Full-width background image with parallax ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY }}
      >
        <img
          src="/facility-reactor.jpg"
          alt="Quest Pharma Manufacturing Facility"
          className="w-full h-full object-cover"
          style={{ minHeight: '110%' }}
        />
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />
      </motion.div>

      {/* ── Subtle ambient glow ── */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Main Content (Centered) ── */}
      <motion.div
        style={{ opacity: contentOp, y: contentY }}
        className="relative z-10 mx-auto max-w-4xl w-full px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28 text-center"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="mb-7 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal-400/30 bg-teal-500/10 backdrop-blur-md text-teal-300 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
            </span>
            WHO-GMP &amp; cGMP Compliant Manufacturing
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="text-[clamp(1.8rem,3.6vw,3.2rem)] font-black leading-[1.15] tracking-tight text-white mb-4 select-none"
        >
          Purity and Precision
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400">
            Regulatory Standards in APIs &amp; Intermediates
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-7 font-normal"
        >
          Quest Pharma delivers high-purity API intermediates and bulk drug products 
          from our state-of-the-art Hyderabad manufacturing complex — trusted by 
          pharmaceutical companies worldwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-9"
        >
          <Link
            to="/products"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            <span>Explore Products</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white font-bold text-xs shadow-sm hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            Discover Quest Pharma
            <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>
        </motion.div>

        {/* Animated Stats Strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="inline-flex items-center gap-6 sm:gap-10 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-6"
        >
          {[
            { value: apis, suffix: '+', label: 'Commercial APIs' },
            { value: years, suffix: '+', label: 'Years Expertise' },
            { value: 100, suffix: '%', label: 'cGMP Compliance' },
          ].map((stat, idx, arr) => (
            <div key={stat.label} className={`text-center ${idx < arr.length - 1 ? 'pr-6 sm:pr-10 border-r border-white/10' : ''}`}>
              <p className="text-xl sm:text-2xl font-black text-white leading-none tabular-nums">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-[10px] font-semibold text-slate-400 mt-1.5 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-semibold"
              >
                <Icon className="w-3.5 h-3.5 text-teal-400" />
                {badge.label}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
