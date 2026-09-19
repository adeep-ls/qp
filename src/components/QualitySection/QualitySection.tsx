import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PackageCheck,
  FlaskConical,
  Factory,
  ShieldCheck,
  Package,
  Truck,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  Award,
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: PackageCheck,
    title: 'Raw Material Qualification',
    desc: 'Audited vendor qualification and 100% incoming testing of key starting materials (KSMs) and solvents before release to production.',
  },
  {
    step: '02',
    icon: FlaskConical,
    title: 'In-Process Reaction Testing',
    desc: 'Continuous analytical verification at every critical synthesis checkpoint to monitor conversion, byproducts, and reaction kinetics.',
  },
  {
    step: '03',
    icon: Factory,
    title: 'cGMP Controlled Manufacturing',
    desc: 'Execution under strict standard operating procedures (SOPs), validated batch manufacturing records (BMRs), and environmental controls.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Analytical Quality Control',
    desc: 'Comprehensive instrumental analysis with Waters/Shimadzu HPLC and Agilent GC-HS for chromatographic assay and residual solvents.',
  },
  {
    step: '05',
    icon: Package,
    title: 'Tamper-Evident Packaging',
    desc: 'UN-certified double poly-lined drums sealed under pure nitrogen blanket to protect stability during transit.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Tracked Global Distribution',
    desc: 'Continuous temperature-logged logistics and complete export compliance documentation shipped directly to international destinations.',
  },
];

const commitments = [
  'Rigorous raw material qualification & vendor audits',
  'Documented manufacturing batch records (BMR / BPR)',
  'Multi-station in-process quality testing',
  'Instrumental QC release with HPLC & GC-HS data',
  'Continuous process verification & yield improvement',
  'Zero Liquid Discharge (ZLD) environmental safety',
];

export default function QualitySection() {
  return (
    <section id="quality" className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3.5">
            Quality Assurance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Quality at <span className="text-gradient">Every Stage</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Our multi-stage quality assurance architecture verifies raw materials, monitors in-process kinetics, and validates release specifications under international pharmacopeial standards.
          </p>
        </div>

        {/* 6-Stage Quality Workflow Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400/50 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold font-mono text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-lg">
                      PHASE {s.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitments Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 block mb-1">
                Zero-Defect Philosophy
              </span>
              <h3 className="text-xl font-bold text-slate-900">Our Quality Commitments</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700">
                100% Certificate of Analysis (CoA) with Every Consignment
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {commitments.map((c) => (
              <div key={c} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Full Quality Page */}
        <div className="text-center">
          <Link
            to="/quality"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm transition-all shadow-md hover:shadow-teal-500/25"
          >
            Learn More About Quality Systems
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
