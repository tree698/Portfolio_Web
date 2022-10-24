import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import OverView from '../../components/overView/overView';
import TechStack from '../../components/techStack/techStack';
import Features from '../../components/features/features';
import Deployment from '../../components/deployment/deployment';
import styles from './portfolio.module.css';
import Footer from '../../components/footer/footer';
// import Arrow from '../../components/arrow/arrow';

const Portfolio = (props) => {
  const navigate = useNavigate();
  const [overviewBtn, setOverviewBtn] = useState(false);
  const [techStackBtn, setTechStackBtn] = useState(false);
  const [featuresBtn, setFeaturesBtn] = useState(false);
  const [deploymentBtn, setDeploymentBtn] = useState(false);

  useEffect(() => {
    navigate('/portfolio/overview');
    setOverviewBtn(true);
  }, []);

  const onClick = (event) => {
    setOverviewBtn(false);
    setTechStackBtn(false);
    setFeaturesBtn(false);
    setDeploymentBtn(false);
    const target = event.target.innerText;
    switch (target) {
      case 'Overview':
        setOverviewBtn(true);
        navigate('/portfolio/overview');
        break;
      case 'Tech Stack':
        setTechStackBtn(true);
        navigate('/portfolio/techstack');
        break;
      case 'Features':
        setFeaturesBtn(true);
        navigate('/portfolio/features');
        break;
      case 'Deployment':
        setDeploymentBtn(true);
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
          <h1 className={styles.portfolioTitle}>TalkTalk</h1>
          <section className={styles.portfolio}>
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
              <div className={styles.menuBtn_container}>
                <button
                  className={
                    overviewBtn
                      ? `${styles.menuBtn} ${styles.active}`
                      : `${styles.menuBtn}`
                  }
                  onClick={onClick}
                >
                  <h3>Overview</h3>
                </button>
                <button
                  className={
                    techStackBtn
                      ? `${styles.menuBtn} ${styles.active}`
                      : `${styles.menuBtn}`
                  }
                  onClick={onClick}
                >
                  <h3>Tech Stack</h3>
                </button>
                <button
                  className={
                    featuresBtn
                      ? `${styles.menuBtn} ${styles.active}`
                      : `${styles.menuBtn}`
                  }
                  onClick={onClick}
                >
                  <h3>Features</h3>
                </button>
                <button
                  className={
                    deploymentBtn
                      ? `${styles.menuBtn} ${styles.active}`
                      : `${styles.menuBtn}`
                  }
                  onClick={onClick}
                >
                  <h3>Deployment</h3>
                </button>
              </div>

              <Routes>
                <Route path="/overview" element={<OverView />} />
                <Route path="/techstack" element={<TechStack />} />
                <Route path="/features" element={<Features />} />
                <Route path="/deployment" element={<Deployment />} />
              </Routes>
            </div>
          </section>

          <div className={styles.divider}></div>

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
      {/* <Arrow /> */}
      <Footer />
    </section>
  );
};

export default Portfolio;
