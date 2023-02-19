import React from 'react';
import { projects } from '../data/SideProjects';
import CardProjects from '../components/CardProjects';

export default function Projects() {
  const handleClick = (e) => {};
  return (
    <section>
      <div>
        <button data-filter="all" onClick={handleClick}>
          All<span>18</span>
        </button>
        <button data-filter="html/css" onClick={handleClick}>
          HTML/CSS<>1</>
        </button>
        <button data-filter="react" onClick={handleClick}>
          React<span>2</span>
        </button>
        <button data-filter="node" onClick={handleClick}>
          Node<span>3</span>
        </button>
        <button data-filter="others" onClick={handleClick}>
          Others<span>4</span>
        </button>
      </div>
      <ul>
        {projects &&
          projects.map((project) => (
            <CardProjects key={project.id} project={project} />
          ))}
      </ul>
    </section>
  );
}
