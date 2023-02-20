import React from 'react';
import styles from './CardProjects.module.css';

export default function CardProjects({ project }) {
  const { href, title, src, description } = project;
  return (
    <li className={styles.container}>
      <a href={href} target="blank">
        <img src={src} alt={title} />
        <div className={styles.description}>
          <h3 className="text-xl md:text-2xl lg:text-3xl">{title}</h3>
          <span className="text-sm md:text-base lg:text-lg text-center">
            {description}
          </span>
        </div>
      </a>
    </li>
  );
}
