const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Dinu\\.gemini\\antigravity\\brain\\4a789335-2593-4de4-bfc6-fc5342586742';
const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);
const keys = [
  'hero', 'misal_pav', 'masala_dosa', 'paneer_butter_masala',
  'chicken_biryani', 'momos', 'tandoori_chicken', 'thali',
  'about_interior', 'lassi'
];

for (const key of keys) {
  // Find the file that starts with key
  const file = files.find(f => f.startsWith(key + '_') && f.endsWith('.png'));
  if (file) {
    const normalizedName = key.replace(/_/g, '-') + '.webp'; 
    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, normalizedName));
    console.log(`Copied ${file} to ${normalizedName}`);
  }
}
