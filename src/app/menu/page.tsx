import Image from 'next/image';
import { menuData } from '@/lib/menuData';
import CategoryFilter from '@/components/CategoryFilter';
import MenuSection from '@/components/MenuSection';

export const metadata = {
  title: "Menu | Nauling Family Restaurant",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-dark pb-24 w-full">
      {/* Menu Header */}
      <div className="w-full bg-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/thali.webp" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark"></div>
        </div>
        <div className="relative z-10 pt-16 pb-12 px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Explore Our Selection</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Menu</h1>
          <p className="max-w-xl mx-auto text-base text-text-secondary font-light">
            Authentic flavors prepared fresh daily with our secret family spices
          </p>
          <div className="gold-line-center mt-4"></div>
        </div>
      </div>

      <CategoryFilter categories={menuData} />

      <div className="w-full pt-12">
        {menuData.map(category => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
