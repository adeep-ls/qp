import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
];

const companyLinks = [
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Research & Development', path: '/research' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200" role="contentinfo">
      {/* Top gradient border line */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #0d9488, #14b8a6, #06b6d4, #2563eb)' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src="/logo.png" alt="Quest Pharma" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              APIs and Intermediates manufacturing company in India, vertically integrated with a presence in the API and Bulk Drug Intermediates segments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-colors duration-200 flex items-center gap-1 group font-medium">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-colors duration-200 flex items-center gap-1 group font-medium">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-5">Contact</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="font-bold text-slate-900">Hyderabad, India</p>
              <p className="text-slate-500 text-xs">info@questpharma.com</p>
              <p className="text-slate-500 text-xs">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Quest Pharma. All rights reserved.</p>
          <span className="text-xs text-slate-500 font-medium">Managed by K. N. Reddy</span>
        </div>
      </div>
    </footer>
  );
}
