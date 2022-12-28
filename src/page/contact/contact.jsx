import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './contact.module.css';
import Footer from '../../components/footer/footer';

const Contact = (props) => (
  <section className={styles.container}>
    <main className={styles.main}>
      <div className={styles.content_left}>
        <img className={styles.coffeeImg} src="images/coffee.png" alt="" />
      </div>
      <div className={styles.content_right}>
        <h1 className={styles.message}>Love to hear from you</h1>
        <div className={styles.email_wrap}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
          <h3 className={styles.email}>tree698@gmail.com</h3>
        </div>
        <div className={styles.mobile_wrap}>
          <FontAwesomeIcon icon={faMobile} className={styles.mobileIcon} />
          <h3 className={styles.email}>010-3779-3087</h3>
        </div>
      </div>
    </main>
    <Footer />
  </section>
);

export default Contact;
