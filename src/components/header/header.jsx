import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({ addable }) => {
  const [navbarBtn, setNavbarBtn] = useState(false);
  const [homeBtn, setHomeBtn] = useState(false);
  const [portfolioBtn, setPortfolioBtn] = useState(false);
  const [projectsBtn, setProjectsBtn] = useState(false);
  const [aboutBtn, setAboutBtn] = useState(false);
  const navigate = useNavigate();

  const onClick = (event) => {
    setHomeBtn(false);
    setPortfolioBtn(false);
    setProjectsBtn(false);
    setAboutBtn(false);
    const taregt = event.target.innerText;
    switch (taregt) {
      case 'Home':
        setHomeBtn(true);
        navigate('/');
        break;
      case 'Portfolio':
        setPortfolioBtn(true);
        navigate('/portfolio');
        break;
      case 'Projects':
        setProjectsBtn(true);
        navigate('/projects');
        break;
      case 'About me':
        setAboutBtn(true);
        navigate('/about');
        break;
      case "LET'S TALK":
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
  };

  const onImgClick = () => {
    navigate('/');
  };

  const onNavbarClick = () => {
    navbarBtn ? setNavbarBtn(false) : setNavbarBtn(true);
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
          navbarBtn ? `${styles.items}` : `${styles.items} ${styles.open}`
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
      {addable && (
        <button onClick={onClick} className={styles.talkBtn}>
          LET'S TALK
        </button>
      )}

      <button onClick={onNavbarClick} className={styles.navbarBtn}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Header;
