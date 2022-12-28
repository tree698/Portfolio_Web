import React, { memo, useEffect, useState } from 'react';
import DisplayProject from '../../components/displayProject/displayProject';
import Footer from '../../components/footer/footer';
import styles from './projects.module.css';

const Projects = memo((props) => {
  const defaultProject = [
    {
      id: 1,
      href: '#',
      dataName: 'html/css',
      title: 'html/css',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 2,
      href: '#',
      dataName: 'html/css',
      title: 'html/css',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 3,
      href: '#',
      dataName: 'react',
      title: 'react',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 4,
      href: '#',
      dataName: 'react',
      title: 'react',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 5,
      href: '#',
      dataName: 'node',
      title: 'node',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 6,
      href: '#',
      dataName: 'node',
      title: 'node',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 7,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 8,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 9,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 10,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 11,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 12,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 13,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 14,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 15,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 16,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 17,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 18,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 19,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    {
      id: 20,
      href: '#',
      dataName: 'others',
      title: 'others',
      description: 'Clone coding with HTML, CSS',
    },
    // {
    //   id: 21,
    //   href: '#',
    //   dataName: 'others',
    //   title: 'others',
    //   description: 'Clone coding with HTML, CSS',
    // },
    // {
    //   id: 22,
    //   href: '#',
    //   dataName: 'others',
    //   title: 'others',
    //   description: 'Clone coding with HTML, CSS',
    // },
    // {
    //   id: 23,
    //   href: '#',
    //   dataName: 'others',
    //   title: 'others',
    //   description: 'Clone coding with HTML, CSS',
    // },
    // {
    //   id: 24,
    //   href: '#',
    //   dataName: 'others',
    //   title: 'others',
    //   description: 'Clone coding with HTML, CSS',
    // },
  ];

  const [all, setAll] = useState(true);
  const [html, setHtml] = useState(false);
  const [react, setReact] = useState(false);
  const [node, setNode] = useState(false);
  const [others, setOthers] = useState(false);

  const [projects, setProjects] = useState(false);
  const [project, setProject] = useState([]);

  useEffect(() => setProject(defaultProject), []);

  const onClick = (e) => {
    const target = e.target.dataset.filter;

    // 1. change color
    initializeBtn();
    switch (target) {
      case 'all':
        setAll(true);
        break;
      case 'html/css':
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

    // 2.projects out
    setProjects(true);

    // 3. setTimeout => filter + projects in
    setTimeout(() => {
      if (target === 'all') {
        setProject(defaultProject);
      } else {
        const filtered = defaultProject.filter((p) => p.dataName === target);
        setProject(filtered);
      }
      setProjects(false);
    }, 300);
  };

  function initializeBtn() {
    setAll(false);
    setHtml(false);
    setReact(false);
    setNode(false);
    setOthers(false);
  }

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
          data-projects="projects"
        >
          {project.map((project) => (
            <DisplayProject key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </section>
  );
});

export default Projects;
