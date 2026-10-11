import { motion } from 'framer-motion';
import {
  Atom,
  Microscope,
  TestTubes,
  FlaskConical,
  Lightbulb,
  Settings,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Cpu,
  FileSpreadsheet,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';

const rdMetrics = [
  { value: '100%', label: 'Non-Infringing Route Scouting (FTO)', icon: ShieldCheck },
  { value: '15+ Yrs', label: 'Average Senior Chemist Experience', icon: FlaskConical },
  { value: 'DoE', label: 'Statistical Factorial Process Modeling', icon: Cpu },
  { value: 'Gram to Kilo', label: 'Rapid Prototype Sample Turnaround', icon: TestTubes },
];

const rdAreas = [
  {
    icon: FlaskConical,
    title: 'Synthetic Route Scouting & Heterocyclic Chemistry',
    tag: 'Synthetic Chemistry',
    badge: 'FTO Design',
    description:
      'Designing innovative, patent-safe synthetic routes from basic starting materials, prioritizing atom economy, minimal reaction steps, and robust stereocontrol.',
    specs: ['Multi-Step Heterocycles', 'Stereochemical Purity', 'Chiral Building Blocks'],
  },
  {
    icon: Settings,
    title: 'Process Engineering & DoE Optimization',
    tag: 'Process Chemistry',
    badge: 'Yield & Cost',
    description:
      'Applying Design of Experiments (DoE) statistical modeling to systematically resolve reaction bottlenecks, shorten cycle times, and maximize solvent recovery.',
    specs: ['Critical Process Parameters (CPP)', 'Thermal Safety Calorimetry', '≥ 90% Solvent Recovery'],
  },
  {
    icon: Microscope,
    title: 'Analytical Method Development & Validation',
    tag: 'Analytical QA/QC',
    badge: 'ICH Q2 (R1)',
    description:
      'Establishing and validating chromatographic methods under ICH Q2 guidelines for assay determination, impurity quantification, and residual solvent screening.',
    specs: ['HPLC & UPLC Assay Release', 'GC Headspace USP <467>', 'Stress & Degradation Studies'],
  },
  {
    icon: Atom,
    title: 'Impurity Profiling & Standard Isolation',
    tag: 'Regulatory Science',
    badge: 'Structure ID',
    description:
      'Identification, structural elucidation, and custom synthesis of process-related impurities, degradation products, and reference standards for regulatory dossiers.',
    specs: ['Impurity Standards', 'Spectroscopic Characterization', 'Spiking & Recovery Studies'],
  },
  {
    icon: Lightbulb,
    title: 'Process Innovation & Green Chemistry',
    tag: 'Eco-Efficiency',
    badge: 'Atom Economy',
    description:
      'Exploring greener catalytic reagents, solvent-free reaction steps, and continuous crystallization to minimize environmental footprint and E-factor.',
    specs: ['Catalytic Systems', 'Low E-Factor Syntheses', 'Closed-Loop Engineering'],
  },
  {
    icon: TrendingUp,
    title: 'Bench-to-Plant Technology Transfer',
    tag: 'Scale-Up Tech Transfer',
    badge: 'Lab to Commercial',
    description:
      'Smooth bridging from gram-scale lab synthesis to 50,000+ L commercial batch reactors with comprehensive Tech Packs, SOPs, and safety assessments.',
    specs: ['Comprehensive Tech Packs', 'Reaction Kinetics Modeling', 'Pilot Batch Validation'],
  },
];

const capabilities = [
  {
    title: 'Chemical Route Scouting',
    detail: 'Complete patent landscape mapping ensuring 100% freedom-to-operate before bench work begins.',
  },
  {
    title: 'Reaction Calorimetry & Safety',
    detail: 'Thermal runaway hazard evaluation and gas generation kinetics ensuring safe commercial scalability.',
  },
  {
    title: 'Crystallization Engineering',
    detail: 'Seeding protocols and cooling curves tailored for uniform particle size distribution and easy filtration.',
  },
  {
    title: 'Tech Pack & Dossier Generation',
    detail: 'Complete CMC documentation, route development reports, and analytical validation protocols ready for audits.',
  },
];

export default function Research() {
  return (
    <PageWrapper
      title="Research & Development"
      description="Quest Group's research and development capabilities in synthetic chemistry, process development, and new product innovation."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% -10%, rgba(20, 184, 166, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(6, 182, 212, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)
            `,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                <span>Synthetic Chemistry &amp; Process Scouting • R&amp;D</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Innovation Through{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Scientific Rigor
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                Our senior chemistry team blends synthetic route scouting with Design of Experiments (DoE) optimization. We develop non-infringing, cost-competitive synthetic routes from basic starting materials with complete Freedom-to-Operate (FTO).
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  100% Non-Infringing Routes
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Cpu className="w-3.5 h-3.5 text-teal-600" />
                  DoE Yield Optimization
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                  Gram to Kilo Scale
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#rd-focus"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore R&amp;D Disciplines</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Inquire Custom Synthesis</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Side: Ultra-Modern Multi-Layer Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src="/why-rnd.webp"
                  alt="Quest Group chemical research and laboratory synthesis"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Route Development</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-extrabold shadow-sm">
                    FTO Certified
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                        <FlaskConical className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                          Prototype Scale
                        </div>
                        <div className="text-sm font-black text-white">
                          Gram to Kilo Scale-Up
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold shrink-0">
                      ≥ 99.5% Assay
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Glass Chip */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl z-20">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    DoE Factorial Screening
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Faster Cycle Optimization
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Subtle Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ─── 2. Key Metrics Bar ─── */}
      <section className="relative py-8 bg-slate-50/70 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {rdMetrics.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-black text-slate-900 leading-tight truncate">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. R&D Focus Bento Grid ─── */}
      <section id="rd-focus" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Scientific Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Core Research &amp; Development Disciplines
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Bridging complex organic synthesis, reaction kinetics, and commercial process engineering under rigorous intellectual property oversight.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rdAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-105 group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/80">
                        {area.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {area.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {area.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {area.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. R&D Capabilities & Safety Engineering ─── */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Engineering Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              R&amp;D Methodology &amp; Safety Protocols
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every synthetic route is developed with automated calorimetry, thermal runaway risk screening, and full analytical validation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-3 font-bold text-xs">
                  <Atom className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Global CTA ─── */}
      <CTA />
    </PageWrapper>
  );
}
