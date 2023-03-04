import React, { useState } from 'react';
import CardButtons from '../components/CardButton/CardButtons';
import CardProjects from '../components/CardProjects/CardProjects';
import { defaultProjects } from '../data/SideProjects';

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [anima, setAnima] = useState(false);

  const handleFilter = (filter) => {
    setAnima(true);
    const filtered = defaultProjects.filter((p) => p.dataName.includes(filter));
    setTimeout(() => {
      filter === 'all' ? setProjects(defaultProjects) : setProjects(filtered);
      setAnima(false);
    }, 400);
  };

  const STYLE_PROJECTS =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 md:gap-x-2 lg:gap-x-3 gap-y-4 md:gap-y-6 lg:gap-y-8';
  const STYLE_DISAPPEAR =
    'opacity-0 scale-90 translate-y-4 md:translate-y-6 lg:translate-y-8 transition-all delay-150 duration-400 ease-out';

  return (
    <section className="pt-[40px] md:pt-[48px] lg:pt-[56px] text-font mx-auto md:max-w-3xl lg:max-w-4xl w-full h-full ">
      <ul className="flex justify-center text-center text-sm md:text-base lg:text-lg m-8 md:m-10 lg:m-12 pt-4 md:pt-4 lg:pt-4">
        <CardButtons filter={handleFilter} />
      </ul>
      <ul
        className={
          anima ? `${STYLE_PROJECTS} ${STYLE_DISAPPEAR}` : `${STYLE_PROJECTS}`
        }
      >
        {projects &&
          projects.map((project) => (
            <CardProjects key={project.id} project={project} />
          ))}
      </ul>
    </section>
  );
}
