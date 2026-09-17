import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Gauge, Building, CheckCircle2, X, Filter, Maximize2 } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
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
    id: 'img1',
    image: '/img1.jpeg',
    title: 'Adeep Life Sciences Facility Entrance',
    category: 'Campus Overview',
    description: 'Main entrance signboard welcoming visitors to our cGMP compliant manufacturing unit in Hyderabad.',
    specs: ['Adeep Life Sciences Pvt. Ltd.', 'Hyderabad, Telangana', 'WHO-GMP Standard'],
  },
  {
    id: 'img2',
    image: '/img2.jpeg',
    title: 'Illuminated Campus Entrance (Night View)',
    category: 'Campus Overview',
    description: 'Nighttime view of our 24/7 active manufacturing facility entrance with LED illumination.',
    specs: ['24 / 7 / 365 Uptime', 'CCTV & Perimeter Safety', 'Continuous Operations'],
  },
  {
    id: 'img3',
    image: '/img3.jpeg',
    title: 'Main Campus Driveway & Security Gate',
    category: 'Infrastructure',
    description: 'Secure gated entry driveway for material transport vehicles and regulatory auditors.',
    specs: ['Gated Security', 'Heavy Transport Access', 'Eco-Friendly Campus'],
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
    id: 'img5',
    image: '/img5.jpeg',
    title: 'Multi-Story Chemical Synthesis Block',
    category: 'Manufacturing Block',
    description: 'Primary multi-level plant building housing bulk drug intermediate and API reaction trains.',
    specs: ['Multi-Story Synthesis Block', 'Classified Clean Ventilation', 'Commercial Scale Production'],
  },
  {
    id: 'img6',
    image: '/img6.jpeg',
    title: 'Raw Material & Finished Goods Warehouse',
    category: 'Logistics & Warehouse',
    description: 'Orderly indoor warehouse with designated drum storage racks, quarantine zones, and pallet racking.',
    specs: ['HDPE & Steel Drum Racks', 'Batch Barcode System', 'Climate Monitored'],
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
    id: 'img8',
    image: '/img8.jpeg',
    title: 'Administrative Block & Quality Assurance HQ',
    category: 'Infrastructure',
    description: 'Administrative building housing plant management, regulatory documentation, and technical offices.',
    specs: ['Plant Executive Suites', 'cGMP Archival Vault', 'Central SCADA Server Room'],
  },
  {
    id: 'img9',
    image: '/img9.jpeg',
    title: 'Reactor Hall & Condenser Loop Area',
    category: 'Reaction Systems',
    description: 'Specialized reaction area containing stainless steel (SS-316) and glass-lined vessels.',
    specs: ['SS-316 & Glass Lined', '-20°C to +250°C Capability', 'Automated Temperature Loops'],
  },
  {
    id: 'img10',
    image: '/img10.jpeg',
    title: 'Analytical Quality Control Testing Laboratory',
    category: 'Quality Control',
    description: 'Instrument laboratory equipped for HPLC chromatography, titration, and raw material qualification.',
    specs: ['HPLC & GC Spectrophotometry', 'USP / EP Test Protocols', '≥ 99.5% Purity Target'],
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

const categories = ['All Photos', 'Campus Overview', 'Infrastructure', 'Manufacturing Block', 'Reaction Systems', 'Quality Control', 'Logistics & Warehouse', 'EHS & Environment'];

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
      <PageHero
        label="World-Class Infrastructure"
        title="Our Manufacturing Facilities & Labs"
        subtitle="Explore all 11 authentic photographs of our chemical synthesis blocks, reactor trains, HPLC testing labs, warehouses, and zero-discharge facilities in Hyderabad."
      />

      {/* Interactive 11-Photo Gallery Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="Authentic Facility Photography"
            title="Real-World Production Infrastructure"
            subtitle="Browse clean high-resolution photographs showcasing our Hyderabad plant campus, warehouses, and laboratories."
          />

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-500/25 scale-[1.03]'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'All Photos' && <Filter className="w-3.5 h-3.5" />}
                {cat}
              </button>
            ))}
          </div>

          {/* Clean Photo Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
