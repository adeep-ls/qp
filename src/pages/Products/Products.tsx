import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import ProductCard from '../../components/ProductCard/ProductCard';
import CTA from '../../components/CTA/CTA';
import { staggerContainer } from '../../utils/animations';
import { products, categories } from '../../data/products';

export default function Products() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const uniqueCategories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return cats;
  }, []);

  return (
    <PageWrapper
      title="Products"
      description="Explore Quest Pharma's range of API intermediates and bulk drug intermediates."
    >
      <PageHero
        label="Our Products"
        title="Pharmaceutical Intermediates"
        subtitle="We manufacture a comprehensive range of API intermediates and bulk drug intermediates for the global pharmaceutical industry."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="mb-10 space-y-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-10 py-3 text-sm bg-surface border border-navy-200 rounded-lg focus:border-teal-400 focus:ring-1 focus:ring-teal-100 placeholder:text-navy-300 text-navy-900 transition-colors"
                aria-label="Search products"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-200
                  ${activeCategory === 'all'
                    ? 'bg-navy-900 text-white border-navy-900'
                    : 'bg-white text-navy-600 border-navy-200 hover:border-navy-300'
                  }
                `}
              >
                All Products ({products.length})
              </button>
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-200
                    ${activeCategory === cat
                      ? 'bg-navy-900 text-white border-navy-900'
                      : 'bg-white text-navy-600 border-navy-200 hover:border-navy-300'
                    }
                  `}
                >
                  {cat} ({products.filter((p) => p.category === cat).length})
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-xs text-navy-500 mb-6">
            Showing {filtered.length} of {products.length} products
          </p>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${search}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-500 text-sm">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-sm font-semibold text-teal-700 hover:text-teal-600 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
