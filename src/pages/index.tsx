import AdBanner from 'shared/components/static/AdBanner';
import ContactSection from 'shared/components/static/ContactSection';
import HeroSection from 'shared/components/static/HeroSection';
import ServiceSection from 'shared/components/static/ServiceSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AdBanner />
      <ContactSection />
    </>
  );
}
