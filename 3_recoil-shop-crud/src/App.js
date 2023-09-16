import React from "react";
import "./styles/App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/editProduct/:id" element={<EditProduct/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
