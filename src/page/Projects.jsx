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
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-8 md:gap-y-10 lg:gap-y-16';
  const STYLE_DISAPPEAR =
    'opacity-0 scale-90 translate-y-12 transition-all delay-150 duration-400 ease-out';

  return (
    <section className="text-font mx-auto max-w-xl md:max-w-3xl lg:max-w-screen-2xl pt-[68px] md:pt-[111px] w-full h-full ">
      <ul className="flex justify-center text-center text-lg md:text-xl lg:text-2xl m-12 md:m-14 lg:m-20">
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
