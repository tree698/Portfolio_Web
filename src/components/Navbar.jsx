import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { menus } from '../data/Menus';
import CardMenu from './CardMenu';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top=0 left=0 w-full mx-auto bg-superLightGray md:bg-background flex flex-col md:flex-row md:justify-between py-4 px-10">
      <Link to="/">
        <img
          src="images/logo.png"
          alt="logo"
          className="w-16 h-9 md:w-36 md:h-20"
        />
      </Link>
      <ul
        className={
          toggle
            ? 'flex flex-col items-center md:block md:flex md:flex-row md:items-center md:font-semibold md:text-xl'
            : 'hidden md:block md:flex md:flex-row md:items-center md:font-semibold md:text-xl'
        }
      >
        {menus && menus.map((menu) => <CardMenu key={menu.id} menu={menu} />)}
      </ul>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="absolute top-4 right-4 text-md md:hidden"
      >
        <FaBars />
      </button>
    </header>
  );
}
