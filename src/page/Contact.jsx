import React from 'react';

export default function Contact() {
  const STYLE_LI = 'flex items-center mb-4';
  const STYLE_IMAGE = 'w-8 mr-4 md:w-1/12 md:mr-10 md:ml-28';

  return (
    <section className="pt-[111px] text-font w-full h-full max-w-xl mx-auto flex flex-col justify-center items-center">
      <img
        src="images/contact/contactTitle.png"
        alt="title"
        className="w-7/12 md:w-11/12 mb-10"
      />
      <ul>
        <li className={STYLE_LI}>
          <img
            src="images/contact/contactPhone.png"
            alt="phone"
            className={STYLE_IMAGE}
          />
          <p className="text-xl md:text-3xl font-semibold">010-3779-3087</p>
        </li>
        <li className={STYLE_LI}>
          <img
            src="images/contact/contactMail.png"
            alt="email"
            className={STYLE_IMAGE}
          />
          <a
            className="text-xl md:text-3xl font-semibold hover:text-brand hover:scale-105 transition-all delay-150 duration-300 ease-in-out"
            href="mailto:tree698@gmail.com"
          >
            tree698@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}
