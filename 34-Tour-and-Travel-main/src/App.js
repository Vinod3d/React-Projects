import "./styles.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/about" element={<About />} />
          <Route exect path="/service" element={<Service />} />
          <Route exect path="/contact" element={<Contact />} />
        </Routes>
        {/* <Navbar /> */}
      </BrowserRouter>
    </div>
  );
}
