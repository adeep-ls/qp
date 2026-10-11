import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Microscope,
  FileCheck,
  Award,
  ArrowRight,
  ChevronRight,
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


export default function Quality() {
  return (
    <PageWrapper
      title="Quality Assurance & Regulatory Standards"
      description="Quest Group's comprehensive quality assurance protocols, analytical testing capabilities, and cGMP compliance."
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
                  href="#instrumentation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore Quality Testing</span>
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

            {/* Right Visual Side: Ultra-Modern Multi-Layer Showcase matching other pages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-gradient-to-b from-white via-slate-50/80 to-teal-50/20 group p-6 sm:p-10 flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
                {/* Soft Silk Ambient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12)_0%,transparent_65%)] pointer-events-none" />

                {/* Quality Assurance Emblem Visual */}
                <div className="relative z-0 flex items-center justify-center w-full">
                  <img
                    src="/quality-assurance.webp"
                    alt="Quality Assurance Certified Compliance Standard"
                    loading="lazy"
                    decoding="async"
                    className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] aspect-square object-contain drop-shadow-[0_20px_35px_rgba(15,23,42,0.16)] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
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

      {/* ─── 3. Instrumental Testing Suite ─── */}
      <section id="instrumentation" className="py-16 sm:py-20 bg-slate-50/80 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Analytical Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              High-Resolution Instrumentation
            </h2>
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

      {/* ─── 4. Global CTA ─── */}
      <CTA />
    </PageWrapper>
  );
}
