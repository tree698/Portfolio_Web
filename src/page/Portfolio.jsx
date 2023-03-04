import React from 'react';
import { GiPlatform } from 'react-icons/gi';
import { BsGithub } from 'react-icons/bs';
import { GiClick } from 'react-icons/gi';
import { TbHandFinger } from 'react-icons/tb';
import { TbHandTwoFingers } from 'react-icons/tb';
import { TbHandThreeFingers } from 'react-icons/tb';
import { BsCheck2Square } from 'react-icons/bs';

export default function Portfolio() {
  const STYLE_WITHOUT_BG_COLOR =
    'flex flex-col items-center mx-auto md:max-w-3xl lg:max-w-4xl py-10 md:py-14 lg:py-16 px-2 md:px-0';
  const STYLE_WITH_BG_COLOR =
    'w-full bg-brand py-10 md:py-14 lg:py-16 px-2 md:px-0';
  const STYLE_MAXWITH_CENTER =
    'w-full md:max-w-3xl lg:max-w-4xl flex flex-col items-center mx-auto';
  const STYLE_H1 =
    'text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8 text-center font-bold';
  const STYLE_TABLE =
    'w-full md:max-w-3xl lg:max-w-4xl mx-auto text-white text-xs md:text-sm lg:text-base border-collapse table-fixed';
  const STYLE_TD =
    'h-7 md:h-8 lg:h-9 pl-1 md:pl-2 lg:pl-3 border-b border-superLightGray';

  return (
    <section className="text-font pt-[40px] md:pt-[48px] lg:pt-[56px] w-full h-full">
      <section className={STYLE_WITHOUT_BG_COLOR}>
        <img
          src="images/portfolio/heading.png"
          alt="logo"
          className="w-2/5 mb-2 md:mb-4 lg:mb-6"
        />
        <p className="text-sm md:text-base lg:text-lg my-4 md:my-5 lg:my-6">
          An online communication platform for creators who use tools like
          &nbsp;
          <a
            href="https://apps.apple.com/kr/app/procreate/id425073498"
            className="border-b text-lightGray"
          >
            Procreate
          </a>
          &nbsp; for their creative activities. After signing up for TalkTalk,
          users can upload their own creations and receive feedback through
          real-time chat with other members, providing opportunities to enhance
          their creative abilities and appreciate the works of other members.
        </p>
        <GiPlatform className="text-xl md:text-2xl lg:text-3xl" />
      </section>

      <section className={STYLE_WITH_BG_COLOR}>
        <h1 className={`${STYLE_H1} text-white`}>Demo</h1>
        <div className={STYLE_MAXWITH_CENTER}>
          <div className="relative w-full h-0 pt-[56%]">
            <iframe
              id="player"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/f7ROFzpLYPs"
              allowFullScreen
              title="portfolio"
              className="rounded-md absolute top-0 left-0"
            />
          </div>
          <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col items-center">
            <div className="text-center">
              <a
                href="https://talk698.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl lg:text-3xl font-bold border-b text-white hover:text-superLightGray transition-all delay-150 duration-300 ease-in-out"
              >
                https://talk698.netlify.app/
              </a>
              <p className="mt-1 md:mt-2 lg:mt-3 text-white font-semibold text-center text-sm md:text-lg">
                For testing purposes: (username) test, (password) 12345
              </p>
            </div>

            <div className="flex items-center mt-4 md:mt-6 lg:mt-8">
              <BsGithub className="text-base md:text-lg lg:text-xl mr-2 md:mr-3 lg:mr-4 text-white" />
              <a
                href="https://github.com/tree698/TalkTalk-Client"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold text-sm md:text-lg lg:text-xl mr-1 md:mr-2 lg:mr-3 border-b hover:text-lightPink transition-all delay-150 duration-300 ease-in-out"
              >
                Frontend
              </a>
              <GiClick className="text-lightPink text-sm md:text-lg lg:text-xl " />
              <a
                href="https://github.com/tree698/TalkTalk-Server"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold text-sm md:text-lg lg:text-xl ml-2 md:ml-4 lg:ml-6 mr-1 md:mr-2 lg:mr-3 border-b hover:text-lightPink transition-all delay-150 duration-300 ease-in-out"
              >
                Backend
              </a>
              <GiClick className="text-lightPink text-base md:text-lg lg:text-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className={STYLE_WITHOUT_BG_COLOR}>
        <h1 className={STYLE_H1}>Tech Stack</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 text-base md:text-lg lg:text-xl font-semibold">
          <div className="flex flex-col items-center">
            <img
              src="images/portfolio/frontend.png"
              alt="frontend"
              className="w-3/4 lg:w-full"
            />
            <div className="flex items-center justify-center mt-2 md:mt-4 lg:mt-6">
              <TbHandFinger />
              <p className="ml-1 md:ml-2 lg:ml-3">Frontend</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="images/portfolio/backend.png"
              alt="backend"
              className="w-3/4 lg:w-full"
            />
            <div className="flex items-center justify-center mt-2 md:mt-4 lg:mt-6">
              <TbHandTwoFingers />
              <p className="ml-1 md:ml-2 lg:ml-3">Backend</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="images/portfolio/test.png"
              alt="test"
              className="w-3/4 lg:w-full"
            />
            <div className="flex items-center justify-center mt-2 md:mt-4 lg:mt-6">
              <TbHandThreeFingers />
              <p className="ml-1 md:ml-2 lg:ml-3">TEST</p>
            </div>
          </div>
        </div>
      </section>

      <section className={STYLE_WITH_BG_COLOR}>
        <div className={STYLE_MAXWITH_CENTER}>
          <h1 className={`${STYLE_H1} text-white`}>Key Functions</h1>
          <div className="flex flex-col lg:flex-row">
            <ul className="basis-1/2 lg:basis-2/5 mb-2 md:mb-4 lg:mb-0 text-sm md:text-base lg:text-lg text-white flex flex-col justify-center">
              <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
                <BsCheck2Square className="mr-2 md:mr-3 lg:mr-4" />
                Signup, Login and Logout
              </li>
              <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
                <BsCheck2Square className="mr-2 md:mr-3 lg:mr-4" />
                Upload and delete images
              </li>
              <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
                <BsCheck2Square className="mr-2 md:mr-3 lg:mr-4" />
                Search images by keyword
              </li>
              <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
                <BsCheck2Square className="mr-2 md:mr-3 lg:mr-4" />
                Real-time chatting
              </li>
              <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
                <BsCheck2Square className="mr-2 md:mr-3 lg:mr-4" />
                Filtering tweets by username
              </li>
              <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
                <BsCheck2Square className="mr-2 md:mr-3 lg:mr-4" />
                Delete tweet
              </li>
            </ul>
            <div className="basis-1/2 lg:basis-3/5">
              <img
                src="images/portfolio/talk-landing.png"
                alt="talk-main"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={STYLE_WITHOUT_BG_COLOR}>
        <h1 className={`${STYLE_H1}`}>Key Features</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/2 lg:basis-3/5 mb-2 md:mb-4 lg:mb-0">
            <img
              src="images/portfolio/talk-chatting.png"
              alt="talk-chatting"
              className="w-full rounded shadow"
            />
          </div>
          <ul className="basis-1/2 lg:basis-2/5 text-sm md:text-base lg:text-lg flex flex-col justify-center pl-0 md:pl-8">
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              Responsive Web
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              Refactoring for Clean Code
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              MVC Pattern
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              Restful APIs
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              Validation
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              API rate Limiting
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              Prevent XSS and CSRF Attack
            </li>
            <li className="flex items-center mb-1 md:mb-2 lg:mb-3 font-semibold">
              <BsCheck2Square className="mr-1 md:mr-2 lg:mr-3" />
              Write Test code
            </li>
          </ul>
        </div>
      </section>

      <section className={`${STYLE_WITH_BG_COLOR} hidden lg:block`}>
        <h1 className={`${STYLE_H1} text-white`}>APIs</h1>
        <table className={STYLE_TABLE}>
          <thead>
            <tr className="h-8 md:h-9 lg:h-10 border-b-2 border-superLightGray font-bold">
              <th className="w-20"></th>
              <th className="w-28">Methods</th>
              <th className="w-64">URL</th>
              <th className={STYLE_TD}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center font-semibold" rowSpan={5}>
                Auth
              </td>
              <td className={STYLE_TD}>POST</td>
              <td className={STYLE_TD}>/auth/signup</td>
              <td className={STYLE_TD}>Registration</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>POST</td>
              <td className={STYLE_TD}>/auth/login</td>
              <td className={STYLE_TD}>Login</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>POST</td>
              <td className={STYLE_TD}>/auth/logout</td>
              <td className={STYLE_TD}>Logout</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>GET</td>
              <td className={STYLE_TD}>/auth/me</td>
              <td className={STYLE_TD}>Check login status</td>
            </tr>
            <tr className="border-b-[2px] border-superLightGray">
              <td className={STYLE_TD}>GET</td>
              <td className={STYLE_TD}>/auth/csrf-token</td>
              <td className={STYLE_TD}>Provide CSRF token</td>
            </tr>
            <tr>
              <td className="text-center font-semibold" rowSpan={4}>
                Tweet
              </td>
              <td className={STYLE_TD}>GET</td>
              <td className={STYLE_TD}>/tweets</td>
              <td className={STYLE_TD}>Download all tweets(chatting)</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>GET</td>
              <td className={STYLE_TD}>/tweets?username=:username</td>
              <td className={STYLE_TD}>Download tweets by username</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>POST</td>
              <td className={STYLE_TD}>/tweets</td>
              <td className={STYLE_TD}>Create tweet</td>
            </tr>
            <tr className="border-b-[2px] border-superLightGray">
              <td className={STYLE_TD}>DELETE</td>
              <td className={STYLE_TD}>/tweets/:id</td>
              <td className={STYLE_TD}>Remove tweet by id</td>
            </tr>
            <tr>
              <td className="text-center font-semibold" rowSpan={5}>
                Work
              </td>
              <td className={STYLE_TD}>GET</td>
              <td className={STYLE_TD}>/work</td>
              <td className={STYLE_TD}>Download images and information</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>GET</td>
              <td className={STYLE_TD}>/work/search</td>
              <td className={STYLE_TD}>Download searched results</td>
            </tr>
            <tr>
              <td className={STYLE_TD}>POST</td>
              <td className={STYLE_TD}>/work</td>
              <td className={STYLE_TD}>
                Upload the url of images and information to Database
              </td>
            </tr>
            <tr>
              <td className={STYLE_TD}>POST</td>
              <td className={STYLE_TD}>/work/image</td>
              <td className={STYLE_TD}>
                Upload and store image. After deployment, Cloudinary was being
                used instead of this API, beacuse Heroku does not provide the
                file system.
              </td>
            </tr>
            <tr className="border-b-2 border-superLightGray">
              <td className={STYLE_TD}>DELETE</td>
              <td className={STYLE_TD}>/work/:id</td>
              <td className={STYLE_TD}>Remove images and information</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}
