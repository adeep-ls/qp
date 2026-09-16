import { motion } from 'framer-motion';
import { PackageCheck, FlaskConical, Factory, ShieldCheck, Package, Truck, CheckCircle2 } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import { fadeUp, staggerContainer } from '../../utils/animations';

const processSteps = [
  { icon: PackageCheck, title: 'Raw Materials', desc: 'Every batch begins with rigorously tested raw materials, sourced from qualified suppliers and validated through incoming quality checks.' },
  { icon: FlaskConical, title: 'In-Process Testing', desc: 'Comprehensive analytical testing at every critical step of the synthesis process ensures intermediate quality.' },
  { icon: Factory, title: 'Manufacturing', desc: 'Production in controlled environments following established SOPs and documented manufacturing protocols.' },
  { icon: ShieldCheck, title: 'Quality Control', desc: 'Multi-stage quality checkpoints with advanced analytical instrumentation verify product specifications.' },
  { icon: Package, title: 'Packaging', desc: 'Secure, compliant packaging designed to preserve product integrity during storage and transport.' },
  { icon: Truck, title: 'Distribution', desc: 'Reliable logistics ensuring timely and safe delivery to customers worldwide.' },
];

const commitments = [
  'Stringent raw material qualification',
  'Documented manufacturing processes',
  'In-process quality checks',
  'Advanced analytical capabilities',
  'Continuous process improvement',
  'Environmental safety compliance',
];

export default function Quality() {
  return (
    <PageWrapper
      title="Quality Assurance"
      description="Quest Pharma's commitment to quality at every stage of pharmaceutical intermediate manufacturing."
    >
      <PageHero
        label="Quality Assurance"
        title="Quality at Every Stage"
        subtitle="Our commitment to quality permeates every aspect of our operations, from raw material sourcing through to final distribution."
      />

      {/* Quality Process Flow */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase mb-3">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
              Quality Workflow
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="flex items-start gap-5 p-6 rounded-xl border border-navy-100 bg-surface hover:border-teal-200 transition-colors duration-300 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white border border-navy-100 group-hover:border-teal-200 flex items-center justify-center transition-colors duration-300">
                    <step.icon className="w-5 h-5 text-navy-500 group-hover:text-teal-600 transition-colors duration-300" />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px h-6 bg-navy-200 mt-2" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-navy-400">STEP {i + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase mb-3">
                Commitments
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-5">
                Our Quality Commitments
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                Quality is integral to everything we do. Our quality management approach encompasses every aspect of our operations.
              </p>

              <ul className="space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-sm text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="p-8 rounded-2xl bg-navy-950 text-white"
            >
              <h3 className="text-lg font-bold mb-4">Certifications & Compliance</h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-6">
                Quest Pharma's certifications and regulatory compliance details will be listed here once verified and confirmed.
              </p>
              <div className="p-4 rounded-lg border border-navy-700/50 bg-navy-900/50 text-center">
                <p className="text-xs text-navy-400">
                  [CERTIFICATION DETAILS TO BE PROVIDED]
                </p>
                <p className="text-[10px] text-navy-500 mt-1">
                  This section will display verified certifications
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
