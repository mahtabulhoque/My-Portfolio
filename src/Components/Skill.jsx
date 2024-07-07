import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";
import { RiTailwindCssFill, RiFirebaseFill  } from "react-icons/ri";
import { SiMambaui,SiDaisyui, SiExpress,SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import backend from '../assets/backend.gif'

import AboutPic from "../assets/aboutPic.gif";
import translating from "../assets/translator.gif";



const Skill = () => {
  return (
    <div className="max-w-[1300px] mx-auto " id='skills'>
      <h2
        className="text-gray-200 text-3xl font-bold mb-6 text-center"
        
      >
        SKILL
      </h2>

      <div className="p-5 grid md:grid-cols-2 gap-8 place-items-center">
        <div className=" md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-700" />
          <DiJavascript className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiMongodb className="text-green-700" />
          <DiNodejsSmall className="text-green-500" />
          <SiMambaui className="text-violet-500" />
          <SiDaisyui className="text-lime-500"/>
          <RiTailwindCssFill className="text-sky-500" />
          <SiExpress className="text-gray-500" />
          <RiFirebaseFill className="text-amber-600" />
          <SiVercel />
          <FaGithub className="text-white"/>
        </div>
        <div className="relative group">
          <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-r-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
            <img
              className="rounded-lg md:max-w-[500px]"
              src={AboutPic}
              alt="photo"
            />
          </div>
        </div>

        <div className="px-6">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">
            FRONTEND-EXPERIENCE
          </h2>
          <p className="text-gray-300 mb-4">
            As a frontend developer, I excel in creating engaging and responsive
            user interfaces using modern web technologies. Proficient in HTML,
            CSS, and JavaScript, I leverage frameworks like React, in which I
            have extensive experience, to build dynamic and interactive web
            applications. My strong attention to detail ensures a seamless user
            experience, while my commitment to best practices and clean code
            results in maintainable and scalable solutions. I am dedicated to
            staying updated with the latest trends and continuously enhancing my
            skills, currently focusing on mastering Next.js to bring even more
            efficiency and performance to my projects.
          </p>

          <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-700" />
            <DiJavascript className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
            <SiMambaui className="text-violet-500" />
          <SiDaisyui className="text-lime-600"/>
          <RiTailwindCssFill className="text-sky-500" />
          </div>
        </div>

        <div className="px-5">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">
            BACKEND-EXPERIENCE
          </h2>
          <p className="text-gray-300 mb-4">
            As a frontend developer, I excel in creating engaging and responsive
            user interfaces using modern web technologies. Proficient in HTML,
            CSS, and JavaScript, I leverage frameworks like React, in which I
            have extensive experience, to build dynamic and interactive web
            applications. My strong attention to detail ensures a seamless user
            experience, while my commitment to best practices and clean code
            results in maintainable and scalable solutions. I am dedicated to
            staying updated with the latest trends and continuously enhancing my
            skills, currently focusing on mastering Next.js to bring even more
            efficiency and performance to my projects.
          </p>

          <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-700" />
            <DiJavascript className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
            <RiFirebaseFill className="text-orange-600" />
            <DiMongodb className="text-green-700" />
            <SiExpress className="text-gray-400" />
            <SiVercel />
            <FaGithub className="text-white"/>
          </div>
        </div>

        <div className="relative group">
          <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-r-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
            <img
              className="rounded-lg md:max-w-[500px]"
              src={backend}
              alt="photo"
            />
          </div>
        </div>

        <div className="relative group">
          <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-r-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
            <img
              className="rounded-lg md:max-w-[500px]"
              src={translating}
              alt="photo"
            />
          </div>
        </div>

        <div className="px-5">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">
            PART-TIME TRANSLATOR(Korean novel)
          </h2>
          <p className="text-gray-300 mb-4">
          I am also a part-time novel translator dedicated to bringing literary works to a wider audience. My current project involves translating the captivating novel YOU WILL PAY WITH YOUR LIFE FOR DECEIVING  Moonlight Website.
          </p>
           <div className="flex gap-5">
           <a className="text-blue-300 text-lg" href="https://moonlightnovel.com/">Visit Moonlight</a>
            <a className="text-blue-300 text-lg" href="https://moonlightnovel.com/novels/you-will-pay-with-your-life-for-deceiving-me/">My Novel</a>
          
           </div>
            </div>
        </div>

      </div>
  );
};

export default Skill;
