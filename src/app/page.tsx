import HeroSection from '@/components/HeroSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import { heroContent } from '@/data/content';

export default function Home() {
  return (
    <>
      <HeroSection content={heroContent} />
      <PortfolioPreview />
      <TestimonialsSection />
    </>
  );
}
