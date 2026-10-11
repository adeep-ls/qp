import { motion } from 'framer-motion';
import {
  Factory,
  Settings,
  ShieldCheck,
  Atom,
  Thermometer,
  Gauge,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  FlaskConical,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';
import { company } from '../../data/company';

const manufacturingMetrics = [
  { value: '50,000+ L', label: 'Installed Reaction Capacity', icon: Atom },
  { value: '-78°C to +250°C', label: 'Reaction Temperature Envelope', icon: Thermometer },
  { value: 'cGMP / WHO-GMP', label: 'Regulatory Plant Compliance', icon: ShieldCheck },
  { value: '100% ZLD', label: 'Zero Liquid Discharge Certified', icon: Layers },
];

const capabilities = [
  {
    icon: FlaskConical,
    title: 'API Intermediates Manufacturing',
    tag: 'Core Commercial API',
    badge: 'cGMP Compliant',
    description:
      'Vertically integrated commercial manufacturing of Active Pharmaceutical Ingredient intermediates with robust stereocontrol and high chromatographic purity.',
    specs: ['Commercial Batch Fleet', 'High Yield Stereocontrol', 'USP / EP Standards'],
  },
  {
    icon: Factory,
    title: 'Bulk Drug Intermediates',
    tag: 'Bulk Synthesis',
    badge: 'Multi-Ton Scale',
    description:
      'Large-scale chemical manufacturing of key starting materials and bulk drug building blocks operating under continuous quality oversight.',
    specs: ['Multi-Stage Reaction Trains', 'Glass-Lined & SS-316', 'Automated Process Logic'],
  },
  {
    icon: Settings,
    title: 'Process Engineering & DoE',
    tag: 'Optimization',
    badge: 'DoE Validated',
    description:
      'Application of Design of Experiments (DoE) statistical modeling to systematically resolve reaction bottlenecks, shorten cycle times, and maximize solvent recovery.',
    specs: ['25%-35% Cycle Reduction', '≥ 90% Solvent Recovery', 'Thermal Hazard Testing'],
  },
];

const plantSpecs = [
  {
    title: 'Reaction Vessel Fleet',
    detail: '50,000+ Liters total capacity featuring a balanced battery of Glass-Lined Reactors (GLR) and Stainless Steel (SS-316) units.',
  },
  {
    title: 'Temperature & Pressure Envelope',
    detail: 'Cryogenic operations down to -78°C for sensitive alkylations/boronations, and high-temperature catalytic runs up to +250°C and 10 bar.',
  },
  {
    title: 'Solid-Liquid Isolation (ANFD)',
    detail: 'Agitated Nutsche Filter Dryers (ANFD) and closed-loop centrifuges preventing atmospheric exposure and guaranteeing pure crystal isolation.',
  },
  {
    title: 'Distillation & Solvent Recovery',
    detail: 'Fractional vacuum distillation columns with automated reflux control recovering >90% of process solvents in a closed-loop system.',
  },
];

export default function Manufacturing() {
  return (
    <PageWrapper
      title="Manufacturing & Capabilities"
      description="Quest Group's vertically integrated manufacturing infrastructure and technical capabilities in API and bulk intermediate production."
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
                <span>Commercial Scale Operations • cGMP Standards</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Scale &amp; Precision in{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  API Manufacturing
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                Vertically integrated manufacturing facilities engineered for complex chemical synthesis, cryogenic reactions, and closed-loop isolation. We provide end-to-end technology transfer from bench chemistry to 50,000+ L commercial batch campaigns.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Atom className="w-3.5 h-3.5 text-teal-600" />
                  50,000+ L Reactor Volume
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Thermometer className="w-3.5 h-3.5 text-teal-600" />
                  -78°C to +250°C Thermal Envelope
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  100% ZLD Eco-Facility
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#capabilities-grid"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore All Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Inquire Commercial Capacity</span>
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
                  src="/card-bulk.webp"
                  alt="Quest Group industrial pharmaceutical reaction blocks"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
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
            {manufacturingMetrics.map((stat) => {
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

      {/* ─── 3. Capabilities Bento Grid ─── */}
      <section id="capabilities-grid" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Comprehensive Operations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Full-Spectrum Chemical Manufacturing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              From early route scouting and process optimization to multi-ton bulk synthesis and international supply chain distribution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
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
                        {cap.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {cap.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {cap.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {cap.specs.map((s) => (
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

      {/* ─── 4. Technical Plant Specifications ─── */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Engineering Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Plant Engineering &amp; Reaction Fleet Specs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {plantSpecs.map((spec) => (
              <div
                key={spec.title}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-3 font-bold text-xs">
                  <Gauge className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {spec.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {spec.detail}
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
