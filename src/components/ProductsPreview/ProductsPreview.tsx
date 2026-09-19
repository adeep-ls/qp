import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, Sparkles } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';

export default function ProductsPreview() {
  const featured = products.slice(0, 6);

  return (
    <section id="products" className="relative py-20 sm:py-24 lg:py-28 bg-slate-50/70 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Subtle scientific grid pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3.5">
              <Pill className="w-3.5 h-3.5" />
              Commercial Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
              Pharmaceutical <span className="text-gradient">Products &amp; Intermediates</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              High-purity Active Pharmaceutical Ingredients and advanced chemical intermediates manufactured under strict cGMP protocols.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-sm transition-all shadow-md"
            >
              View Full Catalog ({products.length} Products) <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
