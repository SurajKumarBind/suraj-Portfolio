import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Skills from "./pages/skills";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import VisitorMessages from "./components/VisitorMessages";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <FAQ />
      {/* <VisitorMessages /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
