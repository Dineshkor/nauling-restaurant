import Image from 'next/image';

export const metadata = {
  title: "About Us | Nauling Family Restaurant",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark pb-24 w-full">
      {/* Header */}
      <div className="w-full bg-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-interior.webp" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark"></div>
        </div>
        <div className="relative z-10 pt-16 pb-12 px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">Our Story</h1>
          <div className="gold-line-center mt-4"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-text-secondary text-lg leading-relaxed text-center mb-20 max-w-3xl mx-auto">
          Nauling Family Restaurant has been serving home-style Indian food 
          to our community for years. Every dish is made with love, fresh ingredients, 
          and recipes passed down through the family.
        </p>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-dark-border mb-20 group">
          <Image 
            src="/images/about-interior.webp" 
            alt="Restaurant interior" 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="overlay-dark absolute inset-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: '👨‍🍳', title: 'Family Recipes', desc: 'Generations of culinary secrets on every plate.' },
            { icon: '🌿', title: 'Fresh Every Day', desc: 'Sourced locally, prepared daily with no compromises.' },
            { icon: '❤️', title: 'Made With Love', desc: 'Every meal is cooked exactly like we do at home.' },
          ].map(item => (
            <div key={item.title} className="luxury-card p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-gold mb-3">{item.title}</h3>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-2 border-gold pl-8 md:pl-12 py-4 my-16">
          <p className="font-serif italic text-2xl md:text-4xl text-text-secondary leading-snug">
            &ldquo;We don&apos;t serve customers. We serve family members we haven&apos;t met yet.&rdquo;
          </p>
        </blockquote>
      </div>
    </div>
  );
}
