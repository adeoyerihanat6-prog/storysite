import { Routes, Route, Link } from "react-router-dom";

import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Landing from "./pages/Landing";
import Button from "./Button";

function App() {
  return (
    <>
     <nav className="h-[150px] w-[100%] flex justify-around items-center bg-neutral-900 shadow-md  z-50">
  <div className="w-[50%] flex gap-1.5">
  <h1 className="text-2xl font-bold text-white ">MINIMA</h1>
  <div className="h-[8px] w-[8px] bg-amber-600 rounded-full mt-5"></div>
  </div>
  <div className="flex items-center gap-8 ">
    <Link to="/services" className="text-white">
      Services
    </Link>

    <Link to="/about" className="text-white">
      About
    </Link>

    <Link to="/blog" className="text-white">
      Blog
    </Link>

    <Link to="/shop" className="text-white">
      Shop
    </Link>

    <Button/>
  </div>
</nav>
 
      

      <Routes>
        <Route path="/"element={<Landing/>}/>
        <Route path="Services/" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
