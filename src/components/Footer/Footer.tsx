import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
];

const companyLinks = [
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Research & Development', path: '/research' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-r from-[#ddecfa] via-[#e8f6ef] to-[#d6f5e3] text-slate-700 border-t border-slate-300/80 overflow-hidden"
      role="contentinfo"
    >
      {/* Top brand gradient line matching Logo (Royal Blue -> Emerald Green) */}
      <div
        className="h-1.5 w-full"
        style={{
          background: 'linear-gradient(90deg, #0066cc 0%, #0284c7 35%, #16a34a 70%, #22c55e 100%)',
        }}
      />

      {/* Ambient Logo Brand Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[260px] bg-[#0066cc]/10 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[420px] h-[260px] bg-[#16a34a]/10 blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block p-2.5 rounded-2xl bg-white shadow-sm border border-slate-200/80">
              <img src="/logo.webp" alt="Quest Group" className="h-11 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Leading manufacturer of APIs and Pharmaceutical Intermediates in India. Vertically integrated with a presence in API and Bulk Drug Intermediates segments.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0066cc] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] animate-pulse" />
                Molecules for Quality Life
              </span>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-[0.2em] text-[#16a34a] uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 hover:text-[#16a34a] hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1.5 group font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 text-[#16a34a] group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-[0.2em] text-[#0066cc] uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]" />
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 hover:text-[#0066cc] hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1.5 group font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 text-[#0066cc] group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-extrabold tracking-[0.2em] text-slate-900 uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]" />
              Contact &amp; Plant Site
            </h3>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/70 text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    Plot No. 13, H.No. 5-5-35/34/P13 B1, 1st Floor, Prasanth Nagar, Kukatpally, Hyderabad - 500072, Telangana State
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/70 text-[#0066cc] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:contact@questpharma.com"
                  className="text-xs font-medium text-slate-600 hover:text-[#0066cc] transition-colors"
                >
                  contact@questpharma.com
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-500">
                  Mon – Sat: 9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-300/70 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 font-medium">
            © {new Date().getFullYear()} Quest Group. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-emerald-300 text-emerald-800 text-xs font-bold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
            <span>Managed by K. N. Reddy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
