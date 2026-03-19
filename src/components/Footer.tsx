import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-card text-text-primary relative border-t border-dark-border">
      <div className="w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dark font-serif text-xl font-bold">N</div>
              <div>
                <span className="font-serif text-2xl text-text-primary font-bold block leading-none">Nauling</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Family Restaurant</span>
              </div>
            </div>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              Where every meal feels like home. Traditional flavors, lovingly crafted since day one.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-5 text-gold font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-text-muted hover:text-gold transition">Home</Link></li>
              <li><Link href="/menu" className="text-text-muted hover:text-gold transition">Menu</Link></li>
              <li><Link href="/about" className="text-text-muted hover:text-gold transition">About</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-gold transition">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-5 text-gold font-semibold">Visit Us</h4>
            <div className="text-text-muted text-sm space-y-3">
              <p>12 MG Road, Pune</p>
              <p><strong className="text-text-secondary">Phone / WhatsApp:</strong> <a href="tel:+919970451515" className="hover:text-gold transition">+91 99704 51515</a></p>
              <p><strong className="text-text-secondary">Hours:</strong> Mon-Sun | 9 AM - 11 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-14 pt-6 border-t border-dark-border text-center text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Nauling Family Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
