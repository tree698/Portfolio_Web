import React from 'react';
import CardPoints from '../components/CardPoints';
import { threePoints } from '../data/ThreePoints';

export default function Home() {
  return (
    <section className="pt-[111px] text-font w-full h-full md:max-w-6xl lg:max-w-7xl mx-auto flex justify-center items-center">
      <div className="lg:basis-3/5">
        <div className="px-14 lg:px-0">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
            Hello I'm
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10">
            CHANWOO LEE
          </h1>
          <p className="text-sm md:text-lg lg:text-xl">
            I am a <strong>Frontend Developer</strong> with a passion for
            creating meaningful digital experiences. I believe that technology
            can be used to <strong>make the world a better place</strong>, and I
            am driven by the opportunity to use my skills to{' '}
            <strong>improve people's lives</strong>.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-6 md:mt-8 lg:mt-10 px-14 lg:px-0">
          {threePoints &&
            threePoints.map((point) => (
              <CardPoints key={point.id} point={point} />
            ))}
        </ul>
      </div>
      <div className="hidden lg:block lg:basis-2/5">
        <img
          src="images/home/me-whole.png"
          alt="me"
          className="w-[500px] mx-auto"
        />
      </div>
    </section>
  );
}
