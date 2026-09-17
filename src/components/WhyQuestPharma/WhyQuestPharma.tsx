import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Beaker, Globe, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Vertically Integrated',
    desc: 'Full in-house control of API and Bulk Drug Intermediate manufacturing.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
    shadow: 'hover:shadow-teal-500/20',
    accent: '#14b8a6',
    floatDuration: 4.2,
  },
  {
    icon: Users,
    title: '15+ Years Expertise',
    desc: 'Average team experience across chemistry, regulatory, and project management.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
    shadow: 'hover:shadow-blue-500/20',
    accent: '#3b82f6',
    floatDuration: 4.8,
  },
  {
    icon: Beaker,
    title: 'Science-First R&D',
    desc: 'Continuous innovation through new product development and process optimisation.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100 hover:border-purple-300',
    shadow: 'hover:shadow-purple-500/20',
    accent: '#a855f7',
    floatDuration: 4.5,
  },
  {
    icon: Globe,
    title: 'Cost Leadership',
    desc: 'Competitive pricing through efficient operations without quality compromise.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
    shadow: 'hover:shadow-amber-500/20',
    accent: '#f59e0b',
    floatDuration: 5.1,
  },
];

const checklist = [
  'Synthetic chemistry expertise',
  'New product development',
  'Regulatory & IP management',
  'Environmental safety compliance',
  'Strategic planning & project mgmt',
  'Talent & finance management',
];

export default function WhyQuestPharma() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden">
      {/* Subtle colorful ambient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-teal-100/30 via-purple-100/30 to-blue-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 pill pill-teal mb-4 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            Our Core Strengths
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-1 mb-3">
            Why Choose <span className="text-gradient-vivid">Quest Pharma</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Delivering chemical excellence through vertical integration, deep industry talent, and uncompromised quality.
          </p>
        </motion.div>

        {/* Feature Cards Row with Organic Floating Motion */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative"
            >
              {/* Continuous subtle floating animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: c.floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                className={`p-6 sm:p-7 rounded-3xl bg-white border ${c.border} shadow-sm hover:shadow-2xl ${c.shadow} transition-all duration-300 group cursor-pointer flex flex-col h-full relative overflow-hidden`}
              >
                {/* Top accent glowing bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${c.accent}, transparent)`,
                  }}
                />

                {/* Animated Squircle Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.25 }}
                  className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center mb-5 shadow-xs group-hover:shadow-md transition-shadow`}
                  style={{ border: `2px solid ${c.accent}30` }}
                >
                  <c.icon className={`w-6 h-6 ${c.color}`} />
                </motion.div>

                {/* Title */}
                <h3 className="font-black text-slate-900 text-base mb-2 group-hover:text-slate-950 transition-colors">
                  {c.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Checklist Full-Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-br from-teal-50/90 via-sky-50/70 to-blue-50/90 border border-teal-100/80 p-6 sm:p-8 lg:p-12 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
            <div className="lg:w-80 shrink-0">
              <span className="text-[11px] font-black uppercase tracking-wider text-teal-600 mb-2 block">
                Integrated Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 leading-tight">
                Multi-Disciplinary Excellence
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Our team spans every critical pharmaceutical function for end-to-end operational capability.
              </p>
              <Link
                to="/about"
                className="btn-primary inline-flex !py-2.5 !px-5 !text-[13px] group shadow-md shadow-teal-500/20 hover:scale-105 transition-all"
              >
                Learn More About Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Interactive Animated Checklist Grid */}
            <div className="grid sm:grid-cols-2 gap-3 flex-1">
              {checklist.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex items-center gap-3 bg-white/95 rounded-2xl px-4 py-3 shadow-xs border border-white hover:border-teal-200 hover:shadow-md transition-all duration-200 cursor-default group"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
