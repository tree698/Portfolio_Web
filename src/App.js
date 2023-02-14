import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ArrowUp from './components/ArrowUp';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isArrow, setIsArrow] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleArrow);
    return () => window.removeEventListener('scroll', handleArrow);
  }, []);

  const handleArrow = () => {
    const navbarHeight = navbarRef.current.getBoundingClientRect().height;
    window.scrollY > navbarHeight
      ? setIsArrow((prev) => true)
      : setIsArrow((prev) => false);
  };

  const handleArrowClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full h-screen flex flex-col">
      <div ref={navbarRef}>
        <Navbar isArrow={isArrow} />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      {isArrow && <ArrowUp onArrowClick={handleArrowClick} />}
    </section>
  );
}

export default App;
