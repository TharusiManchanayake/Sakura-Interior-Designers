const furnitureImages = import.meta.glob( 
  "../assets/shop/furniture/*/*.{jpg,jpeg,png,webp}", 
  { eager: true, import: "default" } 
); 
 
function getFurnitureImage(folder, prefix, index, ext = "jpg") { 
  const key = `../assets/shop/furniture/${folder}/${prefix}${index}.${ext}`; 
  return furnitureImages[key]; 
} 
 
export const shopCategories = [ 
  { slug: "furniture", name: "Furniture" }, 
  { slug: "lighting", name: "Lighting" }, 
  { slug: "decor", name: "Décor" }, 
  { slug: "textiles", name: "Textiles" }, 
  { slug: "wall-decor", name: "Wall Décor" }, 
  { slug: "plants", name: "Plants & Planters" }, 
  { slug: "accessories", name: "Accessories" }, 
]; 
 
export const furnitureSubcategories = [ 
  { slug: "sofas", name: "Sofas & Sectionals", folder: "sofa", prefix: "sofa" }, 
  { slug: "armchairs", name: "Armchairs & Lounge Chairs", folder: "armchair", prefix: "armchair" }, 
  { slug: "dining-tables", name: "Dining Tables & Chairs", folder: "diningtable", prefix: "diningtable" }, 
  { slug: "coffee-tables", name: "Coffee Tables", folder: "coffeetable", prefix: "coffeetable" }, 
  { slug: "side-tables", name: "Side Tables", folder: "sidetable", prefix: "sidetable" }, 
  { slug: "beds", name: "Beds & Bed Frames", folder: "beds", prefix: "bedframe" }, 
  { slug: "desks", name: "Desks & Office Furniture", folder: "officetable", prefix: "officetable" }, 
  { slug: "cabinets", name: "Cabinets & Sideboards", folder: "cabinets", prefix: "cabinet" }, 
  { slug: "bookshelves", name: "Shelving & Bookcases", folder: "bookshelves", prefix: "bookshelve" }, 
  { slug: "benches", name: "Benches & Ottomans", folder: "benches", prefix: "bench" }, 
]; 
 
export function getFurnitureProducts(subcategory) { 
  if (!subcategory.folder) return []; 
 
  const products = []; 
  for (let i = 1; i <= 10; i++) { 
    const image = getFurnitureImage(subcategory.folder, subcategory.prefix, i); 
    if (!image) continue;  
    products.push({ 
      id: `${subcategory.slug}-${i}`, 
      name: `${subcategory.name.split(" ")[0]} Design ${String(i).padStart(2, "0")}`, 
      price: 120 + i * 35, 
      image, 
    }); 
  } 
  return products; 
}


