import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";

// import NavBar from "./components/NavBar";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="City" element={<City />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}
