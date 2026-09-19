import { Shield, Handshake, Lightbulb, Award, FlaskConical, Star, Globe, Microscope } from 'lucide-react';

const items = [
  { icon: Shield,       label: 'Quality Assured',        color: 'text-teal-600',   bg: 'bg-teal-50' },
  { icon: Handshake,    label: 'Trusted Supply',          color: 'text-blue-600',   bg: 'bg-blue-50' },
  { icon: Lightbulb,    label: 'Continuous Innovation',   color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Award,        label: 'Expert Team',             color: 'text-amber-600',  bg: 'bg-amber-50' },
  { icon: FlaskConical, label: 'API Intermediates',       color: 'text-teal-600',   bg: 'bg-teal-50' },
  { icon: Star,         label: '15 Years Experience',     color: 'text-rose-600',   bg: 'bg-rose-50' },
  { icon: Globe,        label: 'Global Reach',            color: 'text-blue-600',   bg: 'bg-blue-50' },
  { icon: Microscope,   label: 'Advanced Synthesis',      color: 'text-purple-600', bg: 'bg-purple-50' },
];

const ticker = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <section className="relative py-4 sm:py-5 bg-white border-y border-slate-100 shadow-xs overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center animate-marquee shrink-0" aria-hidden={k === 1}>
            {ticker.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-7 whitespace-nowrap">
                <div className={`w-7 h-7 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                </div>
                <span className="text-sm font-semibold text-slate-500">{item.label}</span>
                <span className="w-1 h-1 rounded-full bg-slate-200 ml-4 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
