import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './home.module.css';

const Home = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.home}>
        <Header addable={true} />
        <main className={styles.main}></main>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
