import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Header from './components/header/header';
import Portfolio from './page/portfolio/portfolio';
import Projects from './page/projects/projects';
import About from './page/about/about';
import Footer from './components/footer/footer';
import styles from './App.module.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
