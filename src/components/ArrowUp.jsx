import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ArrowUp({ arrow, onArrowClick }) {
  const STYLE =
    'bg-white text-secondaryAccent rounded-full w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 p-2 fixed bottom-10 right-4 md:bottom-12 md:right-7 lg:bottom-14 lg:right-9 hover:scale-110 hover:brightness-110 transition-all delay-150 duration-300 ease-in-out';
  return (
    <button onClick={onArrowClick}>
      <FaArrowCircleUp className={STYLE} />
    </button>
  );
}
