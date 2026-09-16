import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Gauge, Building2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const facilities = [
  {
    id: 'day',
    title: 'Manufacturing Complex (Day)',
    badge: 'Main Plant',
    icon: Sun,
    image: '/facility-day.jpg',
    color: 'from-teal-500/20 to-blue-500/10',
    description: 'Purpose-built multi-story bulk drug and API intermediate synthesis complex situated in Hyderabad, engineered to stringent cGMP standards.',
    stats: [
      { label: 'Footprint', value: 'Multi-acre Campus' },
      { label: 'Capability', value: 'Commercial Scale' },
      { label: 'Operations', value: 'Zero Liquid Discharge' },
    ],
  },
  {
    id: 'night',
    title: '24/7 Continuous Production (Night)',
    badge: 'Round-The-Clock',
    icon: Moon,
    image: '/facility-night.jpg',
    color: 'from-amber-500/20 to-purple-500/10',
    description: 'Continuous reaction operations with dedicated night shifts ensuring dependable production cycles, on-time delivery, and high volumetric output.',
    stats: [
      { label: 'Uptime', value: '24 / 7 / 365' },
      { label: 'Safety', value: 'Multi-layer Redundancy' },
      { label: 'Monitoring', value: 'Real-time SCADA' },
    ],
  },
  {
    id: 'reactor',
    title: 'Precision Reaction Systems (SSR & GLR)',
    badge: 'Core Synthesis',
    icon: Gauge,
    image: '/facility-reactor.jpg',
    color: 'from-cyan-500/20 to-teal-500/10',
    description: 'High-grade stainless steel & glass-lined reactors equipped with computerized distillation columns, precision temperature control, and vacuum systems.',
    stats: [
      { label: 'Reactors', value: 'SS 316 & Glass Lined' },
      { label: 'Chemistry', value: 'High Pressure & Cryogenic' },
      { label: 'Finish', value: 'Pharma Cleanroom Grade' },
    ],
  },
];

export default function FacilityGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const active = facilities[activeTab];

  return (
    <section className="py-24 lg:py-36 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="pill pill-teal mb-4 inline-flex">
              <Building2 className="w-3.5 h-3.5" />
              World-Class Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-3">
              Take a look inside our <span className="text-gradient">Manufacturing Plant</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Equipped with state-of-the-art chemical synthesis technology, dedicated reaction trains, and round-the-clock operations in Hyderabad, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/infrastructure" className="btn-dark inline-flex">
              Explore Infrastructure <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {facilities.map((fac, idx) => {
            const isSelected = activeTab === idx;
            const Icon = fac.icon;
            return (
              <button
                key={fac.id}
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`} />
                {fac.badge}
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Photo Showcase */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[16/10] bg-slate-950 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                  Authentic Facility Photography
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">{active.title}</h3>
                <p className="text-sm text-slate-300 max-w-xl mt-1.5 line-clamp-2">{active.description}</p>
              </div>
            </div>
          </div>

          {/* Details & Live Metrics Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                  Facility Spotlight
                </span>
                <span className="text-xs font-mono text-slate-400">0{activeTab + 1} / 0{facilities.length}</span>
              </div>

              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-snug">
                {active.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Metrics Grid */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-700/80">
                {active.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700/80">
              <Link
                to="/contact"
                className="btn-primary w-full justify-center !py-3 !text-xs uppercase tracking-wider"
              >
                Schedule a Facility Audit
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview strip below */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {facilities.map((fac, idx) => (
            <button
              key={fac.id}
              onClick={() => setActiveTab(idx)}
              className={`relative rounded-2xl overflow-hidden aspect-[16/9] border-2 transition-all duration-300 cursor-pointer group ${
                activeTab === idx
                  ? 'border-teal-500 shadow-lg shadow-teal-500/20 scale-[1.02]'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={fac.image} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold text-white drop-shadow truncate pr-2">
                {fac.badge}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
