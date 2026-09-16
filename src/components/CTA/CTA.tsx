import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 30%, #0891b2 60%, #7c3aed 100%)',
        }}
      />
      {/* Soft luminous blooms */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/15 blur-3xl float-a pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-teal-300/20 blur-3xl float-b pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pill pill-ghost mb-8 inline-flex">Partner With Us</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6 mt-4">
            Let's Build Better
            <br />
            Healthcare Together.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Partner with Quest Pharma for your pharmaceutical intermediate and API requirements. Our expert team is ready to support your manufacturing needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-teal-700 text-sm font-black rounded-full hover:bg-white/90 hover:scale-[1.03] transition-all duration-200 shadow-xl">
              <Mail className="w-4 h-4" />
              Contact Us Today
            </Link>
            <Link to="/contact" className="btn-outline">
              Request an Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