const lightingImages = import.meta.glob(
  "../assets/shop/lighting/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

function getLightingImage(folder, prefix, index, ext = "jpg") {
  const key = `../assets/shop/lighting/${folder}/${prefix}${index}.${ext}`;
  return lightingImages[key];
}

export const lightingSubcategories = [
  { slug: "pendant-lights", name: "Pendant Lights", folder: "pendantlights", prefix: "pendantlight" },
  { slug: "chandeliers", name: "Chandeliers", folder: "chandeliers", prefix: "chandelier" },
  { slug: "table-lamps", name: "Table Lamps", folder: "tablelamps", prefix: "tablelamp" },
  { slug: "floor-lamps", name: "Floor Lamps", folder: "floorlamps", prefix: "floorlamp" },
  { slug: "wall-lights", name: "Wall Lights", folder: "walllights", prefix: "walllight" },
  { slug: "decorative-lighting", name: "Decorative Lighting", folder: "decorativelighting", prefix: "decorativelighting" },
];

export function getLightingProducts(subcategory) {
  if (!subcategory.folder) return [];

  const products = [];
  for (let i = 1; i <= 10; i++) {
    const image = getLightingImage(subcategory.folder, subcategory.prefix, i);
    if (!image) continue;

    products.push({
      id: `${subcategory.slug}-${i}`,
      name: `${subcategory.name.split(" ")[0]} Design ${String(i).padStart(2, "0")}`,
      price: 60 + i * 20,
      image,
    });
  }

  return products;
}

// Décor — same bulk-import pattern
const decorImages = import.meta.glob(
  "../assets/shop/decor/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

function getDecorImage(folder, prefix, index, ext = "jpg") {
  const key = `../assets/shop/decor/${folder}/${prefix}${index}.${ext}`;
  return decorImages[key];
}

export const decorSubcategories = [
  { slug: "baskets", name: "Baskets", folder: "baskets", prefix: "basket" },
  { slug: "candles-holders", name: "Candles & Holders", folder: "candles&holders", prefix: "candle" },
  { slug: "clocks", name: "Clocks", folder: "clocks", prefix: "clock" },
  { slug: "decorative-objects", name: "Decorative Objects", folder: "decorativeObjects", prefix: "decoobject" },
  { slug: "mirrors", name: "Mirrors", folder: "mirrors", prefix: "mirror" },
  { slug: "sculptures", name: "Sculptures", folder: "sculptures", prefix: "sculpture" },
  { slug: "trays", name: "Trays", folder: "trays", prefix: "tray" },
  { slug: "vases", name: "Vases", folder: "vases", prefix: "vase" },
];

export function getDecorProducts(subcategory) {
  if (!subcategory.folder) return [];

  const products = [];
  for (let i = 1; i <= 10; i++) {
    const image = getDecorImage(subcategory.folder, subcategory.prefix, i);
    if (!image) continue;

    products.push({
      id: `${subcategory.slug}-${i}`,
      name: `${subcategory.name.split(" ")[0]} Design ${String(i).padStart(2, "0")}`,
      price: 25 + i * 8,
      image,
    });
  }
  return products;
}

// Textiles — same bulk-import pattern
const textilesImages = import.meta.glob(
  "../assets/shop/textiles/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

function getTextilesImage(folder, prefix, index, ext = "jpg") {
  const key = `../assets/shop/textiles/${folder}/${prefix}${index}.${ext}`;
  return textilesImages[key];
}

export const textilesSubcategories = [
  { slug: "blankets", name: "Blankets", folder: "blankets", prefix: "blanket" },
  { slug: "curtains", name: "Curtains", folder: "curtains", prefix: "curtain" },
  { slug: "cushions", name: "Cushions", folder: "cushions", prefix: "cushion" },
  { slug: "rugs", name: "Rugs", folder: "rugs", prefix: "rug" },
  { slug: "throws", name: "Throws", folder: "throws", prefix: "throw" },
];

export function getTextilesProducts(subcategory) {
  if (!subcategory.folder) return [];

  const products = [];
  for (let i = 1; i <= 10; i++) {
    const image = getTextilesImage(subcategory.folder, subcategory.prefix, i);
    if (!image) continue;

    products.push({
      id: `${subcategory.slug}-${i}`,
      name: `${subcategory.name.split(" ")[0]} Design ${String(i).padStart(2, "0")}`,
      price: 20 + i * 6,
      image,
    });
  }
  return products;
}

// Wall Decor — same bulk-import pattern
const wallDecorImages = import.meta.glob(
  "../assets/shop/walldecor/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

function getWallDecorImage(folder, prefix, index, ext = "jpg") {
  const key = `../assets/shop/walldecor/${folder}/${prefix}${index}.${ext}`;
  return wallDecorImages[key];
}

export const wallDecorSubcategories = [
  { slug: "artwork", name: "Artwork", folder: "artwork", prefix: "artwork" },
  { slug: "decorative-mirrors", name: "Decorative Mirrors", folder: "decorativemirrors", prefix: "decorativemirror" },
  { slug: "photography", name: "Photography", folder: "photography", prefix: "photography" },
  { slug: "prints", name: "Prints", folder: "prints", prefix: "print" },
  { slug: "wall-panels", name: "Wall Panels", folder: "wallpanels", prefix: "wallpanel" },
];

export function getWallDecorProducts(subcategory) {
  if (!subcategory.folder) return [];

  const products = [];
  for (let i = 1; i <= 10; i++) {
    const image = getWallDecorImage(subcategory.folder, subcategory.prefix, i);
    if (!image) continue;

    products.push({
      id: `${subcategory.slug}-${i}`,
      name: `${subcategory.name.split(" ")[0]} Design ${String(i).padStart(2, "0")}`,
      price: 20 + i * 6,
      image,
    });
  }
  return products;
}

// Plants & Planters — same bulk-import pattern
const plantsImages = import.meta.glob(
  "../assets/shop/plants/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

function getPlantsImage(folder, prefix, index, ext = "jpg") {
  const key = `../assets/shop/plants/${folder}/${prefix}${index}.${ext}`;
  return plantsImages[key];
}

export const plantsSubcategories = [
  { slug: "artificial-greenery", name: "Artificial Greenery", folder: "artificialgreenary", prefix: "artificialgreenary" },
  { slug: "indoor-plants", name: "Indoor Plants", folder: "indoorplants", prefix: "indoorplant" },
  { slug: "planters", name: "Planters", folder: "planters", prefix: "planter" },
  { slug: "plant-stands", name: "Plant Stands", folder: "plantstands", prefix: "plantstand" },
];

export function getPlantsProducts(subcategory) {
  if (!subcategory.folder) return [];

  const products = [];
  for (let i = 1; i <= 10; i++) {
    const image = getPlantsImage(subcategory.folder, subcategory.prefix, i);
    if (!image) continue;

    products.push({
      id: `${subcategory.slug}-${i}`,
      name: `${subcategory.name.split(" ")[0]} Design ${String(i).padStart(2, "0")}`,
      price: 20 + i * 6,
      image,
    });
  }
  return products;
}