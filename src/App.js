import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Portfolio from './page/portfolio/portfolio';
import Projects from './page/projects/projects';
import About from './page/about/about';
import Contact from './page/contact/contact';
import styles from './App.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
