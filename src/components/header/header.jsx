import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({
  onBarClick,
  onImg,
  onHome,
  onPortfolio,
  onProjects,
  onAbout,
  onTalk,
  barBtn,
  homeBtn,
  portfolioBtn,
  projectsBtn,
  aboutBtn,
  talkBtn,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  const onImgClick = () => {
    navigate('/');
    onImg();
  };

  const onClick = (event) => {
    const taregt = event.target.innerText;
    switch (taregt) {
      case 'Home':
        navigate('/');
        onHome();
        break;
      case 'Portfolio':
        navigate('/portfolio');
        onPortfolio();
        break;
      case 'Projects':
        navigate('/projects');
        onProjects();
        break;
      case 'About me':
        navigate('/about');
        onAbout();
        break;
      case "LET'S TALK":
        navigate('/contact');
        onTalk();
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className={styles.header}>
      <button onClick={onImgClick}>
        <img
          className={styles.logo}
          src="images/logo2-smallSize.png"
          alt="logo"
        />
      </button>
      <ul
        className={
          barBtn ? `${styles.items} ${styles.open}` : `${styles.items}`
        }
      >
        <li className={styles.item}>
          <button
            onClick={onClick}
            className={
              homeBtn
                ? `${styles.itemBtn} ${styles.active}`
                : `${styles.itemBtn}`
            }
          >
            Home
          </button>
        </li>
        <li className={styles.item}>
          <button
            onClick={onClick}
            className={
              portfolioBtn
                ? `${styles.itemBtn} ${styles.active}`
                : `${styles.itemBtn}`
            }
          >
            Portfolio
          </button>
        </li>
        <li className={styles.item}>
          <button
            onClick={onClick}
            className={
              projectsBtn
                ? `${styles.itemBtn} ${styles.active}`
                : `${styles.itemBtn}`
            }
          >
            Projects
          </button>
        </li>
        <li className={styles.item}>
          <button
            onClick={onClick}
            className={
              aboutBtn
                ? `${styles.itemBtn} ${styles.active}`
                : `${styles.itemBtn}`
            }
          >
            About me
          </button>
        </li>
      </ul>

      <button
        onClick={onClick}
        className={
          talkBtn ? `${styles.talkBtn} ${styles.visible}` : `${styles.talkBtn}`
        }
      >
        LET'S TALK
      </button>

      <button onClick={onBarClick} className={styles.barBtn}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Header;
