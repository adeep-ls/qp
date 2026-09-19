import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  FlaskConical,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  Flame,
  Gauge,
  FileCheck2,
  Microscope,
  PackageCheck,
  Check
} from 'lucide-react';

interface CapabilityTab {
  id: string;
  name: string;
  shortLabel: string;
  icon: typeof Atom;
  badge: string;
  headline: string;
  description: string;
  highlights: {
    title: string;
    detail: string;
    tag: string;
    icon: typeof Atom;
  }[];
  metrics: { label: string; value: string }[];
}

const tabs: CapabilityTab[] = [
  {
    id: 'chemistry',
    name: 'Reaction Chemistry',
    shortLabel: 'Synthesis',
    icon: FlaskConical,
    badge: 'Synthetic Capabilities',
    headline: 'Advanced Multi-Step Organic Chemistry & Scalable Transformations',
    description:
      'Engineered for challenging reaction pathways with glass-lined (GLR) and stainless steel (SS-316) reaction trains spanning gram-scale process scouting to multi-ton commercial batch sizes.',
    highlights: [
      {
        title: 'Cryogenic Synthesis',
        detail: 'Controlled reaction kinetics down to -78°C for delicate organometallic and asymmetric chemistry.',
        tag: '-78°C to +30°C',
        icon: ThermometerSnowflake,
      },
      {
        title: 'High-Pressure Hydrogenation',
        detail: 'Autoclaves up to 50 bar pressure for selective reduction and deprotection steps.',
        tag: 'Up to 50 Bar',
        icon: Gauge,
      },
      {
        title: 'Chiral Synthesis & Resolution',
        detail: 'Enantioselective routes and classical diastereomeric resolution for optical isomer purity.',
        tag: '≥ 99% ee Optical Purity',
        icon: Atom,
      },
      {
        title: 'High-Vacuum Distillation',
        detail: 'Fractional column vacuum distillation down to 0.1 mbar for thermally sensitive intermediates.',
        tag: '0.1 mbar High Vacuum',
        icon: Flame,
      },
    ],
    metrics: [
      { label: 'Reactor Capacity', value: '50,000+ L' },
      { label: 'Temperature Envelope', value: '-78°C to +260°C' },
      { label: 'Autoclave Pressure', value: 'Up to 50 Bar' },
      { label: 'Commercial Batches', value: 'Multi-Ton Scale' },
    ],
  },
  {
    id: 'qc',
    name: 'Analytical & QC',
    shortLabel: 'Quality Control',
    icon: Microscope,
    badge: 'Analytical Precision',
    headline: 'cGMP Analytical Quality Infrastructure & Batch Release Testing',
    description:
      'State-of-the-art instrumental analysis operating under strict 21 CFR Part 11 compliant data governance, ensuring lot-to-lot consistency and pharmacopeial purity compliance.',
    highlights: [
      {
        title: 'HPLC & UPLC Chromatography',
        detail: 'High-throughput Waters & Shimadzu HPLC arrays with UV/PDA detectors for assay and purity profiles.',
        tag: 'Waters & Shimadzu HPLC',
        icon: Microscope,
      },
      {
        title: 'Gas Chromatography (GC-HS)',
        detail: 'Agilent GC with automated Headspace sampler for trace residual solvent quantification (USP <467>).',
        tag: 'Agilent Headspace GC',
        icon: Gauge,
      },
      {
        title: 'Stability Testing (ICH Q1A)',
        detail: 'Microprocessor-controlled stability chambers for real-time (25°C/60% RH) and accelerated (40°C/75% RH) shelf-life studies.',
        tag: 'ICH Compliant Chambers',
        icon: Layers,
      },
      {
        title: 'Physicochemical Profiling',
        detail: 'Potentiometric autotitrators, Karl Fischer moisture testers, and polarimeters for comprehensive CoA release.',
        tag: 'Potentiometric & KF',
        icon: FlaskConical,
      },
    ],
    metrics: [
      { label: 'Chromatographic Purity', value: '≥ 99.8%' },
      { label: 'CoA Turnaround', value: '< 48 Hours' },
      { label: 'Audit Trail', value: '21 CFR Part 11' },
      { label: 'OOS Incidence', value: '< 0.05%' },
    ],
  },
  {
    id: 'regulatory',
    name: 'Regulatory & Audits',
    shortLabel: 'Compliance',
    icon: ShieldCheck,
    badge: 'Audit Readiness',
    headline: 'Comprehensive Regulatory Dossiers & Global Quality Systems',
    description:
      'Structured to support multinational pharmaceutical sponsors with transparent regulatory documentation, Drug Master Files (DMF), and seamless on-site or virtual audits.',
    highlights: [
      {
        title: 'US-DMF & CTD Dossiers',
        detail: 'Well-documented Type II Drug Master Files prepared in Common Technical Document (CTD) format for regulatory review.',
        tag: 'CTD / eCTD Standard',
        icon: FileCheck2,
      },
      {
        title: 'cGMP / WHO-GMP Aligned',
        detail: 'Standard Operating Procedures adhering strictly to Schedule M and international cGMP manufacturing standards.',
        tag: 'WHO-GMP Compliant',
        icon: ShieldCheck,
      },
      {
        title: 'Full Process Validation',
        detail: 'Three-batch commercial validation protocol with critical process parameters (CPPs) and cleaning validation reports.',
        tag: 'Process Validation Protocol',
        icon: CheckCircle2,
      },
      {
        title: 'Zero Liquid Discharge (ZLD)',
        detail: '100% compliant multi-effect evaporator and biological ETP achieving complete environmental sustainability.',
        tag: 'Pollution Board Approved',
        icon: Sparkles,
      },
    ],
    metrics: [
      { label: 'Regulatory Compliance', value: 'WHO-GMP' },
      { label: 'DMF Readiness', value: 'Type II Dossiers' },
      { label: 'EHS Standard', value: '100% ZLD' },
      { label: 'Audit Success', value: '100% Pass Rate' },
    ],
  },
  {
    id: 'supply',
    name: 'Supply Chain & Packaging',
    shortLabel: 'Global Reach',
    icon: Globe2,
    badge: 'Global Delivery',
    headline: 'Validated Logistics, UN-Certified Packaging & Global Supply',
    description:
      'Reliable pharmaceutical logistics pipeline delivering commercial Active Ingredients and specialty Intermediates to pharmaceutical manufacturers worldwide.',
    highlights: [
      {
        title: 'UN-Certified Packaging',
        detail: 'Double poly-lined HDPE drums and tamper-evident fiber drums purged with ultra-pure nitrogen gas.',
        tag: 'Nitrogen Purged Drums',
        icon: PackageCheck,
      },
      {
        title: 'Cold-Chain & Temperature Log',
        detail: 'Continuous data logger monitoring for temperature-sensitive APIs from facility release to dockside delivery.',
        tag: 'Data Logger Monitored',
        icon: ThermometerSnowflake,
      },
      {
        title: 'Global Export Clearance',
        detail: 'Dedicated customs and documentation team expediting export clearance across regulated and semi-regulated markets.',
        tag: '25+ Export Nations',
        icon: Globe2,
      },
      {
        title: 'Strategic Raw Material Buffer',
        detail: '3 to 6-month safety inventory of critical key starting materials (KSMs) safeguarding uncompromised supply continuity.',
        tag: 'KSM Security Stock',
        icon: ShieldCheck,
      },
    ],
    metrics: [
      { label: 'Export Footprint', value: '25+ Countries' },
      { label: 'On-Time Delivery', value: '99.4%' },
      { label: 'Safety Stock', value: '3 - 6 Months' },
      { label: 'UN Packaging', value: '100% Certified' },
    ],
  },
];

