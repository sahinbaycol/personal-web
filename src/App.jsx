import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Works from "./pages/Works";

function App() {
  const location = useLocation();

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        height: "100vh",
        backgroundColor: "#03032E",
      }}
    >
      <Navbar />

      <AnimatedRoutes />
    </div>
  );
}

const Content = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="/skills" element={<Skills />} />
          <Route path="/credentials" />
        </Route>
        <Route path="/works" element={<Works />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default App;
