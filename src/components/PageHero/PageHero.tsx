import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Luxurious silk gradient blooms — NO dots, NO harsh grids */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80 dark:opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% -10%, rgba(20, 184, 166, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 85% 10%, rgba(168, 85, 247, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)
          `,
        }}
      />

      {/* Floating ambient glow orbs with gentle breathing physics */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-teal-300 to-cyan-200 dark:from-teal-600 dark:to-cyan-700 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-10 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 dark:from-purple-600 dark:to-pink-700 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {label && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-5 inline-block"
            >
              <span className="pill pill-teal shadow-sm shadow-teal-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                {label}
              </span>
            </motion.div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-5">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Subtle bottom separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 dark:via-slate-800 to-transparent" />
    </section>
  );
}
