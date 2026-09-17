import { motion } from 'framer-motion';
import { FlaskConical, Factory, Sparkles, Beaker, Sliders, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    num: '01',
    icon: FlaskConical,
    tag: 'Core Focus',
    title: 'API Intermediates',
    desc: 'High-purity intermediates for life-saving active pharmaceutical ingredients.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
    shadow: 'hover:shadow-teal-500/15',
    accent: '#14b8a6',
    link: '/products',
  },
  {
    num: '02',
    icon: Factory,
    tag: 'Commercial Scale',
    title: 'Bulk Drug Intermediates',
    desc: 'Multi-ton capacity manufacturing with strict batch-to-batch consistency.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
    shadow: 'hover:shadow-blue-500/15',
    accent: '#3b82f6',
    link: '/products',
  },
  {
    num: '03',
    icon: Sparkles,
    tag: 'Tailored R&D',
    title: 'Custom Synthesis',
    desc: 'Proprietary route scouting, multi-step synthesis, and pilot scale-up.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100 hover:border-purple-300',
    shadow: 'hover:shadow-purple-500/15',
    accent: '#a855f7',
    link: '/capabilities',
  },
  {
    num: '04',
    icon: Beaker,
    tag: 'High Purity',
    title: 'Fine Chemicals',
    desc: 'Specialized organic building blocks and analytical-grade reagents.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100 hover:border-rose-300',
    shadow: 'hover:shadow-rose-500/15',
    accent: '#f43f5e',
    link: '/capabilities',
  },
  {
    num: '05',
    icon: Sliders,
    tag: 'Optimization',
    title: 'Process Development',
    desc: 'Continuous yield improvement, solvent recovery, and cost efficiency.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
    shadow: 'hover:shadow-amber-500/15',
    accent: '#f59e0b',
    link: '/capabilities',
  },
  {
    num: '06',
    icon: Globe,
    tag: 'Global Supply',
    title: 'Worldwide Logistics',
    desc: 'Audited supply network with reliable on-time delivery across continents.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100 hover:border-green-300',
    shadow: 'hover:shadow-green-500/15',
    accent: '#22c55e',
    link: '/contact',
  },
];

export default function ValueStrip() {
  return (
    <section className="relative py-18 sm:py-24 section-purple overflow-hidden">
      {/* Soft pastel ambient background aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-r from-teal-200/20 via-purple-200/20 to-rose-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-11"
        >
          <span className="pill pill-teal mb-3 inline-flex text-xs py-1 px-3">What We Deliver</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-1 mb-3">
            Comprehensive <span className="text-gradient-vivid">Pharmaceutical Solutions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From multi-step chemical synthesis to commercial bulk manufacturing for global pharmaceutical industries.
          </p>

          {/* Rainbow Gradient Connecting Bar */}
          <div className="mt-6 max-w-xs sm:max-w-sm mx-auto h-1 rounded-full overflow-hidden bg-slate-200/60">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-center"
              style={{
                background: 'linear-gradient(90deg, #14b8a6, #3b82f6, #a855f7, #f43f5e, #f59e0b, #22c55e)',
              }}
            />
          </div>
        </motion.div>

        {/* 6 Balanced Colorful Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative py-5 px-3.5 sm:px-4 rounded-3xl bg-white border ${c.border} shadow-sm hover:shadow-xl ${c.shadow} transition-all duration-300 flex flex-col items-center text-center group cursor-default`}
            >
              {/* Colorful Squircle Icon Container */}
              <motion.div
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ duration: 0.22 }}
                className={`w-13 h-13 ${c.bg} border-2 border-white rounded-2xl flex items-center justify-center mb-3 shadow-xs group-hover:shadow-sm transition-shadow`}
                style={{ borderColor: `${c.accent}30` }}
              >
                <c.icon className={`w-6 h-6 ${c.color}`} />
              </motion.div>

              {/* Tag pill with accent dot */}
              <div
                className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                style={{
                  color: c.accent,
                  backgroundColor: `${c.accent}15`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.accent }} />
                {c.tag}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-[13px] font-black text-slate-800 mb-1.5 leading-tight">{c.title}</h3>

              {/* Full Description without truncation */}
              <p className="text-[11px] text-slate-500 leading-normal mb-3 min-h-[44px] flex items-center justify-center">{c.desc}</p>

              {/* Sub-link */}
              <Link
                to={c.link}
                className="mt-auto text-[11px] font-bold text-slate-400 hover:text-slate-900 group-hover:text-slate-800 transition-colors inline-flex items-center gap-1"
              >
                Explore &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
