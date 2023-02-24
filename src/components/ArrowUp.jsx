import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ArrowUp({ arrow, onArrowClick }) {
  const STYLE =
    'bg-white text-secondaryAccent rounded-full w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 p-1 fixed bottom-10 right-4 md:bottom-12 md:right-7 lg:bottom-14 lg:right-9 hover:scale-110 hover:brightness-110 transition-all delay-150 duration-300 ease-in-out';
  return (
    <button onClick={onArrowClick}>
      <FaArrowCircleUp className={STYLE} />
    </button>
  );
}
