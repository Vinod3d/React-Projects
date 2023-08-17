import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {Home, SingleCourse, Cart, Courses} from "./pages"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
