"use client";
import { useCartStore } from '@/lib/cartStore';
import { ShoppingBag } from 'lucide-react';

export default function CartButton({ onClick }: { onClick: () => void }) {
  const items = useCartStore(s => s.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gold text-dark rounded-full w-16 h-16 flex items-center justify-center shadow-xl shadow-gold/30 hover:bg-gold-light hover:scale-105 transition-all group"
    >
      <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-spice-red text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
          {totalItems}
        </span>
      )}
    </button>
  );
}
