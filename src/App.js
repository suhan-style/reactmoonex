import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioTypeOne from './components/PortfolioTypeOne';
import PortfolioTypeTwo from './components/PortfolioTypeTwo';
import CodingTask from './components/CodingTask';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100
    });
  }, []);

  return(
    <>
      <AnimatedCursor
        outerSize={50}
        outerScale={1}
        outerStyle={{
          zIndex: 99999
        }}
        innerStyle={{
          zIndex: 99999
        }}
      />
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio-type-1' element={<PortfolioTypeOne />} />
            <Route path='/portfolio-type-2' element={<PortfolioTypeTwo />} />
            <Route path='/coding-task' element={<CodingTask />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
