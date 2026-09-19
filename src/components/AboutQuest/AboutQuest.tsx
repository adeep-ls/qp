import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Atom,
  Activity,
  Gauge,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

// Interactive Animated Molecule Canvas Component
function AnimatedSynthesisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Molecular particle nodes
    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      radius: Math.random() * 3 + 2.5,
      color: Math.random() > 0.4 ? 'rgba(13, 148, 136, ' : 'rgba(6, 182, 212, ',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw chemical bonds between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw animated nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${n.color}0.8)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />;
}

export default function AboutQuest() {
  const [activeTelemetry, setActiveTelemetry] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTelemetry((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28 bg-white transition-colors duration-300 overflow-hidden select-none">
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[750px] h-[350px] bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-blue-400/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Hero Row: Left Content + Right Animated Scientific Simulation (7 + 5 cols) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Narrative & Values (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About <span className="text-gradient">Quest</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {company.overview}
            </p>

            {/* Strategic Pillars: Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-400/50 transition-all shadow-2xs group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  Our Mission
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-quality APIs and intermediates manufactured under strict cGMP protocols, providing cost leadership and supply reliability worldwide.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400/50 transition-all shadow-2xs group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  Our Vision
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be a premier global partner for pharmaceutical chemical synthesis, recognized for integrity, scientific prowess, and timely execution.
                </p>
              </div>
            </div>

            {/* Key Advantages Quick List */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Vertically Integrated API Supply</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>WHO-GMP &amp; cGMP Standard Facilities</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Managed by K. N. Reddy</span>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs tracking-wide shadow-md hover:shadow-teal-500/25 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Discover Full Company Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Interactive Molecular Synthesis Engine (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50/30 border-2 border-teal-200/80 shadow-2xl p-6 sm:p-7 min-h-[440px] flex flex-col justify-between">
              {/* Background Interactive Particle Canvas */}
              <AnimatedSynthesisCanvas />

              {/* Floating Top Header: Live Synthesis Telemetry */}
              <div className="relative z-10 flex items-center justify-between gap-3 pb-4 border-b border-teal-200/60">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600" />
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800">
                    Reaction Telemetry Active
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/90 border border-teal-200 text-[10px] font-mono font-semibold text-slate-700 shadow-2xs">
                  <Activity className="w-3 h-3 text-teal-600" />
                  cGMP Grade
                </div>
              </div>

              {/* Centerpiece: Animated Organic Molecule Resonance Structure */}
              <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
                {/* Rotating Resonance Orbits */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                  {/* Outer Orbit 1 */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border border-dashed border-teal-400/40"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_10px_#14b8a6]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                  </motion.div>

                  {/* Outer Orbit 2 (Counter-rotation) */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-4 rounded-full border border-teal-300/30"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </motion.div>

                  {/* Center Molecule Hexagon Core */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/95 border-2 border-teal-400/80 shadow-xl flex flex-col items-center justify-center p-3 text-center backdrop-blur-md relative"
                  >
                    <Atom className="w-8 h-8 text-teal-600 mb-1" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                      API Core
                    </span>
                    <span className="text-[9px] font-mono text-teal-700 font-bold">
                      ≥ 99.8% Purity
                    </span>
                    
                    {/* Pulsing glow aura */}
                    <div className="absolute -inset-1 rounded-2xl bg-teal-400/20 blur-sm -z-10" />
                  </motion.div>
                </div>

                {/* Animated Reaction Status Pill */}
                <motion.div
                  key={activeTelemetry}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 px-4 py-1.5 rounded-full bg-white/95 border border-teal-300 text-xs font-semibold text-slate-800 shadow-sm flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>
                    {activeTelemetry === 0 && 'Multi-Step Synthetic Route Scouting'}
                    {activeTelemetry === 1 && 'HPLC Assay & Residual Solvent Verification'}
                    {activeTelemetry === 2 && 'Cryogenic & Catalytic Scale-Up Trains'}
                  </span>
                </motion.div>
              </div>

              {/* Bottom Telemetry Floating Badges */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-teal-200/60">
                <div className="p-3 rounded-2xl bg-white/90 border border-teal-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-teal-600 mb-1">
                    <Gauge className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Reactor Capacity</span>
                  </div>
                  <p className="text-base font-black text-slate-900 leading-none">50,000+ L</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Glass-Lined &amp; SS-316</p>
                </div>

                <div className="p-3 rounded-2xl bg-white/90 border border-teal-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-teal-600 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">EHS &amp; Compliance</span>
                  </div>
                  <p className="text-base font-black text-slate-900 leading-none">100% ZLD</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Zero Liquid Discharge</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
