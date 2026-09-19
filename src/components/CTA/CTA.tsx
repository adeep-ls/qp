import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-teal-50/40">
      {/* Background Soft Aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-gradient-to-r from-teal-200/25 via-cyan-200/20 to-blue-200/20 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Elegant Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-white via-white to-teal-50/50 border border-teal-100/90 shadow-2xl shadow-teal-900/5 p-8 sm:p-14 lg:p-16 text-center overflow-hidden"
        >
          {/* Top subtle glowing accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{
              background: 'linear-gradient(90deg, #0d9488, #14b8a6, #06b6d4, #3b82f6)',
            }}
          />

          {/* Micro-dot precision pattern inside card */}
          <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 pill pill-teal mb-6 text-xs font-bold uppercase tracking-wider shadow-xs relative z-10">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Commercial Partnerships
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5 relative z-10">
            Reliable Supply for APIs
            <br />
            <span className="text-gradient">
              &amp; Bulk Intermediates.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-9 font-normal relative z-10">
            Partner with Quest Pharma for cGMP-compliant chemical synthesis, custom reaction development, and verified bulk intermediate manufacturing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact Us Today
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 hover:text-teal-700 text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Request an Enquiry <ArrowRight className="w-4 h-4 text-teal-600" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
