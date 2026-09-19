import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Gauge, Building, CheckCircle2, X, Filter, Maximize2, Sparkles } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { fadeUp } from '../../utils/animations';

interface PhotoItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
}

const allPhotos: PhotoItem[] = [
  {
    id: 'img10',
    image: '/img10.jpeg',
    title: 'Analytical Quality Control Testing Laboratory',
    category: 'Quality Control',
    description: 'Instrument laboratory equipped for HPLC chromatography, titration, and raw material qualification.',
    specs: ['HPLC & GC Spectrophotometry', 'USP / EP Test Protocols', '≥ 99.5% Purity Target'],
  },
  {
    id: 'img5',
    image: '/img5.jpeg',
    title: 'Multi-Story Chemical Synthesis Block',
    category: 'Manufacturing Block',
    description: 'Primary multi-level plant building housing bulk drug intermediate and API reaction trains.',
    specs: ['Multi-Story Synthesis Block', 'Classified Clean Ventilation', 'Commercial Scale Production'],
  },
  {
    id: 'img7',
    image: '/img7.jpeg',
    title: 'Plant Elevation & Reaction Block Facility View',
    category: 'Manufacturing Block',
    description: 'Exterior structural view of the main production block showing utility pipelines and ventilation exhausts.',
    specs: ['Chilled Water & Steam Lines', 'Scrubber Filtered Exhaust', 'Pharma-Grade Construction'],
  },
  {
    id: 'img9',
    image: '/img9.jpeg',
    title: 'Central Plant Grounds & Utility Infrastructure',
    category: 'Manufacturing Block',
    description: 'Main production facility grounds housing central utilities, power backup, and nitrogen distribution.',
    specs: ['Dedicated Substation', 'Nitrogen Plant & Air Scrubbers', 'WHO-GMP Compliant'],
  },
  {
    id: 'img4',
    image: '/img4.jpeg',
    title: 'Plant Garden Pathway & Greenery Enclosure',
    category: 'EHS & Environment',
    description: 'Paved pedestrian pathway surrounded by green cover, maintaining clean environmental surroundings.',
    specs: ['Green Belt Enclosure', 'Designated Walkways', 'Zero Emission Standards'],
  },
  {
    id: 'img11',
    image: '/img11.jpeg',
    title: 'Zero Discharge Utility & Environmental Systems',
    category: 'EHS & Environment',
    description: 'Water treatment and effluent handling systems engineered for zero liquid discharge (ZLD).',
    specs: ['Zero Liquid Discharge (ZLD)', '100% Water Reused', 'Pollution Board Approved'],
  },
];

const categories = ['All Photos', 'Manufacturing Block', 'Quality Control', 'EHS & Environment'];

export default function Infrastructure() {
  const [selectedCategory, setSelectedCategory] = useState('All Photos');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = selectedCategory === 'All Photos'
    ? allPhotos
    : allPhotos.filter((p) => p.category === selectedCategory);

  return (
    <PageWrapper
      title="Infrastructure"
      description="Explore authentic manufacturing infrastructure and facility photography of Adeep Life Sciences / Quest Pharma in Hyderabad, India."
    >
      {/* Streamlined Hero & Authentic Photo Gallery Section */}
      <section className="relative pt-24 sm:pt-28 pb-16 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[300px] bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-indigo-500/10 blur-[130px] rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="pill pill-teal mb-3 inline-flex text-xs py-1 px-3.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-500 mr-1.5" />
              Verified Plant Photography
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
              Our Manufacturing <span className="text-gradient-vivid">Facilities &amp; Labs</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Authentic high-resolution photographs of our Hyderabad and Bidar plant campus, synthesis blocks, testing laboratories, and warehouses.
            </p>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-500/25 scale-[1.03]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat === 'All Photos' && <Filter className="w-3 h-3" />}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Photo Cards Grid — Visible Immediately Upon Opening! */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card-lift overflow-hidden group cursor-pointer flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl"
                  onClick={() => setActivePhoto(item)}
                >
                  <div>
                    {/* Clean photo without blocking text overlay */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Clean Badge & Fullscreen trigger */}
                      <span className="absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-black/70 text-white shadow-md">
                        #{idx + 1}
                      </span>

                      <button
                        className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-teal-600 transition-colors"
                        title="View Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base font-black text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
                      View High Resolution Photo →
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Infrastructure Engineering Overview */}
      <section className="py-20 lg:py-28 section-teal transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Manufacturing Standards"
            title="Engineered for Chemical Precision"
            subtitle="Every department is configured for safety, cGMP compliance, and high volumetric throughput."
          />

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center mb-5 text-teal-600 dark:text-teal-400">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">API & Intermediate Reaction Bays</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Dedicated reaction lines for commercial bulk synthesis equipped with independent atmospheric air handling units.</p>
            </div>

            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center mb-5 text-teal-600 dark:text-teal-400">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Analytical QC Testing Suites</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">State-of-the-art laboratory housing HPLC, GC-MS, and spectrophotometry for raw material and finished product validation.</p>
            </div>

            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center mb-5 text-teal-600 dark:text-teal-400">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">SCADA Control & EHS Headquarters</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Automated central control room overseeing reactor temperature, pressure interlocks, and Zero Liquid Discharge systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-5xl w-full flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-w-full max-h-[78vh] rounded-2xl object-contain shadow-2xl border border-white/20"
              />
              <div className="mt-4 text-center max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
                  {activePhoto.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">{activePhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{activePhoto.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </PageWrapper>
  );
}
