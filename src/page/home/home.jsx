import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './home.module.css';

const Home = (props) => {
  return (
    <section className={styles.container}>
      <Header addable={true} />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>Hello I'm</h3>
            <h1>CHANWOO LEE</h1>
            <h2>A reliable Web Programmer</h2>
          </div>
          <div className={styles.banner}>
            <div>Front-end + Back-end</div>
            <div>+14 Projects</div>
            <div>clean code</div>
          </div>
        </div>
        <img className={styles.image} src="images/me5.png" alt="" />
      </main>
      <Footer />
    </section>
  );
};

export default Home;
