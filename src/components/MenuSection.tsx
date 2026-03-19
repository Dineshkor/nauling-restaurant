import { MenuCategory } from '@/lib/menuData';
import MenuCard from './MenuCard';

export default function MenuSection({ category }: { category: MenuCategory }) {
  if (category.items.length === 0) return null;

  const featuredItems = category.items.filter(item => item.image);
  const regularItems = category.items.filter(item => !item.image);

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-40 mb-16">
      {/* Section Header */}
      <div className="w-full max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 overflow-hidden">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary uppercase tracking-wider">{category.name}</h2>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-dark-border to-transparent"></div>
          <span className="text-text-muted text-sm whitespace-nowrap">{category.items.length} items</span>
        </div>
        <div className="gold-line mt-2"></div>
      </div>
      
      {/* Featured items with images */}
      {featuredItems.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {featuredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
      
      {/* Regular items – compact list */}
      {regularItems.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {regularItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
