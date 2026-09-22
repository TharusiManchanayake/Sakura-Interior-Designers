// Client reviews.
//
// Put the photos in:  src/assets/reviews/
// Name them review1.jpg, review2.jpg ... review10.jpg
// (.jpg, .jpeg, .png and .webp all work. The number matches the review's id.)
// A review without a photo still shows, with a soft placeholder.

const reviewImages = import.meta.glob("../assets/reviews/*.*", {
  eager: true,
  import: "default",
});

// "../assets/reviews/review3.jpg" -> 3   (also tolerates typos like "revew3.jpg")
function imageFor(id) {
  const match = Object.entries(reviewImages).find(([path]) => {
    const name = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .toLowerCase();
    const m = /^rev[a-z]*?(\d+)$/.exec(name);
    return m && Number(m[1]) === id;
  });
  return match ? match[1] : null;
}

const data = [
  {
    id: 1,
    name: "Emily Carter",
    category: "Home Design",
    client: "Young Homeowner",
    headline: "My home finally feels like me.",
    quote:
      "I wanted my home to feel warm, calm, and personal without making it look too decorated. Sakura Interiors understood exactly what I was looking for and helped me choose furniture, colours, and small details that work beautifully together. I especially loved how every corner was thoughtfully planned while still feeling comfortable and lived-in. It now feels like a space I truly belong in.",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    category: "Home Design",
    client: "Young Homeowner",
    headline: "Simple, beautiful, and so thoughtfully designed.",
    quote:
      "I had so many ideas for my home but had no idea how to bring them together. Sakura Interiors helped me create a beautiful space without losing my own personality. The colour palette, furniture choices, lighting, and décor all feel perfectly balanced. My favourite part is coming home and feeling instantly relaxed.",
  },
  {
    id: 3,
    name: "Sophie & James",
    category: "Family Home",
    client: "Young Couple with a Baby",
    headline: "A home that grew with our little family.",
    quote:
      "We wanted a home that felt stylish but also practical for life with our little baby. Sakura Interiors helped us create comfortable spaces with plenty of storage and room to move around. Everything feels soft, welcoming, and family-friendly without looking overly childlike. It has become a beautiful place for our little family to grow together.",
  },
  {
    id: 4,
    name: "Lily & Ethan",
    category: "Couple's Home",
    client: "Romantic Interior",
    headline: "A space made for two.",
    quote:
      "We wanted our home to feel intimate, warm, and romantic while still looking elegant and modern. Sakura Interiors created exactly that atmosphere through soft colours, warm lighting, beautiful textures, and carefully selected furniture. Every room feels connected, yet each has its own character. It truly feels like our own little world.",
  },
  {
    id: 5,
    name: "Amelia & Noah",
    category: "Couple's Home",
    client: "Romantic Interior",
    headline: "Our favourite place is home.",
    quote:
      "We wanted to create a home that reflected our relationship — comfortable, warm, and full of little details that mean something to us. Sakura Interiors helped us turn our ideas into a cohesive design. From the cosy living area to our peaceful bedroom, every space feels inviting and personal. We love how romantic the atmosphere feels without being overly formal.",
  },
  {
    id: 6,
    name: "Grace Wilson",
    category: "Home Office",
    client: "Young Professional",
    headline: "My workspace finally inspires me.",
    quote:
      "Working from home became much easier after redesigning my home office with Sakura Interiors. I wanted something clean and organised but still warm and creative. The layout gives me enough space to work comfortably, while the lighting, colours, and décor make the room feel inspiring. It is now one of my favourite rooms in the house.",
  },
  {
    id: 7,
    name: "Chloe Anderson",
    category: "Home Office",
    client: "Young Professional",
    headline: "Beautiful and practical.",
    quote:
      "I needed a home office that could keep me focused without feeling cold or boring. Sakura Interiors created a space that feels both professional and personal. The storage solutions helped me keep everything organised, while the furniture and décor gave the room a beautiful character. I actually enjoy spending time at my desk now.",
  },
  {
    id: 8,
    name: "Charlotte & Baby",
    category: "Nursery",
    client: "Mother & Baby",
    headline: "A gentle little world for my baby.",
    quote:
      "Creating a nursery for my baby was such a special experience, and Sakura Interiors made it even more meaningful. The room feels calm, comfortable, and safe, with soft colours, gentle lighting, practical storage, and beautiful little details. I love how peaceful it feels when we spend time together. It is truly a little space filled with warmth and love.",
  },
  {
    id: 9,
    name: "Oliver Thompson",
    category: "Home Office",
    client: "Young Professional",
    headline: "A workspace that works for me.",
    quote:
      "I wanted my home office to feel modern, organised, and comfortable without looking too serious. Sakura Interiors helped me make better use of the available space and choose pieces that fit my daily routine. The final result is clean, functional, and surprisingly relaxing. It is the kind of workspace where I can stay focused and still feel at home.",
  },
  {
    id: 10,
    name: "Emma Richardson",
    category: "Home Design",
    client: "Young Homeowner",
    headline: "Every little detail feels intentional.",
    quote:
      "What I loved most about working with Sakura Interiors was the attention to detail. Nothing in my home feels random anymore. From the furniture arrangement to the artwork, lighting, textures, and decorative pieces, everything feels connected. The final design is elegant but still comfortable and completely suited to the way I live. I couldn't be happier with how my home turned out.",
  },
];

export const reviews = data.map((r) => ({ ...r, image: imageFor(r.id) }));

// ["All", "Home Design", "Family Home", ...] in the order they first appear
export const reviewCategories = ["All", ...new Set(data.map((r) => r.category))];