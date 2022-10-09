import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
  <footer className={styles.footer}>
    {/* <div className={styles.contact}>
      <address>
        <a href="mailto:tree698@gmail.com">tree698@gmail</a>
      </address>

      <a href="https://github.com/tree698" target="_blank">
        <i class="fa-brands fa-github"></i>

        <FontAwesomeIcon icon={faGithub} className={styles.github} />
      </a>
    </div>

    <p className={styles.right}>2023 Chanwoo @All Right Reserved</p> */}
  </footer>
);

export default Footer;
