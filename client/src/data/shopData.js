
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