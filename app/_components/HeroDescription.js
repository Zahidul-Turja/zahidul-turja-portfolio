"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";

function HeroDescription() {
  return (
    <div className="h-full max-w-[80vw] md:max-w-[50vw]">
      <div className="welcome-box -z-10 border border-secondary-800 px-4 py-2 opacity-90">
        <SparklesIcon className="mr-3 h-5 w-5 text-secondary-600" />
        <h3>Hey there 👋, I&apos;m</h3>
      </div>
      <h1 className="mt-5 text-4xl font-bold tracking-wide lg:text-6xl">
        Zahidul Islam Turja
      </h1>
      <p className="mb-5 mt-1 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text font-light text-transparent">
        Programmer | Web-developer | Designer
      </p>
      <p className="max-w-[90%] text-justify text-base md:mb-10 lg:text-xl">
        🚀 A fullstack Software Engineer with experience in Websites and Mobile
        Application Development. Available for projects and collaborations 🤝.
      </p>

      <Link
        className="resume-btn group relative z-0 inline-block translate-y-4 cursor-pointer overflow-hidden rounded-lg bg-secondary-800 px-6 py-2 font-semibold transition-all hover:text-primary-100 md:text-xl lg:-z-10"
        target="_blank"
        href="/zahidul-turja.pdf"
        download="zahidul-turja.pdf"
      >
        <span className="inset-0 -z-10 flex h-full w-full items-center justify-center rounded-lg text-center transition-transform duration-300 group-hover:-translate-y-10">
          Resume
          <MdArrowOutward className="ml-1 inline" />
        </span>
        <span className="absolute inset-0 -z-10 flex h-full w-full translate-y-12 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-300 text-center text-primary-950 transition-all duration-300 group-hover:translate-y-0">
          Download
          <MdOutlineFileDownload className="ml-1 inline h-6 w-6 text-primary-950" />
        </span>
      </Link>
    </div>
  );
}

export default HeroDescription;
