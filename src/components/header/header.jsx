import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
  const navigate = useNavigate();
  const [barBtn, setBarBtn] = useState(false);
  const [homeBtn, setHomeBtn] = useState(false);
  const [portfolioBtn, setPortfolioBtn] = useState(false);
  const [projectsBtn, setProjectsBtn] = useState(false);
  const [aboutBtn, setAboutBtn] = useState(false);

  useEffect(() => {
    setBarBtn(true);
  }, []);

  const onImgClick = () => {
    navigate('/');
    setHomeBtn(true);
  };

  const onClick = (event) => {
    const taregt = event.target.innerText;
    switch (taregt) {
      case 'Home':
        // setHomeBtn(true);
        navigate('/');
        break;
      case 'Portfolio':
        // setPortfolioBtn(true);
        navigate('/portfolio');
        break;
      case 'Projects':
        // setProjectsBtn(true);
        navigate('/projects');
        break;
      case 'About':
        // setAboutBtn(true);
        navigate('/about');
        break;
      default:
        navigate('/');
    }
  };

  const onBarClick = () => {
    barBtn ? setBarBtn(false) : setBarBtn(true);
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
          barBtn ? `${styles.items}` : `${styles.items} ${styles.open}`
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
            About
          </button>
        </li>
      </ul>
      <button onClick={onBarClick} className={styles.barBtn}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Header;
