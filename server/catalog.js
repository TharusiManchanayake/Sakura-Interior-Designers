// Server-side price list.
// The browser only sends product ids and quantities. Prices are calculated
// HERE, so a customer can't change the price by editing the page.
// This mirrors the price formulas in your client shop data file
// (price = base + index * step). If you change prices there, change them here too.

const GROUPS = [
  {
    base: 120,
    step: 35,
    items: {
      sofas: "Sofas & Sectionals",
      armchairs: "Armchairs & Lounge Chairs",
      "dining-tables": "Dining Tables & Chairs",
      "coffee-tables": "Coffee Tables",
      "side-tables": "Side Tables",
      beds: "Beds & Bed Frames",
      desks: "Desks & Office Furniture",
      cabinets: "Cabinets & Sideboards",
      bookshelves: "Shelving & Bookcases",
      benches: "Benches & Ottomans",
    },
  },
  {
    base: 60,
    step: 20,
    items: {
      "pendant-lights": "Pendant Lights",
      chandeliers: "Chandeliers",
      "table-lamps": "Table Lamps",
      "floor-lamps": "Floor Lamps",
      "wall-lights": "Wall Lights",
      "decorative-lighting": "Decorative Lighting",
    },
  },
  {
    base: 25,
    step: 8,
    items: {
      baskets: "Baskets",
      "candles-holders": "Candles & Holders",
      clocks: "Clocks",
      "decorative-objects": "Decorative Objects",
      mirrors: "Mirrors",
      sculptures: "Sculptures",
      trays: "Trays",
      vases: "Vases",
    },
  },
  {
    base: 20,
    step: 6,
    items: {
      // Textiles
      blankets: "Blankets",
      curtains: "Curtains",
      cushions: "Cushions",
      rugs: "Rugs",
      throws: "Throws",
      // Wall decor
      artwork: "Artwork",
      "decorative-mirrors": "Decorative Mirrors",
      photography: "Photography",
      prints: "Prints",
      "wall-panels": "Wall Panels",
      // Plants
      "artificial-greenery": "Artificial Greenery",
      "indoor-plants": "Indoor Plants",
      planters: "Planters",
      "plant-stands": "Plant Stands",
      // Accessories
      books: "Books",
      "decorative-storage": "Decorative Storage",
      "kitchen-dining-accessories": "Kitchen & Dining Accessories",
      "tabletop-decor": "Tabletop Decor",
    },
  },
];

const SUBCATEGORIES = new Map();
for (const group of GROUPS) {
  for (const [slug, name] of Object.entries(group.items)) {
    SUBCATEGORIES.set(slug, { name, base: group.base, step: group.step });
  }
}

// Product ids look like "chandeliers-3" (subcategory slug + "-" + number 1..10)
export function getProduct(id) {
  const match = /^(.+)-(\d{1,2})$/.exec(id);
  if (!match) return null;

  const sub = SUBCATEGORIES.get(match[1]);
  const n = Number(match[2]);
  if (!sub || n < 1 || n > 10) return null;

  return {
    id,
    name: `${sub.name.split(" ")[0]} Design ${String(n).padStart(2, "0")}`,
    price: sub.base + n * sub.step,
  };
}