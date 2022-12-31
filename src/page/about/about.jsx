import React from 'react';
import Footer from '../../components/footer/footer';
import styles from './about.module.css';

const About = (props) => {
  return (
    <section>
      <div className={styles.intro}>
        <img
          className={styles.intro__photo}
          src="images/myself_about.png"
          alt=""
        />
        <h2>Frontend Developer</h2>
        <p>who is making the better world</p>
        <p className={styles.intro__message}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          voluptatem ullam labore sequi adipisci dolor consectetur corrupti
          voluptas dolorum rem, quis numquam impedit, placeat pariatur
          architecto! Tenetur qui eum explicabo.
        </p>
      </div>
      <div className={styles.skills__container}>
        <div className={styles.skills}>
          <h2 className={styles.skills__title}>Skills & Attributes</h2>
          <p className={styles.skills__message}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            voluptatem ullam labore sequi adipisci dolor consectetur corrupti
            voluptas dolorum rem, quis numquam impedit, placeat pariatur
            architecto! Tenetur qui eum explicabo.
          </p>
          <img
            className={styles.skills__img}
            src="images/coreSkills-removebg.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.education}>
        <h2>Education & Training</h2>
        <p className={styles.education__message}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          voluptatem ullam labore sequi adipisci dolor consectetur corrupti
          voluptas dolorum rem, quis numquam impedit, placeat pariatur
          architecto! Tenetur qui eum explicabo.
        </p>
        <div className={styles.education__contents}>
          <div className={styles.education__content}>
            <a
              href="https://www.knou.ac.kr/knou/index.do?epTicket=LOG"
              target="_blank"
            >
              <img
                className={styles.education__logo}
                src="images/knou.png"
                alt=""
              />
            </a>
            <div>
              <h3 className={styles.education__title}>
                Korea National Open University
              </h3>
              <div className={styles.education__description}>
                <p>- Bechelor of Science</p>
                <p>- Department of Computer Science</p>
                <p>- GPA: 4.2/4.5</p>
                <p>- Graduation in Feb. 2023</p>
              </div>
            </div>
          </div>
          <div className={styles.education__content}>
            <a
              href="https://academy.dream-coding.com/enrollments"
              target="_blank"
            >
              <img
                className={styles.education__logo}
                src="images/dreamCoding.png"
                alt=""
              />
            </a>
            <div>
              <h3 className={styles.education__title}>Dream Coding</h3>
              <div className={styles.education__description}>
                <p>- Online Classes</p>
                <p>- Completed in 10 courses</p>
                <p>JavaScript, React, Node, TDD, TypeScript, Git ...</p>
              </div>
            </div>
          </div>
          <div className={styles.education__content}>
            <a href="https://hyperskill.org/tracks" target="_blank">
              <img
                className={styles.education__logo}
                src="images/jba.png"
                alt=""
              />
            </a>
            <div>
              <h3 className={styles.education__title}>JetBrain Academy</h3>
              <div className={styles.education__description}>
                <p> - Online Classes </p>
                <p> - Completed in Python track</p>

                <a
                  href="https://hyperskill.org/certificates/b25035ce-aad0-4d52-8a5b-e66681314c13.pdf"
                  target="_blank"
                >
                  <p className={styles.certification__python}>
                    👉 Certificatioin
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.others__container}>
        <div className={styles.others}>
          <h2 className={styles.others__title}>others</h2>
          <p className={styles.others__message}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            voluptatem ullam labore sequi adipisci dolor consectetur corrupti
            voluptas dolorum rem, quis numquam impedit, placeat pariatur
            architecto! Tenetur qui eum explicabo.
          </p>
          <img className={styles.others__img} src="images/az900.png" alt="" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
