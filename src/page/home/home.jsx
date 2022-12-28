import React, { memo } from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { useCallback } from 'react';

const Home = memo(({ onPortfolio, onProjects, onAbout }) => {
  const navigate = useNavigate();

  const onGoToPortfolio = useCallback(() => {
    navigate('/portfolio');
    onPortfolio();
  }, [onPortfolio]);

  const onGoToProjects = useCallback(() => {
    navigate('/projects');
    onProjects();
  }, [onProjects]);

  const onGoToAbout = useCallback(() => {
    navigate('/about');
    onAbout();
  }, [onAbout]);

  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.hello}>Hello I'm</h2>
            <h1 className={styles.name}>CHANWOO LEE</h1>
            <h3 className={styles.description}>
              A reliable Web ProgrammerA reliable Web ProgrammerA reliable Web
              ProgrammerA reliable Web Programmer ProgrammerA reliable Web
              Programmer
            </h3>
          </div>
          <div className={styles.items}>
            <button className={styles.item} onClick={onGoToPortfolio}>
              <div className={styles.itemImg_wrap}>
                <img className={styles.itemImg} src="images/logo1.png" alt="" />
              </div>
              <div className={styles.itemInfo_wrap}>
                <h3 className={styles.itemTitle}>My Portfolio TalkTalk</h3>
                <p className={styles.itemDescript}>
                  A reliable Web ProgrammerA reliable Web
                </p>
              </div>
            </button>
            <button className={styles.item} onClick={onGoToProjects}>
              <div className={styles.itemImg_wrap}>
                <img className={styles.itemImg} src="images/logo1.png" alt="" />
              </div>
              <div className={styles.itemInfo_wrap}>
                <h3 className={styles.itemTitle}>14+ Side Projects</h3>
                <p className={styles.itemDescript}>
                  A reliable Web ProgrammerA reliable Web
                </p>
              </div>
            </button>
            <button className={styles.item} onClick={onGoToAbout}>
              <div className={styles.itemImg_wrap}>
                <img className={styles.itemImg} src="images/logo1.png" alt="" />
              </div>
              <div className={styles.itemInfo_wrap}>
                <h3 className={styles.itemTitle}>Enthusiastic Learner</h3>
                <p className={styles.itemDescript}>
                  A reliable Web ProgrammerA reliable Web
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.image_wrap}>
          <img className={styles.image} src="images/myself.png" alt="" />
        </div>
      </main>

      <Footer />
    </section>
  );
});

export default Home;
