import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ByRoom from "./pages/portfolio/ByRoom";
import ByStyle from "./pages/portfolio/ByStyle";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/room/:slug" element={<ByRoom />} />
        <Route path="/portfolio/style/:slug" element={<ByStyle />} />
      </Routes>
    </div>
  )
}

export default App