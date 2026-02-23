import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="relative overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="animated-grid-bg" />
      <div className="relative z-10">
        <Heading />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Skills homeView />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Works />} />
            <Route path="/experience" element={<Resume />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
