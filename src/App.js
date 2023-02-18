import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Contact, Technology, Work } from "./components";

function App() {
  return (
    <div className="flex flex-row">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/mywork" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
