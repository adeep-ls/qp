import { motion } from 'framer-motion';
import { PackageCheck, FlaskConical, Factory, ShieldCheck, Package, Truck } from 'lucide-react';

const steps = [
  { icon: PackageCheck, title: 'Raw Materials', desc: 'Qualified & tested inputs',  color: 'text-teal-600',   bg: 'bg-teal-50',   border: 'border-teal-100',   accent: '#14b8a6' },
  { icon: FlaskConical, title: 'In-Process',    desc: 'Analytical checkpoints',     color: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-100',   accent: '#3b82f6' },
  { icon: Factory,      title: 'Manufacturing', desc: 'SOP-driven production',      color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', accent: '#a855f7' },
  { icon: ShieldCheck,  title: 'QC Lab',        desc: 'Rigorous testing & specs',   color: 'text-rose-600',   bg: 'bg-rose-50',   border: 'border-rose-100',   accent: '#f43f5e' },
  { icon: Package,      title: 'Packaging',     desc: 'Secure & compliant packing', color: 'text-amber-600',  bg: 'bg-amber-50',  border: 'border-amber-100',  accent: '#f59e0b' },
  { icon: Truck,        title: 'Distribution',  desc: 'Reliable global delivery',   color: 'text-green-600',  bg: 'bg-green-50',  border: 'border-green-100',  accent: '#22c55e' },
];

export default function QualityProcess() {
  return (
    <section className="py-24 lg:py-36 section-purple overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill pill-teal mb-5 inline-flex">Quality Assurance</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-4 mb-4">
            Quality at <span className="text-gradient-vivid">every stage</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Six rigorous checkpoints ensure the integrity of every batch we produce.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-0.5 bg-slate-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-left"
              style={{ background: 'linear-gradient(90deg, #14b8a6, #a855f7, #f43f5e, #f59e0b, #22c55e)' }}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ duration: 0.25 }}
                  className={`w-[72px] h-[72px] ${step.bg} border-2 ${step.border} rounded-3xl flex items-center justify-center mb-4 shadow-sm bg-white`}
                >
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </motion.div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xs font-black text-slate-800 mb-1">{step.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
