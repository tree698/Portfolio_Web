import React from 'react';
import { TbClick } from 'react-icons/tb';

export default function About() {
  const STYLE_WITHOUT_BG_COLOR =
    'max-w-xl md:max-w-2xl lg:max-w-6xl mx-auto my-10 md:my-14 lg:my-16 flex flex-col items-center';
  const STYLE_WITH_BG_COLOR = 'w-full bg-brand py-10 md:py-14 lg:py-16';
  const STYLE_MAXWITH_CENTER =
    'w-full max-w-xl md:max-w-2xl lg:max-w-6xl flex flex-col items-center mx-auto';
  const STYLE_TITLE =
    'text-2xl md:text-3xl font-semibold mb-8 md:mb-10 lg:mb-12';
  const STYLE_EDUCATION_BOX =
    'border border-superLightGray w-[250px] md:w-[300px] lg:w-[320px] px-2 md:px-3 lg:px-6 py-8 md:py-12 lg:py-16 rounded-lg shadow-lg flex flex-col items-center hover:-translate-y-4 transition-all delay-150 duration-300 ease-in-out';

  return (
    <section className="pt-[60px] md:pt-[70px] lg:pt-[80px] md:t-[80px] w-full h-full">
      <section className={STYLE_WITHOUT_BG_COLOR}>
        <img
          className="w-24 md:w-40 lg:w-48 border-2 lg:border-4 border-white"
          style={{ borderRadius: '50%' }}
          src="images/aboutMe/myself_about.png"
          alt="myself_photo"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold my-1">
          Frontend Developer
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Let's work together to make the world a better place
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-6 md:mt-8 lg:mt-10 px-3 md:px-0">
          I have developed a strong foundation in HTML, CSS, and JavaScript
          through my studies and personal projects, and I am familiar with
          popular front-end & back-end frameworks such as React, Node. Their
          ability to work on both the client-side and server-side of web
          applications has resulted in a comprehensive understanding of the web
          development process. This individual is a true asset to any team,
          bringing a unique blend of creative and technical abilities to the
          table.
        </p>
      </section>

      <section className={STYLE_WITH_BG_COLOR}>
        <div className={STYLE_MAXWITH_CENTER}>
          <h1 className={`${STYLE_TITLE} text-white`}>
            A Little More About Me
          </h1>

          <div className="">
            <img src="images/aboutMe/aboutMe.png" alt="" />
          </div>
        </div>
      </section>

      <section className={STYLE_WITHOUT_BG_COLOR}>
        <div className={STYLE_MAXWITH_CENTER}>
          <h2 className={STYLE_TITLE}>Education & Training</h2>
          <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-3">
            <a
              href="https://www.knou.ac.kr/knou/index.do?epTicket=LOG"
              target="_blank"
              rel="noreferrer"
            >
              <div className={STYLE_EDUCATION_BOX}>
                <img
                  src="images/aboutMe/knou.png"
                  alt="knou logo"
                  className="w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px]"
                />

                <h3 className="text-sm md:text-base lg:text-lg font-semibold my-2 lg:my-3">
                  Korea National Open University
                </h3>
                <div className="w-full text-sm lg:text-base pl-1 lg:pl-2">
                  <p>- Bechelor of Science</p>
                  <p>- Department of Computer Science</p>
                  <p>- GPA: 4.2/4.5</p>
                  <p>- Graduation in Feb. 2023</p>
                </div>
              </div>
            </a>

            <a
              href="https://academy.dream-coding.com/enrollments"
              target="_blank"
              rel="noreferrer"
            >
              <div className={STYLE_EDUCATION_BOX}>
                <img
                  src="images/aboutMe/dreamCoding.png"
                  alt="dreamCoding logo"
                  className="w-[50px] md:w-[70px] lg:w-[90px] h-[40px] md:h-[60px] lg:h-[80px]"
                />

                <h3 className="text-sm md:text-base lg:text-lg font-semibold my-2 lg:my-3">
                  Dream Coding
                </h3>
                <div className="w-full text-sm lg:text-base pl-1 lg:pl-2">
                  <p>- Online Classes</p>
                  <p>- Completed in 10 courses :</p>
                  <p className="pl-1 md:pl-2 lg:pl-3">
                    such as JavaScript, React, Node, TDD, TypeScript, Git ...
                  </p>
                </div>
              </div>
            </a>

            <div className={STYLE_EDUCATION_BOX}>
              <a
                href="https://hyperskill.org/tracks"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="images/aboutMe/jba.png"
                  alt="jba logo"
                  className="w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px]"
                />
              </a>

              <h3 className="text-sm md:text-base lg:text-lg font-semibold my-2 lg:my-3">
                JetBrain Academy
              </h3>
              <div className="w-full text-sm lg:text-base pl-1 lg:pl-2">
                <p> - Online Classes </p>
                <p> - Completed in Python track</p>

                <a
                  href="https://hyperskill.org/certificates/b25035ce-aad0-4d52-8a5b-e66681314c13.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mt-1 ml-6 flex items-center gap-x-2">
                    <TbClick />
                    Certification
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={STYLE_WITH_BG_COLOR}>
        <div className={STYLE_MAXWITH_CENTER}>
          <h2 className={`${STYLE_TITLE} text-white`}>Others</h2>
          <p className="text:sm lg:text-lg text-white px-3 md:px-0">
            I have earned the Azure Fundamentals certification for cloud
            computing
          </p>
          <img
            src="images/aboutMe/az900.png"
            alt="azure"
            className="w-3/6 mt-6 md:mt-8 lg:mt-10"
          />
        </div>
      </section>
    </section>
  );
}
