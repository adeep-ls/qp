import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      className={`max-w-2xl mb-12 lg:mb-16 ${centered ? 'mx-auto text-center' : ''}`}
    >
      {label && (
        <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-teal-300' : 'text-teal-600'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base lg:text-lg leading-relaxed ${light ? 'text-navy-200' : 'text-navy-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
