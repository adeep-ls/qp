import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FlaskConical, Package, Microscope, FileText, Mail } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';
import { fadeUp, fadeLeft, fadeRight } from '../../utils/animations';
import { products } from '../../data/products';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <PageWrapper title="Product Not Found">
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-navy-900 mb-3">Product Not Found</h1>
            <p className="text-navy-500 mb-6">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  const details = [
    { icon: Microscope, label: 'Composition', value: product.composition },
    { icon: Package, label: 'Packaging', value: product.packaging },
    { icon: FileText, label: 'Applications', value: product.applications },
  ];

  return (
    <PageWrapper
      title={product.name}
      description={product.description}
    >
      {/* Header */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm text-navy-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-teal-600/20 text-teal-300 rounded-md border border-teal-500/30 mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {product.name}
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left — Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-50 to-surface border border-navy-100 flex items-center justify-center sticky top-28">
                <FlaskConical className="w-20 h-20 text-navy-200" />
                <p className="absolute bottom-4 text-[10px] text-navy-400 font-medium">
                  [Product image placeholder]
                </p>
              </div>
            </motion.div>

            {/* Right — Details */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3"
            >
              <h2 className="text-xl font-bold text-navy-900 mb-3">Product Description</h2>
              <p className="text-navy-600 leading-relaxed mb-8">{product.description}</p>

              <div className="space-y-6 mb-10">
                {details.map((detail) => (
                  <div key={detail.label} className="p-5 rounded-xl border border-navy-100 bg-surface">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-navy-100 flex items-center justify-center shrink-0">
                        <detail.icon className="w-4 h-4 text-navy-500" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-1">
                          {detail.label}
                        </h3>
                        <p className="text-sm text-navy-600 leading-relaxed">{detail.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-900 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Request Enquiry
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-navy-200 text-navy-700 text-sm font-semibold rounded-lg hover:bg-navy-50 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
