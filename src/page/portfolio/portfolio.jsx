import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.portfilio}>
            <h1 className={styles.portfolioTitle}>TalkTalk</h1>
            <a href="#">
              <div className={styles.portfolioImg_wrap}>
                <img
                  className={styles.portfolioImg}
                  src="images/logo1.png"
                  alt=""
                />
              </div>
            </a>
            <div className={styles.portfolioMenu}>
              <button className={styles.menuBtn} onClick={onClick}>
                <h3>Overview</h3>
              </button>
              <button className={styles.menuBtn} onClick={onClick}>
                <h3>Tech Stack</h3>
              </button>
              <button className={styles.menuBtn} onClick={onClick}>
                <h3>Features</h3>
              </button>
              <button
                className={`${styles.menuBtn} ${styles.deployment}`}
                onClick={onClick}
              >
                <h3>Deployment</h3>
              </button>
              <div className={styles.description}>
                <Routes>
                  <Route path="/overview" element={<OverView />} />
                  <Route path="/techstack" element={<TechStack />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/deployment" element={<Deployment />} />
                </Routes>
              </div>
            </div>
          </section>

          <h1 className={styles.demoTitle}>DEMO</h1>
          <section className={styles.demo}>
            <div className={styles.demoImg_wrap}>
              <img className={styles.demoImg} src="images/logo1.png" alt="" />
              <h3 className={styles.demoImgTitle}>SignIn & SignUp </h3>
            </div>
            <div className={styles.demoImg_wrap}>
              <img className={styles.demoImg} src="images/logo1.png" alt="" />
              <h3 className={styles.demoImgTitle}>Upload </h3>
            </div>
            <div className={styles.demoImg_wrap}>
              <img className={styles.demoImg} src="images/logo1.png" alt="" />
              <h3 className={styles.demoImgTitle}>Chatting </h3>
            </div>
            <div className={styles.demoImg_wrap}>
              <img className={styles.demoImg} src="images/logo1.png" alt="" />
              <h3 className={styles.demoImgTitle}>Chatting </h3>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default Portfolio;
