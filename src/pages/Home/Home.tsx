import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Hero from '../../components/Hero/Hero';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import AboutQuest from '../../components/AboutQuest/AboutQuest';
import ValueStrip from '../../components/ValueStrip/ValueStrip';
import WhyQuestPharma from '../../components/WhyQuestPharma/WhyQuestPharma';
import FacilityGallery from '../../components/FacilityGallery/FacilityGallery';
import ExpertiseSection from '../../components/ExpertiseSection/ExpertiseSection';
import QualitySection from '../../components/QualitySection/QualitySection';
import TeamSection from '../../components/TeamSection/TeamSection';
import HomeContactSection from '../../components/HomeContactSection/HomeContactSection';

export default function Home() {
  return (
    <PageWrapper
      title="Home"
      description="Quest - Leading manufacturer of APIs and Pharmaceutical Intermediates in India. Molecules for Quality Life."
    >
      {/* 1. Home (Hero & Ticker) */}
      <Hero />
      <MarqueeTicker />

      {/* 2. About Quest (not Quest Pharma) */}
      <AboutQuest />

      {/* 3. Capabilities (What We Deliver, Why Quest, Gallery) */}
      <div id="capabilities">
        <ValueStrip />
        <WhyQuestPharma />
        <FacilityGallery />
      </div>

      {/* 5. Expertise */}
      <ExpertiseSection />

      {/* 6. Quality */}
      <QualitySection />

      {/* 7. Our Team */}
      <TeamSection />

      {/* 8. Contact */}
      <HomeContactSection />
    </PageWrapper>
  );
}
