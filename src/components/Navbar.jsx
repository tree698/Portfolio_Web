import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { menus } from '../data/Menus';
import CardMenu from './CardMenu';

export default function Navbar({ isArrow }) {
  const [toggle, setToggle] = useState(false);
  const HEADER_STYLE =
    'text-font fixed top=0 left=0 w-full flex flex-col mx-auto bg-superLightGray py-2 px-5 z-10 md:bg-background md:flex-row md:justify-between md:items-center ';
  const HEADER_SHADOW_STYLE = `${HEADER_STYLE} border-b border-superLightGray shadow`;

  return (
    <header className={isArrow ? HEADER_SHADOW_STYLE : HEADER_STYLE}>
      <Link to="/">
        <img
          src="logo.png"
          alt="logo"
          className="w-12 h-6 md:w-14 md:h-8 lg:w-16 lg:h-10"
        />
      </Link>
      <ul
        className={
          toggle
            ? 'flex flex-col items-center mt-1 md:flex md:flex-row md:mt-0'
            : 'hidden md:flex md:flex-row md:gap-x-1 lg:gap-x-2'
        }
      >
        {menus && menus.map((menu) => <CardMenu key={menu.id} menu={menu} />)}
      </ul>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="absolute top-3 right-3 text-base md:hidden"
      >
        <FaBars />
      </button>
    </header>
  );
}
