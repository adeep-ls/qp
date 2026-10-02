import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  Atom,
  ArrowRight,
  Filter,
  FileCheck,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import ProductCard from '../../components/ProductCard/ProductCard';
import CTA from '../../components/CTA/CTA';
import { products } from '../../data/products';

const productMetrics = [
  { value: '150+', label: 'Commercial APIs & Intermediates', icon: FlaskConical },
  { value: '≥ 99.5%', label: 'Standard Chromatographic Purity', icon: Sparkles },
  { value: '100%', label: 'Batch Release with Full CoA', icon: FileCheck },
  { value: 'cGMP / ZLD', label: 'Manufacturing Compliance', icon: ShieldCheck },
];

export default function Products() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return products.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.applications.toLowerCase().includes(q) ||
        (p.cas && p.cas.toLowerCase().includes(q)) ||
        (p.targetApi && p.targetApi.toLowerCase().includes(q)) ||
        (p.grade && p.grade.toLowerCase().includes(q)) ||
        (p.therapeuticArea && p.therapeuticArea.toLowerCase().includes(q));
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  return (
    <PageWrapper
      title="Products & Commercial Portfolio"
      description="Explore Quest Pharma's comprehensive portfolio of high-purity API intermediates and bulk drug intermediates."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% -10%, rgba(20, 184, 166, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(59, 130, 246, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(6, 182, 212, 0.06) 0%, transparent 60%)
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
                <span>Commercial Molecule Portfolio • GMP Certified</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                High-Purity{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  APIs &amp; Intermediates
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                Advanced commercial-scale synthesis of Active Pharmaceutical Ingredients and specialized bulk drug building blocks. Produced under validated cGMP protocols with certified chromatographic purity and complete regulatory tech packs.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  Pharmacopeial Specs (USP / EP / IP)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Atom className="w-3.5 h-3.5 text-teal-600" />
                  Non-Infringing FTO Routes
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                  100% Audit-Ready CoAs
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Browse Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Request Custom CoA / Quote</span>
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
                  src="/card-api.jpg"
                  alt="Quest Pharma API and chemical intermediate molecules"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Commercial Scale Availability</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-extrabold shadow-sm">
                    {products.length}+ APIs
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                        <FlaskConical className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                          Standard Quality Target
                        </div>
                        <div className="text-sm font-black text-white">
                          ≥ 99.5% Assay Purity
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold shrink-0">
                      HPLC Verified
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
                    Full Regulatory Dossiers
                  </div>
                  <div className="text-[10px] text-slate-500">
                    DMF &amp; Tech Pack Ready
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
            {productMetrics.map((stat) => {
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

      {/* ─── 3. Interactive Catalog, Search & Filters ─── */}
      <section id="catalog" className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header & Search Bar Container */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-[11px] font-bold text-teal-700 tracking-wider uppercase mb-1">
                Product Database
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Explore Available Compounds
              </h2>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by API name, CAS, category..."
                className="w-full pl-9 pr-9 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all text-slate-900 placeholder:text-slate-400"
                aria-label="Search products"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              All Molecules ({products.length})
            </button>
            {uniqueCategories.map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
            <span>
              Showing <strong className="text-slate-900">{filtered.length}</strong> of{' '}
              <strong className="text-slate-900">{products.length}</strong> products
            </span>
            {(search || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
                className="text-teal-600 hover:text-teal-700 font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
              <FlaskConical className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">
                No products match your search criteria
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                We synthesize molecules on demand. Contact our chemical synthesis team for target molecule feasibility and route scouting.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 rounded-full bg-teal-600 text-white text-xs font-bold shadow-xs hover:bg-teal-500 transition-colors"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          )}

          {/* Custom Synthesis Banner Callout */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                Contract Synthesis &amp; R&amp;D
              </span>
              <h3 className="text-lg sm:text-xl font-black mb-1.5">
                Don't See Your Specific Intermediate or API?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We develop custom synthetic routes, optimize impurity profiles, and scale from gram samples to multi-ton commercial campaigns under mutual NDA.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-black text-xs tracking-wide shadow-md shadow-teal-500/30 shrink-0 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Submit Custom Molecule Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── 4. Global CTA ─── */}
      <CTA />
    </PageWrapper>
  );
}
