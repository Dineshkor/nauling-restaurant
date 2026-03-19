const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'nauling_restaurant_cursor_prompt.md');
const md = fs.readFileSync(mdPath, 'utf-8');

const menuSectionIndex = md.indexOf('Menu Data — All Items with Prices');
const orderingSectionIndex = md.indexOf('Ordering System — Cart → WhatsApp');

if (menuSectionIndex === -1 || orderingSectionIndex === -1) {
    console.error("Could not find delimiters in the md file");
    process.exit(1);
}

const menuMd = md.substring(menuSectionIndex, orderingSectionIndex);

const categories = [];

const lines = menuMd.split('\n');
let currentCategory = null;

const isSpicy = (name) => {
    const lower = name.toLowerCase();
    return lower.includes('schezwan') || lower.includes('kolhapuri') || lower.includes('tez') || lower.includes('chilli') || lower.includes('hot') || lower.includes('angara') || lower.includes('dragon');
};

const isNonVeg = (name, catName) => {
    const lowerName = name.toLowerCase();
    const lowerCat = catName.toLowerCase();
    if (lowerName.includes('chicken') || lowerName.includes('murg') || lowerName.includes('egg ') || lowerName.includes('omelette') || lowerName.includes('eggs')) return true;
    if (lowerCat.includes('chicken') || lowerCat.includes('egg')) return true;
    return false;
};

for (let line of lines) {
    line = line.trim();
    if (line.startsWith('### ')) {
        if (currentCategory && currentCategory.items.length > 0) categories.push(currentCategory);
        currentCategory = {
            id: line.replace('### ', '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            name: line.replace('### ', '').trim(),
            items: []
        };
    } else if (line.startsWith('|') && !line.includes('|Item|Price|') && !line.includes('|-|-|') && currentCategory) {
        let parts = line.split('|').map(s => s.trim()).filter(s => s);
        if (parts.length >= 2) {
            let name = parts[0];
            let priceStr = parts[1];
            
            // Multiple prices (e.g. Full/Half) 
            if (priceStr.includes('/')) {
                // Ignore half for now, or just take the first part
                priceStr = priceStr.split('/')[0];
            }
            let price = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
            
            if (isNaN(price)) continue;

            const is_veg = !isNonVeg(name, currentCategory.name);
            const is_spicy = isSpicy(name);

            // Images logic 
            let image = undefined;
            if (name.toLowerCase() === 'misal pav') image = '/images/misal-pav.webp';
            if (name.toLowerCase() === 'masala dosa') image = '/images/masala-dosa.webp';
            if (name.toLowerCase() === 'paneer butter masala') image = '/images/paneer-butter-masala.webp';
            if (name.toLowerCase() === 'chicken biryani') image = '/images/chicken-biryani.webp';
            if (name.toLowerCase().includes('momos')) image = '/images/momos.webp';
            if (name.toLowerCase().includes('murg tandoor')) image = '/images/tandoori-chicken.webp';
            // Thalis
            if (name.toLowerCase().includes('thali') || name.toLowerCase().includes('full indian thali')) image = '/images/thali.webp';
            if (name.toLowerCase().includes('lassi')) image = '/images/lassi.webp';
            if (name.toLowerCase().includes('dal makhani')) image = '/images/hero.webp'; // maybe not exactly matched but good
            
            // Generate a unique ID handle duplicates 
            let id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            let counter = 1;
            const originalId = id;
            while(currentCategory.items.find(i => i.id === id)) {
                id = `${originalId}-${counter}`;
                counter++;
            }

            currentCategory.items.push({
                id,
                name,
                price,
                isVeg: is_veg,
                isSpicy: is_spicy,
                image
            });
        }
    }
}
if (currentCategory && currentCategory.items.length > 0) categories.push(currentCategory);

let out = `export type MenuItem = {
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

export const menuData: MenuCategory[] = ${JSON.stringify(categories, null, 2)};
`;

const libPath = path.join(__dirname, 'src', 'lib');
if (!fs.existsSync(libPath)) {
    fs.mkdirSync(libPath, { recursive: true });
}
fs.writeFileSync(path.join(libPath, 'menuData.ts'), out);
console.log('Saved to src/lib/menuData.ts');
