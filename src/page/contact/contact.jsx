import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './contact.module.css';

const Contact = (props) => (
  <section className={styles.container}>
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content_left}>
          <img className={styles.coffeeImg} src="images/coffee.png" alt="" />
        </div>
        <div className={styles.content_right}>
          <h1 className={styles.message}>Love to hear from you</h1>
          <a href="#">
            <FontAwesomeIcon icon={faSquareGithub} className={styles.github} />
          </a>
          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
            <h2>tree698@gmail.com</h2>
          </div>
          <div className={styles.mobile}>
            <FontAwesomeIcon icon={faMobile} className={styles.mobileIcon} />
            <h2>010-3779-3087</h2>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Contact;
