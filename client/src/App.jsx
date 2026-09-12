import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ByRoom from "./pages/portfolio/ByRoom";
import ByStyle from "./pages/portfolio/ByStyle";
import About from "./pages/About";
import Designers from "./pages/Designers";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Shop from "./pages/shop/Shop";
import Furniture from "./pages/shop/Furniture";
import FurnitureCategory from "./pages/shop/FurnitureCategory";
import Lighting from "./pages/shop/Lighting";
import LightingCategory from "./pages/shop/LightingCategory";
import Decor from "./pages/shop/Decor";
import DecorCategory from "./pages/shop/DecorCategory";
import Textiles from "./pages/shop/Textiles";
import TextilesCategory from "./pages/shop/TextilesCategory";


function Placeholder({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-stone-600 mt-2">Coming in a later phase.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />

     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/portfolio/room/:slug" element={<ByRoom />} />
  <Route path="/portfolio/style/:slug" element={<ByStyle />} />
  <Route path="/about" element={<About />} />

 
  <Route path="/services" element={<Services />} />
  <Route path="/booking" element={<Booking />} />
  <Route path="/cart" element={<Placeholder title="Cart" />} />
  <Route path="/account" element={<Placeholder title="My Account" />} />
  <Route path="/find-my-style" element={<Placeholder title="Find My Style" />} />
  <Route path="/designers" element={<Designers />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/shop/furniture" element={<Furniture />} />
  <Route path="/shop/furniture/:slug" element={<FurnitureCategory />} />
  <Route path="/shop/lighting" element={<Lighting />} />
  <Route path="/shop/lighting/:slug" element={<LightingCategory />} />
  <Route path="/shop/decor" element={<Decor />} />
  <Route path="/shop/decor/:slug" element={<DecorCategory />} />
  <Route path="/shop/:category" element={<Placeholder title="Coming Soon" />} />
  <Route path="/shop/textiles" element={<Textiles />} />
<Route path="/shop/textiles/:slug" element={<TextilesCategory />} />

  <Route path="*" element={<Placeholder title="Page Not Found" />} />
</Routes>
    </div>
  )
}

export default App