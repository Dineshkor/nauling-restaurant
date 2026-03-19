"use client";
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/cartStore';
import { generateWhatsAppLink } from '@/lib/whatsappOrder';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, orderType, setOrderType, updateQuantity, removeItem, getTotal } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const total = getTotal();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return alert("Please fill Name and Phone");
    if (orderType === 'delivery' && !address) return alert("Address is required for delivery");
    
    const link = generateWhatsAppLink({
      name, phone, address, instructions, items, total, orderType
    });
    
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-dark-card shadow-2xl z-[70] flex flex-col overflow-hidden border-l border-dark-border"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark-border">
              <h2 className="font-serif text-2xl font-bold text-gold">Your Order</h2>
              <button onClick={onClose} className="p-2 hover:bg-dark-surface rounded-full transition text-text-muted hover:text-text-primary">
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <ShoppingBag size={64} className="mb-4 text-text-muted" />
                <p className="text-lg text-text-secondary">Your cart is empty.</p>
                <button onClick={onClose} className="mt-6 px-6 py-2 border-2 border-gold text-gold rounded-full hover:bg-gold hover:text-dark transition font-medium">
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="p-4 border-b border-dark-border flex gap-2">
                  <button onClick={() => setOrderType('delivery')} className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 rounded-lg transition ${orderType === 'delivery' ? 'bg-gold text-dark' : 'bg-dark-surface text-text-muted hover:text-text-primary border border-dark-border'}`}>🛵 Delivery</button>
                  <button onClick={() => setOrderType('takeaway')} className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 rounded-lg transition ${orderType === 'takeaway' ? 'bg-gold text-dark' : 'bg-dark-surface text-text-muted hover:text-text-primary border border-dark-border'}`}>🛍️ Takeaway</button>
                   <button onClick={() => setOrderType('dine-in')} className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 rounded-lg transition ${orderType === 'dine-in' ? 'bg-gold text-dark' : 'bg-dark-surface text-text-muted hover:text-text-primary border border-dark-border'}`}>🍽️ Dine-In</button>
                </div>

                {!showCheckout ? (
                  <div className="flex-1 overflow-y-auto p-6 space-y-5">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-text-primary text-sm leading-tight pr-4">
                                <span className={item.isVeg ? "text-green-500 mr-1 text-xs" : "text-red-500 mr-1 text-xs"}>●</span>
                                {item.name}
                            </h4>
                            <span className="font-medium text-gold">₹{item.price * item.quantity}</span>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-dark-border rounded-lg overflow-hidden bg-dark-surface">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 px-2.5 hover:bg-gold/20 transition text-gold"><Minus size={14} /></button>
                              <span className="w-8 text-center text-sm font-medium text-text-primary">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 px-2.5 hover:bg-gold/20 transition text-gold"><Plus size={14} /></button>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="text-text-muted hover:text-spice-red transition p-1"><Trash2 size={16} /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto p-6">
                    <button onClick={() => setShowCheckout(false)} className="text-sm text-gold mb-4 font-medium hover:underline flex items-center gap-1">
                      &larr; Back to Order
                    </button>
                    <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-text-muted">Name *</label>
                        <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full border border-dark-border bg-dark-surface rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition placeholder:text-text-muted" placeholder="Rahul Sharma" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 text-text-muted">Phone Number *</label>
                        <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-dark-border bg-dark-surface rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition placeholder:text-text-muted" placeholder="9876543210" />
                      </div>
                      {orderType === 'delivery' && (
                        <div>
                          <label className="block text-sm font-medium mb-1 text-text-muted">Delivery Address *</label>
                          <textarea required value={address} onChange={e => setAddress(e.target.value)} rows={3} className="w-full border border-dark-border bg-dark-surface rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition placeholder:text-text-muted" placeholder="Apt 4B, MG Road..."></textarea>
                        </div>
                      )}
                      <div>
                        <label className="block text-sm font-medium mb-1 text-text-muted">Special Instructions</label>
                        <textarea value={instructions} onChange={e => setInstructions(e.target.value)} rows={2} className="w-full border border-dark-border bg-dark-surface rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition placeholder:text-text-muted" placeholder="Less spicy please..."></textarea>
                      </div>
                    </form>
                  </div>
                )}

                <div className="p-6 border-t border-dark-border pb-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-text-secondary">Total Amount</span>
                    <span className="font-serif text-2xl font-bold text-gold">₹{total}</span>
                  </div>
                  
                  {!showCheckout ? (
                    <button onClick={() => setShowCheckout(true)} className="w-full bg-gold text-dark py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-lg shadow-gold/20 hover:bg-gold-light transition transform hover:-translate-y-0.5">
                      Proceed to Details <ArrowRight size={20} />
                    </button>
                  ) : (
                    <button type="submit" form="checkout-form" className="w-full bg-[#25D366] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-md hover:bg-[#20BE5A] transition transform hover:-translate-y-0.5">
                      Order on WhatsApp
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
