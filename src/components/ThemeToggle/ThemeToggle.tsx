import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border ${
        isDark
          ? 'bg-slate-900 border-slate-700/80 text-amber-400 hover:border-amber-400/50 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
          : 'bg-white border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-300 shadow-sm'
      }`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-amber-300 fill-amber-300/30" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20" />
        )}
      </motion.div>
    </motion.button>
  );
}
