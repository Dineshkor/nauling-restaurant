"use client";
import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/lib/menuData';
import { useCartStore } from '@/lib/cartStore';
import { Plus, Minus } from 'lucide-react';

export default function MenuCard({ item }: { item: MenuItem }) {
  const { items, addItem, updateQuantity, removeItem } = useCartStore();
  
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  // Compact list-style for items without images
  if (!item.image) {
    return (
      <div className="luxury-card rounded-xl px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className={`flex-shrink-0 w-4 h-4 rounded-sm border-2 flex items-center justify-center ${item.isVeg ? 'border-green-500' : 'border-red-500'}`}>
            <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
          </span>
          <div className="min-w-0">
            <h4 className="font-medium text-text-primary text-sm leading-tight">
              {item.name}
              {item.isSpicy && <span className="ml-1.5 text-xs">🌶️</span>}
            </h4>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="font-bold text-gold text-sm">₹{item.price}</span>
          {quantity === 0 ? (
            <button 
              onClick={() => addItem(item)}
              className="bg-dark-surface text-gold border border-dark-border px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold hover:border-gold hover:text-dark transition-all"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center border border-gold rounded-lg overflow-hidden bg-dark-surface">
              <button onClick={() => quantity === 1 ? removeItem(item.id) : updateQuantity(item.id, quantity - 1)} className="px-2.5 py-1.5 text-gold hover:bg-gold hover:text-dark transition"><Minus size={12} /></button>
              <span className="w-6 text-center text-xs font-bold text-gold">{quantity}</span>
              <button onClick={() => updateQuantity(item.id, quantity + 1)} className="px-2.5 py-1.5 text-gold hover:bg-gold hover:text-dark transition"><Plus size={12} /></button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Rich card with image — like the Figma reference
  return (
    <div className="luxury-card rounded-2xl overflow-hidden group">
      <div className="w-full h-52 relative overflow-hidden">
        <Image 
          src={item.image} 
          alt={item.name} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="overlay-dark absolute inset-0"></div>
        {item.isSpicy && (
          <div className="absolute top-3 right-3 z-20 bg-spice-red text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            🌶️ Spicy
          </div>
        )}
        <span className={`absolute top-3 left-3 z-20 w-5 h-5 rounded-sm border-2 flex items-center justify-center ${item.isVeg ? 'border-green-500 bg-dark/60' : 'border-red-500 bg-dark/60'}`}>
          <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-serif font-bold text-lg text-text-primary leading-tight mb-2 uppercase tracking-wide text-sm">{item.name}</h4>
        <div className="stars text-xs mb-3">★★★★★</div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gold text-xl font-serif">₹{item.price}</span>
          {quantity === 0 ? (
            <button 
              onClick={() => addItem(item)}
              className="bg-gold text-dark px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-sm inline-flex items-center gap-1.5"
            >
              Order Now <span>→</span>
            </button>
          ) : (
            <div className="flex items-center border-2 border-gold rounded-lg overflow-hidden">
              <button onClick={() => quantity === 1 ? removeItem(item.id) : updateQuantity(item.id, quantity - 1)} className="px-3 py-2 text-gold hover:bg-gold hover:text-dark transition"><Minus size={14} /></button>
              <span className="w-8 text-center font-bold text-gold">{quantity}</span>
              <button onClick={() => updateQuantity(item.id, quantity + 1)} className="px-3 py-2 text-gold hover:bg-gold hover:text-dark transition"><Plus size={14} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
