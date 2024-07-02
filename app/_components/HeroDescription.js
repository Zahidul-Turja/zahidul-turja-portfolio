"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { IoIosSend } from "react-icons/io";

function HeroDescription() {
  return (
    <div className="h-full max-w-[40vw]">
      <div className="welcome-box py-2 px-4 border border-secondary-800 opacity-90">
        <SparklesIcon className="text-secondary-600 mr-3 h-5 w-5" />
        <h3>Hey there 👋, I&apos;m</h3>
      </div>
      <h1 className="text-6xl font-semibold mt-5">
        Zahidul Islam{" "}
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> */}
        Turja
        {/* </span> */}
      </h1>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-light mt-1 mb-5">
        Programmer | Web-developer | Designer
      </p>
      <p className="max-w-[90%] text-xl text-justify mb-10">
        🚀 A fullstack Software Engineer with experience in Websites and Mobile
        Application Development. Available for projects and collaborations 🤝.
      </p>

      <div className="cursor-pointer transition-all hover:opacity-90 hover:translate-y-[-3px] active:translate-y-0 inline-block">
        <a className="px-6 py-3.5 text-center text-lg font-semibold bg-secondary-800 rounded-lg cursor-pointer">
          Send a message <IoIosSend className="inline text-xl ml-2" />
        </a>
      </div>
    </div>
  );
}

export default HeroDescription;
