import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { company } from '../../data/company';

const highlights = [
  { icon: Target,    label: 'Mission', text: 'Deliver high-quality APIs at competitive cost' },
  { icon: Users,     label: 'Team',    text: '15+ years average cross-domain expertise' },
  { icon: TrendingUp,label: 'Focus',   text: 'Vertically integrated API & intermediates' },
];

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-36 section-teal overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — Real Facility Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Facility Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 border-4 border-white dark:border-slate-800 aspect-[16/11] group">
              <img
                src="/facility-day.jpg"
                alt="Quest Pharma Advanced Manufacturing Facility"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  Primary Manufacturing Complex
                </div>
                <p className="text-sm font-medium text-slate-200">
                  Custom-built infrastructure engineered for synthetic API production
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Photo: High-Tech Reactor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group"
            >
              <img
                src="/facility-reactor.jpg"
                alt="Stainless Steel Chemical Synthesis Reactor"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-2.5 left-3 text-white">
                <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">GLR &amp; SSR Reactors</span>
                <span className="text-[11px] font-semibold text-slate-100">Precision Chemistry</span>
              </div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-800 hidden sm:flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400 font-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-black text-slate-900 dark:text-white leading-none">15+ Yrs</p>
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1">Cross-Domain Expertise</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="pill pill-teal mb-6 inline-flex">About Quest Pharma</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-4 mb-6 transition-colors duration-300">
              Committed to <span className="text-gradient">Better Healthcare</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{company.overview}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{company.team}</p>

            <div className="space-y-3.5 mb-10">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center shrink-0">
                    <h.icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{h.label}</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-flex">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
