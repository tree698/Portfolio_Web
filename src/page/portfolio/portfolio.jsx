import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './portfolio.module.css';

const Portfolio = (props) => {
  return (
    <div>
      <Header addable={true} />
      <h1>Portfolio</h1>
      <Footer />
    </div>
  );
};

export default Portfolio;
