import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Reels from "./Reels";
import Search from './Search';

function router() {

}
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Reels" element={<Reels />} />
      <Route path="Search" element={<Search/>} />
    </Routes>
  </BrowserRouter>,
 
);
export default router;