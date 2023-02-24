import React from 'react';
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="text-font p-3 flex flex-col items-center text-xs md:text-sm">
      <div className="flex items-center">
        <address>
          <a
            className="hover:text-brand hover:scale-105 transition-all delay-150 duration-300 ease-in-out"
            href="mailto:tree698@gmail.com"
          >
            tree698@gmail.com
          </a>
        </address>
        <a href="https://github.com/tree698/" target="_blank" rel="noreferrer">
          <BsGithub className="ml-2 lg:ml-3 text-lg md:text-xl lg:text-2xl hover:rotate-17 hover:scale-110 hover:hover:text-brand transition-all delay-150 duration-300 ease-in-out hover:shadow-xl" />
        </a>
      </div>
      <p>2023 Chanwoo@All Right Reserved</p>
    </footer>
  );
}
