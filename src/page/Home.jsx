import React from 'react';
import CardPoints from '../components/CardPoints';
import { threePoints } from '../data/ThreePoints';

export default function Home() {
  return (
    <section className="pt-[111px] text-font w-full h-full max-w-7xl mx-auto flex justify-center items-center">
      <div className="basis-3/5">
        <p className="text-2xl font-semibold mb-1">Hello I'm</p>
        <h1 className="text-5xl font-bold mb-10">CHANWOO LEE</h1>
        <p className="text-xl">
          I am a <strong>Frontend Developer</strong> with a passion for creating
          meaningful digital experiences. I believe that technology can be used
          to <strong>make the world a better place</strong>, and I am driven by
          the opportunity to use my skills to{' '}
          <strong>improve people's lives</strong>.
        </p>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {threePoints &&
            threePoints.map((point) => (
              <CardPoints key={point.id} point={point} />
            ))}
        </ul>
      </div>
      <div className="hidden md:block md:basis-2/5">
        <img
          src="images/home/me-whole.png"
          alt=""
          className="w-[500px] mx-auto"
        />
      </div>
    </section>
  );
}
