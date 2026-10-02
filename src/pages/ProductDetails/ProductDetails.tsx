import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FlaskConical, Package, Microscope, FileText, Mail, Hash, Pill, ShieldCheck, Activity } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import { fadeLeft, fadeRight } from '../../utils/animations';
import { products } from '../../data/products';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <PageWrapper title="Product Not Found">
        <div className="min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-slate-950">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Product Not Found</h1>
            <p className="text-slate-500 mb-6">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
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
    ...(product.cas ? [{ icon: Hash, label: 'CAS Registry Number', value: product.cas }] : []),
    ...(product.targetApi ? [{ icon: Pill, label: 'Target API (For)', value: product.targetApi }] : []),
    ...(product.grade ? [{ icon: ShieldCheck, label: 'Pharmacopeial Grade', value: product.grade }] : []),
    ...(product.therapeuticArea ? [{ icon: Activity, label: 'Therapeutic Area / Indication', value: product.therapeuticArea }] : []),
    { icon: Microscope, label: 'Composition & Chemistry', value: product.composition },
    { icon: Package, label: 'Packaging Standards', value: product.packaging },
    { icon: FileText, label: 'Applications & Synonyms', value: product.applications },
  ];

  return (
    <PageWrapper
      title={`${product.name} - Product Details`}
      description={product.description}
    >
      <PageHero
        label={product.category}
        title={product.name}
        subtitle={product.description}
      />

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left — Visual chemistry icon card */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center sticky top-28 p-8 shadow-sm text-center">
                <div className="w-24 h-24 rounded-3xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4 shadow-inner">
                  <FlaskConical className="w-12 h-12" />
                </div>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-200/50 mb-3">{product.category}</span>
                <span className="text-lg font-black text-slate-900 dark:text-white mt-1 text-center">{product.name}</span>
                {product.cas && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                    <Hash className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    CAS: {product.cas}
                  </div>
                )}
                {product.targetApi && (
                  <div className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    Target API: <span className="font-semibold text-slate-700 dark:text-slate-200">{product.targetApi}</span>
                  </div>
                )}
                {product.grade && (
                  <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[11px] font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/40">
                    Grade: {product.grade}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right — Technical Specifications */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                Product Specifications
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="space-y-4 mb-10">
                {details.map((detail) => (
                  <div key={detail.label} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                        <detail.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          {detail.label}
                        </h3>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Request Commercial Enquiry
                </Link>
                <Link
                  to="/products"
                  className="btn-dark inline-flex justify-center"
                >
                  Browse Catalog
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
