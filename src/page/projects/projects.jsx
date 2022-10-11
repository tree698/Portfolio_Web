import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './projects.module.css';

const Projects = (props) => {
  return (
    <div>
      <Header addable={true} />
      <h1>Projects</h1>
      <Footer />
    </div>
  );
};

export default Projects;
