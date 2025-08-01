import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import PortfolioPreview from '@/components/PortfolioPreview';
import CoreValuesCarousel from '@/components/CoreValuesCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutPreview from '@/components/AboutPreview';
import CTASection from '@/components/CTASection';
import { heroContent, coreValues } from '@/data/content';

export default function Home() {
  return (
    <>
      <HeroSection content={heroContent} />
      <ServicesOverview />
      <PortfolioPreview />
      <CoreValuesCarousel values={coreValues} />
      <TestimonialsSection />
      <AboutPreview />
      <CTASection backgroundColor="dark" />
    </>
  );
}
