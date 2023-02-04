import { createContext } from "react";
import { HashRouter, Route, Routes} from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";

const ThemeContext = createContext()

export default function App() {  

  const [theme, setTheme] = UseLocalStorageState('theme', 'blue')
  const [darkMode, setDarkMode] = UseLocalStorageState('darkMode', true)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <ThemeContext.Provider value={theme}>
        <HashRouter>
          <Routes>
            <Route path="/" exact element={
              <>
                <Hero/>
                <Expertise/>
                <Testimonial/>
                <Projects/>
                <Work/>
                <Contact/>
                <Footer/>
                <span className="invisible sm:visible mt-1">
                  <ThemePicker setTheme={setTheme} />
                  <DarkThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </span>
                <ScrollToTop/>
              </>
            } />
            <Route path="yakabox" exact element={
              <>
                <Navigation/>
                <Yakabox/>
                <Contact/>
                <Footer/>
                <span className="invisible sm:visible">
                  <ThemePicker setTheme={setTheme} />
                  <DarkThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </span>
                <ScrollToTop/>
              </>
            } />
            <Route path="cisobox" exact element={
              <>
                <Navigation/>
                <Cisobox/>
                <Contact/>
                <Footer/>
                <span className="invisible sm:visible">
                  <ThemePicker setTheme={setTheme} />
                  <DarkThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </span>
                <ScrollToTop/>
              </>
            } />
          </Routes>
        </HashRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext };