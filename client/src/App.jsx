import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ByRoom from "./pages/portfolio/ByRoom";
import ByStyle from "./pages/portfolio/ByStyle";
import About from "./pages/About";

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

        <Route path="/shop" element={<Placeholder title="Shop" />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/booking" element={<Placeholder title="Book a Consultation" />} />
        <Route path="/cart" element={<Placeholder title="Cart" />} />
        <Route path="/account" element={<Placeholder title="My Account" />} />
        <Route path="/find-my-style" element={<Placeholder title="Find My Style" />} />
        <Route path="/designers" element={<Placeholder title="Meet the Designers" />} />

        <Route path="*" element={<Placeholder title="Page Not Found" />} />
      </Routes>
    </div>
  )
}

export default App