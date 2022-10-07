import React from 'react';
import styles from './home.module.css';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>;
      <div>
        <h1>Let's Start!</h1>
        <img style={{ width: '1100px' }} src="images/me4.png" alt="" />
        <img style={{ width: '800px' }} src="images/me5.png" alt="" />
        <img style={{ width: '800px' }} src="images/volunteer.png" alt="" />
        <img src="images/logo1.png" alt="" />
        <img src="images/logo2.png" alt="" />
        <img src="images/logo3.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
