import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from './menuData';

export type CartItem = MenuItem & { quantity: number };

export type OrderType = 'delivery' | 'takeaway' | 'dine-in';

interface CartState {
  items: CartItem[];
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      orderType: 'delivery',
      setOrderType: (type) => set({ orderType: type }),
      addItem: (item) => set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);
        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
      removeItem: (itemId) => set((state) => ({
        items: state.items.filter((i) => i.id !== itemId),
      })),
      updateQuantity: (itemId, quantity) => set((state) => {
        if (quantity <= 0) {
          return { items: state.items.filter((i) => i.id !== itemId) };
        }
        return {
           items: state.items.map((i) => i.id === itemId ? { ...i, quantity } : i)
        };
      }),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'nauling-cart-storage',
    }
  )
);
