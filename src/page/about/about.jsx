import React from 'react';
import Footer from '../../components/footer/footer';
import styles from './about.module.css';

const About = (props) => {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>About me</div>
      </main>
      <Footer />
    </section>
  );
};

export default About;
