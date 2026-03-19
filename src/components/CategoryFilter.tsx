"use client";
import React, { useRef, useEffect, useState } from 'react';
import { MenuCategory } from '@/lib/menuData';

export default function CategoryFilter({ categories }: { categories: MenuCategory[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(categories[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(c => document.getElementById(`cat-${c.id}`));
      let current = '';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.id.replace('cat-', '');
          }
        }
      }
      if (current) setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-[72px] z-30 w-full bg-dark/95 backdrop-blur-lg border-b border-dark-border py-3">
      <div 
        ref={scrollRef}
        className="max-w-full sm:max-w-6xl mx-auto px-6 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2 items-center"
      >
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 ${
              activeId === cat.id 
                ? 'bg-gold text-dark shadow-md shadow-gold/20' 
                : 'bg-dark-surface text-text-secondary border border-dark-border hover:border-gold/50 hover:text-gold'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
