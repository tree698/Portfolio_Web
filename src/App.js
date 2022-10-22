import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Header from './components/header/header';
import Portfolio from './page/portfolio/portfolio';
import Projects from './page/projects/projects';
import About from './page/about/about';
import Contact from './page/contact/contact';
import styles from './App.module.css';

const App = (props) => {
  const [barBtn, setBarBtn] = useState(false);
  const [homeBtn, setHomeBtn] = useState(false);
  const [portfolioBtn, setPortfolioBtn] = useState(false);
  const [projectsBtn, setProjectsBtn] = useState(false);
  const [aboutBtn, setAboutBtn] = useState(false);
  const [talkBtn, setTalkBtn] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setHomeBtn(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', startScroll);
    return () => window.removeEventListener('scroll', startScroll);
  }, []);

  // header에서 height값 받아 오기 ?
  const startScroll = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const onBarClickHandle = () => {
    barBtn ? setBarBtn(false) : setBarBtn(true);
  };

  const onImgHandle = () => {
    initializeBtn();
    setHomeBtn(true);
  };

  const onHomeHandle = () => {
    initializeBtn();
    setHomeBtn(true);
  };
  const onPortfolioHandle = () => {
    initializeBtn();
    setPortfolioBtn(true);
  };
  const onProjectsHandle = () => {
    initializeBtn();
    setProjectsBtn(true);
  };
  const onAboutHandle = () => {
    initializeBtn();
    setAboutBtn(true);
  };
  const onTalkHandle = () => {
    initializeBtn();
    setTalkBtn(false);
  };

  function initializeBtn() {
    setBarBtn(false);
    setHomeBtn(false);
    setPortfolioBtn(false);
    setProjectsBtn(false);
    setAboutBtn(false);
    setTalkBtn(true);
  }

  return (
    <BrowserRouter>
      <Header
        onBarClick={onBarClickHandle}
        onImg={onImgHandle}
        onHome={onHomeHandle}
        onPortfolio={onPortfolioHandle}
        onProjects={onProjectsHandle}
        onAbout={onAboutHandle}
        onTalk={onTalkHandle}
        barBtn={barBtn}
        homeBtn={homeBtn}
        portfolioBtn={portfolioBtn}
        projectsBtn={projectsBtn}
        aboutBtn={aboutBtn}
        talkBtn={talkBtn}
        scroll={scroll}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onPortfolio={onPortfolioHandle}
              onProjects={onProjectsHandle}
              onAbout={onAboutHandle}
            />
          }
        />
        <Route path="/portfolio/*" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
