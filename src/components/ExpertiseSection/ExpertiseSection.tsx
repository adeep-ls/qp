import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Cpu,
  Microscope,
  Atom,
  Layers,
  ShieldCheck,
  Thermometer,
  Gauge,
  ChevronRight,
} from 'lucide-react';

interface ExpertiseDomain {
  id: string;
  number: string;
  shortTitle: string;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: typeof FlaskConical;
  telemetry: {
    label: string;
    value: string;
    badge: string;
  };
  highlights: string[];
  specs: { label: string; value: string }[];
}

const expertiseDomains: ExpertiseDomain[] = [
  {
    id: 'synthesis',
    number: '01',
    shortTitle: 'Synthesis & R&D',
    tag: 'SYNTHESIS & R&D',
    badge: 'Non-Infringing Routes',
    title: 'Synthetic Route Scouting & Heterocyclic Chemistry',
    subtitle: 'From molecular design to stereochemically pure intermediates',
    description:
      'Our chemistry team designs novel, patent-safe synthetic pathways from basic building blocks, ensuring atom economy, minimal reaction steps, and complete freedom-to-operate (FTO).',
    image: '/card-synthesis.jpg',
    imageAlt: 'Pharmaceutical synthetic chemistry laboratory',
    icon: FlaskConical,
    telemetry: {
      label: 'Target Purity',
      value: '≥ 99.8%',
      badge: 'FTO Safe',
    },
    highlights: [
      'Multi-step stereochemical synthesis & complex heterocyclic blocks',
      'Patent landscape & route evaluation (Freedom to Operate)',
    ],
    specs: [
      { label: 'Scale Range', value: 'Gram to Multi-Kg' },
      { label: 'Patent Status', value: '100% Non-Infringing' },
      { label: 'Assay Target', value: '≥ 99.5% Purity' },
      { label: 'Chemistry', value: 'Chiral / Heterocyclic' },
    ],
  },
  {
    id: 'optimization',
    number: '02',
    shortTitle: 'Process Engineering',
    tag: 'PROCESS ENGINEERING',
    badge: 'Yield & Cost Maximization',
    title: 'Process Development & DoE Optimization',
    subtitle: 'Statistical modeling to eliminate bottlenecks and minimize impurities',
    description:
      'Applying Design of Experiments (DoE) statistical modeling to systematically resolve reaction bottlenecks, shorten cycle times, and maximize closed-loop solvent recovery.',
    image: '/card-process.jpg',
    imageAlt: 'Chemical process development and optimization',
    icon: Cpu,
    telemetry: {
      label: 'Solvent Recovery',
      value: '≥ 92%',
      badge: 'DoE Validated',
    },
    highlights: [
      'Critical Process Parameter (CPP) & thermal hazard assessment',
      'In-process closed-loop solvent recovery exceeding 90%',
    ],
    specs: [
      { label: 'Model', value: 'DoE Factorial' },
      { label: 'Cycle Time', value: '25% – 35% Faster' },
      { label: 'Solvent Recovery', value: '≥ 90% Closed-Loop' },
      { label: 'Yield Increase', value: '15% – 28% Typical' },
    ],
  },
  {
    id: 'validation',
    number: '03',
    shortTitle: 'Quality Assurance',
    tag: 'QUALITY ASSURANCE',
    badge: 'ICH Q2 (R1) Standards',
    title: 'Analytical Method Validation & Quality Control',
    subtitle: 'High-resolution chromatography and regulatory batch release',
    description:
      'State-of-the-art analytical instrumentation ensuring strict pharmacopeial compliance across USP, EP, and IP monographs with precision, specificity, and stability testing.',
    image: '/img10.jpeg',
    imageAlt: 'Analytical quality control testing laboratory',
    icon: Microscope,
    telemetry: {
      label: 'Chromatography',
      value: 'HPLC & GC-HS',
      badge: 'ICH Q2',
    },
    highlights: [
      'High-resolution HPLC & UPLC assay qualification and quantification',
      'GC Headspace (GC-HS) for ppm-level residual solvent screening',
    ],
    specs: [
      { label: 'Guideline', value: 'ICH Q2 (R1)' },
      { label: 'Instruments', value: 'HPLC & GC-HS' },
      { label: 'Solvents', value: 'USP <467>' },
      { label: 'Release', value: '100% CoA Verified' },
    ],
  },
  {
    id: 'scaleup',
    number: '04',
    shortTitle: 'Scale-Up Production',
    tag: 'COMMERCIAL PRODUCTION',
    badge: '50,000+ L Fleet',
    title: 'Commercial Scale-Up & Reactor Fleet',
    subtitle: 'Seamless tech transfer from kilo-lab to multi-ton industrial campaigns',
    description:
      'Seamless technology transfer to 50,000+ L commercial batch capacity across multi-stage glass-lined and stainless steel reaction trains under strict cGMP protocols.',
    image: '/card-bulk.jpg',
    imageAlt: 'Industrial pharmaceutical reaction facility',
    icon: Atom,
    telemetry: {
      label: 'Reactor Fleet',
      value: '50,000+ L',
      badge: 'cGMP / ZLD',
    },
    highlights: [
      'Multi-stage battery of Glass-Lined & SS-316 reaction vessels',
      'Wide temperature envelope from -78°C cryogenic to +250°C',
    ],
    specs: [
      { label: 'Capacity', value: '50,000+ Liters' },
      { label: 'Envelope', value: '-78°C to +250°C' },
      { label: 'Standard', value: 'cGMP & WHO-GMP' },
      { label: 'EHS', value: '100% ZLD Certified' },
    ],
  },
];

