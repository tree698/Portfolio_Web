import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/">
        <img src="images/logo.png" alt="logo" className="w-40 h-20" />
      </Link>
      <nav className="flex items-center gap-6 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
