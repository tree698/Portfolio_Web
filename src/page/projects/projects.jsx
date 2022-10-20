import React, { useState } from 'react';
import Footer from '../../components/footer/footer';
import styles from './projects.module.css';

const Projects = (props) => {
  const [all, setAll] = useState(true);
  const [html, setHtml] = useState(false);
  const [react, setReact] = useState(false);
  const [node, setNode] = useState(false);
  const [others, setOthers] = useState(false);

  const [projects, setProjects] = useState(false);

  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project6, setProject6] = useState(false);
  const [project7, setProject7] = useState(false);
  const [project8, setProject8] = useState(false);
  const [project9, setProject9] = useState(false);
  const [project10, setProject10] = useState(false);
  const [project11, setProject11] = useState(false);
  const [project12, setProject12] = useState(false);

  const onClick = (e) => {
    const projects = document.querySelectorAll('[data-type="project"]');
    const filter =
      e.target.dataset.filter || e.target.parentNode.dataset.filter;

    projects.forEach((p) => console.log(p.dataset.type));
  };

  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.project_categories}>
          <button
            className={
              all
                ? `${styles.category_btn} ${styles.selected}`
                : `${styles.category_btn}`
            }
            data-filter="all"
            onClick={onClick}
          >
            All<span className={styles.category_count}>18</span>
          </button>
          <button
            className={
              html
                ? `${styles.category_btn} ${styles.selected}`
                : `${styles.category_btn}`
            }
            data-filter="html/css"
            onClick={onClick}
          >
            HTML/CSS<span className={styles.category_count}>1</span>
          </button>
          <button
            className={
              react
                ? `${styles.category_btn} ${styles.selected}`
                : `${styles.category_btn}`
            }
            data-filter="react"
            onClick={onClick}
          >
            React<span className={styles.category_count}>2</span>
          </button>
          <button
            className={
              node
                ? `${styles.category_btn} ${styles.selected}`
                : `${styles.category_btn}`
            }
            data-filter="node"
            onClick={onClick}
          >
            Node<span className={styles.category_count}>3</span>
          </button>
          <button
            className={
              others
                ? `${styles.category_btn} ${styles.selected}`
                : `${styles.category_btn}`
            }
            data-filter="others"
            onClick={onClick}
          >
            Others<span className={styles.category_count}>4</span>
          </button>
        </div>

        <div
          className={
            projects
              ? `${styles.projects} ${styles.anim_out}`
              : `${styles.projects}`
          }
        >
          <a
            href="#"
            className={
              project1
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="html/css"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project2
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="html/css"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project3
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="react"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project4
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="react"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project5
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="node"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project6
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="node"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project7
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="others"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project8
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="others"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project9
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="html/css"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project10
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="html/css"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project11
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="html/css"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
          <a
            href="#"
            className={
              project12
                ? `${styles.project} ${styles.invisible}`
                : `${styles.project}`
            }
            target="blank"
            data-type="project"
            data-name="html/css"
          >
            <img src="images/logo1.png" alt="" className={styles.project_img} />
            <div className={styles.project_description}>
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML, CSS</span>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Projects;
