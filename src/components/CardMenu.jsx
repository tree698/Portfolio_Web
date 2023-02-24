import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CardMenu({ menu }) {
  return (
    <li className="w-full md:w-auto text-center rounded border md:border-0 border-lightGray mb-1 md:mb-0 text-xs md:text-sm">
      <NavLink
        to={menu.path}
        className={({ isActive }) =>
          isActive
            ? ' text-brand md:text-white md:bg-brand md:rounded px-2 md:px-3 py-1'
            : 'hover:text-secondaryAccent hover:opacity-65 transition-all delay-150 duration-300 ease-in-out px-2 md:px-3 py-1'
        }
      >
        {menu.title}
      </NavLink>
    </li>
  );
}
