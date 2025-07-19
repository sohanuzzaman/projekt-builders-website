import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { ProjectGallery } from '@/components/home/ProjectGallery';
import { CoreValuesCarousel } from '@/components/home/CoreValuesCarousel';
import { AboutPreview } from '@/components/home/AboutPreview';
import { heroData, servicesData, coreValuesData, georginaProfile } from '@/data/dummy';

export default function Home() {
  return (
    <Layout>
      <HeroSection data={heroData} />
      <ServicesOverview services={servicesData} />
      <ProjectGallery />
      <CoreValuesCarousel values={coreValuesData} />
      <AboutPreview profile={georginaProfile} />
    </Layout>
  );
}