import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDisplay,
  faLaptopCode,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Footer from '../../components/footer/footer';
import styles from './about.module.css';

const About = (props) => {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            nisi sint similique facilis ratione deleniti deserunt? Distinctio
            at, numquam culpa doloremque minus esse consequuntur quo excepturi
            quod ad consequatur magnam?
          </h3>
          <img src="images/coreSkills.png" alt="" />
          <div className={styles.majors}>
            <div className={styles.major}>
              <div className={styles.major_icon}>
                <FontAwesomeIcon icon={faDisplay} className={styles.display} />
              </div>
              <h2>Front-end</h2>
              <div className={styles.major_description}>
                HTML, CSS, JavaScript, TypeScript,
                <br />
                React, Vue, Web APIs
              </div>
            </div>
            <div className={styles.major}>
              <div className={styles.major_icon}>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className={styles.display}
                />
              </div>
              <h2>Clean Code</h2>
              <div className={styles.major_description}>
                HTML, CSS, JavaScript, TypeScript,
                <br />
                React, Vue, Web APIs
              </div>
            </div>
            <div className={styles.major}>
              <div className={styles.major_icon}>
                <FontAwesomeIcon icon={faServer} className={styles.display} />
              </div>
              <h2>Back-end</h2>
              <div className={styles.major_description}>
                HTML, CSS, JavaScript, TypeScript,
                <br />
                React, Vue, Web APIs
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skills}>
          <h2>Skills & Attributes</h2>
          <div className={styles.skillset}>
            <div className={styles.skillset_left}>
              <h3 className={styles.skillset_title}>Skills</h3>
              <div className={styles.skill}>
                <div className={styles.skill_description}>
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div className={styles.skill_bar}>
                  <div
                    className={styles.skill_value}
                    style={{ width: '99%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <div className={styles.skill_description}>
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div className={styles.skill_bar}>
                  <div
                    className={styles.skill_value}
                    style={{ width: '49%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <div className={styles.skill_description}>
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div className={styles.skill_bar}>
                  <div
                    className={styles.skill_value}
                    style={{ width: '89%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <div className={styles.skill_description}>
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div className={styles.skill_bar}>
                  <div
                    className={styles.skill_value}
                    style={{ width: '69%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <div className={styles.skill_description}>
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div className={styles.skill_bar}>
                  <div
                    className={styles.skill_value}
                    style={{ width: '79%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <div className={styles.skill_description}>
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div className={styles.skill_bar}>
                  <div
                    className={styles.skill_value}
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.skillset_right}>
              <div className={styles.tools}>
                <h3 className={styles.skillset_title}>Tools</h3>
                <ul className={styles.tools_list}>
                  <li>
                    <span>Visual Studio Code</span>
                  </li>
                  <li>
                    <span>IntelliJ</span>
                  </li>
                  <li>
                    <span>Android Studio Code</span>
                  </li>
                  <li>
                    <span>iOS development tools</span>
                  </li>
                  <li>
                    <span>Sketch app</span>
                  </li>
                </ul>
              </div>
              <div className={styles.etc}>
                <h3 className={styles.skillset_title}>Etc</h3>
                <ul className={styles.etc_list}>
                  <li>
                    <span>Git</span>
                  </li>
                  <li>
                    <span>Scrum master</span>
                  </li>
                  <li>
                    <span>Math</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.education}>
          <img
            src="images/logo1.png"
            alt=""
            className={styles.education_logo}
          />
          <div className={styles.education_description}>
            <p className={styles.education_name}>
              Currently working at Samsung as Software Engineer
            </p>
            <p className={styles.education_period}>2019 Sept - Until now</p>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default About;
