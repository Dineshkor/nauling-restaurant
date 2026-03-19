import HeroSection from '@/components/HeroSection';
import OrderBanner from '@/components/OrderBanner';
import FeaturedCategories from '@/components/FeaturedCategories';
import AboutSnippet from '@/components/AboutSnippet';
import VibeStrip from '@/components/VibeStrip';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <OrderBanner />
      <FeaturedCategories />
      <AboutSnippet />
      <VibeStrip />
    </div>
  );
}
