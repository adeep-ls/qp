import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Cpu,
  Microscope,
  Atom,
} from 'lucide-react';

interface ShowcaseItem {
  id: string;
  tag: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: typeof FlaskConical;
  accent: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'synthesis',
    tag: 'SYNTHESIS & R&D',
    badge: 'Non-Infringing Routes',
    title: 'Synthetic Route Scouting & Heterocyclic Chemistry',
    description:
      'Our senior chemistry team designs novel, patent-safe synthetic routes from basic chemical building blocks. We prioritize atom economy, reduce reaction steps, and establish robust stereocontrol to guarantee full freedom-to-operate.',
    image: '/card-synthesis-v2.jpg',
    imageAlt: 'Pharmaceutical synthetic chemistry laboratory',
    icon: FlaskConical,
    accent: 'text-teal-600',
    highlights: [
      'Multi-step stereochemical synthesis & complex heterocyclic blocks',
      'Comprehensive patent landscape & route evaluation (FTO)',
      'Rapid turnaround on gram-to-kilo prototype sample lots',
    ],
    specs: [
      { label: 'Scale Range', value: 'Gram to Kilo' },
      { label: 'Patent Status', value: '100% Non-Infringing' },
      { label: 'Target Purity', value: '≥ 99.5% Assay' },
    ],
  },
  {
    id: 'optimization',
    tag: 'PROCESS ENGINEERING',
    badge: 'Yield Maximization',
    title: 'Process Development & DoE Optimization',
    description:
      'Applying Design of Experiments (DoE) statistical modeling to systematically resolve reaction bottlenecks. We optimize cycle run-times, suppress impurity generation, and maximize solvent recovery to deliver superior cost competitiveness.',
    image: '/card-process.jpg',
    imageAlt: 'Chemical process development and optimization',
    icon: Cpu,
    accent: 'text-sky-600',
    highlights: [
      'Critical Process Parameter (CPP) & sensitivity mapping',
      'Reaction calorimetry & thermal safety hazard assessment',
      'In-process closed-loop solvent recovery exceeding 90%',
    ],
    specs: [
      { label: 'Optimization Model', value: 'Design of Experiments (DoE)' },
      { label: 'Cycle Reduction', value: '25% – 35% Faster' },
      { label: 'Solvent Recovery', value: '≥ 90% In-Process' },
    ],
  },
  {
    id: 'validation',
    tag: 'QUALITY ASSURANCE',
    badge: 'ICH Q2 (R1) Standards',
    title: 'Analytical Method Validation & Quality Control',
    description:
      'Equipped with advanced analytical instrumentation to ensure strict pharmacopeial compliance across USP, EP, and IP standards. Every method is validated for precision, specificity, linearity, and stability.',
    image: '/img10.jpeg',
    imageAlt: 'Analytical quality control testing laboratory',
    icon: Microscope,
    accent: 'text-blue-600',
    highlights: [
      'High-resolution HPLC & UPLC assay qualification',
      'GC Headspace (GC-HS) for ppm-level residual solvent screening',
      'Stress testing & forced degradation impurity profiling',
    ],
    specs: [
      { label: 'Validation Norm', value: 'ICH Q2 (R1)' },
      { label: 'Instrumentation', value: 'HPLC & GC-HS' },
      { label: 'Batch Release', value: '100% CoA Verified' },
    ],
  },
  {
    id: 'scaleup',
    tag: 'COMMERCIAL PRODUCTION',
    badge: '50,000+ L Installed',
    title: 'Commercial Scale-Up & Reactor Fleet',
    description:
      'Seamless technology transfer bridging bench chemistry to 50,000+ L commercial batch production. Our multi-stage glass-lined and stainless steel reaction trains operate under strict cGMP protocols with automated process control.',
    image: '/card-bulk.jpg',
    imageAlt: 'Industrial pharmaceutical reaction facility',
    icon: Atom,
    accent: 'text-teal-700',
    highlights: [
      'Multi-stage battery of Glass-Lined & SS-316 reaction vessels',
      'Wide temperature envelope from -78°C cryogenic to +250°C',
      'Agitated Nutsche Filter Dryers (ANFD) for closed-loop isolation',
    ],
    specs: [
      { label: 'Reactor Capacity', value: '50,000+ Liters' },
      { label: 'Compliance', value: 'WHO-GMP & cGMP' },
      { label: 'Environmental', value: '100% ZLD Certified' },
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-20 sm:py-28 lg:py-32 bg-white text-slate-900 overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            Our <span className="text-gradient">Technical Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Delivering chemical synthesis with scientific rigor, certified instrumentation, and a multi-disciplinary team averaging 15+ years of cross-domain pharmaceutical leadership.
          </motion.p>
        </div>

        {/* Alternating Photo & Text Showcase Rows */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {showcaseItems.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
                    {/* Image */}
                    <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Bottom Badge on Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-semibold">
                        <Icon className="w-4 h-4 text-teal-400" />
                        <span>{item.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 pt-2">
                    {item.highlights.map((hl) => (
                      <div key={hl} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Specifications Strip */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                          {spec.label}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-slate-800 block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 lg:mt-28 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Need specialized chemistry or scale-up support?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Discuss target molecules and contract synthesis requirements under strict NDA.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shrink-0 shadow-md hover:shadow-teal-600/25 transition-all"
            >
              Contact Team
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
