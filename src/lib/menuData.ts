export type MenuItem = {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  isSpicy?: boolean;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    "id": "salads-sprouts",
    "name": "SALADS & SPROUTS",
    "items": [
      {
        "id": "sprouts-vegetable",
        "name": "Sprouts Vegetable",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-sprouts",
        "name": "Paneer Sprouts",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "boiled-egg-sprouts",
        "name": "Boiled Egg Sprouts",
        "price": 30,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "special-sprouts",
        "name": "Special Sprouts",
        "price": 35,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-salad",
        "name": "Paneer Salad",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chicken-salad",
        "name": "Chicken Salad",
        "price": 60,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "protein-salad",
        "name": "Protein Salad",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "breakfast",
    "name": "BREAKFAST",
    "items": [
      {
        "id": "pohe",
        "name": "Pohe",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "upma",
        "name": "Upma",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "sabudana-khichadi",
        "name": "Sabudana Khichadi",
        "price": 100,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "idli",
        "name": "Idli",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "medu-wada",
        "name": "Medu Wada",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "misal-pav",
        "name": "Misal Pav",
        "price": 170,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/misal-pav.webp"
      },
      {
        "id": "pav-bhaji",
        "name": "Pav Bhaji",
        "price": 180,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "dosa-uttappa",
    "name": "DOSA & UTTAPPA",
    "items": [
      {
        "id": "sada-dosa",
        "name": "Sada Dosa",
        "price": 150,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "masala-dosa",
        "name": "Masala Dosa",
        "price": 45,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/masala-dosa.webp"
      },
      {
        "id": "cheese-masala-dosa",
        "name": "Cheese Masala Dosa",
        "price": 60,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mysore-masala-dosa",
        "name": "Mysore Masala Dosa",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "schezwan-cut-dosa",
        "name": "Schezwan Cut Dosa",
        "price": 85,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "cut-dosa",
        "name": "Cut Dosa",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "onion-uttappa",
        "name": "Onion Uttappa",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "onion-cheese-uttappa",
        "name": "Onion Cheese Uttappa",
        "price": 60,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "snacks-sandwiches",
    "name": "SNACKS & SANDWICHES",
    "items": [
      {
        "id": "samosa-2-pcs-",
        "name": "Samosa (2 pcs)",
        "price": 50,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chat-samosa",
        "name": "Chat Samosa",
        "price": 70,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dahi-wade",
        "name": "Dahi Wade",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chutney-cheese-s-w",
        "name": "Chutney Cheese S/W",
        "price": 60,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-cheese-s-w",
        "name": "Veg Cheese S/W",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "corn-cheese-s-w",
        "name": "Corn Cheese S/W",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-tikka-cheese-s-w",
        "name": "Paneer Tikka Cheese S/W",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chicken-tikka-cheese-s-w",
        "name": "Chicken Tikka Cheese S/W",
        "price": 100,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-schezwan-cheese-s-w",
        "name": "Chicken Schezwan Cheese S/W",
        "price": 110,
        "isVeg": false,
        "isSpicy": true
      }
    ]
  },
  {
    "id": "pasta",
    "name": "PASTA",
    "items": [
      {
        "id": "white-sauce-pasta",
        "name": "White Sauce Pasta",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "alfredo-cheese-pasta",
        "name": "Alfredo Cheese Pasta",
        "price": 150,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mix-sauce-pasta",
        "name": "Mix Sauce Pasta",
        "price": 160,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-cheese-pasta",
        "name": "Paneer Cheese Pasta",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chicken-cheese-pasta",
        "name": "Chicken Cheese Pasta",
        "price": 180,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "special-cheese-pasta",
        "name": "Special Cheese Pasta",
        "price": 180,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "classic-pasta",
        "name": "Classic Pasta",
        "price": 180,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/lassi.webp"
      },
      {
        "id": "red-sauce-pasta",
        "name": "Red Sauce Pasta",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "lemon-chicken-pasta",
        "name": "Lemon Chicken Pasta",
        "price": 180,
        "isVeg": false,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "momos-nuggets",
    "name": "MOMOS & NUGGETS",
    "items": [
      {
        "id": "veg-nuggets-10-pcs",
        "name": "Veg Nuggets 10 pcs",
        "price": 110,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-steam-momos-5-pcs",
        "name": "Veg Steam Momos 5 pcs",
        "price": 70,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/momos.webp"
      },
      {
        "id": "veg-fry-momos-5-pcs",
        "name": "Veg Fry Momos 5 pcs",
        "price": 70,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/momos.webp"
      },
      {
        "id": "veg-chilli-momos",
        "name": "Veg Chilli Momos",
        "price": 120,
        "isVeg": true,
        "isSpicy": true,
        "image": "/images/momos.webp"
      },
      {
        "id": "chicken-nuggets-10-pcs",
        "name": "Chicken Nuggets 10 pcs",
        "price": 120,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-steam-momos-5-pcs",
        "name": "Chicken Steam Momos 5 pcs",
        "price": 80,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/momos.webp"
      },
      {
        "id": "chicken-fry-momos-5-pcs",
        "name": "Chicken Fry Momos 5 pcs",
        "price": 80,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/momos.webp"
      },
      {
        "id": "chicken-chilli-momos",
        "name": "Chicken Chilli Momos",
        "price": 130,
        "isVeg": false,
        "isSpicy": true,
        "image": "/images/momos.webp"
      }
    ]
  },
  {
    "id": "parathas",
    "name": "PARATHAS",
    "items": [
      {
        "id": "aloo-paratha",
        "name": "Aloo Paratha",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "gobi-paratha",
        "name": "Gobi Paratha",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "green-peas-paratha",
        "name": "Green Peas Paratha",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-gobi-paratha",
        "name": "Aloo Gobi Paratha",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mix-veg-paratha",
        "name": "Mix Veg Paratha",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-paratha",
        "name": "Paneer Paratha",
        "price": 100,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "cheese-paratha",
        "name": "Cheese Paratha",
        "price": 110,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-cheese-paratha",
        "name": "Aloo Cheese Paratha",
        "price": 110,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "raita-papad",
    "name": "RAITA & PAPAD",
    "items": [
      {
        "id": "boondi-raita",
        "name": "Boondi Raita",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "pineapple-raita",
        "name": "Pineapple Raita",
        "price": 50,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "sabji-raita",
        "name": "Sabji Raita",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "masala-papad",
        "name": "Masala Papad",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "roasted-papad",
        "name": "Roasted Papad",
        "price": 10,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "fry-papad",
        "name": "Fry Papad",
        "price": 10,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "soups",
    "name": "SOUPS",
    "items": [
      {
        "id": "tomato-soup",
        "name": "Tomato Soup",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "hot-sour-soup-veg-",
        "name": "Hot & Sour Soup (Veg)",
        "price": 85,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "manchow-soup-veg-",
        "name": "Manchow Soup (Veg)",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-clear-soup",
        "name": "Veg Clear Soup",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "lemon-coriander-soup",
        "name": "Lemon Coriander Soup",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "palak-soup",
        "name": "Palak Soup",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chicken-manchow-soup",
        "name": "Chicken Manchow Soup",
        "price": 90,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-hot-sour-soup",
        "name": "Chicken Hot & Sour Soup",
        "price": 90,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-clear-soup",
        "name": "Chicken Clear Soup",
        "price": 90,
        "isVeg": false,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "chinese-starters",
    "name": "CHINESE STARTERS",
    "items": [
      {
        "id": "gobi-manchurian-dry-gravy",
        "name": "Gobi Manchurian Dry/Gravy",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-manchurian-dry-gravy",
        "name": "Veg Manchurian Dry/Gravy",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-chilly-dry-gravy",
        "name": "Paneer Chilly Dry/Gravy",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-crispy",
        "name": "Veg Crispy",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "honey-chilli-potato",
        "name": "Honey Chilli Potato",
        "price": 140,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "honey-chilli-mushroom",
        "name": "Honey Chilli Mushroom",
        "price": 140,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "stuffed-mushroom-chilli-dry",
        "name": "Stuffed Mushroom Chilli Dry",
        "price": 150,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "dragon-paneer",
        "name": "Dragon Paneer",
        "price": 140,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "paneer-65",
        "name": "Paneer 65",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-tikka",
        "name": "Paneer Tikka",
        "price": 180,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-pudina-tikka",
        "name": "Paneer Pudina Tikka",
        "price": 180,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-shole-kabab",
        "name": "Paneer Shole Kabab",
        "price": 180,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "paneer-mains",
    "name": "PANEER MAINS",
    "items": [
      {
        "id": "paneer-bhurji",
        "name": "Paneer Bhurji",
        "price": 150,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-masala",
        "name": "Paneer Masala",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mutter-paneer",
        "name": "Mutter Paneer",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "palak-paneer",
        "name": "Palak Paneer",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-butter-masala",
        "name": "Paneer Butter Masala",
        "price": 140,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/paneer-butter-masala.webp"
      },
      {
        "id": "kadai-paneer",
        "name": "Kadai Paneer",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-acharya",
        "name": "Paneer Acharya",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-mushroom-masala",
        "name": "Paneer Mushroom Masala",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "tez-paneer",
        "name": "Tez Paneer",
        "price": 130,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "paneer-kheema",
        "name": "Paneer Kheema",
        "price": 150,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-lababdar",
        "name": "Paneer Lababdar",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-patiyala",
        "name": "Paneer Patiyala",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-handi",
        "name": "Paneer Handi",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-handi",
        "name": "Veg Handi",
        "price": 160,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "shiv-bhaji",
        "name": "Shiv Bhaji",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "veg-mains",
    "name": "VEG MAINS",
    "items": [
      {
        "id": "veg-kolhapuri",
        "name": "Veg Kolhapuri",
        "price": 120,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "lasuni-palak",
        "name": "Lasuni Palak",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-palak",
        "name": "Aloo Palak",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-gobi-dry",
        "name": "Aloo Gobi Dry",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-mutter",
        "name": "Aloo Mutter",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-jeera",
        "name": "Aloo Jeera",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-gobi-masala",
        "name": "Aloo Gobi Masala",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-jaipuri",
        "name": "Veg Jaipuri",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "sabji-mandi",
        "name": "Sabji Mandi",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-makhanwala",
        "name": "Veg Makhanwala",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "kofta",
        "name": "Kofta",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "sanj-savera",
        "name": "Sanj Savera",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-maratha",
        "name": "Veg Maratha",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-bhuna",
        "name": "Veg Bhuna",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "bhendi-fry",
        "name": "Bhendi Fry",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "aloo-bhendi-fry",
        "name": "Aloo Bhendi Fry",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "bhendi-masala-gravy-",
        "name": "Bhendi Masala (Gravy)",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mushroom-masala",
        "name": "Mushroom Masala",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mushroom-kadai",
        "name": "Mushroom Kadai",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mushroom-mutter-masala",
        "name": "Mushroom Mutter Masala",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "green-peas-masala",
        "name": "Green Peas Masala",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "green-peas-palak",
        "name": "Green Peas Palak",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "amritsari-chole",
        "name": "Amritsari Chole",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chole-masala",
        "name": "Chole Masala",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "kadai-sabji",
        "name": "Kadai Sabji",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-kheema",
        "name": "Veg Kheema",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-jalfrazi",
        "name": "Veg Jalfrazi",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-patiyala",
        "name": "Veg Patiyala",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-lahori",
        "name": "Veg Lahori",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "corn-capsicum-masala",
        "name": "Corn Capsicum Masala",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "kaju-masala",
        "name": "Kaju Masala",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "kaju-curry",
        "name": "Kaju Curry",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "copa-special-veg-masala",
        "name": "Copa Special Veg Masala",
        "price": 190,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "navratan-korma",
        "name": "Navratan Korma",
        "price": 180,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-muglai",
        "name": "Paneer Muglai",
        "price": 190,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-kurchan",
        "name": "Paneer Kurchan",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-kofta",
        "name": "Paneer Kofta",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-passanda",
        "name": "Paneer Passanda",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-korma",
        "name": "Veg Korma",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-pakoda",
        "name": "Paneer Pakoda",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dum-aloo-kashmiri",
        "name": "Dum Aloo Kashmiri",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-pahadi",
        "name": "Veg Pahadi",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "baby-corn-masala",
        "name": "Baby Corn Masala",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "malai-kofta",
        "name": "Malai Kofta",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dum-aloo-punjabi",
        "name": "Dum Aloo Punjabi",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-lahori",
        "name": "Paneer Lahori",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-tikka-masala",
        "name": "Paneer Tikka Masala",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "kaju-paneer-masala",
        "name": "Kaju Paneer Masala",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "dal",
    "name": "DAL",
    "items": [
      {
        "id": "dal-fry",
        "name": "Dal Fry",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dal-tadka",
        "name": "Dal Tadka",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dal-palak",
        "name": "Dal Palak",
        "price": 110,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dal-makhani",
        "name": "Dal Makhani",
        "price": 120,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/hero.webp"
      }
    ]
  },
  {
    "id": "biryani-pulao-veg-",
    "name": "BIRYANI & PULAO (VEG)",
    "items": [
      {
        "id": "veg-biryani",
        "name": "Veg Biryani",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-hyderabadi-biryani",
        "name": "Veg Hyderabadi Biryani",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-biryani",
        "name": "Paneer Biryani",
        "price": 150,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-pulav",
        "name": "Veg Pulav",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-pulav-masala",
        "name": "Veg Pulav Masala",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-pulav",
        "name": "Paneer Pulav",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-pulav-masala",
        "name": "Paneer Pulav Masala",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "green-peas-pulav",
        "name": "Green Peas Pulav",
        "price": 120,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "jeera-rice",
        "name": "Jeera Rice",
        "price": 85,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "steam-rice",
        "name": "Steam Rice",
        "price": 55,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "curd-rice",
        "name": "Curd Rice",
        "price": 100,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dal-khichadi",
        "name": "Dal Khichadi",
        "price": 100,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "palak-khichadi",
        "name": "Palak Khichadi",
        "price": 110,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-tawa-pulao",
        "name": "Veg Tawa Pulao",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "paneer-tawa-pulao",
        "name": "Paneer Tawa Pulao",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "kashmiri-pulao",
        "name": "Kashmiri Pulao",
        "price": 160,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "chinese-rice-noodles-veg-",
    "name": "CHINESE RICE & NOODLES (VEG)",
    "items": [
      {
        "id": "veg-fried-rice",
        "name": "Veg Fried Rice",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-schezwan-fried-rice",
        "name": "Veg Schezwan Fried Rice",
        "price": 130,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "veg-manchurian-fried-rice",
        "name": "Veg Manchurian Fried Rice",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-manchurian-schezwan-fried",
        "name": "Veg Manchurian Schezwan Fried",
        "price": 130,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "mushroom-fried-rice",
        "name": "Mushroom Fried Rice",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-mexican-rice",
        "name": "Veg Mexican Rice",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-triple-schezwan-rice",
        "name": "Veg Triple Schezwan Rice",
        "price": 130,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "veg-hakka-noodles",
        "name": "Veg Hakka Noodles",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-schezwan-noodles",
        "name": "Veg Schezwan Noodles",
        "price": 130,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "veg-chilli-garlic-noodles",
        "name": "Veg Chilli Garlic Noodles",
        "price": 130,
        "isVeg": true,
        "isSpicy": true
      },
      {
        "id": "veg-chinese-bhel",
        "name": "Veg Chinese Bhel",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-ginger-noodle",
        "name": "Veg Ginger Noodle",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mixed-noodle",
        "name": "Mixed Noodle",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "pan-fried-noodle",
        "name": "Pan Fried Noodle",
        "price": 170,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-mexican-noodle",
        "name": "Veg Mexican Noodle",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-chowmein",
        "name": "Veg Chowmein",
        "price": 130,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-hong-kong-fried-rice-noodle",
        "name": "Veg Hong Kong Fried Rice/Noodle",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-singapuri-fried-rice-noodle",
        "name": "Veg Singapuri Fried Rice/Noodle",
        "price": 140,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "veg-combination-rice-noodle",
        "name": "Veg Combination Rice/Noodle",
        "price": 150,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "breads",
    "name": "BREADS",
    "items": [
      {
        "id": "gahu-roti",
        "name": "Gahu Roti",
        "price": 16,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "tandoori-roti",
        "name": "Tandoori Roti",
        "price": 20,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "naan",
        "name": "Naan",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "butter-naan",
        "name": "Butter Naan",
        "price": 35,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "cheese-garlic-naan",
        "name": "Cheese Garlic Naan",
        "price": 50,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "cheese-naan",
        "name": "Cheese Naan",
        "price": 45,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "plain-kulcha",
        "name": "Plain Kulcha",
        "price": 25,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "butter-kulcha",
        "name": "Butter Kulcha",
        "price": 35,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "lachha-paratha",
        "name": "Lachha Paratha",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "pudina-paratha",
        "name": "Pudina Paratha",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "makai-roti",
        "name": "Makai Roti",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "stuffed-masala-kulcha",
        "name": "Stuffed Masala Kulcha",
        "price": 55,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chapati",
        "name": "Chapati",
        "price": 10,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "garlic-onion-kulcha",
        "name": "Garlic Onion Kulcha",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "onion-kulcha",
        "name": "Onion Kulcha",
        "price": 35,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "roti-ki-tokri",
        "name": "Roti Ki Tokri",
        "price": 160,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "maggi",
    "name": "MAGGI",
    "items": [
      {
        "id": "plain-maggi",
        "name": "Plain Maggi",
        "price": 50,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "vegetable-maggi",
        "name": "Vegetable Maggi",
        "price": 55,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "butter-maggi",
        "name": "Butter Maggi",
        "price": 60,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "egg-maggi",
        "name": "Egg Maggi",
        "price": 60,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "cheese-maggi",
        "name": "Cheese Maggi",
        "price": 70,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "chicken-starters",
    "name": "CHICKEN STARTERS",
    "items": [
      {
        "id": "chicken-chilly-dry-gravy",
        "name": "Chicken Chilly Dry/Gravy",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-manchurian-dry-gravy",
        "name": "Chicken Manchurian Dry/Gravy",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-65",
        "name": "Chicken 65",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "hot-garlic-chicken",
        "name": "Hot Garlic Chicken",
        "price": 150,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-salt-pepper",
        "name": "Chicken Salt & Pepper",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "crispy-chicken",
        "name": "Crispy Chicken",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "lemon-chicken",
        "name": "Lemon Chicken",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-sathe",
        "name": "Chicken Sathe",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "black-pepper-chicken",
        "name": "Black Pepper Chicken",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-lollypop",
        "name": "Chicken Lollypop",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "chicken-mains",
    "name": "CHICKEN MAINS",
    "items": [
      {
        "id": "chicken-curry",
        "name": "Chicken Curry",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-masala",
        "name": "Chicken Masala",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-kolhapuri",
        "name": "Chicken Kolhapuri",
        "price": 140,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-hyderabadi",
        "name": "Chicken Hyderabadi",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-kadai",
        "name": "Chicken Kadai",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-butter-masala",
        "name": "Chicken Butter Masala",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-afgani",
        "name": "Chicken Afgani",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-lahori",
        "name": "Chicken Lahori",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-lababdar",
        "name": "Chicken Lababdar",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-banjara-m-s",
        "name": "Chicken Banjara M/S",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-kheema",
        "name": "Chicken Kheema",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-pahadi-masala",
        "name": "Chicken Pahadi Masala",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-patiala",
        "name": "Chicken Patiala",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-sukka",
        "name": "Chicken Sukka",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "copa-special-murg-masala",
        "name": "Copa Special Murg Masala",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-muglai",
        "name": "Murg Muglai",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-banjara",
        "name": "Murg Banjara",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-adreki-masala",
        "name": "Murg Adreki Masala",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-kalimirch-masala",
        "name": "Murg Kalimirch Masala",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-laara",
        "name": "Murg Laara",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-malwani-masala",
        "name": "Murg Malwani Masala",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "egg-dishes",
    "name": "EGG DISHES",
    "items": [
      {
        "id": "egg-curry",
        "name": "Egg Curry",
        "price": 120,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "egg-masala",
        "name": "Egg Masala",
        "price": 120,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "egg-ghotala",
        "name": "Egg Ghotala",
        "price": 130,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "egg-bhurji-2-bread-2-eggs-",
        "name": "Egg Bhurji + 2 Bread (2 eggs)",
        "price": 70,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "omelette-2-bread-2-eggs-",
        "name": "Omelette + 2 Bread (2 eggs)",
        "price": 70,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "boiled-eggs-2-pcs-",
        "name": "Boiled Eggs (2 pcs)",
        "price": 60,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "masala-boiled-eggs-2-pcs-",
        "name": "Masala Boiled Eggs (2 pcs)",
        "price": 80,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "cheese-omelette-2-bread-2-eggs-",
        "name": "Cheese Omelette + 2 Bread (2 eggs)",
        "price": 80,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "half-fry-full-fry-2-eggs-",
        "name": "Half Fry / Full Fry (2 eggs)",
        "price": 55,
        "isVeg": false,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "tandoor-grills",
    "name": "TANDOOR / GRILLS",
    "items": [
      {
        "id": "murg-tandoor-full-half",
        "name": "Murg Tandoor Full/Half",
        "price": 350,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/tandoori-chicken.webp"
      },
      {
        "id": "murg-jangli-full-half",
        "name": "Murg Jangli Full/Half",
        "price": 350,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-tikka",
        "name": "Murg Tikka",
        "price": 190,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-banjara-tikka",
        "name": "Murg Banjara Tikka",
        "price": 190,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-pahadi-tikka",
        "name": "Murg Pahadi Tikka",
        "price": 190,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-reshmi-tikka",
        "name": "Murg Reshmi Tikka",
        "price": 200,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-malai-tikka",
        "name": "Murg Malai Tikka",
        "price": 200,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-sholey-kabab",
        "name": "Murg Sholey Kabab",
        "price": 200,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-seek-kabab",
        "name": "Murg Seek Kabab",
        "price": 170,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-tandoor-lollipop",
        "name": "Murg Tandoor Lollipop",
        "price": 170,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/tandoori-chicken.webp"
      },
      {
        "id": "murg-pudina-tikka",
        "name": "Murg Pudina Tikka",
        "price": 190,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "murg-angara-kabab",
        "name": "Murg Angara Kabab",
        "price": 190,
        "isVeg": false,
        "isSpicy": true
      }
    ]
  },
  {
    "id": "biryani-rice-chicken-egg-",
    "name": "BIRYANI & RICE (CHICKEN & EGG)",
    "items": [
      {
        "id": "chicken-biryani",
        "name": "Chicken Biryani",
        "price": 150,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/chicken-biryani.webp"
      },
      {
        "id": "chicken-hyderabadi-biryani",
        "name": "Chicken Hyderabadi Biryani",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-biryani-boneless",
        "name": "Chicken Biryani Boneless",
        "price": 170,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-hyd-biryani-boneless",
        "name": "Chicken Hyd Biryani Boneless",
        "price": 180,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-tawa-pulao",
        "name": "Chicken Tawa Pulao",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "egg-biryani",
        "name": "Egg Biryani",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-fried-rice",
        "name": "Chicken Fried Rice",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-schezwan-fried-rice",
        "name": "Chicken Schezwan Fried Rice",
        "price": 150,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-mexican-rice",
        "name": "Chicken Mexican Rice",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "lemon-chicken-rice",
        "name": "Lemon Chicken Rice",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-triple-schezwan-rice",
        "name": "Chicken Triple Schezwan Rice",
        "price": 190,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "egg-fried-rice",
        "name": "Egg Fried Rice",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "egg-schezwan-fried-rice",
        "name": "Egg Schezwan Fried Rice",
        "price": 140,
        "isVeg": false,
        "isSpicy": true
      }
    ]
  },
  {
    "id": "chinese-noodles-chicken-",
    "name": "CHINESE NOODLES (CHICKEN)",
    "items": [
      {
        "id": "chicken-hakka-noodles",
        "name": "Chicken Hakka Noodles",
        "price": 130,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-schezwan-noodles",
        "name": "Chicken Schezwan Noodles",
        "price": 140,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-chilli-garlic-noodles",
        "name": "Chicken Chilli Garlic Noodles",
        "price": 140,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-mexican-noodles",
        "name": "Chicken Mexican Noodles",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-chinese-bhel",
        "name": "Chicken Chinese Bhel",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-ginger-noodle",
        "name": "Chicken Ginger Noodle",
        "price": 140,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-chowmein",
        "name": "Chicken Chowmein",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "egg-schezwan-noodles",
        "name": "Egg Schezwan Noodles",
        "price": 140,
        "isVeg": false,
        "isSpicy": true
      },
      {
        "id": "chicken-hong-kong-fried-rice-noodle",
        "name": "Chicken Hong Kong Fried Rice/Noodle",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-singapuri-fried-rice-noodle",
        "name": "Chicken Singapuri Fried Rice/Noodle",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-combination-rice-noodle",
        "name": "Chicken Combination Rice/Noodle",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "chicken-tomato-rice-noodle",
        "name": "Chicken Tomato Rice/Noodle",
        "price": 160,
        "isVeg": false,
        "isSpicy": false
      },
      {
        "id": "lemon-chicken-fried-rice",
        "name": "Lemon Chicken Fried Rice",
        "price": 150,
        "isVeg": false,
        "isSpicy": false
      }
    ]
  },
  {
    "id": "thalis",
    "name": "THALIS",
    "items": [
      {
        "id": "veg-thali-2-veg-dal-rice-3-chapati-raita-papad-",
        "name": "Veg Thali (2 Veg + Dal + Rice + 3 Chapati + Raita + Papad)",
        "price": 110,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/thali.webp"
      },
      {
        "id": "egg-thali-2-pcs-egg-curry-rice-3-chapati-raita-papad-",
        "name": "Egg Thali (2 pcs Egg Curry + Rice + 3 Chapati + Raita + Papad)",
        "price": 130,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/thali.webp"
      },
      {
        "id": "chicken-thali-2-pcs-chicken-curry-rice-3-chapati-raita-papad-",
        "name": "Chicken Thali (2 pcs Chicken Curry + Rice + 3 Chapati + Raita + Papad)",
        "price": 135,
        "isVeg": false,
        "isSpicy": false,
        "image": "/images/thali.webp"
      }
    ]
  },
  {
    "id": "beverages-juices",
    "name": "BEVERAGES & JUICES",
    "items": [
      {
        "id": "apple-milkshake",
        "name": "Apple Milkshake",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mango-milkshake",
        "name": "Mango Milkshake",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "banana-milkshake",
        "name": "Banana Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chikoo-milkshake",
        "name": "Chikoo Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "chocolate-milkshake",
        "name": "Chocolate Milkshake",
        "price": 35,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "strawberry-milkshake",
        "name": "Strawberry Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "rose-milkshake",
        "name": "Rose Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "sitaphal-milkshake",
        "name": "Sitaphal Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mix-fruit-milkshake",
        "name": "Mix Fruit Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "vanilla-milkshake",
        "name": "Vanilla Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "dry-fruit-milkshake",
        "name": "Dry Fruit Milkshake",
        "price": 50,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "oreo-milkshake",
        "name": "Oreo Milkshake",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "cold-coffee",
        "name": "Cold Coffee",
        "price": 60,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "lassi",
        "name": "Lassi",
        "price": 80,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/lassi.webp"
      },
      {
        "id": "mango-lassi",
        "name": "Mango Lassi",
        "price": 30,
        "isVeg": true,
        "isSpicy": false,
        "image": "/images/lassi.webp"
      },
      {
        "id": "mosambi-juice",
        "name": "Mosambi Juice",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "orange-juice",
        "name": "Orange Juice",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "pineapple-juice",
        "name": "Pineapple Juice",
        "price": 30,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "watermelon-juice",
        "name": "Watermelon Juice",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "anar-juice",
        "name": "Anar Juice",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "apple-juice",
        "name": "Apple Juice",
        "price": 50,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "mix-fruit-juice",
        "name": "Mix Fruit Juice",
        "price": 25,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "fresh-lime-juice",
        "name": "Fresh Lime Juice",
        "price": 35,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "ganga-jamuna",
        "name": "Ganga Jamuna",
        "price": 80,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "fruit-plate",
        "name": "Fruit Plate",
        "price": 90,
        "isVeg": true,
        "isSpicy": false
      },
      {
        "id": "fruit-salad",
        "name": "Fruit Salad",
        "price": 40,
        "isVeg": true,
        "isSpicy": false
      }
    ]
  }
];

