import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Gauge, Building, Sun, Moon, CheckCircle2, X } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/animations';

const realGalleries = [
  {
    image: '/facility-day.jpg',
    title: 'Manufacturing Complex & Synthesis Plant',
    tag: 'Primary Infrastructure',
    icon: Sun,
    description: 'Multi-level cGMP compliant facility housing reactor bays, condensation loops, and utilities in Hyderabad, India.',
    specs: ['Commercial Batch Scale', 'SCADA Monitored', 'Class 100,000 Clean Areas'],
  },
  {
    image: '/facility-night.jpg',
    title: 'Round-the-Clock Continuous Operations',
    tag: '24/7 Manufacturing',
    icon: Moon,
    description: 'Designed for uninterrupted synthetic production with redundant power, continuous vapor recovery, and strict shift oversight.',
    specs: ['Continuous Production', 'Zero Downtime Architecture', 'Robust Environmental Safety'],
  },
  {
    image: '/facility-reactor.jpg',
    title: 'GLR & SSR Reaction Trains',
    tag: 'Advanced Chemical Engineering',
    icon: Gauge,
    description: 'High-vacuum, multi-temperature Stainless Steel (SS-316) and Glass-Lined Reactors engineered for complex multistep syntheses.',
    specs: ['Stainless Steel 316 & Glass Lined', 'Cryogenic to High-Temp Capability', 'Integrated Distillation Columns'],
  },
];

const units = [
  {
    icon: Factory,
    title: 'API & Intermediate Manufacturing Bays',
    description: 'Dedicated reaction lines for large-scale pharmaceutical synthesis with isolated air-handling units.',
  },
  {
    icon: Gauge,
    title: 'Analytical & Quality Control Suites',
    description: 'Modern testing suites equipped for chromatographic purity, spectrophotometry, and raw material qualification.',
  },
  {
    icon: Building,
    title: 'Administrative & Regulatory Headquarters',
    description: 'Corporate management, IP documentation, and customer engagement office located in Hyderabad.',
  },
];

export default function Infrastructure() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <PageWrapper
      title="Infrastructure"
      description="Quest Pharma's world-class manufacturing infrastructure and facilities in Hyderabad, India."
    >
      <PageHero
        label="Infrastructure"
        title="Our Manufacturing Facilities"
        subtitle="State-of-the-art synthetic chemistry infrastructure, custom-engineered for pharmaceutical intermediate and API manufacturing."
      />

      {/* Real Photography Feature Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Facility Photography"
            title="Real-World Production Infrastructure"
            subtitle="Authentic photos from our manufacturing site in Hyderabad, showcasing our plant scale and reactor capabilities."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {realGalleries.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-lift overflow-hidden group cursor-pointer flex flex-col justify-between"
                onClick={() => setActivePhoto(item.image)}
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-500 text-white uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-black text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {item.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 group-hover:underline">
                    Click to view full image →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Units Overview */}
      <section className="py-20 lg:py-28 section-teal transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Capabilities"
            title="Engineered for Precision"
            subtitle="Every department is configured for safety, compliance, and reproducible high yields."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mt-12"
          >
            {units.map((unit) => (
              <motion.div
                key={unit.title}
                variants={fadeUp}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center mb-5 text-teal-600 dark:text-teal-400">
                  <unit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{unit.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{unit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activePhoto}
              alt="Quest Pharma Facility Enclosure"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </PageWrapper>
  );
}
