"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full bg-dark/95 backdrop-blur-lg sticky top-0 z-40 border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dark font-serif text-xl font-bold shadow-lg group-hover:bg-gold-light transition-colors">
            N
          </div>
          <div className="leading-none">
            <span className="font-serif text-xl tracking-wide text-text-primary font-bold block">Nauling</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">Family Restaurant</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center">
          {links.map(link => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === link.href 
                  ? 'text-gold bg-gold/10' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-dark-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919970451515" className="ml-3 bg-gold text-dark px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gold-light transition-colors shadow-md">
            <Phone size={14} /> Call Us
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex gap-1 items-center">
          {links.map(link => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                pathname === link.href 
                  ? 'text-gold' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
