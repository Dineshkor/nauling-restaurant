import { CartItem, OrderType } from './cartStore';

export interface OrderDetails {
  name: string;
  phone: string;
  address?: string;
  instructions?: string;
  items: CartItem[];
  total: number;
  orderType: OrderType;
}

const WHATSAPP_NUMBER = "919970451515"; 

export const generateWhatsAppLink = (details: OrderDetails): string => {
  const typeLabel = {
    'delivery': 'Home Delivery',
    'takeaway': 'Takeaway',
    'dine-in': 'Dine In'
  }[details.orderType];

  let message = `🍽️ *New Order — Nauling Family Restaurant*\n\n`;
  message += `📋 *Order Type:* ${typeLabel}\n\n`;
  message += `👤 *Name:* ${details.name}\n`;
  message += `📞 *Phone:* ${details.phone}\n`;
  
  if (details.orderType === 'delivery' && details.address) {
    message += `📍 *Address:* ${details.address}\n`;
  }
  
  message += `\n*Items Ordered:*\n`;
  details.items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x${item.quantity} — ₹${Number(item.price) * item.quantity}\n`;
  });
  
  message += `\n💰 *Total: ₹${details.total}*\n`;
  
  if (details.instructions) {
    message += `\n📝 *Note:* ${details.instructions}\n`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
