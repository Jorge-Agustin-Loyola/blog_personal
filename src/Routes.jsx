import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "hocs/layouts/LayoutMain";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import Blog from "containers/pages/Blog";
import About_Us from "containers/pages/About_Us";
import Contact from "containers/pages/Contact";

function All_Routes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta con layout persistente */}
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="Cases" element={<Cases />} />
          <Route path="Services" element={<Services />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About_Us" element={<About_Us />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default All_Routes;

