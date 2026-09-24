// Data and image loading for the "Find My Style" quiz.
//
// Put your images in these folders (already matches the names you listed):
//   src/assets/portfolio/stylequiz1/   room photos, one per style      e.g. artdeco.jpg
//   src/assets/portfolio/stylequiz3/   materials, one per style        e.g. artdecomaterial.jpg
//   src/assets/portfolio/stylequiz4/   bedrooms, one per style         e.g. artdecobed.jpg
//   src/assets/portfolio/stylequiz5/   furniture, one per style        e.g. artdecofurniture.jpg
//   src/assets/portfolio/stylequiz6/   decor detail, one per style     e.g. artdecodecor.jpg
//   src/assets/portfolio/stylequiz8/   room types (practical question) e.g. bedroom.jpg
//
// File names don't need to match the slug exactly (hyphens, underscores, and
// case are all ignored), so "midcentury_modern.jpg" and "mid-century-modern"
// are treated as the same thing. A missing image just means that style's
// card is skipped on that question instead of breaking the page.

const strip = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function loadFolder(glob) {
  const map = {};
  for (const [path, mod] of Object.entries(glob)) {
    const fileName = path.split("/").pop().replace(/\.[^.]+$/, "");
    map[strip(fileName)] = mod;
  }
  return map;
}

const folders = {
  q1: loadFolder(
    import.meta.glob("../assets/portfolio/stylequiz1/*.*", { eager: true, import: "default" })
  ),
  q3: loadFolder(
    import.meta.glob("../assets/portfolio/stylequiz3/*.*", { eager: true, import: "default" })
  ),
  q4: loadFolder(
    import.meta.glob("../assets/portfolio/stylequiz4/*.*", { eager: true, import: "default" })
  ),
  q5: loadFolder(
    import.meta.glob("../assets/portfolio/stylequiz5/*.*", { eager: true, import: "default" })
  ),
  q6: loadFolder(
    import.meta.glob("../assets/portfolio/stylequiz6/*.*", { eager: true, import: "default" })
  ),
  q8: loadFolder(
    import.meta.glob("../assets/portfolio/stylequiz8/*.*", { eager: true, import: "default" })
  ),
};

export function imageFor(folderKey, slug, suffix = "") {
  const map = folders[folderKey];
  if (!map) return null;
  return map[strip(slug + suffix)] ?? null;
}

