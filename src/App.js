import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashRouter, Route, Routes, HashLink, Link} from "react-router-dom";
import Navigation from './pages/navigation';
import Hero from './pages/hero';
import Expertise from './pages/expertise';
import Projects from './pages/projects';
import Work from './pages/work';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Yakabox from './pages/yakabox';
import Cisobox from './pages/cisobox';
import Testimonial from './pages/testimonial';
import ThemePicker from "./components/ThemePicker";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {  
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Expertise />
              <Testimonial />
              <Projects />
              <Work />
              <Contact />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="yakabox" element={
            <>
              <Navigation />
              <Yakabox />
              <Contact />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="cisobox" element={
            <>
              <Navigation />
              <Cisobox />
              <Contact />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="contact" element={
            <>
              <Navigation />
              <Contact />
              <Footer />
              <ScrollToTop />
            </>
          } />
        </Routes>
      </HashRouter>
  );
}

export default App;