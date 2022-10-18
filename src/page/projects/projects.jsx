import React from 'react';
import Footer from '../../components/footer/footer';
import styles from './projects.module.css';

const Projects = (props) => {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>Projects</div>
      </main>
      <Footer />
    </section>
  );
};

export default Projects;
