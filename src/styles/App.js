import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </Router>
  );
}
