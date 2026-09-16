import { motion } from 'framer-motion';
import { Factory, Beaker, Package, Warehouse, Truck, Settings } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { company } from '../../data/company';

const capabilities = [
  {
    icon: Beaker,
    title: 'API Intermediates Manufacturing',
    description: 'Vertically integrated manufacturing of Active Pharmaceutical Ingredient intermediates with robust quality systems.',
  },
  {
    icon: Factory,
    title: 'Bulk Drug Intermediates',
    description: 'Production of bulk drug intermediate compounds under stringent quality standards for the pharmaceutical industry.',
  },
  {
    icon: Settings,
    title: 'Process Development',
    description: 'Optimization of chemical synthesis processes for improved efficiency, scalability, and cost-effectiveness.',
  },
  {
    icon: Beaker,
    title: 'Custom Synthesis',
    description: 'Tailored synthesis solutions designed to meet specific client requirements and formulation needs.',
  },
  {
    icon: Package,
    title: 'Fine Chemicals',
    description: 'Specialized fine chemicals production for pharmaceutical and chemical industry applications.',
  },
  {
    icon: Warehouse,
    title: 'Storage & Distribution',
    description: 'Secure storage facilities and reliable distribution channels ensuring product integrity and timely delivery.',
  },
];

export default function Manufacturing() {
  return (
    <PageWrapper
      title="Manufacturing & Capabilities"
      description="Quest Pharma's manufacturing capabilities in API intermediates and bulk drug production."
    >
      <PageHero
        label="Manufacturing & Capabilities"
        title="Our Capabilities"
        subtitle="Vertically integrated manufacturing operations delivering high-quality pharmaceutical intermediates and APIs."
      />

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Manufacturing Capabilities"
            subtitle="Our capabilities span the full spectrum of pharmaceutical intermediate and API manufacturing."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="group p-6 rounded-xl border border-navy-100 bg-white hover:border-teal-200 hover:bg-teal-50/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-teal-100 flex items-center justify-center mb-4 transition-colors duration-300">
                  <cap.icon className="w-5 h-5 text-navy-500 group-hover:text-teal-600 transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Expertise */}
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
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-5">
                Expert Team Driving Results
              </h2>
              <p className="text-navy-600 leading-relaxed mb-5">
                {company.team}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                <div className="text-center">
                  <Factory className="w-16 h-16 text-navy-300 mx-auto mb-3" />
                  <p className="text-xs text-navy-400">[Manufacturing facility image placeholder]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
