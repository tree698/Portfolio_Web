import React, { useState } from 'react';
import styles from './CardButtons.module.css';

export default function CardButtons({ filter }) {
  const [all, setAll] = useState(true);
  const [html, setHtml] = useState(false);
  const [react, setReact] = useState(false);
  const [node, setNode] = useState(false);
  const [others, setOthers] = useState(false);

  const handleClick = (e) => {
    initializeBtn();
    const target = e.target.dataset.filter;
    switch (target) {
      case 'all':
        setAll(true);
        break;
      case 'html':
        setHtml(true);
        break;
      case 'react':
        setReact(true);
        break;
      case 'node':
        setNode(true);
        break;
      case 'others':
        setOthers(true);
        break;
      default:
        setAll(true);
    }
    filter(target);
  };

  function initializeBtn() {
    setAll(false);
    setHtml(false);
    setReact(false);
    setNode(false);
    setOthers(false);
  }

  const STYLE_BUTTON =
    'text-sm md:text-xl lg:text-2xl bg-superLightGray shadow-md relative border border-superLightGray mx-1 lg:mx-2 py-0 md:py-2 lg:py-3 px-1 md:px-6 lg:px-12 rounded-md hover:scale-105 transition-all delay-150 duration-300 ease-in-out';
  const STYLE_NUMBER =
    'w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 leading-4 md:leading-6 lg:leading-8 absolute -top-1 md:-top-3 lg:-top-4 -right-2 md:-right-1 text-sm md:text-lg lg:text-xl rounded-full bg-primaryAccent text-white';

  return (
    <div>
      <button
        data-filter="all"
        onClick={handleClick}
        className={`${STYLE_BUTTON} ${styles.button} `}
      >
        All
        <span
          className={
            all
              ? `${STYLE_NUMBER} ${styles.number} ${styles.visible}`
              : `${STYLE_NUMBER} ${styles.number} ${styles.invisible}`
          }
        >
          22
        </span>
      </button>
      <button
        data-filter="html"
        onClick={handleClick}
        className={`${STYLE_BUTTON} ${styles.button} `}
      >
        HTML/CSS/JavaScript
        <span
          className={
            html
              ? `${STYLE_NUMBER} ${styles.number} ${styles.visible}`
              : `${STYLE_NUMBER} ${styles.number} ${styles.invisible}`
          }
        >
          5
        </span>
      </button>
      <button
        data-filter="react"
        onClick={handleClick}
        className={`${STYLE_BUTTON} ${styles.button} `}
      >
        React
        <span
          className={
            react
              ? `${STYLE_NUMBER} ${styles.number} ${styles.visible}`
              : `${STYLE_NUMBER} ${styles.number} ${styles.invisible}`
          }
        >
          11
        </span>
      </button>
      <button
        data-filter="node"
        onClick={handleClick}
        className={`${STYLE_BUTTON} ${styles.button} `}
      >
        Node
        <span
          className={
            node
              ? `${STYLE_NUMBER} ${styles.number} ${styles.visible}`
              : `${STYLE_NUMBER} ${styles.number} ${styles.invisible}`
          }
        >
          3
        </span>
      </button>
      <button
        data-filter="others"
        onClick={handleClick}
        className={`${STYLE_BUTTON} ${styles.button} `}
      >
        Others
        <span
          className={
            others
              ? `${STYLE_NUMBER} ${styles.number} ${styles.visible}`
              : `${STYLE_NUMBER} ${styles.number} ${styles.invisible}`
          }
        >
          5
        </span>
      </button>
    </div>
  );
}
