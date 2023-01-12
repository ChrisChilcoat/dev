import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashRouter, Route, Routes, HashLink, Link} from "react-router-dom";
import UseLocalStorageState from './components/UseLocalStorageState';
import DarkThemeToggle from "./components/DarkThemeToggle";
import ThemePicker from "./components/ThemePicker";
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {  
  const [theme, setTheme] = UseLocalStorageState('theme', 'blue');
  const [darkMode, setDarkMode] = UseLocalStorageState('darkMode', false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={
            <>
              <Hero theme={theme} />
              <Expertise theme={theme} />
              <Testimonial theme={theme} />
              <Projects theme={theme} />
              <Work theme={theme} />
              <Contact theme={theme} />
              <Footer theme={theme} />
              <span className="invisible sm:visible">
                <ThemePicker theme={theme} setTheme={setTheme} />
                <DarkThemeToggle theme={theme} darkMode={darkMode} setDarkMode={setDarkMode} />
              </span>
              <ScrollToTop />
            </>
          } />
          <Route path="yakabox" exact element={
            <>
              <Navigation theme={theme} />
              <Yakabox theme={theme} />
              <Contact theme={theme} />
              <Footer theme={theme} />
              <ScrollToTop />
            </>
          } />
          <Route path="cisobox" exact element={
            <>
              <Navigation theme={theme} />
              <Cisobox theme={theme} />
              <Contact theme={theme} />
              <Footer theme={theme} />
              <ScrollToTop />
            </>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;