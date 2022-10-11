import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './about.module.css';

const About = (props) => {
  return (
    <div>
      <Header addable={true} />
      <h1>About</h1>
      <Footer />
    </div>
  );
};

export default About;
