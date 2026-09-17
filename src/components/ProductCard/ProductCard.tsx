import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { useRef } from 'react';
import type { Product } from '../../data/products';

interface Props { product: Product; }

const catStyle: Record<string, { pill: string; iconBg: string; iconColor: string; tag: string }> = {
  'API Intermediates':       { pill: 'bg-teal-100 text-teal-700',   iconBg: 'bg-teal-50',   iconColor: 'text-teal-600',   tag: '#ccfbf1' },
  'Bulk Drug Intermediates': { pill: 'bg-blue-100 text-blue-700',   iconBg: 'bg-blue-50',   iconColor: 'text-blue-600',   tag: '#dbeafe' },
  'Fine Chemicals':          { pill: 'bg-purple-100 text-purple-700', iconBg: 'bg-purple-50', iconColor: 'text-purple-600', tag: '#f3e8ff' },
  'Custom Synthesis':        { pill: 'bg-amber-100 text-amber-700', iconBg: 'bg-amber-50',  iconColor: 'text-amber-600',  tag: '#fef9c3' },
};

export default function ProductCard({ product }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const s = catStyle[product.category] ?? catStyle['API Intermediates'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="card-lift group h-full cursor-pointer"
      >
        {/* Coloured top strip */}
        <div className="h-1.5 w-full rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${s.tag}, transparent)` }} />

        {/* Icon */}
        <div className="p-6">
          <div className={`w-12 h-12 ${s.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <FlaskConical className={`w-6 h-6 ${s.iconColor}`} />
          </div>

          {/* Category pill */}
          <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${s.pill} mb-3`}>
            {product.category}
          </span>

          <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-teal-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-5">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <Link to={`/products/${product.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors">
              View Details <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/contact"
              className="text-[11px] font-semibold text-slate-400 hover:text-teal-600 transition-colors">
              Enquire →
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
