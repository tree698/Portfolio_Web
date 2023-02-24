import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardPoints({ point }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${point.path}`)}>
      <li className="mb-2 md:mb-0 p-1 md:p-2 lg:p-3 flex flex-col items-center border border-superLightGray rounded overflow-hidden shadow-md hover:-translate-y-1 md:hover:-translate-y-2  transition-all delay-150 duration-300 ease-in-out">
        <img
          src={point.image}
          alt={point.title}
          className="w-1/5 md:w-2/5 lg:w-3/5"
        />
        <div className="my-1 text-primaryAccent font-semibold text-xs md:text-sm lg:text-base">
          <p>{point.title}</p>
          <p>{point.subTitle}</p>
        </div>
        <p className="text-[10px] md:text-xs">{point.description}</p>
      </li>
    </button>
  );
}
