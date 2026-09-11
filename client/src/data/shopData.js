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