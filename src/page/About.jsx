import React from 'react';
import { TbClick } from 'react-icons/tb';

export default function About() {
  const STYLE_WITHOUT_BG_COLOR =
    'flex flex-col items-center mx-auto md:max-w-3xl lg:max-w-4xl py-12 md:py-14 lg:py-16 px-2 md:px-0';
  const STYLE_WITH_BG_COLOR =
    'w-full bg-brand py-12 md:py-14 lg:py-16 px-2 md:px-0';
  const STYLE_MAXWITH_CENTER =
    'w-full md:max-w-3xl lg:max-w-4xl flex flex-col items-center mx-auto';
  const STYLE_TITLE =
    'text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8 text-center font-bold';
  const STYLE_EDUCATION_BOX =
    ' flex flex-col items-center px-1 md:px-2 lg:px-3 py-8 md:py-10 lg:py-12 border border-superLightGray rounded shadow hover:-translate-y-1 md:hover:-translate-y-2 lg:hover:-translate-y-3 transition-all delay-150 duration-300 ease-in-out';

  return (
    <section className="text-font pt-[40px] md:pt-[48px] lg:pt-[56px] w-full h-full">
      <section className={STYLE_WITHOUT_BG_COLOR}>
        <img
          className="w-24 md:w-36 lg:w-48 border md:border-2 border-white"
          style={{ borderRadius: '50%' }}
          src="images/aboutMe/myself_about.png"
          alt="myself_photo"
        />
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-4 lg:mt-6 mb-1 lg:mb-2">
          Frontend Developer
        </h1>
        <p className="text-xs md:text-sm lg:text-base">
          Let's work together to make the world a better place
        </p>
        <p className="text-xs md:text-sm lg:text-base mt-4 md:mt-6 lg:mt-8 px-1 md:px-0">
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
          <div>
            <img src="images/aboutMe/aboutMe.png" alt="about_me" />
          </div>
        </div>
      </section>

      <section className={STYLE_WITHOUT_BG_COLOR}>
        <div className={STYLE_MAXWITH_CENTER}>
          <h2 className={STYLE_TITLE}>Education & Training</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3">
            <a
              href="https://www.knou.ac.kr/knou/index.do?epTicket=LOG"
              target="_blank"
              rel="noreferrer"
            >
              <div className={STYLE_EDUCATION_BOX}>
                <img
                  src="images/aboutMe/knou.png"
                  alt="knou logo"
                  className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16"
                />

                <h3 className="text-sm md:text-base lg:text-lg font-semibold my-1 md:my-2 lg:my-3">
                  Korea National Open University
                </h3>
                <div className="w-full text-xs md:text-sm lg:text-base pl-1 lg:pl-2">
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
                  className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16"
                />

                <h3 className="text-sm md:text-base lg:text-lg font-semibold my-1 md:my-2 lg:my-3">
                  Dream Coding
                </h3>
                <div className="w-full text-xs md:text-sm lg:text-base pl-1 lg:pl-2">
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
                  className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16"
                />
              </a>

              <h3 className="text-sm md:text-base lg:text-lg font-semibold my-1 md:my-2 lg:my-3">
                JetBrain Academy
              </h3>
              <div className="w-full text-xs md:text-sm lg:text-base pl-1 lg:pl-2">
                <p> - Online Classes </p>
                <p> - Completed in Python track</p>

                <a
                  href="https://hyperskill.org/certificates/b25035ce-aad0-4d52-8a5b-e66681314c13.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mt-1 ml-2 md:ml-4 lg:ml-6 flex items-center gap-x-1 lg:gap-x-2">
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
          <p className="text:xs md:text-sm lg:text-base text-white px-3 md:px-0">
            I have earned the Azure Fundamentals certification for cloud
            computing
          </p>
          <img
            src="images/aboutMe/az900.png"
            alt="azure"
            className="w-3/6 mt-4 md:mt-6 lg:mt-8"
          />
        </div>
      </section>
    </section>
  );
}
