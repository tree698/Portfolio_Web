import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({ addable }) => {
  const navigate = useNavigate();

  const onClick = (event) => {
    const taregt = event.target.innerText;
    switch (taregt) {
      case 'Home':
        navigate('/');
        break;
      case 'Portfolio':
        navigate('/portfolio');
        break;
      case 'Projects':
        navigate('/projects');
        break;
      case 'About me':
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

  return (
    <div className={styles.container}>
      <button onClick={onImgClick}>
        <img
          className={styles.logo}
          src="images/logo2-smallSize.png"
          alt="logo"
        />
      </button>
      <ul className={styles.items}>
        <li className={styles.item}>
          <button
            onClick={onClick}
            className={`${styles.itemBtn} ${styles.active}`}
          >
            Home
          </button>
        </li>
        <li className={styles.item}>
          <button onClick={onClick} className={styles.itemBtn}>
            Portfolio
          </button>
        </li>
        <li className={styles.item}>
          <button onClick={onClick} className={styles.itemBtn}>
            Projects
          </button>
        </li>
        <li className={styles.item}>
          <button onClick={onClick} className={styles.itemBtn}>
            About me
          </button>
        </li>
      </ul>
      {addable && (
        <button onClick={onClick} className={styles.talkBtn}>
          LET'S TALK
        </button>
      )}
    </div>
  );
};

export default Header;
