"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { IoIosSend } from "react-icons/io";

function HeroDescription() {
  return (
    <div className="h-full max-w-[40vw]">
      <div className="welcome-box -z-10 border border-secondary-800 px-4 py-2 opacity-90">
        <SparklesIcon className="mr-3 h-5 w-5 text-secondary-600" />
        <h3>Hey there 👋, I&apos;m</h3>
      </div>
      <h1 className="mt-5 text-6xl font-bold tracking-wide">
        Zahidul Islam{" "}
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> */}
        Turja
        {/* </span> */}
      </h1>
      <p className="mb-5 mt-1 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text font-light text-transparent">
        Programmer | Web-developer | Designer
      </p>
      <p className="mb-10 max-w-[90%] text-justify text-xl">
        🚀 A fullstack Software Engineer with experience in Websites and Mobile
        Application Development. Available for projects and collaborations 🤝.
      </p>

      <div className="inline-block cursor-pointer transition-all hover:translate-y-[-3px] hover:opacity-90 active:translate-y-0">
        <a className="cursor-pointer rounded-lg bg-secondary-800 px-6 py-3.5 text-center text-lg font-semibold">
          Send a message <IoIosSend className="ml-2 inline text-xl" />
        </a>
      </div>
    </div>
  );
}

export default HeroDescription;