const stats = [
  { value: '50,000+ L', label: 'Reactor Volume Capacity', sub: 'Glass-Lined & SS-316 Trains' },
  { value: '≥ 99.8%', label: 'HPLC Chemical Purity', sub: 'Validated Chromatographic Quality' },
  { value: '48 Hours', label: 'Rapid Sample Dispatch', sub: 'Analytical Standard & CoA' },
  { value: '100% ZLD', label: 'Zero Liquid Discharge', sub: 'Eco-Compliant EHS Facility' },
];

export default function AboutPreview() {
  const [activeTab, setActiveTab] = useState<string>('chemistry');
  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Tech Grids */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-teal-500/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Atom className="w-3.5 h-3.5" />
            Manufacturing &amp; Scientific Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Engineered for <span className="text-gradient">Pharma CDMO Excellence</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-integrity synthetic API and intermediate manufacturing backed by robust chemical reaction engineering, rigorous analytical quality assurance, and audit-ready regulatory dossiers.
          </p>
        </div>

        {/* 4 Core Quantitative Benchmarks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-teal-500/40 transition-colors backdrop-blur-sm group"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-teal-400 tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-200 mb-0.5">{s.label}</p>
              <p className="text-[11px] text-slate-400 font-normal">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Capability Matrix Tabs */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Tab Navigation Bar */}
          <div className="flex border-b border-white/10 overflow-x-auto scrollbar-none bg-white/[0.02]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[140px] sm:min-w-[170px] py-4 px-4 text-left transition-all relative flex items-center justify-center sm:justify-start gap-2.5 ${
                    isActive
                      ? 'bg-teal-500/10 text-teal-300 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-teal-400 text-slate-950 font-black' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-xs font-bold leading-tight">{tab.name}</p>
                    <p className="text-[10px] text-slate-400 font-normal">{tab.shortLabel}</p>
                  </div>
                  <span className="sm:hidden text-xs font-semibold">{tab.shortLabel}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 shadow-[0_0_12px_#14b8a6]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 lg:p-10"
            >
              {/* Top description row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10">
                <div className="max-w-3xl">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-400 mb-1.5 inline-block">
                    {current.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {current.headline}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.description}
                  </p>
                </div>
                <div className="shrink-0 flex flex-wrap gap-2.5">
                  <Link
                    to="/capabilities"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-teal-500/20"
                  >
                    Explore Technical Specs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    Request Working Sample
                  </Link>
                </div>
              </div>

              {/* 4 Feature Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {current.highlights.map((h) => {
                  const ItemIcon = h.icon;
                  return (
                    <div
                      key={h.title}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                            {h.tag}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1.5">{h.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{h.detail}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-teal-400/80 font-medium">
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        Audit Verified Spec
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Specific Metric Strip for the Tab */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                {current.metrics.map((m) => (
                  <div key={m.label} className="text-center sm:text-left px-2">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">{m.label}</p>
                    <p className="text-sm sm:text-base font-bold text-slate-100">{m.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Compliance Assurance Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-teal-950/40 border border-teal-500/20 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white">Full Quality &amp; Compliance Transparency:</span> Every batch shipped with signed Certificate of Analysis (CoA), complete HPLC chromatograms, and residual solvent testing.
            </div>
          </div>
          <Link
            to="/products"
            className="shrink-0 text-teal-400 hover:text-teal-300 font-bold inline-flex items-center gap-1.5 transition-colors"
          >
            Browse Commercial Catalog &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
