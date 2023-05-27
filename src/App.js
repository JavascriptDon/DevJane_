import React, { useState, useEffect, useRef} from "react";
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
import Logo from "./assets/images/_dev.png";
import Typed from "typed.js";
import Modal from "./Modal.js";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModal, setModal] = React.useState(false);
  const [isModal2, setModal2] = React.useState(false);
  const [isModal3, setModal3] = React.useState(false);
  const [isModal4, setModal4] = React.useState(false);
  const [isModal5, setModal5] = React.useState(false);
  const [isModal6, setModal6] = React.useState(false);
  const element = useRef(null);  // Create Ref element.

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["I am a Developer.", "I am a Designer.", "I love building web apps."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main className={`bg-primary px-10 md:px-20 lg:px-40 ${darkMode ? "dark" : ""}`}>
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="font-Montserrat text-xl border-black">
          <img src={Logo} width={100} height={100} alt="" />
        </h1>
        <ul className="flex items-center">
          <li>
          <button id="toggle" onClick={(e) => setDarkMode(!darkMode) } aria-label="btn">
            { darkMode ? <FaSun color="white" className="cursor-pointer text-2xl"/>: <FaMoon className="cursor-pointer text-2xl"/> }
            </button>  
          </li>
          <li id="switchTheme">
            <a 
              className="bg-gradient-to-r from-cyan-500 text- to-fuchsia-500 text-white font-bold px-4 py-2 border-none rounded-md ml-8"
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
        <h3 className="text-2xl py-2 text-primary md:text-3xl" ref={element}>
        </h3>
        <p className="text-md py-5 leading-8 text-secondary max-w-xl mx-auto md:text-xl">
        Hi, I'm Jane Doe, a web developer passionate about creating awesome websites.
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
        <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <img src={devJ} className="object-cover relative w-full h-full" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3 className="text-3xl py-1 text-primary ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-secondary">
        Take a look at the <span className="text-indigo-600">services</span> I <span className="text-indigo-600">offer</span> to help you achieve your  goals:</p>
      </div>
      <div className="lg:flex gap-10">
        <div className="bg-card text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 hover:scale-110 transition duration-300 ease-in-out">
          <img
            src={design}
            className="inline-flex items-center justify-center rounded-full"
            width={100}
            height={100}
            alt=""
          />
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Brand Designs
          </h3>
          <p className="py-2">
          Every website is beautiful, unique and tailored to suit your needs and requirements.
          </p>
        </div>
        <div className="bg-card text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition duration-300 ease-in-out">
          <img
            src={code}
            className="inline-flex items-center justify-center rounded-full"
            width={100}
            height={100}
            alt=""
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Clean Code</h3>
          <p className="py-2">
            All websites are written in valid and clean HTML5 / CSS3 & JavaScript.
          </p>
        </div>
        <div className="bg-card text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition duration-300 ease-in-out">
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
          All websites are responsive. They will look great on desktop, tablets and mobile phones too.
          </p>
        </div>
      </div>
    </section>
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 text-primary ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-secondary">
         Here are a few of my <span className="text-indigo-600">favorite projects:</span>
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web1}
            alt=""
            onClick={() => setModal(true)}
          />
          <Modal
            isVisible={isModal}
            title="Totum"
            content={<img src={web1} className="w-full h-full" alt=""/>}
            footer={<button>Live Demo</button>}
            links={<button>Github</button>}
            onClose={() => setModal(false)}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web2}
            alt=""
            onClick={() => setModal2(true)}
          />
          <Modal
            isVisible={isModal2}
            title="ZOULU"
            content={<img src={web2} className="w-full h-full" alt=""/>}
            footer={<button>Live Demo</button>}
            links={<button>Github</button>}
            onClose={() => setModal2(false)}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web3}
            alt=""
            onClick={() => setModal3(true)}
          />
          <Modal
            isVisible={isModal3}
            title="Connect and Play 2.0"
            content={<img src={web3} className="w-full h-full" alt=""/>}
            footer={<button>Live Demo</button>}
            links={<button>Github</button>}
            onClose={() => setModal3(false)}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web4}
            alt=""
            onClick={() => setModal4(true)}
          />
           <Modal
            isVisible={isModal4}
            title="ISlandcrypto"
            content={<img src={web4} className="w-full h-full" alt=""/>}
            footer={<button>Live Demo</button>}
            links={<button>Github</button>}
            onClose={() => setModal4(false)}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web5}
            alt=""
            onClick={() => setModal5(true)}
          />
          <Modal
            isVisible={isModal5}
            title="Bodcust"
            content={<img src={web5} className="w-full h-full" alt=""/>}
            footer={<button>Live Demo</button>}
            links={<button>Github</button>}
            onClose={() => setModal5(false)}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={web6}
            alt=""
            onClick={() => setModal6(true)}
          />
          <Modal
            isVisible={isModal6}
            title="HUSL"
            content={<img src={web6} className="w-full h-full" alt=""/>}
            footer={<button>Live Demo</button>}
            links={<button>Github</button>}
            onClose={() => setModal6(false)}
          />
        </div>
      </div>
    </section>
    <section className="py-10 md:mt-20">
      <footer>
        <div className="flex justify-center text-center text-gray-600">
          <a href="/" aria-label="Copyright Text">© Copyright 2023 DevFolio</a>
        </div>
      </footer>
    </section>
  </main>
  );
}


