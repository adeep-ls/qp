import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Atom,
  Building2,
  FlaskConical,
  Microscope,
  FileCheck,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CTA from '../../components/CTA/CTA';
import { company } from '../../data/company';

const keyStats = [
  { value: '150+', label: 'Commercial APIs & Intermediates', icon: FlaskConical },
  { value: '15+', label: 'Years Average Team Experience', icon: Users },
  { value: '50,000+ L', label: 'Installed Reaction Capacity', icon: Atom },
  { value: '100%', label: 'Zero Liquid Discharge (ZLD)', icon: ShieldCheck },
];

const values = [
  {
    icon: Award,
    title: 'Quality Focus',
    badge: 'ICH Q7 & cGMP',
    description:
      'Maintaining the highest standards across every stage of synthesis, isolation, and packaging under validated protocols.',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    title: 'Cost Leadership',
    badge: 'Vertical Integration',
    description:
      'Delivering competitive global pricing through optimized synthetic routes, in-house solvent recovery, and raw material backward integration.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Expert Team',
    badge: '15+ Yrs Average',
    description:
      'Backed by seasoned scientific leaders and chemical engineers averaging 15 years of industrial and regulatory experience.',
    color: 'emerald',
  },
  {
    icon: Microscope,
    title: 'Scientific Innovation',
    badge: 'Non-Infringing R&D',
    description:
      'Continuous investment in synthetic route scouting, DoE optimization, and advanced heterocyclic intermediate synthesis.',
    color: 'cyan',
  },
];

const facilityHighlights = [
  {
    title: 'Synthetic Chemistry R&D',
    category: 'Process Scouting',
    desc: 'Equipped for gram-to-kilo route scouting, stereochemical control, and non-infringing process design.',
    image: '/card-synthesis.jpg',
    tag: 'FTO Routes',
  },
  {
    title: 'Commercial Production Block',
    category: 'Scale-Up Trains',
    desc: 'Multi-stage Glass-Lined and SS-316 reaction batteries supporting batch scale up to 50,000+ Liters.',
    image: '/img5.jpeg',
    tag: '50,000+ L Fleet',
  },
  {
    title: 'Analytical Quality Control',
    category: 'Regulatory Release',
    desc: 'High-resolution HPLC, GC-HS, and pharmacopeial testing ensuring 100% CoA compliance across USP/EP/IP.',
    image: '/img10.jpeg',
    tag: 'ICH Q2 Validated',
  },
];

export default function About() {
  return (
    <PageWrapper
      title="About Us"
      description="Quest Pharma - Vertically integrated APIs and Bulk Drug Intermediates manufacturer in Hyderabad, India."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms & Ambient Lights */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% -10%, rgba(20, 184, 166, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(6, 182, 212, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)
            `,
          }}
        />

        {/* Ambient Floating Glow Orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-teal-300 to-cyan-200 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                <span>About Quest Pharma • Hyderabad, India</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Excellence in{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  API &amp; Bulk Chemistry
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                A vertically integrated pharmaceutical manufacturing enterprise in India, delivering world-class Active Pharmaceutical Ingredients and advanced Bulk Drug Intermediates through synthetic innovation, cost leadership, and global regulatory compliance.
              </p>

              {/* Quick Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  WHO-GMP &amp; cGMP Protocols
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Atom className="w-3.5 h-3.5 text-teal-600" />
                  50,000+ L Reactor Fleet
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" />
                  100% ZLD Eco-Compliance
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore API Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Contact Management</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Side: Ultra-Modern Multi-Layer Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src="/why-expertise.jpg"
                  alt="Quest Pharma chemical synthesis and pharmaceutical engineering"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Vertically Integrated API Synthesis</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-extrabold shadow-sm">
                    Est. India
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                        <Atom className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                          Commercial Infrastructure
                        </div>
                        <div className="text-sm font-black text-white">
                          50,000+ L Reaction Capacity
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold shrink-0">
                      WHO-GMP
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Glass Chip */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    100% Non-Infringing
                  </div>
                  <div className="text-[10px] text-slate-500">
                    FTO Synthetic Routes
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Subtle Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ─── 2. Key Metrics & Impact Strip ─── */}
      <section className="relative py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-teal-300 transition-all flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. Company Story & Strategic Pillars ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Company Heritage &amp; Vision</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Rooted in Chemistry, <br />
                <span className="text-teal-600">Driven by Global Standards</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {company.overview}
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {company.team}
              </p>

              {/* Executive Direction Quote Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-50/60 to-cyan-50/40 border border-teal-200/80 mt-6">
                <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed mb-3">
                  "Our mission is to establish sustainable chemical synthesis solutions that combine rigorous cGMP quality, robust stereochemical control, and true cost leadership for global partners."
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-teal-900">
                  <span>{company.managedBy}</span>
                  <span className="text-[11px] font-semibold text-teal-700">Executive Leadership</span>
                </div>
              </div>
            </motion.div>

            {/* Right Strategic Pillars Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-4"
            >
              {/* Mission Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-teal-300 shadow-2xs hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-105 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">Our Mission</h3>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                        Reliability
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      To deliver high-quality pharmaceutical intermediates and APIs while maintaining cost leadership and competitiveness, serving the global pharmaceutical industry with unwavering reliability and consistency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-cyan-300 shadow-2xs hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">Our Vision</h3>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                        Global Reach
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      To be a premier global partner for pharmaceutical chemical synthesis, recognized for scientific rigor, patent-safe route design, and transparent long-term collaboration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership & Governance Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 shadow-2xs hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">Leadership &amp; Governance</h3>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        Governance
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Promoted by a multidisciplinary council averaging 15+ years of chemical leadership covering synthetic chemistry, process development, regulatory filings, and environmental safety management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 4. Strategic Values ("What Drives Us") ─── */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              What Drives Our Team
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every molecule we synthesize is guided by our fundamental commitment to quality, cost competitiveness, and scientific integrity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-105 group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-teal-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. Infrastructure & Operations Snapshot ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
                Operational Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Our Facilities &amp; Technology
              </h2>
            </div>
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span>View Full Infrastructure Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {facilityHighlights.map((facility, idx) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xs hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold">
                    {facility.tag}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                    {facility.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Global Call To Action ─── */}
      <CTA />
    </PageWrapper>
  );
}
