import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import CoreValuesCarousel from '@/components/CoreValuesCarousel';
import AboutPreview from '@/components/AboutPreview';
import { heroContent, coreValues } from '@/data/content';

export default function Home() {
  return (
    <>
      <HeroSection content={heroContent} />
      <ServicesOverview />
      <CoreValuesCarousel values={coreValues} />
      <AboutPreview />
    </>
  );
}
