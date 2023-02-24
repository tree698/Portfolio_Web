import React from 'react';
import styles from './CardProjects.module.css';

export default function CardProjects({ project }) {
  const { href, title, src, description } = project;
  return (
    <li className={`${styles.container} p-1 md:p-2 lg:p-3`}>
      <a href={href} target="blank">
        <img src={src} alt={title} />
        <div className={styles.description}>
          <h3 className="text-base md:text-lg lg:text-xl">{title}</h3>
          <span className="text-xs md:text-sm lg:text-base text-center">
            {description}
          </span>
        </div>
      </a>
    </li>
  );
}
