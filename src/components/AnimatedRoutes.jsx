import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Works from "../pages/Works";
import Skills from "./Skills";
import Credentials from "./Credentials";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode={"wait"} >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/about/skills" element={<Skills />} />
          <Route path="/about/credentials" element={<Credentials/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/works" element={<Works />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
