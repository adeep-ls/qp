import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, FlaskConical, Atom, Pill, ShieldCheck, Tag } from 'lucide-react';
import { useRef } from 'react';
import type { Product } from '../../data/products';

interface Props {
  product: Product;
}

const catStyle: Record<string, { pill: string; iconBg: string; iconColor: string; tag: string }> = {
  'Commercial APIs': {
    pill: 'bg-emerald-100 text-emerald-800 border border-emerald-200/60',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    tag: '#a7f3d0',
  },
  'Oncology APIs': {
    pill: 'bg-purple-100 text-purple-800 border border-purple-200/60',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    tag: '#e9d5ff',
  },
  'API Intermediates': {
    pill: 'bg-teal-100 text-teal-800 border border-teal-200/60',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    tag: '#ccfbf1',
  },
  'Speciality Chemicals': {
    pill: 'bg-amber-100 text-amber-800 border border-amber-200/60',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    tag: '#fef3c7',
  },
};

export default function ProductCard({ product }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const s = catStyle[product.category] ?? catStyle['API Intermediates'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4 }}
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
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="card-lift group h-full cursor-pointer rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between overflow-hidden"
      >
        {/* Top colored strip */}
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${s.tag}, transparent)` }} />

        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            {/* Header: Icon & Category */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div
                className={`w-9 h-9 ${s.iconBg} rounded-xl flex items-center justify-center transition-transform group-hover:scale-105`}
              >
                {product.category === 'Oncology APIs' ? (
                  <Atom className={`w-4 h-4 ${s.iconColor}`} />
                ) : product.category === 'Commercial APIs' ? (
                  <Pill className={`w-4 h-4 ${s.iconColor}`} />
                ) : (
                  <FlaskConical className={`w-4 h-4 ${s.iconColor}`} />
                )}
              </div>

              <span className={`inline-block text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${s.pill}`}>
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-teal-700 transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Target API / Grade / CAS badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {product.cas && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  CAS: {product.cas}
                </span>
              )}
              {product.targetApi && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200/60">
                  For: {product.targetApi}
                </span>
              )}
              {product.grade && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200/60">
                  {product.grade}
                </span>
              )}
              {product.therapeuticArea && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  {product.therapeuticArea}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 font-normal">
              {product.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center gap-1 font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span>Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="text-[11px] font-semibold text-slate-400 hover:text-teal-600 transition-colors"
            >
              Inquire CoA →
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
