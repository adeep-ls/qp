import { motion } from 'framer-motion';
import {
  PackageCheck,
  FlaskConical,
  Factory,
  ShieldCheck,
  Package,
  Truck,
  CheckCircle2,
  Sparkles,
  Microscope,
  FileCheck,
  Award,
  ArrowRight,
  ChevronRight,
  Gauge,
  Thermometer,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';

const qualityMetrics = [
  { value: 'ICH Q7', label: 'cGMP Regulatory Operating Norm', icon: Award },
  { value: '≥ 99.8%', label: 'Target Chromatographic Assay', icon: Sparkles },
  { value: '100%', label: 'Batch Release with Verified CoA', icon: FileCheck },
  { value: 'Zone IV', label: 'ICH Climatic Stability Testing', icon: Thermometer },
];

const processSteps = [
  {
    step: '01',
    icon: PackageCheck,
    title: 'Raw Material Qualification',
    badge: 'Vendor Audited',
    desc: 'Every synthesis campaign begins with rigorously tested key starting materials (KSMs) and solvents from pre-qualified suppliers, released only after 100% incoming testing.',
  },
  {
    step: '02',
    icon: FlaskConical,
    title: 'In-Process Reaction Testing',
    badge: 'Real-Time Monitoring',
    desc: 'Continuous analytical verification at every critical synthesis checkpoint to monitor conversion, impurity formation, and reaction kinetics before stage isolation.',
  },
  {
    step: '03',
    icon: Factory,
    title: 'cGMP Controlled Manufacturing',
    badge: 'SOP & BMR Enforced',
    desc: 'Multi-stage Glass-Lined and SS-316 reaction batteries operating under validated Batch Manufacturing Records (BMRs) with automated DCS environmental control.',
  },
  {
    step: '04',
    icon: Microscope,
    title: 'Analytical Quality Control',
    badge: 'HPLC & GC-HS',
    desc: 'Waters/Shimadzu HPLC assay qualification and Agilent GC Headspace residual solvent screening validating complete monograph compliance across USP, EP, and IP.',
  },
  {
    step: '05',
    icon: Package,
    title: 'Nitrogen-Blanketed Packaging',
    badge: 'Tamper-Evident',
    desc: 'UN-certified double poly-lined drums sealed under inert pure nitrogen blanket inside classified cleanrooms to preserve stereochemical stability and shelf life.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Tracked Global Distribution',
    badge: 'Logistics Control',
    desc: 'Continuous temperature-monitored logistics paired with comprehensive export dossiers, ensuring seamless international customs clearance and timely arrival.',
  },
];

const instrumentation = [
  {
    title: 'HPLC & UPLC Chromatography',
    brand: 'Waters & Shimadzu Systems',
    desc: 'Ultra-high resolution reverse phase chromatography for assay determination, impurity profiling, and chiral purity testing.',
    tag: 'Assay & Purity',
  },
  {
    title: 'Headspace Gas Chromatography (GC-HS)',
    brand: 'Agilent Technologies',
    desc: 'Quantitative ppm-level residual solvent screening complying with USP <467> and ICH Q3C regulatory guidelines.',
    tag: 'Residual Solvents',
  },
  {
    title: 'Stability Testing Chambers',
    brand: 'Zone IV Climatic Control',
    desc: 'Accelerated and real-time ICH Q1A stability testing at controlled temperature and relative humidity profiles.',
    tag: 'Shelf Life & Stability',
  },
  {
    title: 'Wet Chemistry & Physico-Chemical Testing',
    brand: 'Metrohm & Mettler Toledo',
    desc: 'Automated Karl Fischer moisture titrations, melting point determinations, optical rotation, and heavy metal assays.',
    tag: 'Pharmacopeial Tests',
  },
];

const commitments = [
  'Stringent raw material qualification & verified vendor audit trails',
  'Documented Batch Manufacturing and Packaging Records (BMR / BPR)',
  'Multi-station in-process quality checkpoints at critical reaction steps',
  '100% instrumental release testing with raw chromatographic data',
  'Dedicated change control and Out-of-Specification (OOS) procedures',
  'Continuous process verification and yield optimization under cGMP',
];

export default function Quality() {
  return (
    <PageWrapper
      title="Quality Assurance & Regulatory Standards"
      description="Quest Pharma's comprehensive quality assurance protocols, analytical testing capabilities, and cGMP compliance."
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
                <span>ICH Q7 &amp; WHO-GMP Regulatory Assurance</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Uncompromising{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Quality Assurance
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                From raw material qualification through chromatographic batch release, our quality management system enforces strict pharmacopeial compliance across USP, EP, BP, and IP monographs with full audit traceability.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  ICH Q2 Validated Test Methods
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Microscope className="w-3.5 h-3.5 text-teal-600" />
                  Waters HPLC &amp; Agilent GC-HS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                  100% CoA Verified Release
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore Quality Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Request Quality Dossier / CoA</span>
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
                  src="/img10.jpeg"
                  alt="Quest Pharma Analytical Quality Control Laboratory"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Analytical Testing Lab</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-extrabold shadow-sm">
                    ICH Q2 (R1)
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                        <Microscope className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                          Instrumental Testing
                        </div>
                        <div className="text-sm font-black text-white">
                          HPLC &amp; GC-HS Chromatography
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold shrink-0">
                      100% Release
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Glass Chip */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    Zero OOS Tolerance
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Validated Methodologies
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
            {qualityMetrics.map((stat) => {
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

      {/* ─── 3. 6-Stage Quality Workflow ─── */}
      <section id="workflow" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              End-to-End Governance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              The 6-Stage Quality Lifecycle
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every molecule is subjected to verified controls spanning raw material intake, in-process testing, controlled crystallization, instrumental batch release, and climate-safe dispatch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
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
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-teal-700 uppercase px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200/80">
                          {step.badge}
                        </span>
                        <span className="text-xs font-black text-slate-400">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-teal-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Control Point</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. Instrumental Testing Suite ─── */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
                Analytical Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                High-Resolution Instrumentation
              </h2>
            </div>
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span>Explore Analytical Lab Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {instrumentation.map((inst, idx) => (
              <motion.div
                key={inst.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 block w-fit mb-3">
                    {inst.tag}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {inst.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-teal-600 mb-2">
                    {inst.brand}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Quality Commitments & Compliance Matrix ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
                Regulatory Rigor
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Our Core Quality Commitments
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe that trust in pharmaceuticals is earned through transparency, data integrity, and strict adherence to validated processes. Every batch shipped from Quest Pharma includes a complete certificate of analysis verified against client specifications.
              </p>

              <div className="space-y-2.5 pt-2">
                {commitments.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 mt-0.5 text-teal-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Audit-Ready Documentation</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                    Full Regulatory Tech Packs &amp; DMF Support
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We provide clients with comprehensive technical dossiers including validated test methods, forced degradation studies, residual solvent validation, and stability profiles under mutual confidentiality.
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-black text-xs tracking-wide shadow-md shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>Inquire About Quality Audit &amp; CoA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 6. Global CTA ─── */}
      <CTA />
    </PageWrapper>
  );
}
