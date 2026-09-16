import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fadeLeft, fadeRight } from '../../utils/animations';
import { company } from '../../data/company';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: `${company.location}\n${company.address}` },
  { icon: Phone, label: 'Phone', value: company.phone },
  { icon: Mail, label: 'Email', value: company.email },
  { icon: Clock, label: 'Business Hours', value: company.businessHours },
];

export default function Contact() {
  return (
    <PageWrapper
      title="Contact Us"
      description="Get in touch with Quest Pharma for pharmaceutical intermediate enquiries and partnership opportunities."
    >
      <PageHero
        label="Contact Us"
        title="Get in Touch"
        subtitle="We're here to help with your pharmaceutical intermediate requirements. Reach out to our team today."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Contact Info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Quest Pharma</h2>
              <p className="text-xs text-teal-600 font-semibold tracking-[0.15em] uppercase mb-6">
                Molecules for Quality Life
              </p>

              <div className="space-y-5 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center shrink-0 mt-0.5">
                      <info.icon className="w-4 h-4 text-navy-500" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-0.5">
                        {info.label}
                      </h3>
                      <p className="text-sm text-navy-500 whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-navy-400 italic">
                Note: Contact details shown above are placeholders. Please update with actual company information.
              </p>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-3"
            >
              <div className="p-6 sm:p-8 rounded-2xl border border-navy-100 bg-surface">
                <h2 className="text-xl font-bold text-navy-900 mb-1">Send us an Enquiry</h2>
                <p className="text-sm text-navy-500 mb-6">
                  Fill out the form below and our team will get back to you promptly.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
