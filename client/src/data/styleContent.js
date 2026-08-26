// One entry per style, keyed by the same slug used in portfolioData.js.
// Each entry has: title, tagline, intro, keywords, heroImage, and a list
// of sections. Each section is a heading + an array of "blocks".
//
// Block types the renderer understands:
//   { type: "text", text: "..." }              -> a paragraph
//   { type: "subheading", text: "..." }         -> a small bold heading
//   { type: "list", items: ["...", "..."] }     -> a bullet list
//   { type: "terms", items: [{term, desc}] }    -> a term + description list
//   { type: "quote", text: "..." }               -> a styled pull-quote
//
// To add a new style, copy the "art-deco" entry below, change the slug key,
// and swap in the written content. You don't need to touch any component.

import heroImg from "../assets/hero.png";
import artDeco1 from "../assets/portfolio/art-deco/art_deco1.jpg";
import artDeco2 from "../assets/portfolio/art-deco/art_deco2.jpg";
import artDeco3 from "../assets/portfolio/art-deco/art_deco3.jpg";
import artDeco4 from "../assets/portfolio/art-deco/art_deco4.jpg";
import artDeco5 from "../assets/portfolio/art-deco/art_deco5.jpg";
import artDeco6 from "../assets/portfolio/art-deco/art_deco6.jpg";
import artDeco7 from "../assets/portfolio/art-deco/art_deco7.jpg";
import artDeco8 from "../assets/portfolio/art-deco/art_deco8.jpg";

import bohemian1 from "../assets/portfolio/bohemian/bohemian1.jpg";
import bohemian2 from "../assets/portfolio/bohemian/bohemian2.jpg";
import bohemian3 from "../assets/portfolio/bohemian/bohemian3.jpg";
import bohemian4 from "../assets/portfolio/bohemian/bohemian4.jpg";
import bohemian5 from "../assets/portfolio/bohemian/bohemian5.jpg";
import bohemian6 from "../assets/portfolio/bohemian/bohemian6.jpg";
import bohemian7 from "../assets/portfolio/bohemian/bohemian7.jpg";
import bohemian8 from "../assets/portfolio/bohemian/bohemian8.jpg";

import coastal1 from "../assets/portfolio/coastal/coastal1.jpg";
import coastal2 from "../assets/portfolio/coastal/coastal2.jpg";
import coastal3 from "../assets/portfolio/coastal/coastal3.jpg";
import coastal4 from "../assets/portfolio/coastal/coastal4.jpg";
import coastal5 from "../assets/portfolio/coastal/coastal5.jpg";
import coastal6 from "../assets/portfolio/coastal/coastal6.jpg";
import coastal7 from "../assets/portfolio/coastal/coastal7.jpg";
import coastal8 from "../assets/portfolio/coastal/coastal8.jpg";

import contemporary1 from "../assets/portfolio/contemporary/contemporary1.jpg";
import contemporary2 from "../assets/portfolio/contemporary/contemporary2.jpg";
import contemporary3 from "../assets/portfolio/contemporary/contemporary3.jpg";
import contemporary4 from "../assets/portfolio/contemporary/contemporary4.jpg";
import contemporary5 from "../assets/portfolio/contemporary/contemporary5.jpg";
import contemporary6 from "../assets/portfolio/contemporary/contemporary6.jpg";
import contemporary7 from "../assets/portfolio/contemporary/contemporary7.jpg";
import contemporary8 from "../assets/portfolio/contemporary/contemporary8.jpg";

import farmhouse1 from "../assets/portfolio/farm_house/farmhouse1.jpg";
import farmhouse2 from "../assets/portfolio/farm_house/farmhouse2.jpg";
import farmhouse3 from "../assets/portfolio/farm_house/farmhouse3.jpg";
import farmhouse4 from "../assets/portfolio/farm_house/farmhouse4.jpg";
import farmhouse5 from "../assets/portfolio/farm_house/farmhouse5.jpg";
import farmhouse6 from "../assets/portfolio/farm_house/farmhouse6.jpg";
import farmhouse7 from "../assets/portfolio/farm_house/farmhouse7.jpg";
import farmhouse8 from "../assets/portfolio/farm_house/farmhouse8.jpg";

import glam1 from "../assets/portfolio/glam/glam1.jpg";
import glam2 from "../assets/portfolio/glam/glam2.jpg";
import glam3 from "../assets/portfolio/glam/glam3.jpg";
import glam4 from "../assets/portfolio/glam/glam4.jpg";
import glam5 from "../assets/portfolio/glam/glam5.jpg";
import glam6 from "../assets/portfolio/glam/glam6.jpg";
import glam7 from "../assets/portfolio/glam/glam7.jpg";
import glam8 from "../assets/portfolio/glam/glam8.jpg";

import industrial1 from "../assets/portfolio/industrial/industrial1.jpg";
import industrial2 from "../assets/portfolio/industrial/industrial2.jpg";
import industrial3 from "../assets/portfolio/industrial/industrial3.jpg";
import industrial4 from "../assets/portfolio/industrial/industrial4.jpg";
import industrial5 from "../assets/portfolio/industrial/industrial5.jpg";
import industrial6 from "../assets/portfolio/industrial/industrial6.jpg";
import industrial7 from "../assets/portfolio/industrial/industrial7.jpg";
import industrial8 from "../assets/portfolio/industrial/industrial8.jpg";

import japandi1 from "../assets/portfolio/japandi/japandi1.jpg";
import japandi2 from "../assets/portfolio/japandi/japandi2.jpg";
import japandi3 from "../assets/portfolio/japandi/japandi3.jpg";
import japandi4 from "../assets/portfolio/japandi/japandi4.jpg";
import japandi5 from "../assets/portfolio/japandi/japandi5.jpg";
import japandi6 from "../assets/portfolio/japandi/japandi6.jpg";
import japandi7 from "../assets/portfolio/japandi/japandi7.jpg";
import japandi8 from "../assets/portfolio/japandi/japandi8.jpg";


import midCentury1 from "../assets/portfolio/midcentury_modern/midcentury_modern1.webp";
import midCentury2 from "../assets/portfolio/midcentury_modern/midcentury_modern2.webp";
import midCentury3 from "../assets/portfolio/midcentury_modern/midcentury_modern3.jpg";
import midCentury4 from "../assets/portfolio/midcentury_modern/midcentury_modern4.jpg";
import midCentury5 from "../assets/portfolio/midcentury_modern/midcentury_modern5.jpg";
import midCentury6 from "../assets/portfolio/midcentury_modern/midcentury_modern6.jpg";


import minimalist1 from "../assets/portfolio/minimalist/minimalist1.jpg";
import minimalist2 from "../assets/portfolio/minimalist/minimalist2.webp";
import minimalist3 from "../assets/portfolio/minimalist/minimalist3.jpg";
import minimalist4 from "../assets/portfolio/minimalist/minimalist4.jpg";
import minimalist5 from "../assets/portfolio/minimalist/minimalist5.jpg";
import minimalist6 from "../assets/portfolio/minimalist/minimalist6.jpg";
import minimalist7 from "../assets/portfolio/minimalist/minimalist7.jpg";
import minimalist8 from "../assets/portfolio/minimalist/minimalist8.jpg";

import modern1 from "../assets/portfolio/modern_style/modern1.png";
import modern2 from "../assets/portfolio/modern_style/modern2.jpg";
import modern3 from "../assets/portfolio/modern_style/modern3.jpg";
import modern4 from "../assets/portfolio/modern_style/modern4.jpeg";
import modern5 from "../assets/portfolio/modern_style/modern5.jpg";
import modern6 from "../assets/portfolio/modern_style/modern6.jpg";
import modern7 from "../assets/portfolio/modern_style/modern7.jpg";
import modern8 from "../assets/portfolio/modern_style/modern8.jpg";

import scandinavian1 from "../assets/portfolio/scandinavian/scandinavian1.jpg";
import scandinavian2 from "../assets/portfolio/scandinavian/scandinavian2.jpg";
import scandinavian3 from "../assets/portfolio/scandinavian/scandinavian3.jpg";
import scandinavian4 from "../assets/portfolio/scandinavian/scandinavian4.jpg";
import scandinavian5 from "../assets/portfolio/scandinavian/scandinavian5.jpg";
import scandinavian6 from "../assets/portfolio/scandinavian/scandinavian6.jpg";
import scandinavian7 from "../assets/portfolio/scandinavian/scandinavian7.jpg";
import scandinavian8 from "../assets/portfolio/scandinavian/scandinavian8.jpg";

import traditional1 from "../assets/portfolio/traditional/traditional1.jpg";
import traditional2 from "../assets/portfolio/traditional/traditional2.jpg";
import traditional3 from "../assets/portfolio/traditional/traditional3.jpg";
import traditional4 from "../assets/portfolio/traditional/traditional4.jpg";
import traditional5 from "../assets/portfolio/traditional/traditional5.jpg";
import traditional6 from "../assets/portfolio/traditional/traditional6.jpg";
import traditional7 from "../assets/portfolio/traditional/traditional7.jpg";
import traditional8 from "../assets/portfolio/traditional/traditional8.jpg";


import transitional1 from "../assets/portfolio/transitional/transitional1.jpg";
import transitional2 from "../assets/portfolio/transitional/transitional2.jpg";
import transitional3 from "../assets/portfolio/transitional/transitional3.jpg";
import transitional4 from "../assets/portfolio/transitional/transitional4.jpg";
import transitional5 from "../assets/portfolio/transitional/transitional5.jpg";
import transitional6 from "../assets/portfolio/transitional/transitional6.jpg";
import transitional7 from "../assets/portfolio/transitional/transitional7.jpg";
import transitional8 from "../assets/portfolio/transitional/transitional8.jpg";

