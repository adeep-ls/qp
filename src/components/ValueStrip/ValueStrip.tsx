import { motion } from 'framer-motion';
import { Shield, Handshake, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Shield, title: 'Quality', color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-teal-950/60', border: 'border-teal-100 dark:border-teal-900/40',
    accent: 'from-teal-500/10 via-transparent',
    desc: 'Stringent standards maintained at every step — from raw material to finished product.',
  },
  {
    icon: Handshake, title: 'Reliability', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/60', border: 'border-blue-100 dark:border-blue-900/40',
    accent: 'from-blue-500/10 via-transparent',
    desc: 'Consistent, on-time supply built on trust, transparency, and long-term partnerships.',
  },
  {
    icon: Lightbulb, title: 'Innovation', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-950/60', border: 'border-purple-100 dark:border-purple-900/40',
    accent: 'from-purple-500/10 via-transparent',
    desc: 'Continuous process development and new product R&D keeps us at the frontier.',
  },
  {
    icon: Award, title: 'Expertise', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/60', border: 'border-amber-100 dark:border-amber-900/40',
    accent: 'from-amber-500/10 via-transparent',
    desc: 'Our team brings 15+ years of cross-domain pharmaceutical industry experience.',
  },
];

export default function ValueStrip() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="pill pill-teal mb-5 inline-flex">Our Core Values</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-4">
            Built on four <span className="text-gradient">core principles</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative p-7 rounded-3xl bg-white dark:bg-slate-900/80 border ${v.border} shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden group cursor-default`}
            >
              {/* Accent glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              <div className={`relative w-12 h-12 ${v.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <v.icon className={`w-5 h-5 ${v.color}`} />
              </div>
              <h3 className="relative text-lg font-black text-slate-900 dark:text-white mb-2">{v.title}</h3>
              <p className="relative text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
