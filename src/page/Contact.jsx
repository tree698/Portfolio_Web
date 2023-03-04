import React from 'react';

export default function Contact() {
  const STYLE_LI = 'flex items-center mb-1 md:mb-2 lg:mb-4';
  const STYLE_IMAGE = 'w-4 md:w-6 lg:w-8 mr-2 md:mr-3 lg:mr-4';

  return (
    <section className="pt-[40px] md:pt-[48px] lg:pt-[56px] text-font w-full h-full max-w-xl mx-auto flex flex-col justify-center items-center">
      <img
        src="images/contact/contactTitle.png"
        alt="title"
        className="w-7/12 md:w-8/12 lg:w-9/12 mb-4 md:mb-8 lg:mb-10"
      />
      <ul>
        <li className={STYLE_LI}>
          <img
            src="images/contact/contactPhone.png"
            alt="phone"
            className={STYLE_IMAGE}
          />
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            010-3779-3087
          </p>
        </li>
        <li className={STYLE_LI}>
          <img
            src="images/contact/contactMail.png"
            alt="email"
            className={STYLE_IMAGE}
          />
          <a
            className="text-base md:text-lg lg:text-xl font-semibold hover:text-brand transition-all delay-150 duration-300 ease-in-out"
            href="mailto:tree698@gmail.com"
          >
            tree698@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}
