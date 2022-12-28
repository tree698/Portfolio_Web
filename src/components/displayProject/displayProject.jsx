import React, { memo } from 'react';
import styles from './displayProject.module.css';

const DisplayProject = memo(({ project }) => {
  const { href, title, description } = project;
  return (
    <div className={styles.project_wrap}>
      <a href={href} className={styles.project} target="blank">
        <img src="images/logo1.png" alt="" className={styles.project_img} />
        <div className={styles.project_description}>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </a>
    </div>
  );
});

export default DisplayProject;
