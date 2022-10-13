import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();

  const onGoToPortfolio = () => {
    navigate('/portfolio');
  };
  const onGoToProjects = () => {
    navigate('/projects');
  };
  const onGoToAbout = () => {
    navigate('/about');
  };

  return (
    <section className={styles.container}>
      <Header addable={true} />
      {/* <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.hello}>Hello I'm</h2>
            <h1 className={styles.name}>CHANWOO LEE</h1>
            <h2 className={styles.description}>
              A reliable Web ProgrammerA reliable Web ProgrammerA reliable Web
              ProgrammerA reliable Web Programmer ProgrammerA reliable Web
              Programmer
            </h2>
          </div>
          <div className={styles.items}>
            <button className={styles.item} onClick={onGoToPortfolio}>
              <div className={styles.itemImg_wrap}>
                <img className={styles.itemImg} src="images/logo1.png" alt="" />
              </div>

              <h2 className={styles.itemTitle}>Full Stack</h2>
              <p className={styles.itemDescript}>
                A reliable Web ProgrammerA reliable Web ProgrammerA reliable Web
                ProgrammerA
              </p>
            </button>
            <button className={styles.item} onClick={onGoToProjects}>
              <div className={styles.itemImg_wrap}>
                <img
                  className={styles.itemImg}
                  src="images/funGame.png"
                  alt=""
                />
              </div>
              <h2 className={styles.itemTitle}>14+ Side-Projects</h2>
              <p className={styles.itemDescript}>
                A reliable Web ProgrammerA reliable Web ProgrammerA reliable Web
                ProgrammerA
              </p>
            </button>
            <button className={styles.item} onClick={onGoToAbout}>
              <div className={styles.itemImg_wrap}>
                <img className={styles.itemImg} src="images/logo1.png" alt="" />
              </div>
              <h2 className={styles.itemTitle}>Clean Code</h2>
              <p className={styles.itemDescript}>
                A reliable Web ProgrammerA reliable Web ProgrammerA reliable Web
                ProgrammerA
              </p>
            </button>
          </div>
        </div>
        <img className={styles.image} src="images/me5.png" alt="" />
      </main> */}
      <Footer />
    </section>
  );
};

export default Home;