const capabilityStats = [
  {
    icon: Gauge,
    value: '50,000+ L',
    label: 'Installed Reactor Fleet',
  },
  {
    icon: Thermometer,
    value: '-78°C to +250°C',
    label: 'Thermal Envelope',
  },
  {
    icon: ShieldCheck,
    value: '100% cGMP',
    label: 'Regulatory Compliance',
  },
  {
    icon: Layers,
    value: '100% ZLD',
    label: 'Zero Liquid Discharge',
  },
];

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = expertiseDomains[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="expertise" className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-teal-100/30 to-transparent blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-teal-600 animate-pulse" />
            <span>Advanced Pharmaceutical Engineering</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-1.5">
            Our <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Technical Expertise</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-lg mx-auto font-normal">
            Chemical synthesis with scientific rigor, certified instrumentation, and an experienced team averaging 15+ years of pharmaceutical leadership.
          </p>
        </div>

        {/* Compact Segmented Domain Tabs Bar */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 mb-5 max-w-3xl mx-auto">
          {expertiseDomains.map((domain, index) => {
            const isSelected = activeTab === index;
            const DomainIcon = domain.icon;

            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-[125px] flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-teal-700 shadow-xs border border-teal-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <DomainIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                <span className="truncate">{domain.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Compact Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.995 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-200/30 overflow-hidden mb-8"
          >
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-5 relative min-h-[190px] sm:min-h-[220px] lg:min-h-[280px] lg:max-h-[320px] bg-slate-900 overflow-hidden group">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold">
                    <IconComponent className="w-3 h-3 text-teal-300" />
                    <span>{current.badge}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-teal-500/90 backdrop-blur-md text-white text-[10px] font-black">
                    {current.number} / 04
                  </span>
                </div>

                {/* Compact Floating Bottom Telemetry Widget */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 flex items-center justify-between gap-2 text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold">
                        {current.telemetry.label}: {current.telemetry.value}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-teal-300">
                      {current.telemetry.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Compact Deep-Dive Technical Content */}
              <div className="lg:col-span-7 p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
                
                {/* Header Information */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-black uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>{current.tag}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-[11px] font-semibold text-teal-700 mb-1.5">
                    {current.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-2">
                    {current.description}
                  </p>
                </div>

                {/* Key Capabilities Checklist (2 items) */}
                <div className="space-y-1">
                  {current.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium leading-tight truncate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical Specifications Grid (4 compact items) */}
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  {current.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-1.5 rounded-md bg-slate-50 border border-slate-200/70 text-center"
                    >
                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                        {spec.label}
                      </span>
                      <span className="text-[11px] font-black text-slate-800 block truncate leading-tight">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Bar */}
                <div className="flex items-center gap-2 pt-1.5 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs shadow-2xs hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <span>Request Review</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-900 font-bold text-xs transition-all"
                  >
                    <span>Products</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Technical Strengths Strip (Compact Single Row) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {capabilityStats.map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <StatIcon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight truncate">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Card (Compact) */}
        <div className="relative rounded-xl p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-black tracking-tight text-white mb-0.5">
                Need Custom Synthesis or Scale-Up Production?
              </h4>
              <p className="text-slate-300 text-[11px] leading-normal">
                Evaluation of non-infringing routes, impurity reduction, and scale-up feasibility under mutual NDA.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-black text-xs tracking-wide shadow-xs shrink-0 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Initiate Discussion</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