// 14 styles. If a style already has its own /portfolio/style/:slug page on
// your site, put that page's slug in sitePortfolioSlug so the result screen
// can link straight to it. Leave it null and the button links to /portfolio
// instead.
export const STYLES = [
  {
    slug: "art-deco",
    name: "Art Deco",
    mood: "Glamorous",
    sitePortfolioSlug: "art-deco",
    colors: [
      { hex: "#0F172A", name: "Deep Navy" },
      { hex: "#D4AF37", name: "Gold" },
      { hex: "#F5F0E6", name: "Ivory" },
      { hex: "#1C1C1C", name: "Black" },
      { hex: "#7C3F58", name: "Burgundy" },
    ],
  },
  {
    slug: "bohemian",
    name: "Bohemian",
    mood: "Free-spirited",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#C97B63", name: "Terracotta" },
      { hex: "#D9B99B", name: "Sand" },
      { hex: "#6B705C", name: "Olive" },
      { hex: "#8B5E3C", name: "Brown" },
      { hex: "#F4E8D1", name: "Cream" },
    ],
  },
  {
    slug: "coastal",
    name: "Coastal",
    mood: "Breezy",
    sitePortfolioSlug: "coastal",
    colors: [
      { hex: "#EAF4F4", name: "Sea Mist" },
      { hex: "#A8DADC", name: "Soft Aqua" },
      { hex: "#457B9D", name: "Ocean Blue" },
      { hex: "#F1E9DA", name: "Sand" },
      { hex: "#FFFFFF", name: "White" },
    ],
  },
  {
    slug: "contemporary",
    name: "Contemporary",
    mood: "Sleek",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#2F3437", name: "Charcoal" },
      { hex: "#E8E5DF", name: "Warm Gray" },
      { hex: "#F7F5F0", name: "Off-White" },
      { hex: "#8A817C", name: "Taupe" },
      { hex: "#B08968", name: "Warm Brown" },
    ],
  },
  {
    slug: "farmhouse",
    name: "Farmhouse",
    mood: "Cozy",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#F5F1E8", name: "Cream" },
      { hex: "#D8CFC0", name: "Beige" },
      { hex: "#6B705C", name: "Sage" },
      { hex: "#8B7355", name: "Wood Brown" },
      { hex: "#3F4640", name: "Charcoal" },
    ],
  },
  {
    slug: "glam",
    name: "Glam",
    mood: "Luxurious",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#F7E7E1", name: "Blush" },
      { hex: "#C9A227", name: "Champagne Gold" },
      { hex: "#3B2632", name: "Plum" },
      { hex: "#F5F1EA", name: "Ivory" },
      { hex: "#2B2528", name: "Black" },
    ],
  },
  {
    slug: "industrial",
    name: "Industrial",
    mood: "Raw",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#2B2B2B", name: "Charcoal" },
      { hex: "#555555", name: "Concrete Gray" },
      { hex: "#A0522D", name: "Rust" },
      { hex: "#8C735A", name: "Raw Wood" },
      { hex: "#D6D0C4", name: "Warm Concrete" },
    ],
  },
  {
    slug: "japandi",
    name: "Japandi",
    mood: "Calm",
    sitePortfolioSlug: "japandi",
    colors: [
      { hex: "#E8E1D5", name: "Natural Beige" },
      { hex: "#B7A99A", name: "Taupe" },
      { hex: "#5B5B4F", name: "Olive Gray" },
      { hex: "#2F302B", name: "Charcoal" },
      { hex: "#C8A97E", name: "Natural Wood" },
    ],
  },
  {
    slug: "mid-century-modern",
    name: "Mid-Century Modern",
    mood: "Retro",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#E07A5F", name: "Burnt Coral" },
      { hex: "#F2CC8F", name: "Mustard" },
      { hex: "#3D405B", name: "Deep Blue" },
      { hex: "#81B29A", name: "Sage Green" },
      { hex: "#F4F1DE", name: "Cream" },
    ],
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    mood: "Uncluttered",
    sitePortfolioSlug: "minimalist",
    colors: [
      { hex: "#FFFFFF", name: "White" },
      { hex: "#F2F0EB", name: "Warm White" },
      { hex: "#D6D2C4", name: "Beige Gray" },
      { hex: "#8C8982", name: "Soft Gray" },
      { hex: "#292929", name: "Black" },
    ],
  },
  {
    slug: "modern",
    name: "Modern",
    mood: "Clean",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#F5F3EF", name: "Warm White" },
      { hex: "#343434", name: "Charcoal" },
      { hex: "#B7A99A", name: "Taupe" },
      { hex: "#8C6F5A", name: "Mocha" },
      { hex: "#D8CFC4", name: "Stone" },
    ],
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    mood: "Light",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#F7F5F0", name: "White" },
      { hex: "#E5DED2", name: "Beige" },
      { hex: "#A3A99A", name: "Sage" },
      { hex: "#D4B483", name: "Light Wood" },
      { hex: "#343A40", name: "Charcoal" },
    ],
  },
  {
    slug: "traditional",
    name: "Traditional",
    mood: "Timeless",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#F4EFE6", name: "Ivory" },
      { hex: "#6B4F3A", name: "Walnut" },
      { hex: "#7A263A", name: "Burgundy" },
      { hex: "#2F4A3C", name: "Forest Green" },
      { hex: "#C5A46D", name: "Antique Gold" },
    ],
  },
  {
    slug: "transitional",
    name: "Transitional",
    mood: "Balanced",
    sitePortfolioSlug: null,
    colors: [
      { hex: "#F3F0E9", name: "Cream" },
      { hex: "#D8D1C5", name: "Greige" },
      { hex: "#6F756B", name: "Sage Gray" },
      { hex: "#4A4A45", name: "Charcoal" },
      { hex: "#A88B6A", name: "Warm Taupe" },
    ],
  },
];

// The practical, unscored question: which room are you designing?
export const QUIZ_ROOMS = [
  { slug: "bedroom", name: "Bedroom" },
  { slug: "dining-room", name: "Dining Room" },
  { slug: "home-office", name: "Home Office" },
  { slug: "living-room", name: "Living Room" },
  { slug: "nursery", name: "Nursery" },
  { slug: "patio", name: "Patio" },
];

export function roomImage(slug) {
  return imageFor("q8", slug);
}