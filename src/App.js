import './App.css';

import React from "react";
import { HashRouter, Route, Routes, Link} from "react-router-dom";
import { HashLink } from '@xzar90/react-router-hash-link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'
import Navigation from './pages/navigation';
import Hero from './pages/hero';
import Expertise from './pages/expertise';
import Projects from './pages/projects';
import Work from './pages/work';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Yakabox from './pages/yakabox';
import Cisobox from './pages/cisobox';
import Yakadrive from './pages/yakadrive';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <div className="bg-gray-50">
      <HashRouter basemname={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Expertise />
              <Projects />
              <Work />
              <Contact />
              <Footer />
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
          <Route path="cisobox" element={
            <>
              <Navigation />
              <Yakadrive />
              <Contact />
              <Footer />
              <ScrollToTop />
            </>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;