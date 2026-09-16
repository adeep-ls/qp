import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Beaker, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const cards = [
  { icon: TrendingUp, title: 'Vertically Integrated', desc: 'Full in-house control of API and Bulk Drug Intermediate manufacturing.', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100' },
  { icon: Users,      title: '15+ Years Expertise',   desc: 'Average team experience across chemistry, regulatory, and project management.', color: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-100' },
  { icon: Beaker,     title: 'Science-First R&D',     desc: 'Continuous innovation through new product development and process optimisation.', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
  { icon: Globe,      title: 'Cost Leadership',       desc: 'Competitive pricing through efficient operations without quality compromise.', color: 'text-amber-600',  bg: 'bg-amber-50',  border: 'border-amber-100' },
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
    <section className="py-24 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="pill pill-teal mb-5 inline-flex">Our Strengths</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-4">
            Why choose <span className="text-gradient">Quest Pharma</span>
          </h2>
        </motion.div>

        {/* Feature cards row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className={`p-7 rounded-3xl bg-white border ${c.border} shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-default`}
            >
              <div className={`w-11 h-11 ${c.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <c.icon className={`w-5 h-5 ${c.color}`} />
              </div>
              <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Checklist full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div className="lg:w-72 shrink-0">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Multi-Disciplinary Excellence</h3>
              <p className="text-sm text-slate-500 mb-6">Our team spans every critical function for end-to-end capability.</p>
              <Link to="/about" className="btn-primary inline-flex !py-2.5 !px-5 !text-[13px]">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 flex-1">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-white">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
