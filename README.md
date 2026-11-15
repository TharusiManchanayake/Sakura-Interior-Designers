# 🌸 Sakura Interior Designers

An e-commerce website for a fictional interior design studio, built as an undergraduate project. Sakura Interiors combines an editorial-style design portfolio, a full product catalogue with cart and checkout, designer profiles, customer reviews, and a consultation booking flow in one experience.

**🔗 Live demo:** [sakura-interior-designers.vercel.app](https://sakura-interior-designers.vercel.app)

---

## ✨ Features

### 🎨 Portfolio
- **15+ interior design styles** (Japandi, Art Deco, Coastal, Scandinavian and more) and **6 room types**, each with an in-depth written guide, imagery, and design philosophy
- 20+ pages rendered from just **2 reusable components** and structured data, so new content means editing data, not writing new pages
- Custom **content-block renderer** (paragraphs, subheadings, lists, term glossaries, pull quotes)
- Mega-menu navigation for browsing every style and room

### 🛍️ Shop
- **7 categories** (Furniture, Lighting, Décor, Textiles, Wall Décor, Plants & Planters, Accessories) with dozens of subcategories and hundreds of products
- Bulk asset loading with Vite's `import.meta.glob`, with no per-image import statements
- Shopping cart with quantity management
- Checkout with shipping details, order summary, and a free-shipping threshold
- Payment via **PayHere** (card/wallet) or **cash on delivery**

### 💬 Reviews
- Customers can submit reviews with a title, service type, and written feedback
- Moderated: reviews are checked before they appear on the site

### 🧭 Discovery & Service Pages
- **Find My Style**: interactive guide to help visitors discover their interior style
- **Meet the Designers**: 10 designer profiles with education and experience
- **Services** and **About** pages
- **Book a Consultation** form with validation and a confirmation state

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Vite, Tailwind CSS v4, React Router |
| **Backend** | Node.js, Express |
| **Payments** | PayHere |
| **Language** | JavaScript (JSX) |
| **Hosting** | Vercel (frontend) |
| **Tooling** | Git & GitHub, npm, VS Code |

---

## 📁 Project Structure

```
Sakura-Interior-Designers/
├── client/                 # React frontend
│   ├── src/
│   │   ├── assets/         # Images (portfolio, shop, designers, etc.)
│   │   ├── components/     # Navbar, ContentBlocks, shared UI
│   │   ├── data/           # styleContent, roomContent, shopData, designersData
│   │   ├── pages/          # Home, About, Services, Booking, Reviews, shop/, portfolio/
│   │   └── App.jsx         # Route definitions
│   └── vite.config.js
└── server/                 # Express backend (API)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repository
```bash
git clone https://github.com/TharusiManchanayake/Sakura-Interior-Designers.git
cd Sakura-Interior-Designers
```

### 2. Run the backend
```bash
cd server
npm install
cp .env.example .env     # then fill in your values
npm run dev
```

### 3. Run the frontend
```bash
cd client
npm install
npm run dev
```
The app runs at `http://localhost:5173`.

---

## 🔐 Environment Variables

**`client/.env`**
```
VITE_API_URL=http://localhost:5000
```

**`server/.env`**
```
PORT=5000
CLIENT_URL=http://localhost:5173
# Add your database and PayHere credentials here
```

> ⚠️ Never commit `.env` files. Vite reads `VITE_*` variables at **build time**, so after changing one on your host (e.g. Vercel), you must redeploy.

---

## 🌐 Deployment

- **Frontend** is deployed on Vercel, with a rewrite rule so React Router paths work on page refresh.
- **Backend** is deployed separately. Set `VITE_API_URL` in Vercel to point at it, and allow the Vercel domain in the server's CORS configuration.

---

## 📸 Screenshots

_Add screenshots of the homepage, a style page, the shop, and the checkout here._

---

## 👩‍💻 Author

**Tharusi Manchanayake**
[GitHub](https://github.com/TharusiManchanayake)

---

_Built as an undergraduate project. Sakura Interior Designers is a fictional company._
