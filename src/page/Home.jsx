import React from 'react';
import CardPoints from '../components/CardPoints';
import { threePoints } from '../data/ThreePoints';

export default function Home() {
  return (
    <section className="pt-[56px] text-font flex justify-center items-center mx-auto w-full h-full md:max-w-3xl lg:max-w-4xl">
      <div className="md:basis-3/5 md:mr-4">
        <div className="px-6 md:px-0">
          <p className="font-semibold text-xs md:text-sm">Hello I'm</p>
          <h1 className="font-bold mb-4 text-base md:text-lg lg:text-2xl ">
            CHANWOO LEE
          </h1>
          <p className="text-xs md:text-sm">
            I am a <strong>Frontend Developer</strong> with a passion for
            creating meaningful digital experiences. I believe that technology
            can be used to <strong>make the world a better place</strong>, and I
            am driven by the opportunity to use my skills to{' '}
            <strong>improve people's lives</strong>.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 lg:gap-2 px-3 md:px-0 mt-6 md:mt-8 lg:mt-10">
          {threePoints &&
            threePoints.map((point) => (
              <CardPoints key={point.id} point={point} />
            ))}
        </ul>
      </div>
      <div className="hidden md:block md:basis-2/5">
        <img
          src="images/home/me-whole.png"
          alt="me"
          className="w-full mx-auto"
        />
      </div>
    </section>
  );
}
