import { motion } from 'framer-motion';
import { Target, Eye, Users, Beaker, Award, TrendingUp } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../../utils/animations';
import { company } from '../../data/company';

const values = [
  { icon: Award, title: 'Quality Focus', description: 'Maintaining the highest standards across every stage of our manufacturing process.' },
  { icon: TrendingUp, title: 'Cost Leadership', description: 'Delivering competitive pricing through efficient processes and vertical integration.' },
  { icon: Users, title: 'Expert Team', description: 'Backed by professionals averaging 15 years of industry experience.' },
  { icon: Beaker, title: 'Innovation', description: 'Continuous investment in new product development and process improvement.' },
];

export default function About() {
  return (
    <PageWrapper
      title="About Us"
      description="Learn about Quest Pharma - APIs and Pharmaceutical Intermediates manufacturer in India."
    >
      <PageHero
        label="About Quest Pharma"
        title="Committed to Better Healthcare"
        subtitle="APIs and Intermediates manufacturing company in India, vertically integrated with a presence in the API and Bulk Drug Intermediates segments."
      />

      {/* Company Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase mb-3">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-6">
                Who We Are
              </h2>
              <p className="text-navy-600 leading-relaxed mb-5">
                {company.overview}
              </p>
              <p className="text-navy-500 leading-relaxed text-sm">
                {company.team}
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-6"
            >
              {/* Mission */}
              <div className="p-6 rounded-xl border border-navy-100 bg-surface">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">Our Mission</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      To deliver high-quality pharmaceutical intermediates and APIs while maintaining cost leadership and competitiveness, serving the global pharmaceutical industry with reliability and consistency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-xl border border-navy-100 bg-surface">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-100 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">Our Vision</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      To be a globally recognized manufacturer of pharmaceutical intermediates, building lasting partnerships through quality, innovation, and trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="p-6 rounded-xl border border-navy-100 bg-surface">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">Leadership</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      Managed by {company.managedBy}, supported by a team of highly qualified professionals with diverse expertise spanning multiple disciplines.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase mb-3">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="text-center p-6 rounded-xl bg-white border border-navy-100 hover:border-teal-200 transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-navy-600" />
                </div>
                <h3 className="text-sm font-bold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-xs text-navy-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
