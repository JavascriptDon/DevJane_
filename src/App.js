import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { FaMoon, FaTwitter, FaLinkedin, FaDribbble, FaSun} from 'react-icons/fa/index.js';
import web1 from "./assets/images/web1.png";
import web2 from "./assets/images/web2.png";
import web3 from "./assets/images/web3.png";
import web4 from "./assets/images/web4.png";
import web5 from "./assets/images/web5.png";
import web6 from "./assets/images/web6.png";
import devJ from "./assets/images/dev-jane-01.png";
import code from "./assets/images/portfolio-01.png";
import design from "./assets/images/portfolio-02.png";
import responsive from "./assets/images/portfolio-03.png";
import Logo from "./assets/images/devjane.png";
import Cursor from './components/cursor';
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={`bg-primary px-10 md:px-20 lg:px-40 ${darkMode ? "dark" : ""}`}>

    <section className="min-h-screen">
      <Cursor/>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="font-burtons text-xl border-black">
          <img src={Logo} width={100} height={100} alt="" />
        </h1>
        <ul className="flex items-center">
          <li>
          <div id="toggle" onClick={(e) => setDarkMode(!darkMode) }>
            { darkMode ? <FaSun color="white" className="cursor-pointer text-2xl"/>: <FaMoon className="cursor-pointer text-2xl"/> }
            </div>  
          </li>
          <li id="switchTheme">
            <a 
              className="cursor-scale small bg-gradient-to-r from-cyan-500 text- to-fuchsia-500 text-white font-bold px-4 py-2 border-none rounded-md ml-8"
              href="/"
              aria-label=""
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-accent font-medium md:text-6xl">
          Jane Doe
        </h2>
        <h3 className="text-2xl py-2 text-primary md:text-3xl">
          Developer and designer.
        </h3>
        <p className="text-md py-5 leading-8 text-secondary max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming and design content needs. Come with me down here, and let's get to work!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
          <a href="/" aria-label="Social Link">
              <FaTwitter />
          </a>
          <a href="/" aria-label="Social Link">
              <FaLinkedin />
          </a>
          <a href="/" aria-label="Social Link">
             <FaDribbble />
          </a>
        </div>
        <div className="cursor-scale small mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
          <img src={devJ} className="object-cover relative w-full h-full" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3 className="text-3xl py-1 text-primary ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-secondary">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-indigo-500"> agencies </span>
          consulted for <span className="text-indigo-500">startups </span>
          and collaborated with talanted people to create digital products
          for both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-secondary">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="cursor-scale small bg-card text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 hover:scale-110 transition duration-300 ease-in-out">
          <img
            src={design}
            className="inline-flex items-center justify-center rounded-full"
            width={100}
            height={100}
            alt=""
          />
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Beautiful Designs
          </h3>
          <p className="py-2">
            Every website is beautiful, unique and tailored to suit your
            needs and requirements.
          </p>
          <a className="text-indigo-600 inline-flex items-center mt-4" href="/" aria-label="CTA Link">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="cursor-scale small bg-card text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition duration-300 ease-in-out">
          <img
            src={code}
            className="inline-flex items-center justify-center rounded-full"
            width={100}
            height={100}
            alt=""
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Clean Code</h3>
          <p className="py-2">
            All websites are written in valid and clean HTML5 / CSS3 &
            JavaScript (jQuery).
          </p>
          <a className="text-indigo-600 inline-flex items-center mt-4" href="/" aria-label="CTA Link">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="cursor-scale small bg-card text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition duration-300 ease-in-out">
          <img
            src={responsive}
            className="inline-flex items-center justify-center rounded-full"
            width={100}
            height={100}
            alt=""
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Always Responsive
          </h3>
          <p className="py-2">
            All websites are responsive. They will look great on desktop,
            tablets and mobile phones too.
          </p>
          <a className="text-indigo-600 inline-flex items-center mt-4" href="/" aria-label="CTA Link">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 text-primary ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-secondary">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-indigo-500"> agencies </span>
          consulted for <span className="text-indigo-500">startups </span>
          and collaborated with talanted people to create digital products
          for both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-secondar">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="cursor-scale small flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web1}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web2}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web3}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web4}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web5}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web6}
            alt=""
          />
        </div>
      </div>
    </section>
    <section className="py-10 md:mt-20">
      <footer>
        <div className="flex justify-center text-center text-gray-400">
          <a href="/" aria-label="Copyright Text">© Copyright 2022 Astro Portfolio</a>
        </div>
        <span className="flex justify-center text-center text-gray-400">Developed with 💖 by JavaScriptDon</span>
      </footer>
    </section>
  </main>
  );
}


