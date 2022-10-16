import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import OverView from '../../components/overView/overView';
import TechStack from '../../components/techStack/techStack';
import Features from '../../components/features/features';
import Deployment from '../../components/deployment/deployment';
import Footer from '../../components/footer/footer';
import styles from './portfolio.module.css';

const Portfolio = (props) => {
  const navigate = useNavigate();

  const onClick = (event) => {
    const target = event.target.innerText;
    switch (target) {
      case 'Overview':
        navigate('/portfolio/overview');
        break;
      case 'Tech Stack':
        navigate('/portfolio/techstack');
        break;
      case 'Features':
        navigate('/portfolio/features');
        break;
      case 'Deployment':
        navigate('/portfolio/deployment');
        break;
      default:
        navigate('/overview');
    }
  };
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>TalkTalk</h1>
          <a href="#">
            <img src="images/logo1.png" alt="" />
          </a>
          <div>
            <button onClick={onClick}>Overview</button>
            <button onClick={onClick}>Tech Stack</button>
            <button onClick={onClick}>Features</button>
            <button onClick={onClick}>Deployment</button>
          </div>
          <Routes>
            <Route path="/overview" element={<OverView />} />
            <Route path="/techstack" element={<TechStack />} />
            <Route path="/features" element={<Features />} />
            <Route path="/deployment" element={<Deployment />} />
          </Routes>
        </section>

        <section>
          <h1>DEMO: SignIn & SignUp </h1>
          <img src="images/logo1.png" alt="" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
