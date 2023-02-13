import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CardMenu({ menu }) {
  return (
    <li className="w-3/4 text-center bg-superLightGray rounded-md border md:border-0 mb-1 py-1 md:w-auto md:bg-background md:ml-6">
      <NavLink
        to={menu.path}
        className={({ isActive }) =>
          isActive
            ? ' text-brand font-bold md:text-white md:bg-brand md:px-4 md:py-1 md:rounded-md'
            : 'text-font hover:text-brand transition-all delay-150 duration-300 ease-in-out'
        }
      >
        {menu.title}
      </NavLink>
    </li>
  );
}
