import { motion } from 'framer-motion';
import { Atom, Microscope, TestTubes, FlaskConical, Lightbulb, Settings } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/animations';

const rdAreas = [
  {
    icon: FlaskConical,
    title: 'Synthetic Chemistry',
    description: 'Expertise in designing efficient synthetic routes for complex pharmaceutical intermediates.',
  },
  {
    icon: TestTubes,
    title: 'New Product Development',
    description: 'Continuous development of new intermediate products to expand our portfolio and meet emerging market needs.',
  },
  {
    icon: Settings,
    title: 'Process Development',
    description: 'Optimization of manufacturing processes for improved yields, reduced costs, and enhanced scalability.',
  },
  {
    icon: Microscope,
    title: 'Analytical Development',
    description: 'Development and validation of analytical methods to ensure product quality and specification compliance.',
  },
  {
    icon: Lightbulb,
    title: 'Process Innovation',
    description: 'Exploring innovative approaches to chemical synthesis for more sustainable and efficient manufacturing.',
  },
  {
    icon: Atom,
    title: 'Scale-Up Studies',
    description: 'Bridging laboratory-scale synthesis to commercial manufacturing with robust scale-up methodologies.',
  },
];

export default function Research() {
  return (
    <PageWrapper
      title="Research & Development"
      description="Quest Pharma's research and development capabilities in pharmaceutical intermediate innovation."
    >
      <PageHero
        label="Research & Development"
        title="Innovation Through Science"
        subtitle="Our R&D efforts focus on synthetic chemistry, process development, and new product innovation."
      />

      {/* R&D Areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="R&D Focus"
            title="Research Areas"
            subtitle="Our research and development team brings together diverse expertise to drive innovation in pharmaceutical intermediate manufacturing."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rdAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="group p-6 rounded-xl border border-navy-100 bg-white hover:border-teal-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-50 to-teal-50 flex items-center justify-center mb-4 group-hover:from-teal-50 group-hover:to-teal-100 transition-all duration-300">
                  <area.icon className="w-5 h-5 text-navy-500 group-hover:text-teal-600 transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{area.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* R&D Approach */}
      <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
        {/* Subtle molecular pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #102a43 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase mb-3">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-5">
                Science-Driven Innovation
              </h2>
              <p className="text-navy-500 leading-relaxed mb-6">
                Our R&D team, with an average experience of 15 years, combines deep expertise in synthetic chemistry, process development, and quality management to deliver innovative pharmaceutical intermediate solutions.
              </p>
              <p className="text-navy-500 leading-relaxed text-sm">
                We focus on developing efficient synthetic routes, optimizing manufacturing processes, and expanding our product portfolio to meet the evolving needs of the pharmaceutical industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
