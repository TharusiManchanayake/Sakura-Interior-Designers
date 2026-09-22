// Finds hero images by file name, so you never have to edit the content files.
//
// Keep the hero image inside the page's own folder:
//   src/assets/portfolio/bedroom/bedroomhero.jpg
//   src/assets/portfolio/art-deco/artdecohero.jpg
//   src/assets/portfolio/coastal/coastalhero.jpg
//
// Naming rule: the page slug WITHOUT hyphens + "hero", all lowercase.
//   slug "bedroom"     -> bedroomhero.jpg
//   slug "living-room" -> livingroomhero.jpg
//   slug "art-deco"    -> artdecohero.jpg
// Any extension works (.jpg, .jpeg, .png, .webp, even .JPG).

const heroImages = import.meta.glob("../assets/portfolio/*/*hero.*", {
  eager: true,
  import: "default",
});

// "../assets/portfolio/bedroom/BedroomHero.JPG" -> "bedroomhero"
const nameOf = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[-_]/g, "");

function findHero(slug) {
  const wanted = `${slug.replace(/-/g, "").toLowerCase()}hero`;
  const match = Object.entries(heroImages).find(([path]) => nameOf(path) === wanted);
  return match ? match[1] : null; // null = no hero image for this page yet
}

export const getRoomHero = findHero;
export const getStyleHero = findHero;