import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React, { memo } from 'react';
import styles from './arrow.module.css';

const Arrow = memo(({ arrow, onArrowClick }) => (
  <button
    className={
      arrow ? `${styles.arrow_wrap} ${styles.visible}` : `${styles.arrow_wrap}`
    }
    onClick={onArrowClick}
  >
    <FontAwesomeIcon icon={faArrowUp} className={styles.arrow} />
  </button>
));

export default Arrow;
