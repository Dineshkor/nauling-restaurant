"use client";
import { useState } from 'react';
import CartButton from './CartButton';
import CartDrawer from './CartDrawer';

export default function GlobalCart() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CartButton onClick={() => setIsOpen(true)} />
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
