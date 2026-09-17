import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { company } from '../../data/company';

const highlights = [
  { icon: Target,    label: 'Mission', text: 'High-quality APIs at competitive global cost' },
  { icon: Users,     label: 'Team',    text: '15+ years average cross-domain pharma expertise' },
  { icon: TrendingUp,label: 'Focus',   text: 'Vertically integrated API & bulk intermediates' },
];

export default function AboutPreview() {
  return (
    <section className="py-18 sm:py-20 lg:py-24 section-teal overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Real Facility Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Facility Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 border-4 border-white dark:border-slate-800 aspect-[16/10] group">
              <img
                src="/img1.jpeg"
                alt="Quest Pharma Manufacturing Facility"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Primary Manufacturing Complex
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  Custom-built infrastructure engineered for synthetic API production
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Photo: Night Facility Operations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-4 -right-2 sm:-right-4 w-44 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group"
            >
              <img
                src="/img2.jpeg"
                alt="Round-the-Clock Commercial Manufacturing Facility"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-95" />
              <div className="absolute bottom-2.5 left-2.5 right-2 text-white">
                <span className="text-[9px] font-bold text-teal-300 uppercase tracking-wider block">Round-the-Clock Operations</span>
                <span className="text-[11px] font-semibold text-slate-100 block truncate">Commercial Manufacturing</span>
              </div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-3 border border-slate-100 dark:border-slate-800 hidden sm:flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400 font-black">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-lg font-black text-slate-900 dark:text-white leading-none">15+ Yrs</p>
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">Cross-Domain Expertise</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="pill pill-teal mb-3 inline-flex text-xs py-1 px-3">About Quest Pharma</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-1 mb-4 transition-colors duration-300">
              Excellence in <span className="text-gradient">API &amp; Bulk Chemistry</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{company.overview}</p>

            <div className="grid sm:grid-cols-3 gap-3 mb-7">
              {highlights.map((h) => (
                <div key={h.label} className="p-3.5 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center mb-2 shrink-0">
                    <h.icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{h.label}</p>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-snug">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-flex !py-3 !px-6 !text-sm">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
