import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'R&D', path: '/research' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 50;
  const isHome = location.pathname === '/';
  const solid = isScrolled || !isHome;

  useEffect(() => { setMobileOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          solid
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[70px] items-center justify-between">

            {/* Logo */}
            <Link to="/" aria-label="Quest Pharma Home" className="shrink-0 flex items-center">
              <div className="p-1 rounded-xl transition-all">
                <img src="/logo.png" alt="Quest Pharma" className="h-9 lg:h-10 w-auto object-contain" />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link key={link.path} to={link.path}
                    className={`relative px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200
                      ${active
                        ? 'text-teal-600'
                        : solid
                          ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {link.name}
                    {active && (
                      <motion.div layoutId="nav-indicator"
                        className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link to="/contact"
                className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-[13px]"
              >
                Request an Enquiry <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[88vw] bg-white shadow-2xl border-l border-slate-100 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                  <div className="p-1 rounded-lg">
                    <img src="/logo.png" alt="Quest Pharma" className="h-8 w-auto object-contain" />
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Links */}
                <nav className="px-4 py-4 space-y-1">
                  {navLinks.map((link, i) => {
                    const active = location.pathname === link.path;
                    return (
                      <motion.div key={link.path}
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                      >
                        <Link to={link.path} onClick={() => setMobileOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all
                            ${active
                              ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400'
                              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                          {link.name}
                          <ChevronRight className={`w-4 h-4 ${active ? 'text-teal-500' : 'text-slate-300 dark:text-slate-600'}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer CTA */}
              <div className="p-5 border-t border-slate-100 dark:border-slate-800">
                <Link to="/contact" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 btn-primary w-full">
                  Request an Enquiry
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
