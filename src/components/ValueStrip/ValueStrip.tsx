import { motion } from 'framer-motion';
import { Pill, FlaskConical, Sparkles, Beaker, Sliders, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    num: '01',
    icon: Pill,
    tag: 'Active Ingredients',
    title: 'APIs (Active Ingredients)',
    desc: 'High-purity commercial Active Pharmaceutical Ingredients manufactured under strict cGMP standards.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
    shadow: 'hover:shadow-teal-500/15',
    accent: '#14b8a6',
    image: '/card-api.jpg',
    link: '/products',
  },
  {
    num: '02',
    icon: FlaskConical,
    tag: 'Core Intermediates',
    title: 'API Intermediates',
    desc: 'Specialized chemical precursors and advanced building blocks tailored for seamless API synthesis.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
    shadow: 'hover:shadow-blue-500/15',
    accent: '#3b82f6',
    image: '/card-intermediate.jpg',
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
    image: '/card-synthesis.jpg',
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
    image: '/card-fine.jpg',
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
    image: '/card-process.jpg',
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
    image: '/card-logistics.jpg',
    link: '/contact',
  },
];

export default function ValueStrip() {
  return (
    <section className="relative py-20 sm:py-26 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 overflow-hidden">
      {/* Subtle scientific grid background pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      {/* Soft corporate ambient background aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-blue-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill pill-teal mb-3 inline-flex text-xs py-1 px-3">What We Deliver</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-1 mb-3">
            Comprehensive <span className="text-gradient">Pharmaceutical Solutions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            From multi-step chemical synthesis to commercial bulk manufacturing for global pharmaceutical industries.
          </p>

          {/* Professional Teal-Cyan Gradient Connecting Bar */}
          <div className="mt-6 max-w-xs sm:max-w-sm mx-auto h-1 rounded-full overflow-hidden bg-slate-200/50">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-center"
              style={{
                background: 'linear-gradient(90deg, #0d9488, #14b8a6, #06b6d4, #2563eb)',
              }}
            />
          </div>
        </motion.div>

        {/* 6 Balanced Colorful Cards Grid with Background Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl bg-white border ${c.border} shadow-sm hover:shadow-xl ${c.shadow} transition-all duration-300 flex flex-col group cursor-default overflow-hidden`}
            >
              {/* Card Background Image */}
              <div className="relative h-28 sm:h-32 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = '1';
                      if (c.image.includes('synthesis')) {
                        target.src = '/why-flask.jpg';
                      } else if (c.image.includes('fine')) {
                        target.src = '/why-rnd.jpg';
                      }
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, ${c.accent}20 0%, ${c.accent}40 50%, white 100%)`,
                  }}
                />
                {/* Icon floating on image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.22 }}
                    className={`w-11 h-11 ${c.bg} border-2 border-white rounded-2xl flex items-center justify-center shadow-md`}
                    style={{ borderColor: `${c.accent}40` }}
                  >
                    <c.icon className={`w-5 h-5 ${c.color}`} />
                  </motion.div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-center text-center px-3 pt-7 pb-4">
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

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-normal mb-3 min-h-[44px] flex items-center justify-center">{c.desc}</p>

                {/* Sub-link */}
                <Link
                  to={c.link}
                  className="mt-auto text-[11px] font-bold text-slate-400 hover:text-slate-900 group-hover:text-slate-800 transition-colors inline-flex items-center gap-1"
                >
                  Explore &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
