import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';

export default function ProductsPreview() {
  const featured = products.slice(0, 6);
  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="pill pill-teal mb-5 inline-flex">Product Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-4">
              Pharmaceutical <span className="text-gradient">Intermediates</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/products" className="btn-dark inline-flex">
              View All {products.length} Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
