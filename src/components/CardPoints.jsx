import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardPoints({ point }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${point.path}`)}>
      <li className="flex flex-col items-center p-3 border-2 border-superLightGray rounded-xl overflow-hidden shadow-xl hover:-translate-y-4 hover:border-4 transition-all delay-150 duration-300 ease-in-out">
        <img src={point.image} alt={point.title} className="w-3/5" />
        <div className="my-4 text-accent font-semibold text-2xl">
          <p>{point.title}</p>
          <p>{point.subTitle}</p>
        </div>
        <p className="text-md">{point.description}</p>
      </li>
    </button>
  );
}
