import Link from 'next/link';
import Image from 'next/image';

const specials = [
  { name: 'Paneer Butter Masala', image: '/images/paneer-butter-masala.webp', price: '₹140' },
  { name: 'Chicken Biryani', image: '/images/chicken-biryani.webp', price: '₹220' },
  { name: 'Masala Dosa', image: '/images/masala-dosa.webp', price: '₹45' },
  { name: 'Tandoori Chicken', image: '/images/tandoori-chicken.webp', price: '₹250' },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Special Menu</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">Today&apos;s Special</h2>
          <p className="text-text-muted mt-3 max-w-md mx-auto text-sm">Special menu offers change daily, this is our special food for today</p>
          <div className="gold-line-center"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specials.map((dish) => (
            <Link 
              key={dish.name} 
              href="/menu"
              className="luxury-card rounded-2xl overflow-hidden group"
            >
              <div className="w-full h-48 relative overflow-hidden">
                <Image 
                  src={dish.image} 
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="overlay-dark absolute inset-0"></div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-sm font-bold text-text-primary uppercase tracking-wider mb-2">{dish.name}</h3>
                <div className="stars text-xs mb-3">★★★★★</div>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold font-serif text-lg">{dish.price}</span>
                  <span className="text-gold text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 group-hover:underline">Order Now →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
