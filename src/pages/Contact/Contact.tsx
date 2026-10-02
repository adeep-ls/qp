import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  MessageSquare,
  Building2,
  Send,
} from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import ContactForm from '../../components/ContactForm/ContactForm';
import { company } from '../../data/company';

const contactChannels = [
  {
    icon: FileCheck,
    title: 'Commercial API Quotations',
    desc: 'Inquire pricing, batch lead times, and availability for commercial-scale intermediate lots.',
  },
  {
    icon: Sparkles,
    title: 'Custom Synthesis Feasibility',
    desc: 'Discuss novel target molecules, route scouting, and gram-to-kilo prototype synthesis under NDA.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Audits & Dossiers',
    desc: 'Request regulatory tech packs, batch Certificates of Analysis, or schedule a physical plant inspection.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Leadership Discussion',
    desc: 'Connect directly with executive and technical directors for long-term contract manufacturing partnerships.',
  },
];

const contactDetails = [
  {
    icon: MapPin,
    title: 'Headquarters & Manufacturing Site',
    value: `${company.location}`,
    sub: 'Telangana, India • Industrial Pharmaceutical Zone',
  },
  {
    icon: Phone,
    title: 'Direct Telephone Line',
    value: '+91 (040) 2370-0000',
    sub: 'Monday to Saturday, 9:00 AM - 6:00 PM IST',
  },
  {
    icon: Mail,
    title: 'Commercial & Technical Inquiries',
    value: 'contact@questpharma.com',
    sub: 'Official communications & inquiry desk',
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    value: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
    sub: 'Manufacturing plant operates 24/7 continuous shifts',
  },
];

export default function Contact() {
  return (
    <PageWrapper
      title="Contact Us & Business Inquiries"
      description="Connect with Quest Pharma for API intermediate inquiries, custom synthesis projects, and plant audit scheduling."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms */}
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
                <span>Global Partnerships &amp; Commercial Inquiries</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Connect With Our{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Chemical Leadership
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                Whether you require commercial API pricing, custom synthetic route evaluation, or wish to schedule a physical quality audit, our executive leadership and technical team are ready to assist under strict mutual confidentiality.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  Strict NDA Protection
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  Fast Response &lt; 24h
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" />
                  Audit Scheduling Open
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact-form-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-600/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Submit Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:contact@questpharma.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Email Direct Desk</span>
                  <Mail className="w-4 h-4" />
                </a>
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
                  alt="Quest Pharma scientific leadership and client partnership discussion"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Inquiry Desk Open</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-extrabold shadow-sm">
                    Response &lt; 24h
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                          Confidentiality Protocol
                        </div>
                        <div className="text-sm font-black text-white">
                          Mutual NDA Guaranteed
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold shrink-0">
                      Protected
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Glass Chip */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl z-20">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    Direct Technical Access
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Consult with Senior Chemists
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Subtle Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ─── 2. Dedicated Channels Strip ─── */}
      <section className="relative py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactChannels.map((ch) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.title}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {ch.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. Main Contact Form & Details Section ─── */}
      <section id="contact-form-section" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.18em] text-teal-700 uppercase mb-2">
                  Direct Contacts
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                  Quest Pharma
                </h2>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
                  Molecules for Quality Life
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Connect with our commercial office in Hyderabad for prompt technical evaluation, price quotations, and audit scheduling.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5 hover:border-teal-300 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-teal-600 shrink-0 mt-0.5 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                          {item.title}
                        </h4>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {item.value}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Plant Audit Note */}
              <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 text-teal-900 text-xs leading-relaxed">
                <strong className="font-bold block mb-1">Facility Audits &amp; Site Inspections:</strong>
                Prospective domestic and international clients are welcome to conduct physical quality audits of our Hyderabad plant with advance scheduling.
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-100/50">
                <div className="mb-6">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/80 mb-2 inline-block">
                    Inquiry Form
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
                    Send Us an Official Enquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Complete the form below and our chemical synthesis and regulatory desk will respond within 24 hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. Location & Logistics Map Hint ─── */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold mb-2 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Strategic Location: Hyderabad Pharmaceutical Cluster, India</span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Conveniently situated near major international air cargo hubs and maritime ports, facilitating rapid global chemical export across North America, Europe, and Asia-Pacific.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
