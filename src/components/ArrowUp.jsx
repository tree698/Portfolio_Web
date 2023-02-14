import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ArrowUp({ arrow, onArrowClick }) {
  const STYLE =
    'text-brand rounded-full w-16 h-16 md:w-20 md:h-20 p-2 fixed bottom-10 right-10 md:bottom-20 md:right-20 hover:scale-110 hover:brightness-110 transition-all delay-150 duration-300 ease-in-out';
  return (
    <button onClick={onArrowClick}>
      <FaArrowCircleUp className={STYLE} />
    </button>
  );
}
