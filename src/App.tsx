import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="stories" element={<Stories />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
