import { motion } from 'framer-motion';
import { Users, FlaskConical, Factory, ShieldCheck, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { company } from '../../data/company';

const teamDisciplines = [
  {
    icon: FlaskConical,
    title: 'Synthetic & Process Chemistry',
    exp: '15+ Years Avg. Experience',
    desc: 'Specialists in organic synthesis, reaction kinetics, impurity profiling, and catalytic scale-up.',
    points: ['Route scouting', 'Catalytic hydrogenation', 'Impurity synthesis & isolation'],
  },
  {
    icon: Factory,
    title: 'Plant Operations & Engineering',
    exp: 'Commercial Scale',
    desc: 'Expert chemical engineers managing 50,000+ L reactor trains, utilities, and automated solvent recovery.',
    points: ['Glass-lined & SS-316 trains', 'Distributed control systems', 'Zero Liquid Discharge (ZLD)'],
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Regulatory Affairs',
    exp: 'cGMP / WHO-GMP',
    desc: 'Experienced QC/QA professionals driving data integrity, analytical validations, and DMF dossier submissions.',
    points: ['21 CFR Part 11 compliance', 'Method validation (ICH Q2)', 'Type II DMF preparation'],
  },
  {
    icon: Globe2,
    title: 'Supply Chain & Project Delivery',
    exp: '25+ Global Markets',
    desc: 'Coordinating key starting material (KSM) security stock, cold-chain logistics, and on-time global shipments.',
    points: ['3-6 mo buffer stocks', 'Temperature logging', 'UN-certified packaging'],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-20 sm:py-24 lg:py-28 bg-white text-slate-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3.5">
            Leadership &amp; Talent
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our most valuable asset is our outstanding team. Promoted and guided by professionals with extensive academic and industrial tenure across all facets of pharmaceutical manufacturing.
          </p>
        </div>

        {/* Leadership Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-teal-50/70 border border-teal-200/80 mb-12 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-700 block mb-0.5">
                  Executive Management
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Managed by {company.managedBy}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  Backed by seasoned leaders with over 15 years average cross-domain pharmaceutical expertise.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 bg-white px-5 py-3 rounded-2xl border border-teal-200 shadow-2xs">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <div className="text-left">
                <p className="text-sm font-black text-slate-900">15+ Years</p>
                <p className="text-[10px] text-slate-500 font-medium">Average Industry Experience</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Disciplines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamDisciplines.map((d, idx) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-teal-400/60 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block mb-1">
                    {d.exp}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {d.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {d.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-1.5">
                  {d.points.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
