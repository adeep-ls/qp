import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Hero from '../../components/Hero/Hero';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import ValueStrip from '../../components/ValueStrip/ValueStrip';
import AboutPreview from '../../components/AboutPreview/AboutPreview';
import FacilityGallery from '../../components/FacilityGallery/FacilityGallery';
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';
import QualityProcess from '../../components/QualityProcess/QualityProcess';
import WhyQuestPharma from '../../components/WhyQuestPharma/WhyQuestPharma';
import CTA from '../../components/CTA/CTA';

export default function Home() {
  return (
    <PageWrapper
      title="Home"
      description="Quest Pharma - Leading manufacturer of APIs and Pharmaceutical Intermediates in India. Molecules for Quality Life."
    >
      <Hero />
      <MarqueeTicker />
      <ValueStrip />
      <AboutPreview />
      <FacilityGallery />
      <ProductsPreview />
      <QualityProcess />
      <WhyQuestPharma />
      <CTA />
    </PageWrapper>
  );
}
