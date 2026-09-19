import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ContactForm from '../ContactForm/ContactForm';
import { company } from '../../data/company';

export default function HomeContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background styling */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="pointer-events-none absolute top-1/4 right-1/3 w-[500px] h-[300px] bg-teal-500/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3.5">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Contact <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Inquire about commercial batch pricing, custom synthesis route scouting, or request working samples and technical dossiers.
          </p>
        </div>

        {/* 2-Column Contact Block */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Info & Value Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Manufacturing &amp; Business Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect directly with our commercial and technical team to discuss procurement volumes, process development timelines, or technical specifications.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Headquarters &amp; Plant</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{company.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Commercial Email</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">info@questpharma.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Business Hours</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold text-teal-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Rapid Response Commitment</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All commercial and scientific queries receive dedicated technical evaluation within 24 to 48 hours.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Confidential Non-Disclosure (NDA) available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Free sample &amp; CoA dispatch for qualified sponsors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your requirements below and our synthesis team will get back to you promptly.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
