import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Hero from '../../components/Hero/Hero';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import AboutQuest from '../../components/AboutQuest/AboutQuest';
import ValueStrip from '../../components/ValueStrip/ValueStrip';
import WhyQuestPharma from '../../components/WhyQuestPharma/WhyQuestPharma';
import HomeContactSection from '../../components/HomeContactSection/HomeContactSection';

export default function Home() {
  return (
    <PageWrapper
      title="Home"
      description="Quest Group - Leading manufacturer of APIs and Pharmaceutical Intermediates in India. Molecules for Quality Life."
    >
      {/* 1. Home (Hero & Ticker) */}
      <Hero />
      <MarqueeTicker />

      {/* 2. About Quest Group */}
      <AboutQuest />

      {/* 3. Capabilities (What We Deliver, Why Quest Group) */}
      <div id="capabilities">
        <ValueStrip />
        <WhyQuestPharma />
      </div>

      {/* 4. Contact */}
      <HomeContactSection />
    </PageWrapper>
  );
}
