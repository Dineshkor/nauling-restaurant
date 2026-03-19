import Image from 'next/image';
import Link from 'next/link';

export default function AboutSnippet() {
  return (
    <section className="w-full bg-dark-card py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden border border-dark-border group">
          <Image 
            src="/images/about-interior.webp" 
            alt="Restaurant interior" 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="overlay-dark absolute inset-0"></div>
        </div>
        
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-6">A Family Recipe,<br/>Passed Down with Love</h2>
          <div className="gold-line mb-8"></div>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Nauling Family Restaurant has been serving home-style Indian food to our community for years. 
            Every dish is made with love, fresh ingredients, and recipes passed down through the family.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all text-sm uppercase tracking-wider">
            Read Our Story <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