export const styleContent = {
  "art-deco": {
    title: "Art Deco",
    tagline: "Luxury Through Geometry",
    intro:
      "Art Deco is an interior design style defined by bold geometry, sophisticated symmetry, luxurious materials, and dramatic contrasts. Combining craftsmanship with modern design principles, Art Deco creates interiors that feel glamorous, confident, and timeless.",
    keywords: ["Luxury", "Geometry", "Symmetry", "Glamour", "Craftsmanship"],
    heroImage: heroImg,
    sections: [
      {
        heading: "01. Origin & History",
        image: artDeco1,
        blocks: [
          { type: "text", text: "Art Deco emerged in France during the early 20th century and became internationally influential during the 1920s and 1930s." },
          { type: "text", text: "The style takes its name from the 1925 Exposition Internationale des Arts Décoratifs et Industriels Modernes in Paris, an exhibition that showcased innovative decorative arts and design." },
          { type: "text", text: "Art Deco reflected the optimism and technological progress of the period. The growth of automobiles, aviation, ocean liners, skyscrapers, and modern manufacturing influenced its distinctive visual language." },
          { type: "text", text: "The style combined traditional craftsmanship with modern materials and industrial techniques. Its influence extended beyond interiors into architecture, furniture, jewelry, fashion, graphic design, and product design." },
          { type: "text", text: "Art Deco became particularly associated with the glamour of the Jazz Age, creating interiors that communicated sophistication, wealth, progress, and modernity." },
          { type: "subheading", text: "Historical Influence" },
          { type: "list", items: [
            "1920s: Emergence and rapid popularity",
            "1930s: Development into more streamlined and modern forms",
            "1940s onward: Decline as minimalist and functional design movements became more influential",
            "Modern era: Revival as designers reinterpret its luxurious aesthetic for contemporary interiors",
          ]},
        ],
      },
      {
        heading: "02. Color Palette",
        image: artDeco2,
        blocks: [
          { type: "text", text: "Art Deco is recognized for its dramatic contrast and luxurious color combinations." },
          { type: "text", text: "Traditional Art Deco interiors frequently combine dark tones with metallic accents and rich jewel colors." },
          { type: "subheading", text: "Signature Colors" },
          { type: "terms", items: [
            { term: "Black", desc: "Creates depth, drama, and sophistication." },
            { term: "Ivory and Cream", desc: "Provide balance and prevent darker interiors from feeling overwhelming." },
            { term: "Emerald Green", desc: "Adds richness and works particularly well with gold and brass." },
            { term: "Deep Navy", desc: "Creates an elegant alternative to black." },
            { term: "Burgundy", desc: "Introduces warmth and visual richness." },
            { term: "Deep Brown", desc: "Connects the interior with rich wood finishes." },
          ]},
          { type: "subheading", text: "Metallic Accents" },
          { type: "text", text: "Gold, brass, chrome, and silver are important components of the Art Deco palette." },
          { type: "text", text: "A classic combination would be: Black + Ivory + Champagne Gold" },
          { type: "text", text: "A more contemporary palette could be: Deep Emerald + Warm Ivory + Brass" },
          { type: "text", text: "The metallic elements should normally be used as accents rather than covering the entire interior." },
        ],
      },
      {
        heading: "03. Key Characteristics",
        image: artDeco3,
        blocks: [
          { type: "text", text: "The defining characteristic of Art Deco is its strong use of geometry and symmetry." },
          { type: "subheading", text: "Geometric Forms" },
          { type: "list", items: ["Diamonds", "Triangles", "Circles", "Rectangles", "Arches", "Hexagons", "Zigzag patterns", "Sunburst motifs", "Fan shapes"] },
          { type: "subheading", text: "Symmetry" },
          { type: "text", text: "Balanced compositions are central to the style. Furniture, lighting, wall panels, artwork, and decorative elements are often arranged symmetrically." },
          { type: "subheading", text: "Contrast" },
          { type: "text", text: "Art Deco frequently combines contrasting elements such as:" },
          { type: "list", items: ["Dark and light colors", "Matte and reflective surfaces", "Straight and curved forms", "Natural and metallic materials"] },
          { type: "subheading", text: "Decorative Detail" },
          { type: "text", text: "Unlike minimalist interiors, Art Deco embraces decoration. However, the decoration is usually controlled, structured, and intentional." },
          { type: "text", text: "The overall effect should feel luxurious without appearing chaotic." },
        ],
      },
      {
        heading: "04. Furniture & Spatial Layout",
        image: artDeco4,
        blocks: [
          { type: "text", text: "Art Deco furniture is designed to be both functional and visually striking." },
          { type: "subheading", text: "Common Furniture" },
          { type: "list", items: ["Curved sofas", "Velvet armchairs", "Geometric coffee tables", "Marble-top tables", "Sculptural side tables", "Elegant dining chairs", "Statement beds", "Mirrored cabinets", "Decorative consoles"] },
          { type: "text", text: "Furniture often features strong silhouettes, polished surfaces, curved edges, or geometric details." },
          { type: "subheading", text: "Preferred Materials" },
          { type: "list", items: ["Dark wood", "Velvet", "Leather", "Brass", "Chrome", "Glass", "Marble", "Lacquer"] },
          { type: "subheading", text: "Spatial Arrangement" },
          { type: "text", text: "Art Deco interiors benefit from carefully planned layouts." },
          { type: "text", text: "A large statement piece can act as the focal point of the room, for example: velvet sofa, then a geometric coffee table, then a statement rug, then sculptural lighting." },
          { type: "text", text: "The space should maintain sufficient open area around major furniture pieces so that the room feels luxurious rather than crowded." },
        ],
      },
      {
        heading: "05. Materials & Textures",
        image: artDeco5,
        blocks: [
          { type: "text", text: "Material selection is extremely important because Art Deco relies heavily on the perception of luxury." },
          { type: "subheading", text: "Marble" },
          { type: "text", text: "Marble can be used for:" },
          { type: "list", items: ["Flooring", "Coffee tables", "Countertops", "Wall features", "Fireplace surrounds"] },
          { type: "text", text: "White marble with dark veining works particularly well with gold and black elements." },
          { type: "subheading", text: "Velvet" },
          { type: "text", text: "Velvet provides softness and visual richness. It can be used for:" },
          { type: "list", items: ["Sofas", "Armchairs", "Dining chairs", "Curtains", "Headboards"] },
          { type: "subheading", text: "Brass & Metal" },
          { type: "text", text: "Brass is one of the strongest Art Deco materials. It can appear in:" },
          { type: "list", items: ["Handles", "Lighting", "Table frames", "Decorative trims", "Mirrors", "Furniture details"] },
          { type: "subheading", text: "Glass & Mirrors" },
          { type: "text", text: "Reflective surfaces increase the sense of glamour and can make interiors appear larger." },
          { type: "subheading", text: "Wood" },
          { type: "text", text: "Dark polished wood creates warmth and contrast against metallic and reflective surfaces." },
        ],
      },
      {
        heading: "06. Lighting & Decorative Elements",
        image: artDeco6,
        blocks: [
          { type: "text", text: "Lighting should be treated as an architectural and decorative feature, not simply a source of illumination." },
          { type: "subheading", text: "Statement Lighting" },
          { type: "list", items: ["Geometric chandeliers", "Sculptural pendant lights", "Brass wall sconces", "Decorative table lamps", "Floor lamps", "Frosted glass fixtures"] },
          { type: "text", text: "A large chandelier can become the focal point of a dining room, entrance hall, or living room." },
          { type: "subheading", text: "Lighting Characteristics" },
          { type: "list", items: ["Warm lighting", "Layered illumination", "Decorative fixtures", "Indirect lighting", "Accent lighting"] },
          { type: "text", text: "Warm lighting works particularly well with brass, marble, velvet, and dark wood." },
          { type: "subheading", text: "Decorative Elements" },
          { type: "list", items: ["Large mirrors", "Metallic sculptures", "Decorative wall panels", "Glass objects", "Architectural mouldings", "Symmetrical artwork"] },
        ],
      },
      {
        heading: "07. Patterns & Accessories",
        image: artDeco7,
        blocks: [
          { type: "text", text: "Patterns give Art Deco its recognizable visual identity." },
          { type: "subheading", text: "Signature Patterns" },
          { type: "terms", items: [
            { term: "Sunburst", desc: "A central point from which lines radiate outward." },
            { term: "Chevron", desc: "A repeated V-shaped pattern often used on floors, furniture, and walls." },
            { term: "Fan Motif", desc: "Inspired by the shape of a traditional fan and commonly used in mirrors and wall decorations." },
            { term: "Geometric Repetition", desc: "Repeated diamonds, triangles, circles, and lines create visual rhythm." },
          ]},
          { type: "subheading", text: "Accessories" },
          { type: "list", items: ["Geometric mirrors", "Sculptural objects", "Decorative vases", "Metallic trays", "Crystal ornaments", "Geometric rugs", "Statement artwork", "Brass decorative objects"] },
          { type: "text", text: "Accessories should be selected carefully. The goal is to create visual richness with controlled composition." },
        ],
      },
      {
        heading: "08. Modern Art Deco — Sakura Interior Designers",
        image: artDeco8,
        blocks: [
          { type: "text", text: "Modern Art Deco takes the traditional glamour of the style and combines it with contemporary simplicity." },
          { type: "text", text: "Instead of reproducing a historical Art Deco interior exactly, modern designers can reinterpret its key principles through:" },
          { type: "list", items: ["Clean architectural lines", "Simplified geometric patterns", "Contemporary furniture", "Neutral backgrounds", "Natural materials", "Minimal decorative elements", "Modern lighting", "Refined metallic accents"] },
          { type: "subheading", text: "Sakura's Design Approach" },
          { type: "text", text: "For Sakura Interior Designers, Art Deco can be presented as a balance between historical elegance and contemporary living." },
          { type: "text", text: "The design philosophy could be:" },
          { type: "quote", text: "Preserve the glamour. Refine the geometry. Reimagine the luxury." },
          { type: "text", text: "Sakura can combine traditional Art Deco elements such as brass, marble, velvet, symmetry, and geometric patterns with modern spatial planning and contemporary furniture." },
          { type: "text", text: "The result is an interior that feels luxurious without becoming overly decorative, allowing the timeless character of Art Deco to work naturally within modern homes and commercial spaces." },
        ],
      },
    ],
  },
  

      // <- this comma is essential
      "bohemian": {
    title: "Bohemian",
    tagline: "Freedom in Every Layer",
    intro:
      "Bohemian interior design celebrates individuality, creativity, cultural influences, and a relaxed approach to decorating. It combines rich colors, natural materials, handcrafted objects, textiles, plants, and meaningful personal pieces to create interiors that feel warm, expressive, and uniquely personal.",
    keywords: ["Free-Spirited", "Eclectic", "Natural", "Artistic", "Layered"],
    heroImage: bohemian1,
    sections: [
      {
        heading: "01. Origin & History",
        image: bohemian1,
        blocks: [
          { type: "text", text: "Bohemian interior design has its roots in the Bohemian lifestyle associated with artists, writers, musicians, and creative communities." },
          { type: "text", text: "The term Bohemian became associated with unconventional artists and creative individuals who preferred a lifestyle outside traditional social norms. Over time, this lifestyle influenced fashion, art, architecture, and interior decoration." },
          { type: "text", text: "Bohemian interiors developed through a combination of cultural influences, particularly from North Africa, the Middle East, Asia, India, and Europe." },
          { type: "text", text: "Travel, craftsmanship, textiles, and the collection of objects from different cultures became important elements of the style." },
          { type: "text", text: "Unlike formal design movements that follow strict rules, Bohemian design focuses on personal expression and individuality." },
          { type: "subheading", text: "Historical Influence" },
          { type: "list", items: [
            "Artists and creative communities: Encouraged unconventional and individualistic lifestyles",
            "Cultural exchange: Introduced textiles, patterns, crafts, and decorative influences from different regions",
            "Travel and collecting: Inspired interiors filled with meaningful and distinctive objects",
            "Modern era: Evolved into a relaxed style combining traditional handcrafted elements with contemporary interiors",
          ]},
        ],
      },
      {
        heading: "02. Color Palette",
        image: bohemian2,
        blocks: [
          { type: "text", text: "Bohemian interiors generally use warm, earthy, and nature-inspired colors, although the style allows considerable freedom in color selection." },
          { type: "subheading", text: "Base Colors" },
          { type: "terms", items: [
            { term: "Cream", desc: "Creates a soft and neutral foundation for the interior." },
            { term: "Beige", desc: "Provides warmth and works well with natural materials." },
            { term: "Sand", desc: "Adds an earthy and relaxed character." },
            { term: "Warm White", desc: "Keeps the space light while maintaining a warm atmosphere." },
            { term: "Tan and Light Brown", desc: "Connect the interior with natural wood and earthy materials." },
          ]},
          { type: "subheading", text: "Rich Accent Colors" },
          { type: "list", items: ["Terracotta", "Burnt Orange", "Mustard", "Olive Green", "Deep Red", "Burgundy", "Rust", "Dusty Rose", "Indigo"] },
          { type: "subheading", text: "Color Approach" },
          { type: "text", text: "Bohemian design does not require a strict color scheme. Several colors can be layered together while maintaining visual harmony." },
          { type: "text", text: "A warm combination could be: Warm Beige + Terracotta + Olive Green + Mustard" },
          { type: "text", text: "A richer combination could be: Cream + Rust + Burgundy + Deep Blue" },
        ],
      },
      {
        heading: "03. Key Characteristics",
        image: bohemian3,
        blocks: [
          { type: "text", text: "The defining quality of Bohemian design is its freedom from strict design rules. The style focuses on individuality, creativity, and a relaxed atmosphere." },
          { type: "subheading", text: "Eclectic Style" },
          { type: "text", text: "Different furniture styles, cultural influences, colors, patterns, and decorative objects can be combined within the same space." },
          { type: "subheading", text: "Layering" },
          { type: "list", items: ["Rugs", "Cushions", "Throws", "Curtains", "Plants", "Artwork", "Decorative objects"] },
          { type: "subheading", text: "Natural Elements" },
          { type: "text", text: "Natural materials and indoor plants play an important role in creating the relaxed and organic atmosphere associated with Bohemian interiors." },
          { type: "subheading", text: "Personal Expression" },
          { type: "text", text: "The room should reflect the personality and experiences of the people living there. Photographs, travel souvenirs, handmade objects, books, artwork, and inherited pieces can all become part of the interior." },
          { type: "subheading", text: "Imperfection" },
          { type: "text", text: "Bohemian design does not require everything to match perfectly. The combination of different textures, patterns, and objects creates the character of the space." },
        ],
      },
      {
        heading: "04. Furniture & Spatial Layout",
        image: bohemian4,
        blocks: [
          { type: "text", text: "Bohemian furniture is usually comfortable, relaxed, and informal. Different furniture pieces can be combined to create an eclectic and personal appearance." },
          { type: "subheading", text: "Common Furniture" },
          { type: "list", items: ["Low sofas", "Comfortable armchairs", "Floor cushions", "Rattan chairs", "Wooden tables", "Woven stools", "Vintage cabinets", "Daybeds", "Poufs", "Hammock chairs"] },
          { type: "text", text: "Furniture does not necessarily need to come from the same collection. Mixing different pieces helps create the relaxed and collected appearance associated with Bohemian interiors." },
          { type: "subheading", text: "Spatial Arrangement" },
          { type: "text", text: "Bohemian spaces often encourage relaxed social interaction. Instead of arranging furniture strictly around a television or formal focal point, seating can be organized around conversation areas, coffee tables, plants, artwork, and decorative features." },
          { type: "text", text: "Low-level furniture and floor cushions can make a room feel more relaxed, informal, and inviting." },
        ],
      },
      {
        heading: "05. Materials & Textures",
        image: bohemian5,
        blocks: [
          { type: "text", text: "Texture is one of the most important elements of Bohemian interiors. The style works particularly well when several natural materials and different tactile surfaces are combined." },
          { type: "subheading", text: "Common Materials" },
          { type: "list", items: ["Natural wood", "Rattan", "Wicker", "Bamboo", "Jute", "Cotton", "Linen", "Wool", "Leather", "Ceramic", "Terracotta"] },
          { type: "subheading", text: "Textiles" },
          { type: "list", items: ["Woven rugs", "Kilim-style rugs", "Patterned cushions", "Knitted blankets", "Linen curtains", "Embroidered fabrics", "Macramé"] },
          { type: "subheading", text: "Layered Textures" },
          { type: "text", text: "Combining rough and soft textures creates depth and visual interest within the interior." },
          { type: "text", text: "For example: jute rug, cotton cushions, woven chair, wooden table, linen curtains." },
        ],
      },
      {
        heading: "06. Lighting & Decorative Elements",
        image: bohemian6,
        blocks: [
          { type: "text", text: "Bohemian lighting should create a warm, relaxed, and atmospheric environment rather than a harsh or overly formal appearance." },
          { type: "subheading", text: "Lighting Options" },
          { type: "list", items: ["Woven pendant lights", "Rattan lamps", "Floor lamps", "Table lamps", "Lanterns", "String lights", "Candle-style lighting", "Warm wall lights"] },
          { type: "subheading", text: "Lighting Characteristics" },
          { type: "list", items: ["Warm lighting", "Soft illumination", "Layered lighting", "Decorative fixtures", "Ambient lighting"] },
          { type: "text", text: "Warm, low-intensity lighting works particularly well with natural wood, woven materials, textiles, and plants." },
          { type: "subheading", text: "Decorative Elements" },
          { type: "list", items: ["Macramé wall hangings", "Handmade ceramics", "Woven baskets", "Decorative mirrors", "Vintage artwork", "Handcrafted sculptures", "Wooden objects", "Travel-inspired decorations"] },
          { type: "text", text: "Decorative items should feel collected and meaningful, helping the interior express the personality of the people who live there." },
        ],
      },
      {
        heading: "07. Patterns, Plants & Accessories",
        image: bohemian7,
        blocks: [
          { type: "text", text: "Patterns, plants, and personal accessories give Bohemian interiors their distinctive visual character." },
          { type: "subheading", text: "Common Patterns" },
          { type: "terms", items: [
            { term: "Tribal-Inspired Patterns", desc: "Add cultural character and visual interest to textiles and decorative elements." },
            { term: "Geometric Patterns", desc: "Create structure while complementing the relaxed nature of the style." },
            { term: "Floral Motifs", desc: "Introduce an organic and natural quality." },
            { term: "Paisley", desc: "Adds a decorative and traditional influence." },
            { term: "Moroccan-Inspired Patterns", desc: "Bring cultural richness and decorative detail." },
            { term: "Stripes and Abstract Patterns", desc: "Create variety and help build layered visual compositions." },
          ]},
          { type: "subheading", text: "Indoor Plants" },
          { type: "list", items: ["Monstera", "Pothos", "Snake plants", "Fiddle-leaf fig", "Hanging plants", "Palm varieties", "Ferns"] },
          { type: "subheading", text: "Accessories" },
          { type: "list", items: ["Woven baskets", "Decorative cushions", "Vintage books", "Ceramic vases", "Handmade pottery", "Mirrors", "Artwork", "Textiles", "Personal collections"] },
          { type: "text", text: "Different patterns can be combined, but sharing one or two colors helps maintain visual balance within the space." },
        ],
      },
      {
        heading: "08. Modern Bohemian — Sakura Interior Designers",
        image: bohemian8,
        blocks: [
          { type: "text", text: "Modern Bohemian design combines the free-spirited character of traditional Bohemian interiors with contemporary simplicity." },
          { type: "text", text: "Instead of filling the room with too many objects, modern Bohemian design focuses on carefully selected pieces that provide personality while keeping the space functional." },
          { type: "subheading", text: "Modern Approach" },
          { type: "list", items: ["Neutral base colors", "Natural materials", "Contemporary furniture", "Selected vintage pieces", "Layered textiles", "Indoor plants", "Handmade decorations", "Warm lighting", "Controlled patterns"] },
          { type: "subheading", text: "Sakura's Design Approach" },
          { type: "text", text: "For Sakura Interior Designers, Bohemian design can be presented as a balance between freedom, personal expression, and contemporary functionality." },
          { type: "text", text: "The design philosophy could be:" },
          { type: "quote", text: "Embrace individuality. Layer natural beauty. Create spaces with character." },
          { type: "text", text: "Sakura can combine natural materials, layered textiles, indoor plants, handcrafted decorations, contemporary furniture, and carefully selected vintage pieces to create a modern Bohemian interior." },
          { type: "text", text: "The result is a warm and expressive interior that feels personal without becoming visually overwhelming, allowing the free-spirited character of Bohemian design to work naturally within modern homes and commercial spaces." },
        ],
      },
    ],
  },

    "coastal": {
    title: "Coastal",
    tagline: "A Breath of the Sea",
    intro:
      "Coastal interior design brings the relaxed beauty of the seaside into the home. Inspired by natural light, ocean landscapes, sandy shores, and coastal materials, this style creates spaces that feel fresh, comfortable, open, and effortlessly elegant.",
    keywords: ["Calm", "Natural", "Light", "Airy", "Relaxed"],
    heroImage: heroImg,
    sections: [
      {
        heading: "01. Origin & History",
        image: coastal1,
        blocks: [
          { type: "text", text: "Coastal interior design developed from the architectural and decorative traditions of homes located near the sea." },
          { type: "text", text: "Its influences can be seen in Mediterranean, American coastal, New England, tropical, and European seaside architecture. Historically, coastal homes were designed to respond to their environment by maximizing natural ventilation, sunlight, and views." },
          { type: "text", text: "The style became increasingly popular as seaside homes and holiday properties became associated with relaxation and leisure." },
          { type: "text", text: "Traditional coastal interiors often used simple furniture, natural materials, light colors, and practical fabrics that suited life near the ocean." },
          { type: "text", text: "Contemporary Coastal design has evolved beyond the traditional blue-and-white beach aesthetic. Modern interpretations focus on natural textures, sophisticated neutrals, architectural simplicity, and a strong connection with the surrounding landscape." },
          { type: "subheading", text: "Historical Influences" },
          { type: "list", items: ["Mediterranean seaside architecture", "American coastal homes", "New England coastal traditions", "Tropical architecture", "European seaside homes", "Modern resort and holiday architecture"] },
        ],
      },
      {
        heading: "02. Color Palette",
        image: coastal2,
        blocks: [
          { type: "text", text: "The Coastal color palette is inspired directly by the sea, sky, sand, and natural coastal landscape." },
          { type: "subheading", text: "Base Colors" },
          { type: "terms", items: [
            { term: "Soft White", desc: "Creates a bright and clean foundation." },
            { term: "Ivory", desc: "Adds warmth while maintaining a light atmosphere." },
            { term: "Cream", desc: "Creates a soft and comfortable neutral base." },
            { term: "Beige", desc: "Introduces warmth and connects the interior with natural materials." },
            { term: "Sand", desc: "Reflects the natural tones of coastal landscapes." },
            { term: "Light Gray", desc: "Provides a subtle contemporary neutral." },
          ]},
          { type: "subheading", text: "Ocean-Inspired Colors" },
          { type: "list", items: ["Sea Blue", "Sky Blue", "Aqua", "Seafoam Green", "Soft Teal", "Deep Ocean Blue"] },
          { type: "subheading", text: "Natural Accents" },
          { type: "list", items: ["Sandy Beige", "Driftwood Brown", "Warm Taupe", "Natural Green"] },
          { type: "text", text: "A classic combination is: Soft White + Ocean Blue + Natural Wood" },
          { type: "text", text: "A more contemporary combination could be: Warm Beige + Seafoam + Light Oak" },
          { type: "text", text: "The colors should generally remain soft and balanced rather than extremely saturated." },
        ],
      },
      {
        heading: "03. Key Characteristics",
        image: coastal3,
        blocks: [
          { type: "text", text: "The main objective of Coastal design is to create a light, comfortable, and relaxed atmosphere." },
          { type: "subheading", text: "Natural Light" },
          { type: "text", text: "Large windows, glass doors, and open layouts help maximize sunlight and create a strong connection with the outdoors." },
          { type: "subheading", text: "Airy Spaces" },
          { type: "text", text: "Coastal interiors typically avoid visual overcrowding. Furniture and decoration are carefully selected to maintain a sense of openness." },
          { type: "subheading", text: "Natural Materials" },
          { type: "list", items: ["Wood", "Rattan", "Linen", "Cotton", "Jute", "Stone", "Ceramics"] },
          { type: "subheading", text: "Ocean Inspiration" },
          { type: "list", items: ["Ocean colors", "Sand", "Driftwood", "Seashells", "Coastal vegetation", "Natural stone"] },
          { type: "subheading", text: "Relaxed Elegance" },
          { type: "text", text: "Coastal design should feel comfortable and welcoming without looking overly formal." },
          { type: "subheading", text: "Connection With Nature" },
          { type: "text", text: "Views, plants, natural materials, and large openings can visually connect the interior with the outdoors." },
        ],
      },
      {
        heading: "04. Furniture & Spatial Layout",
        image: coastal4,
        blocks: [
          { type: "text", text: "Coastal furniture is generally comfortable, practical, and visually light." },
          { type: "subheading", text: "Common Furniture" },
          { type: "list", items: ["Linen sofas", "Slipcovered chairs", "Rattan armchairs", "Light wooden tables", "Woven stools", "Natural wood beds", "Cane furniture", "Simple console tables", "Comfortable lounge chairs"] },
          { type: "text", text: "Furniture often uses natural or lightly finished wood rather than heavy, dark finishes." },
          { type: "subheading", text: "Spatial Arrangement" },
          { type: "text", text: "The layout should encourage relaxation, conversation, natural movement, and a strong connection with the outdoors." },
          { type: "list", items: ["Large windows", "Gardens", "Balconies", "Terraces", "Ocean views"] },
          { type: "text", text: "An open-plan living and dining area works particularly well for Coastal interiors." },
          { type: "subheading", text: "Key Principle" },
          { type: "text", text: "Keep the space open and allow natural light to become part of the design." },
        ],
      },
      {
        heading: "05. Materials & Textures",
        image: coastal5,
        blocks: [
          { type: "text", text: "Natural materials are essential for creating an authentic Coastal interior. Different natural textures can be layered to create depth while maintaining a relaxed atmosphere." },
          { type: "subheading", text: "Wood" },
          { type: "text", text: "Light woods such as oak, ash, pine, and natural teak can provide warmth while maintaining the light character of the room." },
          { type: "list", items: ["Oak", "Ash", "Pine", "Natural teak"] },
          { type: "subheading", text: "Natural Fibers" },
          { type: "list", items: ["Rattan", "Wicker", "Jute", "Seagrass", "Bamboo"] },
          { type: "subheading", text: "Fabrics" },
          { type: "list", items: ["Linen", "Cotton", "Canvas", "Lightweight woven fabrics"] },
          { type: "subheading", text: "Stone" },
          { type: "list", items: ["Flooring", "Countertops", "Feature walls", "Bathrooms", "Fireplace surrounds"] },
          { type: "subheading", text: "Layered Texture" },
          { type: "text", text: "A Coastal interior becomes more interesting when different natural textures are layered." },
          { type: "text", text: "For example: linen sofa, jute rug, rattan chair, natural wood table, ceramic accessories." },
        ],
      },
      {
        heading: "06. Lighting & Decorative Elements",
        image: coastal6,
        blocks: [
          { type: "text", text: "Lighting should emphasize the natural brightness of the space and help maintain the fresh and relaxed character of Coastal interiors." },
          { type: "subheading", text: "Natural Lighting" },
          { type: "text", text: "Large windows and glass doors are extremely valuable in Coastal interiors. Where possible, window treatments should allow natural light to enter while maintaining privacy." },
          { type: "subheading", text: "Artificial Lighting" },
          { type: "list", items: ["Rattan pendant lights", "Woven chandeliers", "Ceramic table lamps", "Natural wood floor lamps", "Simple wall sconces", "Soft recessed lighting"] },
          { type: "text", text: "Warm-white lighting can create a comfortable evening atmosphere." },
          { type: "subheading", text: "Decorative Elements" },
          { type: "list", items: ["Ceramic vases", "Woven baskets", "Natural sculptures", "Glass objects", "Coastal artwork", "Organic-shaped mirrors", "Dried grasses", "Natural wood objects"] },
          { type: "text", text: "The decoration should be subtle. The goal is to suggest the coast rather than literally recreate a beach." },
        ],
      },
      {
        heading: "07. Patterns & Coastal Accessories",
        image: coastal7,
        blocks: [
          { type: "text", text: "Patterns and accessories help introduce subtle references to the maritime environment while maintaining the relaxed character of Coastal design." },
          { type: "subheading", text: "Common Patterns" },
          { type: "list", items: ["Soft stripes", "Organic wave patterns", "Simple geometric patterns", "Botanical prints", "Subtle nautical patterns", "Textured woven patterns"] },
          { type: "subheading", text: "Accessories" },
          { type: "list", items: ["Ceramic vessels", "Woven baskets", "Linen cushions", "Textured throws", "Driftwood-inspired pieces", "Glass decorations", "Natural stone objects", "Coastal landscape artwork"] },
          { type: "subheading", text: "Avoid Overuse" },
          { type: "text", text: "A sophisticated Coastal interior should avoid excessive use of obvious beach decorations." },
          { type: "list", items: ["Too many seashells", "Large anchors", "Artificial fishing nets", "Excessive nautical signs", "Overly themed accessories"] },
          { type: "text", text: "Modern Coastal design is about creating the atmosphere of the coast rather than decorating with beach objects everywhere." },
        ],
      },
      {
        heading: "08. Modern Coastal — Sakura Interior Designers",
        image: coastal8,
        blocks: [
          { type: "text", text: "Modern Coastal design combines the relaxed character of traditional Coastal interiors with contemporary architecture and refined minimalism." },
          { type: "text", text: "Instead of relying heavily on blue-and-white decoration, modern Coastal interiors use natural materials, soft colors, clean furniture, organic textures, and minimal decoration." },
          { type: "subheading", text: "Modern Approach" },
          { type: "list", items: ["Warm neutrals", "Natural wood", "Soft blue accents", "Large windows", "Clean furniture", "Organic textures", "Minimal decoration", "Natural stone", "Indoor plants"] },
          { type: "subheading", text: "Sakura's Design Approach" },
          { type: "text", text: "Sakura Interior Designers can interpret Coastal design around the idea of bringing the feeling of the sea into everyday living." },
          { type: "text", text: "The design philosophy could be:" },
          { type: "quote", text: "Bring the calm of the coast home." },
          { type: "text", text: "Sakura can combine natural materials, soft ocean-inspired colors, abundant daylight, comfortable furniture, and open spatial planning to create interiors that feel peaceful and timeless." },
          { type: "text", text: "For contemporary homes, the Coastal style can also be adapted to tropical environments by incorporating local natural materials, indoor-outdoor spaces, ventilation, greenery, and climate-responsive design." },
          { type: "text", text: "This creates a fresh, relaxed, resort-like atmosphere without sacrificing modern functionality." },
        ],
      },
    ],
  },

"contemporary": {
  title: "Contemporary",
  tagline: "The Art of Modern Living",
  intro:
    "Contemporary interior design reflects the way people live today. It combines clean architectural forms, carefully selected materials, functional spaces, sophisticated lighting, and refined simplicity to create interiors that feel modern, comfortable, and timeless.",
  keywords: ["Modern", "Refined", "Functional", "Minimal", "Timeless"],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & Evolution",
      image: contemporary1,
      blocks: [
        {
          type: "text",
          text: "Unlike many established historical design movements, Contemporary design does not have one specific starting point or fixed historical period."
        },
        {
          type: "text",
          text: "The word contemporary means existing or happening at the present time. Therefore, Contemporary interior design continuously evolves as architecture, technology, materials, lifestyles, and cultural preferences change."
        },
        {
          type: "text",
          text: "Contemporary design developed from the influence of several modern design movements, including Modernism, Minimalism, Mid-Century Modernism, and Industrial design."
        },
        {
          type: "text",
          text: "While Modern design generally refers to a particular historical design movement, Contemporary design is more flexible and responds to current design trends and lifestyles."
        },
        {
          type: "text",
          text: "Today, Contemporary interiors often combine minimalist principles with warmth, natural materials, smart technology, sustainable choices, and comfortable furniture."
        },
        {
          type: "subheading",
          text: "Evolution"
        },
        {
          type: "list",
          items: [
            "Early Modern Influence: Functional architecture and simplicity",
            "Late 20th Century: Minimal forms and open spaces",
            "Early 21st Century: Technology, sustainability, and material experimentation",
            "Today: Warm minimalism, smart homes, natural materials, flexible spaces, and personalized interiors"
          ]
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: contemporary2,
      blocks: [
        {
          type: "text",
          text: "Contemporary interiors usually begin with a neutral foundation. The focus is on creating a sophisticated environment through carefully controlled colors, tones, textures, and materials."
        },
        {
          type: "subheading",
          text: "Primary Colors"
        },
        {
          type: "terms",
          items: [
            {
              term: "White",
              desc: "Creates a clean and bright foundation."
            },
            {
              term: "Off-White",
              desc: "Provides softness while maintaining a light appearance."
            },
            {
              term: "Cream",
              desc: "Adds warmth to neutral interiors."
            },
            {
              term: "Beige",
              desc: "Creates a comfortable and natural foundation."
            },
            {
              term: "Gray",
              desc: "Provides a sophisticated contemporary neutral."
            },
            {
              term: "Charcoal",
              desc: "Adds depth and contrast."
            },
            {
              term: "Black",
              desc: "Creates definition and visual strength."
            }
          ]
        },
        {
          type: "subheading",
          text: "Accent Colors"
        },
        {
          type: "list",
          items: [
            "Olive",
            "Sage",
            "Deep Blue",
            "Terracotta",
            "Rust",
            "Muted Gold",
            "Warm Brown"
          ]
        },
        {
          type: "subheading",
          text: "Color Strategy"
        },
        {
          type: "text",
          text: "The objective is not to use many colors. Instead, designers usually select a small number of colors and create depth through tone, texture, and material variation."
        },
        {
          type: "text",
          text: "A warm combination could be: Warm White + Beige + Oak + Charcoal"
        },
        {
          type: "text",
          text: "A more dramatic combination could be: Light Gray + Graphite + Walnut + Muted Gold"
        },
        {
          type: "text",
          text: "This creates a sophisticated environment without visual clutter."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: contemporary3,
      blocks: [
        {
          type: "text",
          text: "Contemporary design is primarily defined by simplicity, functionality, proportion, and visual clarity."
        },
        {
          type: "subheading",
          text: "Clean Lines"
        },
        {
          type: "text",
          text: "Furniture and architecture usually feature clear and uncomplicated forms."
        },
        {
          type: "subheading",
          text: "Open Spaces"
        },
        {
          type: "text",
          text: "Open-plan layouts are common, allowing living, dining, and kitchen areas to connect naturally."
        },
        {
          type: "subheading",
          text: "Minimal Decoration"
        },
        {
          type: "text",
          text: "Decorative elements are carefully selected instead of filling every available surface."
        },
        {
          type: "subheading",
          text: "Functional Design"
        },
        {
          type: "text",
          text: "Every major element should serve a purpose while contributing to the overall appearance of the interior."
        },
        {
          type: "subheading",
          text: "Visual Balance"
        },
        {
          type: "list",
          items: [
            "Solid and open areas",
            "Light and dark tones",
            "Hard and soft textures",
            "Large and small furniture",
            "Natural and artificial light"
          ]
        },
        {
          type: "subheading",
          text: "Technology"
        },
        {
          type: "text",
          text: "Contemporary spaces can incorporate smart-home systems, integrated appliances, automated lighting, and modern entertainment systems."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: contemporary4,
      blocks: [
        {
          type: "text",
          text: "Contemporary furniture combines comfort, functionality, and clean visual forms."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Modular sofas",
            "Low-profile sofas",
            "Sculptural armchairs",
            "Minimal coffee tables",
            "Floating cabinets",
            "Platform beds",
            "Sleek dining tables",
            "Built-in storage",
            "Ergonomic furniture"
          ]
        },
        {
          type: "text",
          text: "Furniture should generally have a strong silhouette without excessive decoration."
        },
        {
          type: "subheading",
          text: "Spatial Planning"
        },
        {
          type: "text",
          text: "Contemporary interiors often use open-plan layouts that allow different areas of the home to connect naturally."
        },
        {
          type: "list",
          items: [
            "Living area",
            "Dining area",
            "Kitchen",
            "Outdoor or garden area"
          ]
        },
        {
          type: "text",
          text: "Large windows, glass partitions, open staircases, and consistent flooring can help create visual connections between different areas."
        },
        {
          type: "subheading",
          text: "Functional Zones"
        },
        {
          type: "text",
          text: "Although the overall space may be open, furniture and lighting can subtly define different zones for living, dining, working, or relaxing."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: contemporary5,
      blocks: [
        {
          type: "text",
          text: "Contemporary design uses a combination of natural and engineered materials to create a refined and balanced interior."
        },
        {
          type: "subheading",
          text: "Common Materials"
        },
        {
          type: "list",
          items: [
            "Natural wood",
            "Marble",
            "Natural stone",
            "Concrete",
            "Glass",
            "Metal",
            "Steel",
            "Ceramic",
            "Leather",
            "High-quality fabrics"
          ]
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood adds warmth to otherwise minimal interiors."
        },
        {
          type: "list",
          items: [
            "Oak",
            "Walnut",
            "Ash",
            "Teak"
          ]
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Kitchen surfaces",
            "Flooring",
            "Feature walls",
            "Bathrooms",
            "Fireplaces"
          ]
        },
        {
          type: "subheading",
          text: "Glass"
        },
        {
          type: "text",
          text: "Glass helps create visual openness and allows natural light to move between spaces."
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "text",
          text: "Black metal, stainless steel, brushed brass, and aluminum can provide contemporary detailing."
        },
        {
          type: "subheading",
          text: "Texture"
        },
        {
          type: "text",
          text: "Because Contemporary interiors often use neutral colors, texture becomes important for creating visual depth."
        },
        {
          type: "text",
          text: "For example: Smooth stone + natural wood + soft fabric + textured rug + matte metal"
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: contemporary6,
      blocks: [
        {
          type: "text",
          text: "Lighting is a major component of Contemporary interior design. Rather than simply placing decorative lamps around a room, lighting can be integrated into the architecture."
        },
        {
          type: "subheading",
          text: "Lighting Types"
        },
        {
          type: "terms",
          items: [
            {
              term: "Ambient Lighting",
              desc: "Provides general illumination throughout the space."
            },
            {
              term: "Task Lighting",
              desc: "Provides focused light for activities such as cooking, reading, or working."
            },
            {
              term: "Accent Lighting",
              desc: "Highlights artwork, architectural features, or selected materials."
            }
          ]
        },
        {
          type: "subheading",
          text: "Popular Fixtures"
        },
        {
          type: "list",
          items: [
            "Linear pendant lights",
            "Recessed lights",
            "Track lighting",
            "Architectural LED lighting",
            "Sculptural floor lamps",
            "Minimal wall lights",
            "Under-cabinet lighting"
          ]
        },
        {
          type: "subheading",
          text: "Architectural Lighting"
        },
        {
          type: "list",
          items: [
            "Ceilings",
            "Staircases",
            "Shelving",
            "Cabinets",
            "Wall panels",
            "Headboards"
          ]
        },
        {
          type: "text",
          text: "Integrated LED lighting in these areas can create a clean and sophisticated appearance."
        },
        {
          type: "subheading",
          text: "Natural Light"
        },
        {
          type: "text",
          text: "Large windows and glass doors should be used whenever possible to maximize daylight and strengthen the connection between the interior and exterior."
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      image: contemporary7,
      blocks: [
        {
          type: "text",
          text: "Contemporary interiors generally use fewer decorative objects, but each selected piece should have visual importance."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Minimal geometric patterns",
            "Abstract forms",
            "Linear patterns",
            "Subtle textures"
          ]
        },
        {
          type: "text",
          text: "Patterns should generally remain restrained so that they support the overall simplicity of the interior."
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "text",
          text: "Large-scale artwork can become a major focal point within a Contemporary interior."
        },
        {
          type: "list",
          items: [
            "Abstract paintings",
            "Contemporary photography",
            "Minimalist artwork",
            "Sculptural art",
            "Large monochrome pieces"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Sculptures",
            "Ceramic objects",
            "Decorative books",
            "Minimal vases",
            "Indoor plants",
            "Statement mirrors"
          ]
        },
        {
          type: "text",
          text: "The principle is: Less decoration, greater impact."
        }
      ]
    },

    {
      heading: "08. Modern Contemporary — Sakura Interior Designers",
      image: contemporary8,
      blocks: [
        {
          type: "text",
          text: "Contemporary design is particularly suitable for Sakura Interior Designers because it provides flexibility to respond to modern lifestyles, technology, architecture, and individual client requirements."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Clean architecture",
            "Natural materials",
            "Smart-home technology",
            "Sustainable materials",
            "Flexible furniture",
            "Integrated storage",
            "Energy-efficient lighting",
            "Indoor greenery",
            "Comfortable spaces"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura can position Contemporary design as an approach rather than a rigid style."
        },
        {
          type: "text",
          text: "The design philosophy could be:"
        },
        {
          type: "quote",
          text: "Designed for today. Created to last."
        },
        {
          type: "text",
          text: "The objective is to create spaces that are visually sophisticated but also practical for everyday life."
        },
        {
          type: "text",
          text: "Rather than following temporary trends too closely, Sakura can focus on timeless proportions, high-quality materials, functional planning, and personalized details."
        },
        {
          type: "subheading",
          text: "Contemporary Design for Sri Lankan Homes"
        },
        {
          type: "list",
          items: [
            "Natural ventilation",
            "Tropical greenery",
            "Large openings",
            "Shading systems",
            "Local materials",
            "Indoor-outdoor living",
            "Climate-responsive design"
          ]
        },
        {
          type: "text",
          text: "This allows Contemporary design to feel modern while remaining appropriate for the local environment."
        }
      ]
    }
  ]
},

"farmhouse": {
  title: "Farmhouse",
  tagline: "The Warmth of Home",
  intro:
    "Farmhouse interior design celebrates simplicity, comfort, craftsmanship, and a strong connection with nature. Inspired by traditional rural homes, the style combines natural materials, practical furniture, warm colors, and timeless details to create spaces that feel welcoming and authentic.",
  keywords: ["Warm", "Natural", "Comfortable", "Authentic", "Timeless"],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: farmhouse1,
      blocks: [
        {
          type: "text",
          text: "Farmhouse design originated from the traditional homes of rural agricultural communities, where houses were designed primarily around practical everyday living."
        },
        {
          type: "text",
          text: "Traditional farmhouses were built using locally available materials such as wood, stone, clay, brick, and natural textiles. Their layouts were generally simple and functional, with large kitchens, dining areas, fireplaces, storage spaces, and connections to outdoor areas."
        },
        {
          type: "text",
          text: "The design was shaped by the needs of farming families. Furniture was practical, durable, and often handmade."
        },
        {
          type: "text",
          text: "Over time, the farmhouse aesthetic moved beyond rural locations and became popular in urban and suburban homes."
        },
        {
          type: "subheading",
          text: "Evolution of Farmhouse Design"
        },
        {
          type: "terms",
          items: [
            {
              term: "Traditional Farmhouse",
              desc: "Practical rural homes using locally available materials and simple functional layouts."
            },
            {
              term: "Rustic Farmhouse",
              desc: "Emphasized weathered wood, stone, handcrafted furniture, and historical character."
            },
            {
              term: "Modern Farmhouse",
              desc: "Combines traditional farmhouse warmth with contemporary layouts, cleaner lines, and modern facilities."
            },
            {
              term: "Contemporary Farmhouse",
              desc: "Uses the farmhouse philosophy while incorporating modern architecture, technology, and sophisticated materials."
            }
          ]
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: farmhouse2,
      blocks: [
        {
          type: "text",
          text: "Farmhouse interiors generally use warm, natural, and understated colors to create a comfortable and welcoming atmosphere."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "terms",
          items: [
            {
              term: "Warm White",
              desc: "Creates a soft and welcoming foundation."
            },
            {
              term: "Cream",
              desc: "Adds warmth while maintaining a light interior."
            },
            {
              term: "Ivory",
              desc: "Provides a gentle neutral tone."
            },
            {
              term: "Beige",
              desc: "Connects the interior with natural materials."
            },
            {
              term: "Linen",
              desc: "Adds a soft, natural character."
            },
            {
              term: "Soft Gray",
              desc: "Provides a subtle contemporary neutral."
            }
          ]
        },
        {
          type: "subheading",
          text: "Natural Colors"
        },
        {
          type: "list",
          items: [
            "Brown",
            "Taupe",
            "Sand",
            "Clay",
            "Terracotta"
          ]
        },
        {
          type: "subheading",
          text: "Accent Colors"
        },
        {
          type: "list",
          items: [
            "Sage Green",
            "Olive",
            "Muted Blue",
            "Dusty Gray",
            "Deep Brown"
          ]
        },
        {
          type: "text",
          text: "A classic farmhouse combination is: Warm White + Natural Wood + Sage Green"
        },
        {
          type: "text",
          text: "A more modern version could be: Cream + Charcoal + Oak + Soft Green"
        },
        {
          type: "text",
          text: "The colors should create a feeling of warmth and simplicity rather than strong visual contrast."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: farmhouse3,
      blocks: [
        {
          type: "text",
          text: "Farmhouse design is based on the idea of creating a home that is comfortable, practical, and connected to nature."
        },
        {
          type: "subheading",
          text: "Natural Materials"
        },
        {
          type: "text",
          text: "Wood, stone, brick, linen, cotton, and metal are frequently used throughout Farmhouse interiors."
        },
        {
          type: "subheading",
          text: "Practicality"
        },
        {
          type: "text",
          text: "Furniture and architectural elements should be useful rather than purely decorative."
        },
        {
          type: "subheading",
          text: "Comfort"
        },
        {
          type: "text",
          text: "Large sofas, comfortable chairs, soft textiles, and inviting dining areas create a welcoming atmosphere."
        },
        {
          type: "subheading",
          text: "Craftsmanship"
        },
        {
          type: "text",
          text: "Handmade and handcrafted details add authenticity and character to the interior."
        },
        {
          type: "subheading",
          text: "Simplicity"
        },
        {
          type: "text",
          text: "Farmhouse interiors avoid excessive ornamentation and focus on simple, functional design."
        },
        {
          type: "subheading",
          text: "Connection to Nature"
        },
        {
          type: "text",
          text: "Large windows, plants, natural materials, gardens, and outdoor spaces help connect the interior with its surroundings."
        },
        {
          type: "subheading",
          text: "Imperfection"
        },
        {
          type: "text",
          text: "Natural variations in wood, stone, and handmade objects are often embraced rather than hidden."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: farmhouse4,
      blocks: [
        {
          type: "text",
          text: "Farmhouse furniture should feel solid, comfortable, and functional."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Large wooden dining tables",
            "Linen sofas",
            "Comfortable armchairs",
            "Wooden benches",
            "Rustic coffee tables",
            "Open shelving",
            "Wooden cabinets",
            "Vintage dressers",
            "Four-poster or wooden beds",
            "Farmhouse-style kitchen islands"
          ]
        },
        {
          type: "subheading",
          text: "Dining Table"
        },
        {
          type: "text",
          text: "The dining table is often an important focal point. A large solid-wood table can create a central gathering space for family and guests."
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "list",
          items: [
            "Open kitchens",
            "Connected dining areas",
            "Comfortable living rooms",
            "Large gathering spaces",
            "Functional storage",
            "Indoor-outdoor connections"
          ]
        },
        {
          type: "text",
          text: "The kitchen can act as the heart of the home, creating a central space for cooking, dining, and social interaction."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: farmhouse5,
      blocks: [
        {
          type: "text",
          text: "Materials are one of the strongest visual features of Farmhouse design. Natural and durable materials help create the authentic character of the style."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood can be used throughout the interior for flooring, ceiling beams, furniture, doors, cabinets, wall panels, and dining tables."
        },
        {
          type: "list",
          items: [
            "Flooring",
            "Ceiling beams",
            "Furniture",
            "Doors",
            "Cabinets",
            "Wall panels",
            "Dining tables"
          ]
        },
        {
          type: "text",
          text: "Both polished and naturally weathered wood can work depending on the desired style."
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Fireplaces",
            "Flooring",
            "Feature walls",
            "Kitchen surfaces",
            "Exterior-to-interior transitions"
          ]
        },
        {
          type: "subheading",
          text: "Brick"
        },
        {
          type: "text",
          text: "Exposed brick can introduce warmth and architectural character to Farmhouse interiors."
        },
        {
          type: "subheading",
          text: "Fabrics"
        },
        {
          type: "list",
          items: [
            "Linen",
            "Cotton",
            "Wool",
            "Canvas",
            "Woven textiles"
          ]
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "list",
          items: [
            "Lighting",
            "Cabinet handles",
            "Furniture frames",
            "Shelving",
            "Decorative details"
          ]
        },
        {
          type: "text",
          text: "The combination of wood + stone + fabric + metal creates the characteristic Farmhouse texture."
        }
      ]
    },

    {
      heading: "06. Lighting & Decorative Elements",
      image: farmhouse6,
      blocks: [
        {
          type: "text",
          text: "Farmhouse lighting should create a warm and inviting atmosphere while complementing the natural materials used throughout the interior."
        },
        {
          type: "subheading",
          text: "Lighting"
        },
        {
          type: "list",
          items: [
            "Pendant lights",
            "Lantern-style fixtures",
            "Black metal chandeliers",
            "Wall sconces",
            "Table lamps",
            "Floor lamps",
            "Recessed lighting"
          ]
        },
        {
          type: "text",
          text: "Kitchen islands often work well with a row of simple pendant lights, creating both practical illumination and a visual focal point."
        },
        {
          type: "subheading",
          text: "Natural Lighting"
        },
        {
          type: "text",
          text: "Large windows are valuable because they allow daylight to highlight natural wood and other materials."
        },
        {
          type: "subheading",
          text: "Decorative Elements"
        },
        {
          type: "list",
          items: [
            "Ceramic pottery",
            "Woven baskets",
            "Wooden objects",
            "Vintage clocks",
            "Handmade ceramics",
            "Framed botanical artwork",
            "Natural textiles",
            "Decorative trays"
          ]
        },
        {
          type: "text",
          text: "Decorative elements should support the home's story rather than create unnecessary clutter."
        }
      ]
    },

    {
      heading: "07. Patterns & Accessories",
      image: farmhouse7,
      blocks: [
        {
          type: "text",
          text: "Farmhouse patterns are generally simple, traditional, and comfortable. They add visual interest while maintaining the welcoming character of the style."
        },
        {
          type: "subheading",
          text: "Common Patterns"
        },
        {
          type: "list",
          items: [
            "Checks",
            "Gingham",
            "Stripes",
            "Plaid",
            "Simple floral patterns",
            "Botanical prints",
            "Subtle geometric patterns"
          ]
        },
        {
          type: "text",
          text: "These patterns can be introduced through cushions, curtains, rugs, bedding, upholstery, and table linens."
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Woven baskets",
            "Ceramic vases",
            "Wooden trays",
            "Vintage books",
            "Botanical artwork",
            "Handmade pottery",
            "Indoor plants",
            "Antique-inspired mirrors"
          ]
        },
        {
          type: "text",
          text: "The best accessories should feel useful, handcrafted, or meaningful, helping the interior maintain an authentic and personal character."
        }
      ]
    },

    {
      heading: "08. Modern Farmhouse — Sakura Interior Designers",
      image: farmhouse8,
      blocks: [
        {
          type: "text",
          text: "Modern Farmhouse combines the warmth of traditional farmhouse design with the simplicity and functionality of contemporary interiors."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Clean architectural lines",
            "Open-plan layouts",
            "Natural wood",
            "Modern kitchens",
            "Neutral colors",
            "Contemporary lighting",
            "Large windows",
            "Smart-home technology",
            "Minimal decoration",
            "Comfortable furniture"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Farmhouse design as a celebration of comfortable modern living with authentic natural character."
        },
        {
          type: "text",
          text: "The design philosophy could be:"
        },
        {
          type: "quote",
          text: "Rooted in tradition. Designed for today."
        },
        {
          type: "text",
          text: "Sakura can combine natural materials, functional planning, warm colors, handcrafted details, and contemporary facilities to create homes that feel both timeless and practical."
        },
        {
          type: "subheading",
          text: "Farmhouse for Sri Lankan Homes"
        },
        {
          type: "list",
          items: [
            "Local timber",
            "Natural stone",
            "Clay or terracotta elements",
            "Tropical plants",
            "Open verandas",
            "Large windows",
            "Natural ventilation",
            "Indoor-outdoor living",
            "Shaded outdoor spaces"
          ]
        },
        {
          type: "text",
          text: "This creates a Farmhouse aesthetic that feels appropriate to the local climate rather than simply copying European or American farmhouse interiors."
        }
      ]
    }
  ]
},

"glam": {
  title: "Glam",
  tagline: "A Statement of Luxury",
  intro:
    "Glam interior design creates sophisticated and visually captivating spaces through luxurious materials, elegant furniture, dramatic lighting, refined color palettes, and carefully curated decorative elements.",
  keywords: ["Luxury", "Elegance", "Drama", "Sophistication", "Refinement"],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & Evolution",
      image: glam1,
      blocks: [
        {
          type: "text",
          text: "Glam interior design does not represent one specific historical movement. Instead, it evolved from several luxury-oriented design traditions."
        },
        {
          type: "text",
          text: "Its influences can be found in Art Deco, Hollywood Regency, European classical interiors, modern luxury design, and contemporary hospitality design."
        },
        {
          type: "text",
          text: "The style became particularly associated with the idea of Hollywood glamour, where luxurious materials, dramatic lighting, reflective surfaces, and statement furniture were used to create visually impressive spaces."
        },
        {
          type: "text",
          text: "Over time, Glam design evolved from heavily decorated interiors into more sophisticated contemporary interpretations."
        },
        {
          type: "subheading",
          text: "Evolution"
        },
        {
          type: "terms",
          items: [
            {
              term: "Classical Influence",
              desc: "Elegant furniture, decorative details, and luxurious materials."
            },
            {
              term: "Art Deco Influence",
              desc: "Geometry, metallic accents, symmetry, and sophisticated finishes."
            },
            {
              term: "Hollywood Regency",
              desc: "Bold colors, mirrors, lacquer, dramatic furniture, and glamour."
            },
            {
              term: "Modern Glam",
              desc: "Simplified forms, neutral palettes, refined materials, and controlled decoration."
            }
          ]
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: glam2,
      blocks: [
        {
          type: "text",
          text: "Glam interiors often use a sophisticated combination of neutral colors, deep tones, and metallic accents."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "terms",
          items: [
            {
              term: "Ivory",
              desc: "Creates a soft and elegant foundation."
            },
            {
              term: "Cream",
              desc: "Adds warmth and sophistication."
            },
            {
              term: "Beige",
              desc: "Provides a refined neutral base."
            },
            {
              term: "Soft Gray",
              desc: "Creates a sophisticated contemporary backdrop."
            },
            {
              term: "Taupe",
              desc: "Adds warmth and depth."
            },
            {
              term: "Charcoal",
              desc: "Creates dramatic contrast."
            },
            {
              term: "Black",
              desc: "Adds definition and visual impact."
            }
          ]
        },
        {
          type: "subheading",
          text: "Luxury Colors"
        },
        {
          type: "list",
          items: [
            "Champagne",
            "Gold",
            "Silver",
            "Bronze",
            "Rose Gold"
          ]
        },
        {
          type: "subheading",
          text: "Rich Accent Colors"
        },
        {
          type: "list",
          items: [
            "Emerald",
            "Burgundy",
            "Deep Navy",
            "Plum",
            "Dusty Rose"
          ]
        },
        {
          type: "text",
          text: "A classic Glam combination is: Ivory + Black + Champagne Gold"
        },
        {
          type: "text",
          text: "A softer version is: Blush + Cream + Champagne"
        },
        {
          type: "text",
          text: "A dramatic version is: Charcoal + Emerald + Gold"
        },
        {
          type: "text",
          text: "The most important principle is balance. Metallic colors should enhance the interior rather than dominate it."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: glam3,
      blocks: [
        {
          type: "text",
          text: "Glam design is built around the idea of elegance and visual impact."
        },
        {
          type: "subheading",
          text: "Luxurious Appearance"
        },
        {
          type: "text",
          text: "The space should immediately communicate quality and sophistication through carefully selected furniture, materials, finishes, and decorative elements."
        },
        {
          type: "subheading",
          text: "Reflective Surfaces"
        },
        {
          type: "text",
          text: "Mirrors, glass, polished stone, and metallic surfaces help create visual richness and reflect light throughout the space."
        },
        {
          type: "subheading",
          text: "Statement Pieces"
        },
        {
          type: "text",
          text: "A Glam interior often has one or more strong focal points."
        },
        {
          type: "list",
          items: [
            "Large chandelier",
            "Sculptural sofa",
            "Oversized mirror",
            "Statement artwork",
            "Marble feature wall"
          ]
        },
        {
          type: "subheading",
          text: "Symmetry"
        },
        {
          type: "text",
          text: "Balanced furniture arrangements can create a sophisticated and polished appearance."
        },
        {
          type: "subheading",
          text: "Layered Materials"
        },
        {
          type: "text",
          text: "Different materials are combined to create depth and contrast."
        },
        {
          type: "text",
          text: "For example: Velvet + Marble + Brass + Glass"
        },
        {
          type: "subheading",
          text: "Controlled Decoration"
        },
        {
          type: "text",
          text: "Glam is decorative, but successful Glam design avoids becoming visually overwhelming."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: glam4,
      blocks: [
        {
          type: "text",
          text: "Glam furniture is often elegant, sculptural, and comfortable."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Velvet sofas",
            "Curved armchairs",
            "Tufted furniture",
            "Marble coffee tables",
            "Mirrored consoles",
            "Glass dining tables",
            "Upholstered beds",
            "Elegant side tables",
            "Sculptural chairs"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Details"
        },
        {
          type: "list",
          items: [
            "Gold or brass frames",
            "Curved edges",
            "Quilted upholstery",
            "Tufting",
            "Metallic details",
            "Polished finishes"
          ]
        },
        {
          type: "subheading",
          text: "Spatial Arrangement"
        },
        {
          type: "text",
          text: "Furniture should be arranged to create a clear focal point. Symmetrical arrangements can create a formal and sophisticated appearance."
        },
        {
          type: "list",
          items: [
            "Statement artwork",
            "Sofa",
            "Coffee table",
            "Accent chairs"
          ]
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: glam5,
      blocks: [
        {
          type: "text",
          text: "Materials are fundamental to achieving a Glam aesthetic. The style relies on a combination of luxurious, reflective, soft, and polished surfaces."
        },
        {
          type: "subheading",
          text: "Velvet"
        },
        {
          type: "text",
          text: "Velvet provides softness and richness."
        },
        {
          type: "list",
          items: [
            "Sofas",
            "Armchairs",
            "Headboards",
            "Cushions",
            "Curtains"
          ]
        },
        {
          type: "subheading",
          text: "Marble"
        },
        {
          type: "text",
          text: "Marble creates a luxurious architectural surface."
        },
        {
          type: "list",
          items: [
            "Coffee tables",
            "Flooring",
            "Countertops",
            "Bathrooms",
            "Feature walls"
          ]
        },
        {
          type: "subheading",
          text: "Glass"
        },
        {
          type: "text",
          text: "Glass creates visual lightness and reflection."
        },
        {
          type: "list",
          items: [
            "Tables",
            "Display cabinets",
            "Decorative objects",
            "Lighting"
          ]
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "text",
          text: "Gold, brass, chrome, and bronze are commonly used as accents."
        },
        {
          type: "subheading",
          text: "Mirrors"
        },
        {
          type: "text",
          text: "Large mirrors can increase light reflection and make spaces appear more spacious."
        },
        {
          type: "subheading",
          text: "Other Textures"
        },
        {
          type: "list",
          items: [
            "Silk",
            "Satin",
            "Leather",
            "Plush rugs",
            "High-quality upholstery"
          ]
        },
        {
          type: "text",
          text: "The combination of reflective and soft materials creates the characteristic Glam contrast."
        }
      ]
    },

    {
      heading: "06. Lighting & Decorative Elements",
      image: glam6,
      blocks: [
        {
          type: "text",
          text: "Lighting is one of the most important elements of Glam design. It can create drama, highlight luxurious materials, and become a decorative feature itself."
        },
        {
          type: "subheading",
          text: "Statement Lighting"
        },
        {
          type: "list",
          items: [
            "Crystal chandeliers",
            "Sculptural chandeliers",
            "Gold pendant lights",
            "Elegant wall sconces",
            "Decorative table lamps",
            "Statement floor lamps"
          ]
        },
        {
          type: "subheading",
          text: "Layered Lighting"
        },
        {
          type: "text",
          text: "A successful Glam interior can combine ambient lighting, accent lighting, and decorative lighting."
        },
        {
          type: "text",
          text: "This allows the atmosphere to change depending on the occasion."
        },
        {
          type: "subheading",
          text: "Decorative Elements"
        },
        {
          type: "list",
          items: [
            "Large mirrors",
            "Metallic sculptures",
            "Crystal objects",
            "Decorative trays",
            "Elegant vases",
            "Statement artwork",
            "Gold-framed pieces"
          ]
        },
        {
          type: "text",
          text: "Lighting and mirrors can work together to create a dramatic visual effect."
        }
      ]
    },

    {
      heading: "07. Patterns & Accessories",
      image: glam7,
      blocks: [
        {
          type: "text",
          text: "Glam patterns are generally elegant rather than overly complex. They should add visual interest without competing with the luxurious materials and statement pieces."
        },
        {
          type: "subheading",
          text: "Common Patterns"
        },
        {
          type: "list",
          items: [
            "Geometric patterns",
            "Marble patterns",
            "Subtle floral designs",
            "Chevron",
            "Art Deco-inspired patterns",
            "Metallic patterns",
            "Abstract designs"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Decorative mirrors",
            "Crystal objects",
            "Metallic vases",
            "Sculptures",
            "Luxury candles",
            "Decorative books",
            "Elegant trays",
            "Statement artwork"
          ]
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "text",
          text: "A Glam interior should have fewer but more impactful accessories."
        },
        {
          type: "text",
          text: "Instead of placing many small decorative objects on a console, one large sculptural object or elegant vase can create a stronger focal point."
        }
      ]
    },

    {
      heading: "08. Modern Glam — Sakura Interior Designers",
      image: glam8,
      blocks: [
        {
          type: "text",
          text: "Modern Glam combines traditional luxury with contemporary simplicity."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "High-quality materials",
            "Elegant furniture",
            "Neutral colors",
            "Controlled metallic accents",
            "Statement lighting",
            "Refined textures",
            "Clean architectural forms"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Glam as luxury designed for real modern living."
        },
        {
          type: "text",
          text: "The design philosophy could be:"
        },
        {
          type: "quote",
          text: "Luxury that speaks through detail."
        },
        {
          type: "text",
          text: "The objective is to create interiors that feel sophisticated without becoming excessive."
        },
        {
          type: "text",
          text: "Sakura can combine marble, velvet, glass, brass, elegant lighting, and contemporary furniture while maintaining functional layouts and comfortable living spaces."
        },
        {
          type: "subheading",
          text: "Modern Glam for Sri Lankan Homes"
        },
        {
          type: "list",
          items: [
            "Natural ventilation",
            "Tropical greenery",
            "Large windows",
            "Local stone",
            "Natural timber",
            "Indoor-outdoor connections"
          ]
        },
        {
          type: "text",
          text: "This creates a luxury aesthetic that remains comfortable and suitable for the local environment."
        }
      ]
    }
  ]
},

"industrial": {
  title: "Industrial",
  tagline: "Raw Structure, Refined Living",
  intro:
    "Industrial interior design celebrates the beauty of unfinished architecture, exposed materials, functional structures, and urban character. By combining concrete, brick, metal, wood, and dramatic lighting, Industrial interiors create spaces that are bold, authentic, and highly distinctive.",
  keywords: ["Raw", "Urban", "Functional", "Architectural", "Authentic"],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: industrial1,
      blocks: [
        {
          type: "text",
          text: "Industrial interior design originated from the transformation of factories, warehouses, workshops, and industrial buildings into functional living and working spaces."
        },
        {
          type: "text",
          text: "During the 20th century, changes in urban development led to many industrial buildings becoming unused. Some were converted into apartments, studios, offices, galleries, and creative spaces."
        },
        {
          type: "subheading",
          text: "Typical Industrial Features"
        },
        {
          type: "list",
          items: [
            "High ceilings",
            "Exposed brick",
            "Large windows",
            "Concrete structures",
            "Steel beams",
            "Visible pipes",
            "Large open floor plans"
          ]
        },
        {
          type: "text",
          text: "Instead of hiding these architectural elements, Industrial design embraced them as part of the interior."
        },
        {
          type: "text",
          text: "The style became particularly associated with urban loft living and later influenced restaurants, offices, retail spaces, and contemporary homes."
        },
        {
          type: "text",
          text: "Today, Industrial design can be found in both converted buildings and newly constructed spaces that intentionally recreate its architectural character."
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: industrial2,
      blocks: [
        {
          type: "text",
          text: "Industrial interiors generally use dark, neutral, and earthy colors."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "Charcoal",
            "Black",
            "Concrete Gray",
            "Warm White",
            "Off-White",
            "Taupe"
          ]
        },
        {
          type: "subheading",
          text: "Natural Colors"
        },
        {
          type: "list",
          items: [
            "Brown",
            "Walnut",
            "Dark Wood",
            "Rust",
            "Terracotta"
          ]
        },
        {
          type: "subheading",
          text: "Accent Colors"
        },
        {
          type: "list",
          items: [
            "Deep Green",
            "Navy",
            "Aged Brass",
            "Burnt Orange"
          ]
        },
        {
          type: "text",
          text: "A classic Industrial palette is: Charcoal + Concrete Gray + Black + Natural Wood"
        },
        {
          type: "text",
          text: "A warmer version is: Warm White + Walnut + Rust + Black"
        },
        {
          type: "text",
          text: "Metallic accents should usually appear in black steel, aged brass, bronze, or iron rather than highly polished gold."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: industrial3,
      blocks: [
        {
          type: "text",
          text: "Industrial design is defined by the idea of revealing rather than concealing."
        },
        {
          type: "subheading",
          text: "Exposed Architecture"
        },
        {
          type: "text",
          text: "Structural and mechanical elements can become part of the visual identity."
        },
        {
          type: "list",
          items: [
            "Exposed beams",
            "Pipes",
            "Ductwork",
            "Brick walls",
            "Concrete ceilings",
            "Steel structures"
          ]
        },
        {
          type: "subheading",
          text: "Open Floor Plans"
        },
        {
          type: "text",
          text: "Industrial spaces often have fewer internal walls, allowing the architectural structure to remain visible."
        },
        {
          type: "subheading",
          text: "High Ceilings"
        },
        {
          type: "text",
          text: "Tall ceilings create a sense of scale and openness."
        },
        {
          type: "subheading",
          text: "Raw Materials"
        },
        {
          type: "text",
          text: "Materials are often presented in their natural or unfinished state."
        },
        {
          type: "subheading",
          text: "Functional Design"
        },
        {
          type: "text",
          text: "Furniture and architectural elements should have a clear purpose."
        },
        {
          type: "subheading",
          text: "Urban Character"
        },
        {
          type: "text",
          text: "The style often reflects the visual language of cities, factories, workshops, and warehouses."
        },
        {
          type: "subheading",
          text: "Contrast"
        },
        {
          type: "text",
          text: "Industrial interiors frequently combine Hard + Soft, Rough + Refined, and Old + New."
        },
        {
          type: "text",
          text: "For example: Concrete wall + leather sofa + warm wood table"
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: industrial4,
      blocks: [
        {
          type: "text",
          text: "Industrial furniture is usually strong, practical, and visually simple."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Leather sofas",
            "Metal-framed chairs",
            "Wooden dining tables",
            "Steel shelving",
            "Industrial stools",
            "Reclaimed wood tables",
            "Metal cabinets",
            "Open shelving",
            "Low-profile sofas",
            "Workbench-inspired furniture"
          ]
        },
        {
          type: "subheading",
          text: "Material Combination"
        },
        {
          type: "text",
          text: "A common furniture combination is: Black Metal + Reclaimed Wood"
        },
        {
          type: "text",
          text: "Another option is: Dark Leather + Steel"
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "text",
          text: "Industrial interiors work particularly well with open layouts."
        },
        {
          type: "text",
          text: "A large space can be divided into functional zones using furniture, rugs, lighting, and shelving without constructing many walls."
        },
        {
          type: "subheading",
          text: "Architectural Features"
        },
        {
          type: "list",
          items: [
            "Exposed columns",
            "Steel staircases",
            "Large windows",
            "Structural beams",
            "High ceilings"
          ]
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: industrial5,
      blocks: [
        {
          type: "text",
          text: "Materials are the foundation of Industrial design."
        },
        {
          type: "subheading",
          text: "Concrete"
        },
        {
          type: "text",
          text: "Concrete can be used for walls, floors, countertops, ceilings, and feature surfaces. Its natural imperfections contribute to the industrial character."
        },
        {
          type: "subheading",
          text: "Brick"
        },
        {
          type: "text",
          text: "Exposed brick adds warmth and texture."
        },
        {
          type: "list",
          items: [
            "Feature walls",
            "Fireplaces",
            "Kitchen areas",
            "Exterior-interior transitions"
          ]
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "list",
          items: [
            "Steel",
            "Iron",
            "Aluminum",
            "Black metal",
            "Aged brass"
          ]
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood prevents Industrial interiors from becoming too cold."
        },
        {
          type: "list",
          items: [
            "Reclaimed wood",
            "Oak",
            "Walnut",
            "Teak",
            "Dark timber"
          ]
        },
        {
          type: "subheading",
          text: "Leather"
        },
        {
          type: "text",
          text: "Leather furniture adds warmth and durability."
        },
        {
          type: "subheading",
          text: "Glass"
        },
        {
          type: "text",
          text: "Black-framed glass partitions and large windows help maintain the open character of the space."
        },
        {
          type: "subheading",
          text: "Signature Combination"
        },
        {
          type: "text",
          text: "Concrete + Brick + Metal + Wood + Leather"
        },
        {
          type: "text",
          text: "This combination immediately establishes the Industrial character."
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: industrial6,
      blocks: [
        {
          type: "text",
          text: "Industrial lighting is inspired by factories, workshops, warehouses, and old industrial buildings."
        },
        {
          type: "subheading",
          text: "Lighting Types"
        },
        {
          type: "list",
          items: [
            "Pendant lights",
            "Track lighting",
            "Metal chandeliers",
            "Exposed-bulb fixtures",
            "Wall sconces",
            "Floor lamps",
            "Linear LED lighting"
          ]
        },
        {
          type: "subheading",
          text: "Common Materials"
        },
        {
          type: "list",
          items: [
            "Black metal",
            "Steel",
            "Brass",
            "Copper",
            "Aged finishes"
          ]
        },
        {
          type: "subheading",
          text: "Exposed Lighting"
        },
        {
          type: "text",
          text: "Visible bulbs and exposed wiring can become decorative features."
        },
        {
          type: "subheading",
          text: "Architectural Lighting"
        },
        {
          type: "text",
          text: "Modern Industrial interiors can combine traditional industrial fixtures with concealed LED lighting."
        },
        {
          type: "text",
          text: "For example: Exposed pendant + recessed ceiling lighting"
        },
        {
          type: "text",
          text: "This maintains the industrial character while providing practical illumination."
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      image: industrial7,
      blocks: [
        {
          type: "text",
          text: "Industrial interiors generally avoid excessive decoration. Instead, the style relies on architecture, materials, and statement objects."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Simple geometric patterns",
            "Grid patterns",
            "Linear designs",
            "Concrete textures",
            "Brick patterns",
            "Metal mesh"
          ]
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "list",
          items: [
            "Black-and-white photography",
            "Urban photography",
            "Abstract art",
            "Architectural drawings",
            "Large graphic prints",
            "Typography-based artwork"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Vintage clocks",
            "Metal objects",
            "Industrial-style mirrors",
            "Vintage signs",
            "Sculptures",
            "Books",
            "Leather accessories",
            "Large indoor plants"
          ]
        },
        {
          type: "text",
          text: "Plants can soften the hard architectural character of the style."
        }
      ]
    },

    {
      heading: "08. Modern Industrial — Sakura Interior Designers",
      image: industrial8,
      blocks: [
        {
          type: "text",
          text: "Modern Industrial design combines the raw architectural character of Industrial interiors with contemporary comfort and technology."
        },
        {
          type: "text",
          text: "Instead of creating a space that feels like an old factory, modern Industrial design focuses on a sophisticated balance between raw materials and refined living."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Concrete",
            "Natural wood",
            "Black metal",
            "Glass",
            "Soft textiles",
            "Contemporary furniture",
            "Integrated lighting",
            "Smart-home technology",
            "Indoor plants",
            "Minimal decoration"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can position Industrial design around the concept:"
        },
        {
          type: "quote",
          text: "Reveal the structure. Refine the experience."
        },
        {
          type: "text",
          text: "The objective is to preserve the authentic character of Industrial materials while making the space comfortable and practical for modern living."
        },
        {
          type: "subheading",
          text: "Industrial Design for Sri Lankan Interiors"
        },
        {
          type: "list",
          items: [
            "Locally sourced timber",
            "Natural stone",
            "Tropical plants",
            "Large ventilated openings",
            "Shaded outdoor spaces",
            "Concrete architecture",
            "Metal detailing",
            "Indoor-outdoor connections"
          ]
        },
        {
          type: "text",
          text: "This creates a tropical contemporary Industrial style rather than simply copying warehouse interiors from Western cities."
        }
      ]
    }
  ]
},

"japandi": {
  title: "Japandi",
  tagline: "The Beauty of Quiet Living",
  intro:
    "Japandi interior design brings together Japanese simplicity and Scandinavian comfort to create spaces that are calm, functional, natural, and timeless. Through restrained colors, organic materials, clean forms, and thoughtful details, Japandi transforms simplicity into an expression of elegance.",
  keywords: ["Calm", "Minimal", "Natural", "Functional", "Intentional"],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: japandi1,
      blocks: [
        {
          type: "text",
          text: "Japandi is a relatively modern design concept that combines two distinct design traditions: Japanese Design and Scandinavian Design."
        },
        {
          type: "subheading",
          text: "Japanese Design"
        },
        {
          type: "text",
          text: "Japanese design is influenced by principles such as simplicity, balance, natural materials, craftsmanship, and the appreciation of imperfection."
        },
        {
          type: "subheading",
          text: "Scandinavian Design"
        },
        {
          type: "text",
          text: "Scandinavian design is known for functionality, simplicity, comfort, natural light, and practical living."
        },
        {
          type: "text",
          text: "The relationship between Japanese and Scandinavian design developed through a shared appreciation for minimalism, craftsmanship, natural materials, and functional simplicity."
        },
        {
          type: "text",
          text: "Japandi became increasingly popular in contemporary interior design as designers searched for interiors that feel calm and sophisticated while remaining comfortable for everyday life."
        },
        {
          type: "subheading",
          text: "Japanese Influence"
        },
        {
          type: "list",
          items: [
            "Simplicity",
            "Natural materials",
            "Balance",
            "Empty space",
            "Craftsmanship",
            "Connection with nature"
          ]
        },
        {
          type: "subheading",
          text: "Scandinavian Influence"
        },
        {
          type: "list",
          items: [
            "Functionality",
            "Comfort",
            "Natural light",
            "Warm materials",
            "Practical furniture",
            "Simple forms"
          ]
        },
        {
          type: "subheading",
          text: "Japandi"
        },
        {
          type: "text",
          text: "Japandi brings these qualities together into a balanced design philosophy:"
        },
        {
          type: "quote",
          text: "Japanese Simplicity + Scandinavian Comfort"
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: japandi2,
      blocks: [
        {
          type: "text",
          text: "Japandi interiors use muted, natural, and earthy colors."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "Warm White",
            "Ivory",
            "Cream",
            "Beige",
            "Sand",
            "Light Gray"
          ]
        },
        {
          type: "subheading",
          text: "Natural Colors"
        },
        {
          type: "list",
          items: [
            "Taupe",
            "Warm Brown",
            "Oak",
            "Stone Gray",
            "Clay"
          ]
        },
        {
          type: "subheading",
          text: "Accent Colors"
        },
        {
          type: "list",
          items: [
            "Sage Green",
            "Olive",
            "Charcoal",
            "Deep Brown",
            "Muted Black"
          ]
        },
        {
          type: "text",
          text: "Unlike Glam or Art Deco, Japandi rarely depends on strong metallic colors."
        },
        {
          type: "text",
          text: "A classic palette could be: Warm White + Beige + Natural Oak + Sage"
        },
        {
          type: "text",
          text: "A darker version could be: Cream + Walnut + Charcoal + Olive"
        },
        {
          type: "text",
          text: "The colors should feel quiet and harmonious rather than highly contrasting."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: japandi3,
      blocks: [
        {
          type: "text",
          text: "Japandi design is based on intentional simplicity."
        },
        {
          type: "subheading",
          text: "Minimalism"
        },
        {
          type: "text",
          text: "Only necessary and meaningful objects are included. The objective is not to make a room empty but to remove unnecessary visual distractions."
        },
        {
          type: "subheading",
          text: "Functionality"
        },
        {
          type: "text",
          text: "Every piece of furniture should have a purpose."
        },
        {
          type: "subheading",
          text: "Natural Connection"
        },
        {
          type: "text",
          text: "Natural materials, plants, sunlight, and views are important components."
        },
        {
          type: "subheading",
          text: "Balance"
        },
        {
          type: "text",
          text: "Japandi carefully balances Light and Dark, Empty and Occupied Space, Hard and Soft Materials, and Japanese and Scandinavian influences."
        },
        {
          type: "subheading",
          text: "Imperfection"
        },
        {
          type: "text",
          text: "Japanese design introduces appreciation for natural variation and imperfection."
        },
        {
          type: "text",
          text: "Wood grain, handmade ceramics, uneven textures, and natural stone variations can become part of the design."
        },
        {
          type: "subheading",
          text: "Warm Minimalism"
        },
        {
          type: "text",
          text: "Unlike extremely minimalist interiors, Japandi spaces should still feel comfortable and lived-in."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: japandi4,
      blocks: [
        {
          type: "text",
          text: "Japandi furniture is usually simple, functional, and low-profile."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Low-profile sofas",
            "Simple wooden chairs",
            "Minimal coffee tables",
            "Low platform beds",
            "Wooden benches",
            "Simple dining tables",
            "Open shelving",
            "Minimal cabinets",
            "Floor cushions"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "list",
          items: [
            "Clean lines",
            "Natural materials",
            "Simple silhouettes",
            "Functional forms",
            "Minimal decoration"
          ]
        },
        {
          type: "text",
          text: "Japanese influence often appears through lower furniture profiles, while Scandinavian influence contributes comfort and practicality."
        },
        {
          type: "subheading",
          text: "Spatial Planning"
        },
        {
          type: "text",
          text: "Japandi interiors prioritize open and uncluttered spaces."
        },
        {
          type: "text",
          text: "Furniture should not block movement or natural light."
        },
        {
          type: "text",
          text: "Instead of filling a room with furniture, designers should allow certain areas to remain visually open. This creates a sense of calm and spaciousness."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: japandi5,
      blocks: [
        {
          type: "text",
          text: "Natural materials are fundamental to Japandi design."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood is one of the most important materials. Natural grain should generally remain visible."
        },
        {
          type: "list",
          items: [
            "Oak",
            "Ash",
            "Walnut",
            "Teak",
            "Bamboo"
          ]
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Flooring",
            "Countertops",
            "Bathrooms",
            "Decorative surfaces",
            "Feature walls"
          ]
        },
        {
          type: "subheading",
          text: "Textiles"
        },
        {
          type: "list",
          items: [
            "Linen",
            "Cotton",
            "Wool",
            "Hemp"
          ]
        },
        {
          type: "subheading",
          text: "Ceramics"
        },
        {
          type: "text",
          text: "Handcrafted ceramics can introduce subtle artistic character."
        },
        {
          type: "subheading",
          text: "Woven Materials"
        },
        {
          type: "list",
          items: [
            "Rattan",
            "Bamboo",
            "Seagrass",
            "Woven fibers"
          ]
        },
        {
          type: "subheading",
          text: "Texture Strategy"
        },
        {
          type: "text",
          text: "Because Japandi uses relatively restrained colors, texture provides visual interest."
        },
        {
          type: "text",
          text: "For example: Oak + Linen + Stone + Ceramic + Wool creates depth without introducing excessive decoration."
        }
      ]
    },

    {
      heading: "06. Lighting & Decorative Elements",
      image: japandi6,
      blocks: [
        {
          type: "text",
          text: "Lighting should create a soft, peaceful atmosphere."
        },
        {
          type: "subheading",
          text: "Natural Lighting"
        },
        {
          type: "text",
          text: "Natural light is extremely important. Large windows, open spaces, light-colored walls, and simple window treatments can help maximize daylight."
        },
        {
          type: "subheading",
          text: "Artificial Lighting"
        },
        {
          type: "list",
          items: [
            "Paper pendant lights",
            "Minimal pendant lights",
            "Wooden lamps",
            "Soft wall lights",
            "Floor lamps",
            "Recessed lighting",
            "Indirect LED lighting"
          ]
        },
        {
          type: "text",
          text: "Avoid harsh, overly bright lighting."
        },
        {
          type: "subheading",
          text: "Decorative Elements"
        },
        {
          type: "list",
          items: [
            "Handmade ceramics",
            "Simple artwork",
            "Sculptural objects",
            "Natural branches",
            "Small plants",
            "Stone objects",
            "Woven baskets",
            "Minimal vases"
          ]
        },
        {
          type: "text",
          text: "Each decorative element should have enough space around it to remain visually important."
        }
      ]
    },

    {
      heading: "07. Patterns, Plants & Accessories",
      image: japandi7,
      blocks: [
        {
          type: "text",
          text: "Japandi generally uses very subtle patterns."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Minimal geometric patterns",
            "Natural textures",
            "Simple stripes",
            "Organic forms",
            "Japanese-inspired motifs",
            "Subtle woven patterns"
          ]
        },
        {
          type: "text",
          text: "Avoid highly complex or brightly colored patterns."
        },
        {
          type: "subheading",
          text: "Plants"
        },
        {
          type: "text",
          text: "Indoor greenery plays an important role."
        },
        {
          type: "list",
          items: [
            "Bonsai",
            "Bamboo",
            "Fiddle-leaf fig",
            "Olive trees",
            "Snake plants",
            "Minimal leafy plants"
          ]
        },
        {
          type: "text",
          text: "The objective is not to create an indoor jungle but to introduce small, intentional connections with nature."
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Handmade pottery",
            "Simple vases",
            "Wooden objects",
            "Woven baskets",
            "Minimal artwork",
            "Stone decorations",
            "Natural textiles"
          ]
        },
        {
          type: "subheading",
          text: "Guiding Principle"
        },
        {
          type: "quote",
          text: "Choose fewer things, but choose them well."
        }
      ]
    },

    {
      heading: "08. Modern Japandi — Sakura Interior Designers",
      image: japandi8,
      blocks: [
        {
          type: "text",
          text: "Modern Japandi adapts the traditional philosophy to contemporary lifestyles."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Minimal architecture",
            "Natural materials",
            "Smart storage",
            "Modern technology",
            "Comfortable furniture",
            "Sustainable materials",
            "Indoor greenery",
            "Soft lighting",
            "Flexible spaces"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Japandi can become one of the signature design identities of Sakura Interior Designers because of its relationship with Japanese-inspired aesthetics, natural beauty, and simplicity."
        },
        {
          type: "text",
          text: "The design philosophy could be:"
        },
        {
          type: "quote",
          text: "Find beauty in simplicity."
        },
        {
          type: "text",
          text: "Sakura can combine Japanese-inspired balance with Scandinavian warmth to create interiors that feel peaceful but still practical for modern living."
        },
        {
          type: "subheading",
          text: "Tropical Japandi for Sri Lankan Homes"
        },
        {
          type: "list",
          items: [
            "Natural timber",
            "Local stone",
            "Bamboo and rattan",
            "Tropical plants",
            "Large windows",
            "Cross ventilation",
            "Shaded outdoor spaces",
            "Indoor-outdoor connections",
            "Natural daylight"
          ]
        },
        {
          type: "text",
          text: "This creates a Tropical Japandi interpretation that respects both the original design philosophy and the local environment."
        }
      ]
    }
  ]
},

"mid-century-modern": {
  title: "Mid-Century Modern",
  tagline: "Timeless Design, Modern Living",
  intro:
    "Mid-Century Modern interior design combines clean architectural forms, functional furniture, natural materials, organic curves, and expressive colors. Developed during a period of rapid social and technological change, the style continues to influence contemporary interiors through its balance of simplicity, comfort, and distinctive character.",
  keywords: [
    "Timeless",
    "Functional",
    "Organic",
    "Optimistic",
    "Iconic"
  ],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: midCentury1,
      blocks: [
        {
          type: "text",
          text: "Mid-Century Modern design developed primarily during the mid-20th century, particularly from the 1940s through the 1960s."
        },
        {
          type: "text",
          text: "The style grew from the broader principles of Modernism, which emphasized functionality, simplicity, innovative materials, and the relationship between architecture and everyday life."
        },
        {
          type: "text",
          text: "During this period, advances in manufacturing allowed designers to experiment with new furniture forms and materials. At the same time, changing lifestyles created a growing demand for practical, comfortable, and affordable design."
        },
        {
          type: "subheading",
          text: "Major Influences"
        },
        {
          type: "list",
          items: [
            "Modernist architecture",
            "Post-war development",
            "New manufacturing technologies",
            "Scandinavian design",
            "Bauhaus principles",
            "Organic architecture"
          ]
        },
        {
          type: "text",
          text: "Designers such as Charles and Ray Eames, George Nelson, Eero Saarinen, and Arne Jacobsen became influential figures during this period."
        },
        {
          type: "subheading",
          text: "Architectural Development"
        },
        {
          type: "list",
          items: [
            "Open-plan layouts",
            "Large windows",
            "Low-pitched or flat roofs",
            "Strong indoor-outdoor connections",
            "Natural materials",
            "Simple architectural forms",
            "Minimal structural decoration"
          ]
        },
        {
          type: "text",
          text: "The style remains influential because its focus on function, comfort, simplicity, and connection with nature continues to suit modern lifestyles."
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: midCentury2,
      blocks: [
        {
          type: "text",
          text: "Mid-Century Modern interiors typically combine a neutral foundation with warm wood tones and carefully selected accent colors."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "Warm White",
            "Cream",
            "Beige",
            "Light Gray",
            "Charcoal",
            "Natural Wood"
          ]
        },
        {
          type: "subheading",
          text: "Signature Accent Colors"
        },
        {
          type: "list",
          items: [
            "Mustard Yellow",
            "Burnt Orange",
            "Olive Green",
            "Teal",
            "Rust",
            "Terracotta",
            "Deep Blue"
          ]
        },
        {
          type: "subheading",
          text: "Wood Tones"
        },
        {
          type: "list",
          items: [
            "Walnut",
            "Teak",
            "Oak",
            "Rosewood"
          ]
        },
        {
          type: "text",
          text: "A classic combination could be: Warm White + Walnut + Mustard + Olive"
        },
        {
          type: "text",
          text: "A more contemporary interpretation could be: Cream + Walnut + Burnt Orange + Deep Teal"
        },
        {
          type: "text",
          text: "The objective is to introduce personality through color while maintaining the clean and balanced character of the interior."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: midCentury3,
      blocks: [
        {
          type: "text",
          text: "Mid-Century Modern design is recognized for its combination of functionality, simplicity, and expressive forms."
        },
        {
          type: "subheading",
          text: "Clean Lines"
        },
        {
          type: "text",
          text: "Furniture and architecture generally use clear and uncomplicated forms."
        },
        {
          type: "subheading",
          text: "Organic Curves"
        },
        {
          type: "text",
          text: "Rounded chairs, curved tables, and sculptural furniture soften the stronger architectural lines."
        },
        {
          type: "subheading",
          text: "Functionality"
        },
        {
          type: "text",
          text: "Furniture is designed around practical everyday use rather than unnecessary decoration."
        },
        {
          type: "subheading",
          text: "Visual Lightness"
        },
        {
          type: "list",
          items: [
            "Slim legs",
            "Tapered legs",
            "Open bases",
            "Raised furniture forms"
          ]
        },
        {
          type: "subheading",
          text: "Indoor-Outdoor Connection"
        },
        {
          type: "text",
          text: "Large windows and glass doors help connect interior spaces with gardens, courtyards, and outdoor areas."
        },
        {
          type: "subheading",
          text: "Minimal Ornamentation"
        },
        {
          type: "text",
          text: "Decoration is controlled, allowing furniture, architecture, and materials to become the main visual elements."
        },
        {
          type: "subheading",
          text: "Material Honesty"
        },
        {
          type: "text",
          text: "Materials such as wood, leather, metal, glass, and molded materials are often presented clearly rather than heavily decorated."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: midCentury4,
      blocks: [
        {
          type: "text",
          text: "Furniture is one of the most recognizable features of Mid-Century Modern interiors."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Low-profile sofas",
            "Lounge chairs",
            "Sculptural armchairs",
            "Tapered-leg chairs",
            "Wooden sideboards",
            "Credenzas",
            "Oval coffee tables",
            "Minimal dining chairs",
            "Platform beds",
            "Simple storage units"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "list",
          items: [
            "Tapered legs",
            "Organic curves",
            "Simple silhouettes",
            "Slim profiles",
            "Natural wood",
            "Functional construction"
          ]
        },
        {
          type: "text",
          text: "Furniture should feel distinctive without making the room feel crowded."
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "text",
          text: "Mid-Century Modern interiors generally use open and flexible layouts."
        },
        {
          type: "text",
          text: "Furniture can define different areas without relying heavily on walls."
        },
        {
          type: "text",
          text: "Large windows and clear circulation paths should remain visually important."
        },
        {
          type: "quote",
          text: "Let the furniture define the space while keeping the architecture open."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: midCentury5,
      blocks: [
        {
          type: "text",
          text: "Mid-Century Modern design combines natural materials with innovative materials that became increasingly popular during the mid-20th century."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood is one of the defining materials of the style."
        },
        {
          type: "list",
          items: [
            "Walnut",
            "Teak",
            "Oak",
            "Rosewood"
          ]
        },
        {
          type: "text",
          text: "Wood can be used for furniture, cabinets, flooring, wall panels, doors, and built-in storage."
        },
        {
          type: "subheading",
          text: "Leather"
        },
        {
          type: "list",
          items: [
            "Lounge chairs",
            "Sofas",
            "Accent chairs",
            "Ottomans"
          ]
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "list",
          items: [
            "Furniture frames",
            "Table legs",
            "Lighting",
            "Shelving",
            "Decorative details"
          ]
        },
        {
          type: "subheading",
          text: "Glass"
        },
        {
          type: "text",
          text: "Glass helps maintain visual openness and can be used for coffee tables, windows, cabinet doors, and decorative elements."
        },
        {
          type: "subheading",
          text: "Molded Materials"
        },
        {
          type: "list",
          items: [
            "Molded plywood",
            "Molded plastic",
            "Fiberglass"
          ]
        },
        {
          type: "subheading",
          text: "Textiles"
        },
        {
          type: "list",
          items: [
            "Wool",
            "Cotton",
            "Linen",
            "Woven fabrics"
          ]
        },
        {
          type: "text",
          text: "The combination of warm wood, soft upholstery, metal, and glass creates the characteristic material balance of Mid-Century Modern interiors."
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: midCentury6,
      blocks: [
        {
          type: "text",
          text: "Lighting plays an important role in defining the character of a Mid-Century Modern interior."
        },
        {
          type: "subheading",
          text: "Signature Lighting"
        },
        {
          type: "list",
          items: [
            "Sputnik-inspired chandeliers",
            "Globe pendant lights",
            "Sculptural floor lamps",
            "Arc lamps",
            "Cone-shaped pendants",
            "Wall sconces",
            "Table lamps"
          ]
        },
        {
          type: "subheading",
          text: "Lighting Characteristics"
        },
        {
          type: "list",
          items: [
            "Brass",
            "Metal",
            "Glass",
            "Wood",
            "Sculptural forms"
          ]
        },
        {
          type: "text",
          text: "Rather than simply blending into the ceiling, lighting fixtures can become architectural and decorative features."
        },
        {
          type: "subheading",
          text: "Natural Lighting"
        },
        {
          type: "text",
          text: "Large windows and glass doors are particularly important because they bring daylight into the interior and strengthen the connection with outdoor spaces."
        },
        {
          type: "subheading",
          text: "Architectural Elements"
        },
        {
          type: "list",
          items: [
            "Large windows",
            "Clerestory windows",
            "Wood paneling",
            "Open staircases",
            "Built-in storage",
            "Simple structural forms",
            "Indoor courtyards"
          ]
        },
        {
          type: "text",
          text: "The relationship between the architecture, furniture, and natural environment is an important part of the overall design."
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      blocks: [
        {
          type: "text",
          text: "Mid-Century Modern allows more visual expression than styles such as Japandi or Contemporary."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Abstract geometric patterns",
            "Atomic-inspired motifs",
            "Circles",
            "Lines",
            "Repeating shapes",
            "Organic forms"
          ]
        },
        {
          type: "text",
          text: "These patterns can be introduced through rugs, cushions, curtains, wallpaper, artwork, and upholstery."
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "list",
          items: [
            "Abstract paintings",
            "Geometric prints",
            "Modernist artwork",
            "Vintage-inspired posters",
            "Sculptural pieces",
            "Contemporary interpretations of 1950s–1960s art"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Ceramic objects",
            "Sculptural vases",
            "Vintage clocks",
            "Decorative books",
            "Indoor plants",
            "Brass objects",
            "Statement mirrors"
          ]
        },
        {
          type: "text",
          text: "Accessories should support the overall composition without making the space feel cluttered."
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "quote",
          text: "Let every piece contribute to the composition."
        }
      ]
    },

    {
      heading: "08. Modern Mid-Century — Sakura Interior Designers",
      blocks: [
        {
          type: "text",
          text: "Modern Mid-Century design combines the recognizable character of the original style with contemporary comfort, technology, and functionality."
        },
        {
          type: "text",
          text: "Instead of reproducing a 1950s or 1960s interior exactly, modern interpretations focus on adapting its principles to present-day lifestyles."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Original-inspired furniture",
            "Natural materials",
            "Open-plan layouts",
            "Modern kitchens",
            "Smart-home technology",
            "Sustainable materials",
            "Energy-efficient lighting",
            "Contemporary artwork",
            "Indoor greenery",
            "Comfortable furniture"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Mid-Century Modern through the philosophy:"
        },
        {
          type: "quote",
          text: "Designed in the past. Made relevant for today."
        },
        {
          type: "text",
          text: "Sakura can combine warm timber, sculptural furniture, natural light, open spaces, and carefully selected retro influences with modern technology and contemporary comfort."
        },
        {
          type: "text",
          text: "The objective is to preserve the timeless character of Mid-Century Modern design while making it practical for today's homes."
        },
        {
          type: "subheading",
          text: "Tropical Mid-Century Modern for Sri Lankan Homes"
        },
        {
          type: "list",
          items: [
            "Local timber",
            "Tropical greenery",
            "Large windows",
            "Cross ventilation",
            "Shaded outdoor areas",
            "Indoor-outdoor living",
            "Natural stone",
            "Climate-responsive architecture",
            "Open and flexible spaces"
          ]
        },
        {
          type: "text",
          text: "This creates a Tropical Mid-Century Modern interpretation that retains the distinctive character of the original style while responding naturally to the Sri Lankan climate and way of living."
        }
      ]
    }
  ]
},

"minimalist": {
  title: "Minimalist",
  tagline: "Less, But Better",
  intro:
    "Minimalist interior design focuses on simplicity, functionality, and intentional living. By reducing unnecessary elements and emphasizing clean forms, natural light, open space, and high-quality materials, Minimalist interiors create environments that feel calm, balanced, and timeless.",
  keywords: [
    "Simplicity",
    "Clarity",
    "Function",
    "Space",
    "Balance"
  ],
  heroImage: heroImg,

  sections: [
    {
      heading: "01. Origin & History",
      image: minimalist1,
      blocks: [
        {
          type: "text",
          text: "Minimalist interior design developed from several influential design philosophies, particularly Modernism, Bauhaus, Japanese aesthetics, and later Minimalist art and architecture."
        },
        {
          type: "text",
          text: "The principles of Minimalism became particularly influential during the mid-20th century, as designers and architects began questioning excessive decoration and focusing on essential forms and functions."
        },
        {
          type: "text",
          text: "The Bauhaus movement contributed the idea that design should combine form, function, and simplicity."
        },
        {
          type: "subheading",
          text: "Japanese Influence"
        },
        {
          type: "list",
          items: [
            "Empty space",
            "Simplicity",
            "Balance",
            "Natural materials",
            "Connection with nature"
          ]
        },
        {
          type: "subheading",
          text: "Development of Minimalism"
        },
        {
          type: "text",
          text: "Japanese architecture and traditional interiors also influenced Minimalism through concepts such as empty space, simplicity, balance, natural materials, and connection with nature."
        },
        {
          type: "text",
          text: "By the late 20th century, Minimalist design became increasingly associated with clean architectural forms, neutral colors, limited decoration, and carefully considered spaces."
        },
        {
          type: "text",
          text: "Today, Minimalism continues to evolve into different forms, including Warm Minimalism, Contemporary Minimalism, and Sustainable Minimalism."
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: minimalist2,
      blocks: [
        {
          type: "text",
          text: "Minimalist interiors generally use a restricted color palette."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "White",
            "Off-White",
            "Cream",
            "Beige",
            "Light Gray"
          ]
        },
        {
          type: "subheading",
          text: "Supporting Colors"
        },
        {
          type: "list",
          items: [
            "Taupe",
            "Sand",
            "Warm Gray",
            "Charcoal",
            "Soft Brown"
          ]
        },
        {
          type: "subheading",
          text: "Natural Accents"
        },
        {
          type: "list",
          items: [
            "Sage Green",
            "Olive",
            "Terracotta",
            "Natural Wood"
          ]
        },
        {
          type: "text",
          text: "A classic Minimalist palette could be: White + Light Gray + Natural Wood"
        },
        {
          type: "text",
          text: "A warmer interpretation could be: Warm White + Beige + Oak + Taupe"
        },
        {
          type: "text",
          text: "A contemporary darker interpretation could be: Cream + Charcoal + Walnut + Soft Gray"
        },
        {
          type: "text",
          text: "The limited color palette helps maintain visual clarity and calmness."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: minimalist3,
      blocks: [
        {
          type: "text",
          text: "Minimalism is based on the principle of intentional simplicity."
        },
        {
          type: "subheading",
          text: "Less Visual Clutter"
        },
        {
          type: "text",
          text: "Unnecessary furniture and decorative objects are removed."
        },
        {
          type: "subheading",
          text: "Clean Lines"
        },
        {
          type: "text",
          text: "Furniture and architecture generally have simple and clearly defined forms."
        },
        {
          type: "subheading",
          text: "Open Space"
        },
        {
          type: "text",
          text: "Empty areas are intentionally preserved instead of being treated as unused space."
        },
        {
          type: "subheading",
          text: "Functionality"
        },
        {
          type: "text",
          text: "Each element should serve a practical or meaningful purpose."
        },
        {
          type: "subheading",
          text: "Visual Balance"
        },
        {
          type: "text",
          text: "Furniture, lighting, colors, and materials are carefully positioned to create harmony."
        },
        {
          type: "subheading",
          text: "Quality Over Quantity"
        },
        {
          type: "text",
          text: "Instead of having many objects, Minimalist design often invests in fewer, higher-quality pieces."
        },
        {
          type: "subheading",
          text: "Natural Light"
        },
        {
          type: "text",
          text: "Light becomes an important architectural feature."
        },
        {
          type: "subheading",
          text: "Integrated Storage"
        },
        {
          type: "text",
          text: "Storage is often hidden or built into the architecture to maintain a clean appearance."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: minimalist4,
      blocks: [
        {
          type: "text",
          text: "Minimalist furniture is typically simple, functional, and visually restrained."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Low-profile sofas",
            "Simple armchairs",
            "Minimal coffee tables",
            "Platform beds",
            "Floating cabinets",
            "Built-in wardrobes",
            "Simple dining tables",
            "Clean-lined chairs",
            "Modular furniture"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "list",
          items: [
            "Simple silhouettes",
            "Neutral upholstery",
            "Clean edges",
            "Minimal decoration",
            "Functional construction"
          ]
        },
        {
          type: "subheading",
          text: "Spatial Planning"
        },
        {
          type: "text",
          text: "The layout should prioritize movement and breathing space."
        },
        {
          type: "text",
          text: "Furniture, space, light, and architecture should work together rather than filling every part of the room."
        },
        {
          type: "subheading",
          text: "Storage"
        },
        {
          type: "list",
          items: [
            "Built-in cabinets",
            "Handleless cupboards",
            "Under-bed storage",
            "Wall-mounted storage",
            "Integrated shelving"
          ]
        },
        {
          type: "text",
          text: "Hidden and integrated storage keeps everyday objects out of sight and maintains visual simplicity."
        },
        {
          type: "quote",
          text: "Let the space breathe by keeping only what is necessary."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: minimalist5,
      blocks: [
        {
          type: "text",
          text: "Minimalist interiors may use a limited number of materials, but the quality and texture of those materials become especially important."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "list",
          items: [
            "Oak",
            "Ash",
            "Walnut",
            "Teak"
          ]
        },
        {
          type: "text",
          text: "Natural wood introduces warmth and can be used for furniture, flooring, cabinetry, wall panels, and architectural details."
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Flooring",
            "Countertops",
            "Bathrooms",
            "Feature walls"
          ]
        },
        {
          type: "text",
          text: "Stone provides natural variation and subtle visual interest."
        },
        {
          type: "subheading",
          text: "Concrete"
        },
        {
          type: "text",
          text: "Concrete provides a clean architectural appearance and works particularly well in contemporary Minimalist interiors."
        },
        {
          type: "subheading",
          text: "Glass"
        },
        {
          type: "text",
          text: "Glass helps maintain visual openness and allows natural light to travel through the space."
        },
        {
          type: "subheading",
          text: "Fabrics"
        },
        {
          type: "list",
          items: [
            "Linen",
            "Cotton",
            "Wool",
            "Natural woven fabrics"
          ]
        },
        {
          type: "text",
          text: "Soft natural fabrics can prevent minimalist spaces from feeling cold."
        },
        {
          type: "subheading",
          text: "Texture Strategy"
        },
        {
          type: "text",
          text: "Since Minimalism uses fewer decorative elements, texture becomes essential."
        },
        {
          type: "quote",
          text: "Smooth plaster + natural wood + textured linen + stone"
        },
        {
          type: "text",
          text: "This combination creates depth without visual clutter."
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: minimalist6,
      blocks: [
        {
          type: "text",
          text: "Lighting should be integrated into the overall architecture of a Minimalist interior."
        },
        {
          type: "subheading",
          text: "Natural Lighting"
        },
        {
          type: "text",
          text: "Large windows and glass doors can make natural light one of the main design elements."
        },
        {
          type: "text",
          text: "Simple curtains or blinds should avoid visually overwhelming the windows."
        },
        {
          type: "subheading",
          text: "Artificial Lighting"
        },
        {
          type: "list",
          items: [
            "Recessed lighting",
            "Linear LED lighting",
            "Minimal pendant lights",
            "Wall sconces",
            "Architectural floor lamps",
            "Under-cabinet lighting"
          ]
        },
        {
          type: "subheading",
          text: "Layered Lighting"
        },
        {
          type: "text",
          text: "A Minimalist interior can use Ambient Lighting + Task Lighting + Accent Lighting while keeping the fixtures visually subtle."
        },
        {
          type: "subheading",
          text: "Architectural Lighting"
        },
        {
          type: "list",
          items: [
            "Ceilings",
            "Wall niches",
            "Staircases",
            "Cabinets",
            "Shelving",
            "Headboards"
          ]
        },
        {
          type: "text",
          text: "The objective is to illuminate the space without making the lighting itself unnecessarily dominant."
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      image: minimalist7,
      blocks: [
        {
          type: "text",
          text: "Minimalist design uses very limited decoration."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Simple geometric forms",
            "Fine lines",
            "Natural textures",
            "Minimal abstract patterns"
          ]
        },
        {
          type: "text",
          text: "Large or highly complex patterns are generally avoided."
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "list",
          items: [
            "Abstract artwork",
            "Monochrome photography",
            "Minimalist paintings",
            "Line drawings",
            "Sculptural artwork",
            "Nature-inspired artwork"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Ceramic vase",
            "Sculptural object",
            "Indoor plant",
            "Simple mirror",
            "Decorative book",
            "Natural stone object"
          ]
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "quote",
          text: "Give every object a reason to be there."
        },
        {
          type: "text",
          text: "Empty space should be considered part of the composition."
        }
      ]
    },

    {
      heading: "08. Modern Minimalist — Sakura Interior Designers",
      image: minimalist8,
      blocks: [
        {
          type: "text",
          text: "Modern Minimalism adapts the traditional minimalist philosophy to contemporary lifestyles."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Smart-home technology",
            "Hidden storage",
            "Sustainable materials",
            "Energy-efficient lighting",
            "Flexible furniture",
            "Multi-functional spaces",
            "Natural materials",
            "Indoor greenery",
            "Modern architectural systems"
          ]
        },
        {
          type: "subheading",
          text: "Warm Minimalism"
        },
        {
          type: "text",
          text: "One of the most popular contemporary interpretations is Warm Minimalism."
        },
        {
          type: "list",
          items: [
            "Natural timber",
            "Warm beige",
            "Soft fabrics",
            "Earth tones",
            "Natural stone",
            "Plants",
            "Warm lighting"
          ]
        },
        {
          type: "text",
          text: "These elements create a minimalist space that feels comfortable rather than sterile."
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Minimalism through the philosophy:"
        },
        {
          type: "quote",
          text: "Create space for what matters."
        },
        {
          type: "text",
          text: "The focus should be on understanding how the client actually lives and removing elements that do not contribute to their lifestyle."
        },
        {
          type: "text",
          text: "Sakura can combine clean architecture, natural materials, hidden storage, thoughtful lighting, and carefully selected furniture to create spaces that are calm, functional, and enduring."
        },
        {
          type: "subheading",
          text: "Tropical Minimalist for Sri Lankan Homes"
        },
        {
          type: "list",
          items: [
            "Cross ventilation",
            "Large shaded windows",
            "Natural timber",
            "Local stone",
            "Tropical greenery",
            "Indoor-outdoor spaces",
            "Passive cooling strategies",
            "Natural daylight"
          ]
        },
        {
          type: "text",
          text: "This creates a Tropical Minimalist approach that is clean and contemporary while responding naturally to the local climate."
        }
      ]
    }
  ]
},

"modern": {
  title: "Modern",
  tagline: "Form Meets Function",
  intro:
    "Modern interior design creates sophisticated spaces through clean architectural forms, functional planning, refined materials, and carefully controlled decoration. The style focuses on creating environments that are practical, visually balanced, and designed around contemporary lifestyles.",
  keywords: [
    "Sophisticated",
    "Functional",
    "Clean",
    "Architectural",
    "Timeless"
  ],
  heroImage: heroImg,

  sections: [
    {
      heading: "01. Origin & History",
      image: modern1,
      blocks: [
        {
          type: "text",
          text: "Modern interior design has its roots in the Modernist movement of the early 20th century."
        },
        {
          type: "text",
          text: "Modernism developed as architects and designers moved away from heavily decorated historical styles and began exploring new approaches based on function, simplicity, technology, new materials, industrial production, and architectural clarity."
        },
        {
          type: "subheading",
          text: "Major Influences"
        },
        {
          type: "list",
          items: [
            "Function",
            "Simplicity",
            "Technology",
            "New materials",
            "Industrial production",
            "Architectural clarity"
          ]
        },
        {
          type: "text",
          text: "Movements such as Bauhaus and International Style had a significant influence on modern design."
        },
        {
          type: "text",
          text: "The famous principle form follows function became closely associated with the broader Modernist approach."
        },
        {
          type: "subheading",
          text: "Modern Development"
        },
        {
          type: "text",
          text: "As technology, construction methods, and lifestyles evolved, Modern interiors continued to change."
        },
        {
          type: "list",
          items: [
            "Smart technology",
            "Sustainable materials",
            "Open-plan living",
            "Contemporary furniture",
            "Energy-efficient systems",
            "Natural materials"
          ]
        }
        ,
        {
          type: "text",
          text: "Today, Modern design combines its original functional principles with contemporary technology, sustainable materials, and changing lifestyles."
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: modern2,
      blocks: [
        {
          type: "text",
          text: "Modern interiors usually rely on neutral colors supported by carefully selected accents."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "White",
            "Off-White",
            "Beige",
            "Light Gray",
            "Warm Gray",
            "Taupe"
          ]
        },
        {
          type: "subheading",
          text: "Dark Colors"
        },
        {
          type: "list",
          items: [
            "Charcoal",
            "Graphite",
            "Black",
            "Deep Brown"
          ]
        },
        {
          type: "subheading",
          text: "Natural Colors"
        },
        {
          type: "list",
          items: [
            "Olive",
            "Sage",
            "Terracotta",
            "Natural Wood"
          ]
        },
        {
          type: "subheading",
          text: "Premium Accents"
        },
        {
          type: "list",
          items: [
            "Brass",
            "Bronze",
            "Matte Black",
            "Brushed Metal"
          ]
        },
        {
          type: "text",
          text: "A sophisticated Modern combination could be: Warm White + Charcoal + Natural Oak"
        },
        {
          type: "text",
          text: "A warmer version could be: Beige + Walnut + Olive + Black"
        },
        {
          type: "text",
          text: "A premium interpretation could be: Soft Gray + Black + Marble + Brushed Brass"
        },
        {
          type: "text",
          text: "The palette should create balance rather than excessive contrast."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: modern3,
      blocks: [
        {
          type: "text",
          text: "Modern design is defined by a combination of function, simplicity, architecture, and refined materials."
        },
        {
          type: "subheading",
          text: "Clean Lines"
        },
        {
          type: "text",
          text: "Furniture and architecture often use strong horizontal and vertical forms."
        },
        {
          type: "subheading",
          text: "Functional Planning"
        },
        {
          type: "text",
          text: "Every space should respond to how people actually live."
        },
        {
          type: "subheading",
          text: "Open Spaces"
        },
        {
          type: "text",
          text: "Modern interiors often use open or semi-open floor plans."
        },
        {
          type: "subheading",
          text: "Architectural Focus"
        },
        {
          type: "text",
          text: "Walls, ceilings, windows, stairs, and built-in elements can become part of the design."
        },
        {
          type: "subheading",
          text: "Material Contrast"
        },
        {
          type: "text",
          text: "Modern spaces often combine different materials such as wood, stone, glass, and metal."
        },
        {
          type: "subheading",
          text: "Controlled Decoration"
        },
        {
          type: "text",
          text: "Decoration is carefully selected rather than excessive."
        },
        {
          type: "subheading",
          text: "Technology"
        },
        {
          type: "text",
          text: "Modern homes can integrate technology without allowing it to dominate the visual design."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: modern4,
      blocks: [
        {
          type: "text",
          text: "Modern furniture usually has clean silhouettes and practical proportions."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Contemporary sofas",
            "Modular seating",
            "Sculptural armchairs",
            "Minimal dining tables",
            "Built-in cabinets",
            "Floating consoles",
            "Modern beds",
            "Statement coffee tables",
            "Integrated storage"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "list",
          items: [
            "Clean lines",
            "Simple forms",
            "Comfortable proportions",
            "High-quality materials",
            "Functional construction"
          ]
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "text",
          text: "Modern interiors often use open-plan arrangements."
        },
        {
          type: "text",
          text: "Instead of separating every function with walls, furniture, flooring, lighting, and ceiling treatments can define different zones."
        },
        {
          type: "subheading",
          text: "Flexible Spaces"
        },
        {
          type: "text",
          text: "Modern homes can include spaces that serve multiple purposes."
        },
        {
          type: "list",
          items: [
            "Home Office + Guest Room",
            "Living Room + Entertainment Area"
          ]
        },
        {
          type: "quote",
          text: "Design the space around how people actually live."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: modern5,
      blocks: [
        {
          type: "text",
          text: "Modern design uses materials for both function and visual expression."
        },
        {
          type: "subheading",
          text: "Natural Wood"
        },
        {
          type: "list",
          items: [
            "Flooring",
            "Cabinets",
            "Wall panels",
            "Furniture",
            "Ceilings"
          ]
        },
        {
          type: "text",
          text: "Wood adds warmth to modern interiors."
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Kitchen counters",
            "Bathroom surfaces",
            "Flooring",
            "Feature walls"
          ]
        },
        {
          type: "text",
          text: "Natural stone creates a sophisticated architectural appearance."
        },
        {
          type: "subheading",
          text: "Glass"
        },
        {
          type: "text",
          text: "Glass helps create openness and allows light to travel through the interior."
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "list",
          items: [
            "Stainless steel",
            "Matte black metal",
            "Aluminum",
            "Brass",
            "Bronze"
          ]
        },
        {
          type: "subheading",
          text: "Concrete"
        },
        {
          type: "text",
          text: "Concrete can provide a strong contemporary architectural character."
        },
        {
          type: "subheading",
          text: "Textiles"
        },
        {
          type: "list",
          items: [
            "Linen",
            "Wool",
            "Cotton",
            "Leather",
            "Textured upholstery"
          ]
        },
        {
          type: "text",
          text: "Soft fabrics balance harder materials and help create a comfortable atmosphere."
        },
        {
          type: "text",
          text: "A successful Modern interior often depends on material contrast."
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: modern6,
      blocks: [
        {
          type: "text",
          text: "Lighting should be considered as part of the architecture."
        },
        {
          type: "subheading",
          text: "Natural Light"
        },
        {
          type: "list",
          items: [
            "Large windows",
            "Glass doors",
            "Skylights",
            "Open courtyards",
            "Light wells"
          ]
        },
        {
          type: "text",
          text: "Natural light can make neutral materials feel warmer and more dynamic."
        },
        {
          type: "subheading",
          text: "Artificial Lighting"
        },
        {
          type: "list",
          items: [
            "Recessed lighting",
            "Linear LED lights",
            "Pendant lights",
            "Track lighting",
            "Wall sconces",
            "Architectural floor lamps"
          ]
        },
        {
          type: "subheading",
          text: "Layered Lighting"
        },
        {
          type: "text",
          text: "A Modern interior can combine Ambient + Task + Accent Lighting."
        },
        {
          type: "subheading",
          text: "Architectural Features"
        },
        {
          type: "list",
          items: [
            "Floating staircases",
            "Double-height spaces",
            "Feature ceilings",
            "Large windows",
            "Built-in shelving",
            "Statement walls",
            "Open-plan kitchens"
          ]
        },
        {
          type: "text",
          text: "Architectural elements should contribute to both the functionality and visual identity of the interior."
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      image: modern7,
      blocks: [
        {
          type: "text",
          text: "Modern design generally uses controlled patterns and carefully selected decorative pieces."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Geometric forms",
            "Linear patterns",
            "Abstract patterns",
            "Subtle textures",
            "Large-scale artistic patterns"
          ]
        },
        {
          type: "text",
          text: "Excessive small patterns are generally avoided."
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "list",
          items: [
            "Abstract paintings",
            "Large photography",
            "Sculptural artwork",
            "Contemporary prints",
            "Minimal line art"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Sculptural vases",
            "Modern mirrors",
            "Ceramic objects",
            "Indoor plants",
            "Decorative books",
            "Contemporary sculptures",
            "Statement rugs"
          ]
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "text",
          text: "Instead of decorating every surface, create intentional focal points."
        },
        {
          type: "quote",
          text: "Let each focal point have enough space to make an impact."
        }
      ]
    },

    {
      heading: "08. Contemporary Modern — Sakura Interior Designers",
      image: modern8,
      blocks: [
        {
          type: "text",
          text: "Modern design continues to evolve with technology, sustainability, and changing lifestyles."
        },
        {
          type: "subheading",
          text: "Modern Living Today"
        },
        {
          type: "list",
          items: [
            "Smart lighting",
            "Automated curtains",
            "Smart climate control",
            "Energy-efficient appliances",
            "Integrated entertainment systems",
            "Sustainable materials",
            "Hidden storage",
            "Flexible furniture",
            "Home-office spaces"
          ]
        },
        {
          type: "text",
          text: "Technology should be integrated into the design rather than visually dominating it."
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can position Modern design around the philosophy:"
        },
        {
          type: "quote",
          text: "Designed around the way you live."
        },
        {
          type: "text",
          text: "The focus is not simply on creating a visually modern home. It is about understanding the client's lifestyle and translating it into a space that is functional, comfortable, elegant, and future-ready."
        },
        {
          type: "text",
          text: "Sakura can combine Architecture + Function + Technology + Natural Materials to create modern interiors that remain timeless rather than following short-lived trends."
        },
        {
          type: "subheading",
          text: "Modern Sri Lankan Interpretation"
        },
        {
          type: "list",
          items: [
            "Large shaded windows",
            "Cross ventilation",
            "Tropical landscaping",
            "Natural timber",
            "Local stone",
            "Indoor-outdoor living",
            "Courtyards",
            "Passive cooling",
            "Natural daylight",
            "Smart-home technology"
          ]
        },
        {
          type: "text",
          text: "This creates a Modern Tropical Interior that combines contemporary architecture with the environmental characteristics of Sri Lanka."
        }
      ]
    }
  ]
},

"scandinavian": {
  title: "Scandinavian",
  tagline: "Light, Warmth & Simple Living",
  intro:
    "Scandinavian interior design combines simplicity, functionality, natural materials, and comfort to create spaces that feel bright, welcoming, and timeless. Inspired by Nordic lifestyles, the style makes thoughtful use of natural light, warm textures, practical furniture, and understated colors.",
  keywords: [
    "Bright",
    "Cozy",
    "Functional",
    "Natural",
    "Timeless"
  ],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: scandinavian1,
      blocks: [
        {
          type: "text",
          text: "Scandinavian design developed across the Nordic countries of Denmark, Sweden, Norway, Finland, and Iceland, becoming particularly influential during the 20th century."
        },
        {
          type: "text",
          text: "The style was shaped by the region's cold climate, limited winter daylight, natural landscapes, craft traditions, and practical lifestyles."
        },
        {
          type: "text",
          text: "Because Nordic winters can be long and dark, interiors traditionally focused on maximizing natural light and creating warm, comfortable environments."
        },
        {
          type: "text",
          text: "During the mid-20th century, Scandinavian furniture and interior design gained international recognition for combining functionality, craftsmanship, simplicity, and accessibility."
        },
        {
          type: "text",
          text: "The movement was influenced by Modernism but maintained a stronger emphasis on warmth and human comfort."
        },
        {
          type: "subheading",
          text: "Scandinavian Philosophy"
        },
        {
          type: "subheading",
          text: "Functionality"
        },
        {
          type: "text",
          text: "Everything should have a practical purpose."
        },
        {
          type: "subheading",
          text: "Simplicity"
        },
        {
          type: "text",
          text: "Unnecessary complexity is avoided."
        },
        {
          type: "subheading",
          text: "Comfort"
        },
        {
          type: "text",
          text: "The home should feel welcoming and relaxing."
        },
        {
          type: "subheading",
          text: "Nature"
        },
        {
          type: "text",
          text: "Natural materials and colors bring the outdoors inside."
        },
        {
          type: "subheading",
          text: "Craftsmanship"
        },
        {
          type: "text",
          text: "Quality and thoughtful construction are valued."
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: scandinavian2,
      blocks: [
        {
          type: "text",
          text: "Scandinavian interiors typically use light and muted colors."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "White",
            "Off-White",
            "Cream",
            "Light Gray",
            "Beige"
          ]
        },
        {
          type: "subheading",
          text: "Natural Colors"
        },
        {
          type: "list",
          items: [
            "Light Oak",
            "Ash",
            "Soft Brown",
            "Taupe"
          ]
        },
        {
          type: "subheading",
          text: "Accent Colors"
        },
        {
          type: "list",
          items: [
            "Sage Green",
            "Dusty Blue",
            "Muted Terracotta",
            "Soft Mustard",
            "Pale Pink"
          ]
        },
        {
          type: "subheading",
          text: "Dark Accents"
        },
        {
          type: "list",
          items: [
            "Charcoal",
            "Black",
            "Deep Gray"
          ]
        },
        {
          type: "text",
          text: "A classic Scandinavian combination: White + Light Oak + Soft Gray + Sage"
        },
        {
          type: "text",
          text: "A warmer interpretation: Cream + Beige + Oak + Terracotta"
        },
        {
          type: "text",
          text: "The overall palette should maintain a feeling of brightness and visual calmness."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: scandinavian3,
      blocks: [
        {
          type: "text",
          text: "Scandinavian design focuses on creating interiors that are beautiful, practical, and comfortable."
        },
        {
          type: "subheading",
          text: "Functionality"
        },
        {
          type: "text",
          text: "Furniture and spaces are designed around everyday needs."
        },
        {
          type: "subheading",
          text: "Simplicity"
        },
        {
          type: "text",
          text: "Forms are clean without unnecessary decoration."
        },
        {
          type: "subheading",
          text: "Natural Light"
        },
        {
          type: "text",
          text: "Maximizing daylight is an important part of the design."
        },
        {
          type: "subheading",
          text: "Warmth"
        },
        {
          type: "text",
          text: "Soft textiles, timber, rugs, and warm lighting prevent the space from feeling cold."
        },
        {
          type: "subheading",
          text: "Natural Materials"
        },
        {
          type: "text",
          text: "Wood, wool, linen, cotton, leather, and stone are commonly used."
        },
        {
          type: "subheading",
          text: "Comfort"
        },
        {
          type: "text",
          text: "Comfort is not considered separate from good design."
        },
        {
          type: "subheading",
          text: "Connection With Nature"
        },
        {
          type: "text",
          text: "Plants, natural colors, organic textures, and views of nature help create a calm environment."
        },
        {
          type: "subheading",
          text: "Practical Storage"
        },
        {
          type: "text",
          text: "Storage solutions are designed to keep spaces organized without making them feel cluttered."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: scandinavian4,
      blocks: [
        {
          type: "text",
          text: "Scandinavian furniture is usually simple, functional, lightweight, and comfortable."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Light-colored wooden chairs",
            "Comfortable sofas",
            "Simple coffee tables",
            "Wooden dining tables",
            "Minimal shelving",
            "Modular storage",
            "Simple beds",
            "Soft armchairs",
            "Functional side tables"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "list",
          items: [
            "Clean lines",
            "Rounded edges",
            "Tapered legs",
            "Light wood",
            "Soft upholstery",
            "Simple silhouettes"
          ]
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "text",
          text: "Scandinavian spaces generally prioritize light, movement, and comfort."
        },
        {
          type: "text",
          text: "Furniture should be arranged to create open circulation and allow natural light to travel throughout the space."
        },
        {
          type: "subheading",
          text: "Flexible Living"
        },
        {
          type: "text",
          text: "Furniture can be selected to support multiple activities."
        },
        {
          type: "text",
          text: "For example: Living Room → Relaxing + Reading + Socializing without requiring separate rooms for each activity."
        },
        {
          type: "quote",
          text: "Light + Movement + Comfort"
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: scandinavian5,
      blocks: [
        {
          type: "text",
          text: "Natural materials are central to Scandinavian interiors."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood is one of the most recognizable materials in Scandinavian design."
        },
        {
          type: "list",
          items: [
            "Oak",
            "Ash",
            "Pine",
            "Birch"
          ]
        },
        {
          type: "text",
          text: "Light-colored timber is particularly characteristic of the style."
        },
        {
          type: "subheading",
          text: "Textiles"
        },
        {
          type: "list",
          items: [
            "Wool",
            "Linen",
            "Cotton",
            "Knitted fabrics",
            "Bouclé"
          ]
        },
        {
          type: "text",
          text: "Soft textiles create warmth and comfort."
        },
        {
          type: "subheading",
          text: "Leather"
        },
        {
          type: "list",
          items: [
            "Chairs",
            "Sofas",
            "Ottomans",
            "Handles"
          ]
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Kitchens",
            "Bathrooms",
            "Floors",
            "Feature areas"
          ]
        },
        {
          type: "subheading",
          text: "Woven Materials"
        },
        {
          type: "text",
          text: "Rattan, jute, and other woven materials can introduce organic texture."
        },
        {
          type: "subheading",
          text: "Texture Strategy"
        },
        {
          type: "text",
          text: "A Scandinavian interior may use a simple color palette but create richness through texture."
        },
        {
          type: "quote",
          text: "Wood + Wool + Linen + Woven fibers + Soft upholstery"
        }
      ]
    },

    {
      heading: "06. Lighting & Decorative Elements",
      image: scandinavian6,
      blocks: [
        {
          type: "text",
          text: "Lighting is extremely important because Scandinavian design historically developed in regions where winter daylight can be limited."
        },
        {
          type: "subheading",
          text: "Natural Lighting"
        },
        {
          type: "list",
          items: [
            "Large windows",
            "Light curtains",
            "Open layouts",
            "Reflective light-colored surfaces"
          ]
        },
        {
          type: "text",
          text: "The objective is to maximize daylight."
        },
        {
          type: "subheading",
          text: "Artificial Lighting"
        },
        {
          type: "list",
          items: [
            "Pendant lights",
            "Floor lamps",
            "Table lamps",
            "Wall sconces",
            "Minimal chandeliers",
            "Warm LED lighting"
          ]
        },
        {
          type: "subheading",
          text: "Warm Lighting"
        },
        {
          type: "text",
          text: "Warm-toned lighting creates a comfortable evening atmosphere."
        },
        {
          type: "subheading",
          text: "Decorative Lighting"
        },
        {
          type: "text",
          text: "Lighting fixtures can also become design features, particularly when they have simple sculptural forms."
        },
        {
          type: "subheading",
          text: "Decorative Elements"
        },
        {
          type: "list",
          items: [
            "Candles",
            "Ceramic vases",
            "Simple artwork",
            "Indoor plants",
            "Woven baskets",
            "Natural branches",
            "Soft rugs",
            "Decorative books"
          ]
        },
        {
          type: "text",
          text: "Decoration should feel personal and comfortable rather than excessive."
        }
      ]
    },

    {
      heading: "07. Patterns, Plants & Accessories",
      image: scandinavian7,
      blocks: [
        {
          type: "text",
          text: "Scandinavian design usually uses simple and understated patterns."
        },
        {
          type: "subheading",
          text: "Common Patterns"
        },
        {
          type: "list",
          items: [
            "Simple stripes",
            "Checks",
            "Small geometric patterns",
            "Abstract forms",
            "Nordic-inspired motifs"
          ]
        },
        {
          type: "text",
          text: "Patterns can appear through cushions, rugs, blankets, curtains, and artwork."
        },
        {
          type: "subheading",
          text: "Plants"
        },
        {
          type: "text",
          text: "Indoor plants are important because they introduce natural color and life."
        },
        {
          type: "list",
          items: [
            "Fiddle-leaf fig",
            "Snake plants",
            "Monstera",
            "Small herbs",
            "Hanging plants",
            "Simple leafy plants"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Handmade ceramics",
            "Wooden objects",
            "Woven baskets",
            "Simple mirrors",
            "Neutral artwork",
            "Candles",
            "Textured cushions",
            "Soft throws"
          ]
        },
        {
          type: "text",
          text: "The goal is to create personality without clutter."
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "quote",
          text: "Personality without clutter."
        }
      ]
    },

    {
      heading: "08. Modern Scandinavian — Sakura Interior Designers",
      image: scandinavian8,
      blocks: [
        {
          type: "text",
          text: "Modern Scandinavian design combines traditional Nordic principles with contemporary lifestyles."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Smart storage",
            "Sustainable materials",
            "Modern kitchens",
            "Flexible furniture",
            "Energy-efficient lighting",
            "Smart-home technology",
            "Contemporary artwork",
            "Natural materials",
            "Multi-functional rooms"
          ]
        },
        {
          type: "subheading",
          text: "Scandinavian vs Minimalist"
        },
        {
          type: "text",
          text: "Although they are related, Scandinavian and Minimalist design are not exactly the same."
        },
        {
          type: "quote",
          text: "Minimalist: Remove what is unnecessary."
        },
        {
          type: "quote",
          text: "Scandinavian: Keep it simple, but make it comfortable."
        },
        {
          type: "text",
          text: "This is why Scandinavian interiors can include more cushions, rugs, plants, artwork, and soft furnishings than a strict Minimalist interior."
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Scandinavian design through the philosophy:"
        },
        {
          type: "quote",
          text: "Simple spaces. Comfortable lives."
        },
        {
          type: "text",
          text: "The focus is on creating interiors that are visually clean while still feeling warm, welcoming, and personal."
        },
        {
          type: "text",
          text: "Sakura can combine Light + Natural Materials + Function + Comfort to create spaces that are practical for modern families while maintaining a sophisticated aesthetic."
        },
        {
          type: "subheading",
          text: "Scandinavian Tropical Adaptation"
        },
        {
          type: "list",
          items: [
            "Natural timber",
            "Rattan",
            "Bamboo",
            "Tropical plants",
            "Large windows",
            "Cross ventilation",
            "Shaded outdoor spaces",
            "Natural stone",
            "Open verandas",
            "Indoor-outdoor living"
          ]
        },
        {
          type: "text",
          text: "This creates a Scandinavian Tropical interpretation that feels bright and natural while remaining suitable for Sri Lanka's warmer climate."
        }
      ]
    }
  ]
},

"traditional": {
  title: "Traditional",
  tagline: "Timeless Elegance, Rooted in Heritage",
  intro:
    "Traditional interior design celebrates classic architecture, craftsmanship, symmetry, rich materials, and timeless furniture. Inspired by historical design traditions, it creates spaces that feel elegant, comfortable, established, and deeply connected to heritage.",
  keywords: [
    "Timeless",
    "Elegant",
    "Classic",
    "Warm",
    "Heritage"
  ],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: traditional1,
      blocks: [
        {
          type: "text",
          text: "Traditional interior design draws inspiration from European historical design traditions, particularly those associated with classical, Georgian, Victorian, Colonial, and other established decorative styles."
        },
        {
          type: "text",
          text: "Unlike a single design movement, Traditional design represents a broad collection of historical influences that have been adapted over generations."
        },
        {
          type: "subheading",
          text: "Core Principles"
        },
        {
          type: "list",
          items: [
            "Symmetry",
            "Proportion",
            "Craftsmanship",
            "Ornamentation",
            "Quality materials",
            "Formal composition"
          ]
        },
        {
          type: "subheading",
          text: "Architectural Features"
        },
        {
          type: "list",
          items: [
            "Moldings",
            "Paneling",
            "Columns",
            "Fireplaces",
            "Decorative ceilings",
            "Classic doors",
            "Detailed woodwork"
          ]
        },
        {
          type: "text",
          text: "Over time, designers began combining historical elements with modern furniture and contemporary conveniences."
        },
        {
          type: "subheading",
          text: "Traditional Evolution"
        },
        {
          type: "text",
          text: "Classical Traditional: Strong symmetry, columns, ornate details, and formal spaces."
        },
        {
          type: "text",
          text: "European Traditional: Rich fabrics, detailed furniture, woodwork, and decorative elements."
        },
        {
          type: "text",
          text: "Colonial Influences: Natural materials, handcrafted furniture, and regional architectural details."
        },
        {
          type: "text",
          text: "Modern Traditional: Classic proportions and materials combined with cleaner forms and modern functionality."
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: traditional2,
      blocks: [
        {
          type: "text",
          text: "Traditional interiors generally use warm, sophisticated, and established colors."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "Cream",
            "Ivory",
            "Beige",
            "Warm White",
            "Taupe"
          ]
        },
        {
          type: "subheading",
          text: "Natural Colors"
        },
        {
          type: "list",
          items: [
            "Walnut",
            "Mahogany",
            "Chestnut",
            "Olive",
            "Forest Green"
          ]
        },
        {
          type: "subheading",
          text: "Rich Accent Colors"
        },
        {
          type: "list",
          items: [
            "Burgundy",
            "Navy",
            "Deep Teal",
            "Terracotta",
            "Muted Gold"
          ]
        },
        {
          type: "subheading",
          text: "Metallic Accents"
        },
        {
          type: "list",
          items: [
            "Antique Brass",
            "Bronze",
            "Aged Gold"
          ]
        },
        {
          type: "text",
          text: "A classic Traditional combination could be: Cream + Walnut + Olive + Antique Brass"
        },
        {
          type: "text",
          text: "A richer interpretation could be: Ivory + Mahogany + Burgundy + Gold"
        },
        {
          type: "text",
          text: "A modern interpretation could be: Warm White + Walnut + Deep Green + Matte Black"
        },
        {
          type: "text",
          text: "Colors should feel warm and established rather than trendy."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: traditional3,
      blocks: [
        {
          type: "text",
          text: "Traditional interiors are based on balance, proportion, craftsmanship, and timelessness."
        },
        {
          type: "subheading",
          text: "Symmetry"
        },
        {
          type: "text",
          text: "Furniture and architectural elements are often arranged in balanced compositions."
        },
        {
          type: "subheading",
          text: "Classic Proportions"
        },
        {
          type: "text",
          text: "Furniture and rooms generally maintain harmonious proportions."
        },
        {
          type: "subheading",
          text: "Architectural Detail"
        },
        {
          type: "list",
          items: [
            "Moldings",
            "Wall paneling",
            "Decorative ceilings",
            "Archways",
            "Fireplaces",
            "Classic doors"
          ]
        },
        {
          type: "subheading",
          text: "Craftsmanship"
        },
        {
          type: "text",
          text: "Handcrafted furniture, woodwork, textiles, and decorative objects are highly valued."
        },
        {
          type: "subheading",
          text: "Comfort"
        },
        {
          type: "text",
          text: "Traditional spaces should feel welcoming rather than purely formal."
        },
        {
          type: "subheading",
          text: "Layering"
        },
        {
          type: "text",
          text: "Different materials, fabrics, furniture pieces, artwork, and accessories are layered to create depth."
        },
        {
          type: "subheading",
          text: "Timelessness"
        },
        {
          type: "text",
          text: "The style avoids depending heavily on short-lived trends."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: traditional4,
      blocks: [
        {
          type: "text",
          text: "Traditional furniture tends to be substantial, comfortable, and detailed."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Upholstered sofas",
            "Wingback chairs",
            "Wooden armchairs",
            "Classic dining tables",
            "Sideboards",
            "Console tables",
            "Four-poster beds",
            "Traditional cabinets",
            "Writing desks",
            "Decorative coffee tables"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "list",
          items: [
            "Carved wood",
            "Turned legs",
            "Upholstered seating",
            "Button tufting",
            "Decorative details",
            "Rich wood finishes"
          ]
        },
        {
          type: "text",
          text: "Traditional furniture should feel substantial and comfortable while maintaining balanced proportions."
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "text",
          text: "Traditional interiors often use balanced and symmetrical arrangements."
        },
        {
          type: "text",
          text: "A fireplace, artwork, or architectural feature can become the central focal point of the room."
        },
        {
          type: "subheading",
          text: "Formal & Informal Areas"
        },
        {
          type: "list",
          items: [
            "Living room",
            "Dining room",
            "Study",
            "Family room",
            "Bedroom"
          ]
        },
        {
          type: "text",
          text: "Modern Traditional interiors can use more open layouts while retaining classic furniture and architectural detailing."
        },
        {
          type: "quote",
          text: "Create balance, comfort, and character through thoughtful proportions."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: traditional5,
      blocks: [
        {
          type: "text",
          text: "Traditional interiors depend heavily on rich, tactile materials that create a feeling of depth, craftsmanship, and permanence."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "text",
          text: "Wood is one of the most important materials in Traditional interiors."
        },
        {
          type: "list",
          items: [
            "Walnut",
            "Mahogany",
            "Oak",
            "Teak",
            "Cherry"
          ]
        },
        {
          type: "text",
          text: "Wood can be used for flooring, furniture, doors, wall paneling, cabinets, and staircases."
        },
        {
          type: "subheading",
          text: "Fabrics"
        },
        {
          type: "list",
          items: [
            "Linen",
            "Cotton",
            "Wool",
            "Velvet",
            "Silk",
            "Damask"
          ]
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Flooring",
            "Fireplaces",
            "Countertops",
            "Bathrooms",
            "Architectural features"
          ]
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "list",
          items: [
            "Brass",
            "Bronze",
            "Copper",
            "Wrought iron"
          ]
        },
        {
          type: "subheading",
          text: "Rugs"
        },
        {
          type: "text",
          text: "Traditional rugs add warmth and help define spaces. Materials can include wool, cotton, and natural fibers."
        },
        {
          type: "text",
          text: "The overall combination of wood, fabrics, stone, metal, and rugs should create a feeling of depth, craftsmanship, and permanence."
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: traditional6,
      blocks: [
        {
          type: "text",
          text: "Lighting should enhance the traditional architecture rather than overpower it."
        },
        {
          type: "subheading",
          text: "Lighting Types"
        },
        {
          type: "list",
          items: [
            "Chandeliers",
            "Wall sconces",
            "Table lamps",
            "Floor lamps",
            "Pendant lights",
            "Decorative ceiling fixtures"
          ]
        },
        {
          type: "subheading",
          text: "Lighting Materials"
        },
        {
          type: "list",
          items: [
            "Brass",
            "Bronze",
            "Glass",
            "Crystal",
            "Wrought iron"
          ]
        },
        {
          type: "subheading",
          text: "Warm Lighting"
        },
        {
          type: "text",
          text: "Warm-toned lighting works particularly well with wood, fabric, and cream-colored walls."
        },
        {
          type: "subheading",
          text: "Architectural Elements"
        },
        {
          type: "list",
          items: [
            "Crown molding",
            "Wall paneling",
            "Wainscoting",
            "Decorative ceilings",
            "Archways",
            "Columns",
            "Fireplaces",
            "Built-in bookshelves"
          ]
        },
        {
          type: "text",
          text: "These architectural details can become major visual features and help establish the traditional character of the interior."
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      image: traditional7,
      blocks: [
        {
          type: "text",
          text: "Traditional design allows more decorative layering than Minimalist or Scandinavian styles."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Floral",
            "Damask",
            "Toile",
            "Stripes",
            "Plaid",
            "Traditional geometric patterns",
            "Botanical motifs"
          ]
        },
        {
          type: "text",
          text: "Patterns can appear through curtains, rugs, upholstery, wallpaper, cushions, and bedding."
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "list",
          items: [
            "Classical paintings",
            "Landscape paintings",
            "Portraits",
            "Botanical illustrations",
            "Heritage photography",
            "Framed prints",
            "Decorative mirrors"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Antique-style clocks",
            "Ceramic vases",
            "Decorative books",
            "Brass objects",
            "Sculptures",
            "Porcelain",
            "Traditional lamps",
            "Framed photographs"
          ]
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "quote",
          text: "Curate the details without overwhelming the space."
        },
        {
          type: "text",
          text: "Traditional design benefits from thoughtful curation. Not every surface needs to be decorated."
        }
      ]
    },

    {
      heading: "08. Modern Traditional — Sakura Interior Designers",
      image: traditional8,
      blocks: [
        {
          type: "text",
          text: "Modern Traditional design combines the elegance of classical interiors with the functionality of contemporary living."
        },
        {
          type: "text",
          text: "The objective is to preserve the character and elegance of Traditional design without creating an outdated interior."
        },
        {
          type: "subheading",
          text: "Modern Approach"
        },
        {
          type: "list",
          items: [
            "Classic furniture",
            "Contemporary lighting",
            "Modern kitchens",
            "Smart-home technology",
            "Hidden storage",
            "Updated floor plans",
            "Sustainable materials",
            "Contemporary artwork"
          ]
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Traditional design through the philosophy:"
        },
        {
          type: "quote",
          text: "Honor the past. Design for tomorrow."
        },
        {
          type: "text",
          text: "The approach can combine classic proportions, natural materials, handcrafted details, and timeless furniture with modern functionality."
        },
        {
          type: "subheading",
          text: "Sri Lankan Traditional Interpretation"
        },
        {
          type: "list",
          items: [
            "Local timber craftsmanship",
            "Traditional carved wood details",
            "Terracotta",
            "Natural stone",
            "Rattan and woven materials",
            "Courtyards",
            "Verandas",
            "Tropical gardens",
            "Shaded outdoor spaces",
            "Traditional architectural proportions"
          ]
        },
        {
          type: "text",
          text: "This can create a Contemporary Sri Lankan Traditional interior that respects local heritage while meeting modern expectations."
        }
      ]
    }
  ]
},

"transitional": {
  title: "Transitional",
  tagline: "Where Classic Meets Contemporary",
  intro:
    "Transitional interior design creates a balanced relationship between traditional elegance and modern simplicity. By combining classic proportions, comfortable furnishings, neutral colors, and contemporary materials, Transitional interiors feel sophisticated without becoming formal and modern without becoming cold.",
  keywords: [
    "Balanced",
    "Timeless",
    "Elegant",
    "Comfortable",
    "Refined"
  ],
  heroImage: heroImg,
  sections: [
    {
      heading: "01. Origin & History",
      image: transitional1,
      blocks: [
        {
          type: "text",
          text: "Transitional design developed as homeowners and designers began looking for interiors that could combine traditional comfort with modern simplicity."
        },
        {
          type: "text",
          text: "Rather than following one specific historical period, Transitional design takes selected elements from different design approaches and brings them together in a cohesive environment."
        },
        {
          type: "text",
          text: "It became particularly popular as interior preferences moved away from heavily decorated Traditional interiors while still retaining their warmth and elegance."
        },
        {
          type: "subheading",
          text: "Traditional Influence"
        },
        {
          type: "list",
          items: [
            "Classic furniture proportions",
            "Symmetry",
            "Elegant fabrics",
            "Wood finishes",
            "Traditional architectural details"
          ]
        },
        {
          type: "subheading",
          text: "Modern Influence"
        },
        {
          type: "list",
          items: [
            "Clean lines",
            "Open spaces",
            "Simple forms",
            "Contemporary materials",
            "Minimal decoration",
            "Modern lighting"
          ]
        },
        {
          type: "text",
          text: "The result is a style that avoids being completely traditional or completely modern."
        },
        {
          type: "quote",
          text: "Traditional warmth + Modern simplicity = Transitional design"
        }
      ]
    },

    {
      heading: "02. Color Palette",
      image: transitional2,
      blocks: [
        {
          type: "text",
          text: "Transitional interiors typically use soft, neutral, and sophisticated colors."
        },
        {
          type: "subheading",
          text: "Base Colors"
        },
        {
          type: "list",
          items: [
            "Ivory",
            "Cream",
            "Beige",
            "Warm White",
            "Greige",
            "Light Gray"
          ]
        },
        {
          type: "subheading",
          text: "Supporting Colors"
        },
        {
          type: "list",
          items: [
            "Taupe",
            "Warm Gray",
            "Mushroom",
            "Soft Brown"
          ]
        },
        {
          type: "subheading",
          text: "Accent Colors"
        },
        {
          type: "list",
          items: [
            "Navy",
            "Olive",
            "Sage",
            "Dusty Blue",
            "Deep Charcoal"
          ]
        },
        {
          type: "subheading",
          text: "Material Accents"
        },
        {
          type: "list",
          items: [
            "Walnut",
            "Oak",
            "Brass",
            "Bronze",
            "Marble"
          ]
        },
        {
          type: "text",
          text: "A classic Transitional palette could be: Ivory + Greige + Walnut + Charcoal"
        },
        {
          type: "text",
          text: "A warmer version could be: Cream + Beige + Oak + Olive"
        },
        {
          type: "text",
          text: "A more luxurious version could be: Warm White + Taupe + Walnut + Brass"
        },
        {
          type: "text",
          text: "The palette should remain neutral and cohesive, with accent colors used selectively."
        }
      ]
    },

    {
      heading: "03. Key Characteristics",
      image: transitional3,
      blocks: [
        {
          type: "text",
          text: "Transitional design is defined by balance rather than extremes."
        },
        {
          type: "subheading",
          text: "Balance"
        },
        {
          type: "text",
          text: "Traditional and contemporary elements should feel equally integrated."
        },
        {
          type: "subheading",
          text: "Simplicity"
        },
        {
          type: "text",
          text: "Traditional details are simplified instead of heavily ornamented."
        },
        {
          type: "subheading",
          text: "Symmetry"
        },
        {
          type: "text",
          text: "Balanced furniture arrangements are often used."
        },
        {
          type: "subheading",
          text: "Comfort"
        },
        {
          type: "text",
          text: "Furniture should feel inviting and practical."
        },
        {
          type: "subheading",
          text: "Timelessness"
        },
        {
          type: "text",
          text: "The style avoids depending heavily on short-lived trends."
        },
        {
          type: "subheading",
          text: "Refined Materials"
        },
        {
          type: "text",
          text: "Natural wood, stone, quality fabrics, and subtle metals provide sophistication."
        },
        {
          type: "subheading",
          text: "Controlled Decoration"
        },
        {
          type: "text",
          text: "Accessories are carefully selected rather than excessive."
        },
        {
          type: "subheading",
          text: "Cohesion"
        },
        {
          type: "text",
          text: "Different furniture styles should share common colors, materials, or proportions so the room feels unified."
        }
      ]
    },

    {
      heading: "04. Furniture & Spatial Layout",
      image: transitional4,
      blocks: [
        {
          type: "text",
          text: "Furniture is one of the easiest ways to express the Transitional style."
        },
        {
          type: "subheading",
          text: "Common Furniture"
        },
        {
          type: "list",
          items: [
            "Comfortable sofas",
            "Upholstered armchairs",
            "Modern coffee tables",
            "Classic wooden consoles",
            "Contemporary dining tables",
            "Traditional-inspired sideboards",
            "Modern beds",
            "Elegant accent chairs",
            "Simple bookcases"
          ]
        },
        {
          type: "subheading",
          text: "Furniture Characteristics"
        },
        {
          type: "text",
          text: "Furniture generally combines traditional comfort with modern silhouettes."
        },
        {
          type: "list",
          items: [
            "Classic upholstered sofa with clean edges",
            "Traditional wooden table paired with modern chairs",
            "Contemporary bed with classic textile details"
          ]
        },
        {
          type: "subheading",
          text: "Spatial Layout"
        },
        {
          type: "text",
          text: "Transitional interiors usually feel open, balanced, comfortable, and organized."
        },
        {
          type: "text",
          text: "Furniture can be arranged symmetrically without creating an overly formal atmosphere."
        },
        {
          type: "text",
          text: "The layout should encourage conversation and comfortable movement."
        },
        {
          type: "quote",
          text: "Balance classic comfort with contemporary simplicity."
        }
      ]
    },

    {
      heading: "05. Materials & Textures",
      image: transitional5,
      blocks: [
        {
          type: "text",
          text: "Transitional design relies on high-quality materials with subtle contrast."
        },
        {
          type: "subheading",
          text: "Wood"
        },
        {
          type: "list",
          items: [
            "Walnut",
            "Oak",
            "Teak",
            "Ash"
          ]
        },
        {
          type: "text",
          text: "Wood can be used for flooring, furniture, cabinets, doors, and wall details."
        },
        {
          type: "subheading",
          text: "Stone"
        },
        {
          type: "list",
          items: [
            "Marble",
            "Limestone",
            "Travertine",
            "Granite"
          ]
        },
        {
          type: "text",
          text: "Natural stone adds contemporary sophistication to Transitional interiors."
        },
        {
          type: "subheading",
          text: "Fabrics"
        },
        {
          type: "list",
          items: [
            "Linen",
            "Cotton",
            "Wool",
            "Velvet",
            "Bouclé",
            "Leather"
          ]
        },
        {
          type: "subheading",
          text: "Metal"
        },
        {
          type: "list",
          items: [
            "Brass",
            "Bronze",
            "Brushed nickel",
            "Matte black"
          ]
        },
        {
          type: "text",
          text: "Metal should generally be understated rather than highly decorative."
        },
        {
          type: "subheading",
          text: "Texture Strategy"
        },
        {
          type: "text",
          text: "Texture is more important than excessive pattern."
        },
        {
          type: "text",
          text: "Linen + Walnut + Marble + Wool + Brushed Metal can create a rich interior without becoming visually busy."
        }
      ]
    },

    {
      heading: "06. Lighting & Architectural Elements",
      image: transitional6,
      blocks: [
        {
          type: "text",
          text: "Lighting in Transitional interiors combines classic elegance with contemporary simplicity."
        },
        {
          type: "subheading",
          text: "Lighting Types"
        },
        {
          type: "list",
          items: [
            "Simple chandeliers",
            "Contemporary pendants",
            "Wall sconces",
            "Table lamps",
            "Floor lamps",
            "Recessed lighting",
            "Linear LEDs"
          ]
        },
        {
          type: "subheading",
          text: "Classic + Modern Combination"
        },
        {
          type: "text",
          text: "A traditional chandelier combined with modern recessed lighting can clearly communicate the Transitional approach."
        },
        {
          type: "subheading",
          text: "Traditional Architectural Elements"
        },
        {
          type: "list",
          items: [
            "Crown molding",
            "Wall paneling",
            "Wainscoting",
            "Classic doors",
            "Arches"
          ]
        },
        {
          type: "text",
          text: "These traditional elements should be simplified and paired with contemporary features."
        },
        {
          type: "subheading",
          text: "Modern Elements"
        },
        {
          type: "list",
          items: [
            "Large windows",
            "Clean ceilings",
            "Minimal cabinetry",
            "Integrated lighting",
            "Open layouts"
          ]
        }
      ]
    },

    {
      heading: "07. Patterns, Artwork & Accessories",
      image: transitional7,
      blocks: [
        {
          type: "text",
          text: "Transitional interiors use subtle patterns and carefully selected accessories."
        },
        {
          type: "subheading",
          text: "Patterns"
        },
        {
          type: "list",
          items: [
            "Simple geometric designs",
            "Soft stripes",
            "Subtle botanical patterns",
            "Textured fabrics",
            "Understated traditional motifs"
          ]
        },
        {
          type: "text",
          text: "Overly ornate patterns are generally avoided."
        },
        {
          type: "subheading",
          text: "Artwork"
        },
        {
          type: "list",
          items: [
            "Abstract paintings",
            "Landscape artwork",
            "Black-and-white photography",
            "Minimal portraits",
            "Contemporary sculptures"
          ]
        },
        {
          type: "subheading",
          text: "Accessories"
        },
        {
          type: "list",
          items: [
            "Ceramic vases",
            "Sculptural objects",
            "Decorative books",
            "Elegant mirrors",
            "Indoor plants",
            "Simple candles",
            "Natural stone objects"
          ]
        },
        {
          type: "text",
          text: "The goal is to make the interior feel collected and sophisticated rather than decorated."
        },
        {
          type: "subheading",
          text: "Styling Principle"
        },
        {
          type: "quote",
          text: "The elegance of yesterday, designed for today."
        }
      ]
    },

    {
      heading: "08. Modern Transitional — Sakura Interior Designers",
      image: transitional8,
      blocks: [
        {
          type: "text",
          text: "Modern Transitional design takes the core principles of Transitional interiors and adapts them to contemporary lifestyles."
        },
        {
          type: "subheading",
          text: "Modern Features"
        },
        {
          type: "list",
          items: [
            "Open-plan layouts",
            "Smart-home technology",
            "Hidden storage",
            "Modern kitchens",
            "Contemporary lighting",
            "Sustainable materials",
            "Multi-functional furniture",
            "Integrated entertainment systems"
          ]
        },
        {
          type: "subheading",
          text: "Traditional Features"
        },
        {
          type: "list",
          items: [
            "Elegant furniture proportions",
            "Natural wood",
            "Classic architectural details",
            "Comfortable upholstery",
            "Symmetrical layouts",
            "Refined fabrics"
          ]
        },
        {
          type: "subheading",
          text: "The Balance"
        },
        {
          type: "text",
          text: "A successful Transitional interior should avoid becoming too Traditional or too Modern."
        },
        {
          type: "quote",
          text: "Traditional + Modern = Transitional → Balanced & Timeless"
        },
        {
          type: "subheading",
          text: "Sakura's Design Approach"
        },
        {
          type: "text",
          text: "Sakura Interior Designers can present Transitional design through the philosophy:"
        },
        {
          type: "quote",
          text: "The elegance of yesterday, designed for today."
        },
        {
          type: "text",
          text: "This style allows Sakura to create interiors for clients who appreciate the warmth and character of Traditional design but prefer the clean, practical lifestyle of Modern interiors."
        },
        {
          type: "subheading",
          text: "Sri Lankan Transitional Interpretation"
        },
        {
          type: "list",
          items: [
            "Traditional timber craftsmanship",
            "Modern architectural forms",
            "Local stone",
            "Natural fabrics",
            "Contemporary furniture",
            "Tropical plants",
            "Courtyards",
            "Verandas",
            "Large shaded windows",
            "Indoor-outdoor spaces"
          ]
        },
        {
          type: "text",
          text: "This can create a Modern Sri Lankan Transitional style that respects local architectural heritage while maintaining a contemporary lifestyle."
        }
      ]
    }
  ]
},

};