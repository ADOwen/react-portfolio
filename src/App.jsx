import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import { useRef, useState, useEffect } from "react";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQS from "./sections/faqs/FAQS";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Theme from "./theme/Theme";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const {themeState} = useThemeContext();
  
  const mainRef = useRef();

  const [showFloatingNav, setShowFloatingNav ] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 || siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20 ) {
      showFloatingNavHandler();
      console.log("did I run again?")
    } else {
      hideFloatingNavHandler()
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1500);
    return () => clearInterval(checkYPosition)
  }, [siteYPosition])
  

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <FAQS />
      <Contact />
      <Footer />
      <Theme/>
      {showFloatingNav && <FloatingNav/>}
    </main>
  )
};

export default App;