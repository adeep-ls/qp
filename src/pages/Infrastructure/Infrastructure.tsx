import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Factory,
  Gauge,
  Building,
  CheckCircle2,
  X,
  Filter,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Atom,
  Thermometer,
  Layers,
  ArrowRight,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';

interface PhotoItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
}

const infraMetrics = [
  { value: '50,000+ L', label: 'Total Reaction Volume', icon: Atom },
  { value: 'Multi-Level', label: 'Reaction Synthesis Blocks', icon: Factory },
  { value: '100% ZLD', label: 'Zero Liquid Discharge Water Recycling', icon: Layers },
  { value: 'WHO-GMP', label: 'Facility Design Standard', icon: ShieldCheck },
];

const allPhotos: PhotoItem[] = [
  {
    id: 'img10',
    image: '/img10.jpeg',
    title: 'Analytical Quality Control Testing Laboratory',
    category: 'Quality Control',
    description:
      'High-resolution instrument laboratory equipped for Waters/Shimadzu HPLC chromatography, Agilent GC Headspace, titrations, and incoming raw material release.',
    specs: ['HPLC & GC Spectrophotometry', 'USP / EP Test Protocols', '≥ 99.5% Purity Target'],
  },
  {
    id: 'img5',
    image: '/img5.jpeg',
    title: 'Multi-Story Chemical Synthesis Block',
    category: 'Manufacturing Block',
    description:
      'Primary multi-level production building housing bulk drug intermediate and commercial API reaction trains with dedicated utility pipe bridges.',
    specs: ['Multi-Story Synthesis Block', 'Classified Clean Ventilation', 'Commercial Scale Production'],
  },
  {
    id: 'img7',
    image: '/img7.jpeg',
    title: 'Plant Elevation & Reaction Block Facility View',
    category: 'Manufacturing Block',
    description:
      'Exterior structural view of the main production block showing utility pipelines, safety manifolds, and scrubber-filtered ventilation exhausts.',
    specs: ['Chilled Water & Steam Lines', 'Scrubber Filtered Exhaust', 'Pharma-Grade Construction'],
  },
  {
    id: 'img9',
    image: '/img9.jpeg',
    title: 'Central Plant Grounds & Utility Infrastructure',
    category: 'Manufacturing Block',
    description:
      'Main production facility campus housing central utilities, power sub-station, captive backup power, and centralized nitrogen generation.',
    specs: ['Dedicated Substation', 'Nitrogen Plant & Air Scrubbers', 'WHO-GMP Compliant'],
  },
  {
    id: 'img4',
    image: '/img4.jpeg',
    title: 'Plant Garden Pathway & Greenery Enclosure',
    category: 'EHS & Environment',
    description:
      'Paved pedestrian pathway surrounded by green cover, maintaining clean environmental surroundings and environmental hygiene across the facility perimeter.',
    specs: ['Green Belt Enclosure', 'Designated Walkways', 'Zero Emission Standards'],
  },
  {
    id: 'img11',
    image: '/img11.jpeg',
    title: 'Zero Discharge Utility & Environmental Systems',
    category: 'EHS & Environment',
    description:
      'Multi-effect evaporators (MEE) and reverse osmosis treatment systems engineered for 100% zero liquid discharge and closed-loop process water recycling.',
    specs: ['Zero Liquid Discharge (ZLD)', '100% Water Reused', 'Pollution Board Approved'],
  },
];

const utilities = [
  {
    icon: Zap,
    title: 'Dedicated Electrical Substation',
    desc: 'Heavy-duty power infrastructure backed by automated DG generation guaranteeing uninterrupted synthetic cycles and thermal control.',
  },
  {
    icon: Factory,
    title: 'On-Site Nitrogen Generation Plant',
    desc: 'High-purity nitrogen piped throughout reaction trains for inert purging, reactor blanketing, and moisture-free packaging.',
  },
  {
    icon: Layers,
    title: 'Multi-Effect Evaporators (MEE)',
    desc: 'Advanced wastewater concentration and closed-loop condensate recovery delivering certified 100% Zero Liquid Discharge.',
  },
  {
    icon: ShieldCheck,
    title: 'Alkaline & Acidic Exhaust Scrubbers',
    desc: 'Multi-stage wet gas scrubbers continuously neutralizing chemical fumes and maintaining clean atmospheric environmental standards.',
  },
];

const categories = ['All Photos', 'Manufacturing Block', 'Quality Control', 'EHS & Environment'];

export default function Infrastructure() {
  const [selectedCategory, setSelectedCategory] = useState('All Photos');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos =
    selectedCategory === 'All Photos'
      ? allPhotos
      : allPhotos.filter((p) => p.category === selectedCategory);

  return (
    <PageWrapper
      title="Infrastructure & Manufacturing Plant"
      description="Explore authentic manufacturing infrastructure and verified plant photography of Quest Pharma in Hyderabad, India."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% -10%, rgba(20, 184, 166, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(6, 182, 212, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)
            `,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                <span>Verified Physical Plant • Hyderabad, India</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                World-Class{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Plant Infrastructure
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                Explore our purpose-built chemical manufacturing campus featuring multi-story reaction blocks, dedicated utility bridges, cleanroom isolation suites, and certified Zero Liquid Discharge environmental engineering.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Building className="w-3.5 h-3.5 text-teal-600" />
                  WHO-GMP Designed Plant
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Atom className="w-3.5 h-3.5 text-teal-600" />
                  Glass-Lined &amp; SS-316 Fleet
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  100% ZLD Water Treatment
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>View Verified Plant Photos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Schedule Site Audit</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Side: Ultra-Modern Multi-Layer Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src="/facility-reactor.png"
                  alt="Quest Pharma chemical manufacturing plant elevation"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Industrial Campus Facility</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-extrabold shadow-sm">
                    Hyderabad
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                        <Factory className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                          Central Utilities
                        </div>
                        <div className="text-sm font-black text-white">
                          Automated DCS &amp; Scrubbers
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold shrink-0">
                      100% ZLD
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Glass Chip */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl z-20">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    Audited Production Blocks
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Open for Client Inspections
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Subtle Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ─── 2. Key Metrics Bar ─── */}
      <section className="relative py-8 bg-slate-50/70 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {infraMetrics.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-black text-slate-900 leading-tight truncate">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. Authentic Photo Gallery ─── */}
      <section id="gallery" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Pills */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-1">
                Visual Inspection
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Authentic Facility Photography
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count =
                  cat === 'All Photos'
                    ? allPhotos.length
                    : allPhotos.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                onClick={() => setActivePhoto(photo)}
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold">
                      {photo.category}
                    </span>

                    <button
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Expand image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {photo.description}
                    </p>

                    <div className="space-y-1 pt-3 border-t border-slate-100">
                      {photo.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1">
                  <span className="text-[11px] font-bold text-teal-600 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Click to view full photo</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. Central Utilities & Environmental Systems ─── */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Continuous Operation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Central Utilities &amp; Environmental Safety
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Industrial chemical synthesis requires relentless utility reliability and strict environmental protection. Our site integrates autonomous nitrogen generation, multi-stage exhaust scrubbers, and zero liquid discharge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {utilities.map((util) => {
              const Icon = util.icon;
              return (
                <div
                  key={util.title}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {util.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {util.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Lightbox Modal ─── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full max-h-[60vh] object-cover"
              />

              <div className="p-6 bg-slate-900 text-white">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
                  {activePhoto.category}
                </span>
                <h3 className="text-xl font-black mb-2">{activePhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {activePhoto.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activePhoto.specs.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-semibold border border-white/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── 5. Global CTA ─── */}
      <CTA />
    </PageWrapper>
  );
}
