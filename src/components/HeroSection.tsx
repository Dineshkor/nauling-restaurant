import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.webp" 
          alt="Indian food spread" 
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="overlay-left absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span className="text-gold text-sm font-medium tracking-wider uppercase">Est. Since Day One</span>
          </div>
          
          {/* Subheading */}
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Nauling Family Restaurant</p>
          
          {/* Hero Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold text-text-primary mb-6">
            Taste The Rich<br/>
            Flavor Of<br/>
            <span className="text-gold italic">Indian Cuisine</span>
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            We only use the five-star quality for our menu, come and get the richness in every food we serve.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/menu" className="bg-gold text-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-gold-light transition-all shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transform inline-flex items-center gap-2">
              Go To Menu <span className="text-lg">→</span>
            </Link>
            <Link href="/contact" className="border border-text-muted text-text-primary px-8 py-4 rounded-lg font-medium text-base hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5 transform">
              Find Us
            </Link>
          </div>
        </div>
      </div>

       {/* Right side floating featured dish */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden xl:flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-[380px] h-[500px] rounded-3xl overflow-hidden border border-dark-border shadow-2xl pointer-events-auto group">
          <Image 
            src="/images/paneer-butter-masala.webp"
            alt="Featured Dish"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="overlay-dark absolute inset-0"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="font-serif text-xl font-bold text-text-primary mb-1">Paneer Butter Masala</h3>
            <p className="text-text-secondary text-sm mb-3 line-clamp-2">Rich, creamy tomato-based gravy with soft paneer cubes and aromatic spices</p>
            <div className="flex items-center justify-between">
              <span className="text-gold font-bold text-2xl font-serif">₹140</span>
              <span className="stars text-sm">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
