"use client";

import { useEffect, useRef } from "react";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { gsap } from "gsap";

import PageTransition from "../_components/PageTransition";
import AboutImage from "../_components/AboutImage";
import Education from "../_components/sections/Education";

function Page() {
  const component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".avatar",
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 1.5,
          ease: "power2.out",
        },
      )
        .fromTo(
          ".about-title",
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".skills",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".about-text",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".resume-btn",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.1,
            ease: "power1.out",
          },
          "-=0.3",
        );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageTransition message="About" />

      <div
        ref={component}
        className="overflow-x-hidden px-5 py-16 md:px-10 md:py-24 lg:mx-40"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-24 lg:gap-y-32">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h1 className="about-title text-4xl font-bold capitalize md:text-5xl">
              About
            </h1>
            <p className="skills bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text font-light text-transparent">
              Programmer | Web-developer | Designer
            </p>
            <p className="about-text prose prose-lg prose-slate prose-invert my-4 max-w-full text-justify leading-7 sm:prose-xl sm:leading-8">
              Hey there 👋! I&apos;m Zahidul Islam Turja, a recent Computer
              Science and Engineering graduate from East West University, Dhaka,
              Bangladesh. Currently, I&apos;m working as a Junior Backend
              Developer specializing in Django, where I&apos;m enhancing my
              skills in building APIs using Django Rest Framework (DRF), task
              automation, scheduling, deployment, and integrating scalable
              backend solutions.
              <br />
              <br />
              With a solid foundation in full-stack web development (MERN stack)
              and practical experience in Django and Docker, I excel at
              transforming innovative ideas into functional, user-centric
              systems. I am particularly passionate about crafting efficient,
              maintainable software solutions while delivering seamless user
              experiences.
              <br />
              I&apos;m always eager to learn, collaborate, and tackle
              challenging projects that drive growth and innovation. Let&apos;s
              connect and explore how we can create impactful solutions
              together!
            </p>
          </div>
          <AboutImage className="avatar h-40 w-40 sm:h-60 sm:w-60 lg:h-full lg:w-full" />
        </div>

        <a
          className="resume-btn group relative mt-4 inline-block translate-y-4 cursor-pointer overflow-hidden rounded-lg px-6 py-2 text-xl font-semibold opacity-0 transition-all hover:text-primary-900 md:mt-0"
          target="_blank"
          href="/zahidul-turja.pdf"
          download={"zahidul-turja.pdf"}
        >
          <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-y-10">
            Resume
            <MdArrowOutward className="ml-1 inline" />
          </span>
          <span className="absolute inset-0 -z-10 flex h-full w-full translate-y-10 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-300 text-center text-primary-950 transition-all duration-300 group-hover:translate-y-0">
            Download
            <MdOutlineFileDownload className="ml-1 inline h-6 w-6 text-primary-950 transition-all duration-300" />
          </span>
        </a>
        <Education />
      </div>
    </>
  );
}

export default Page;
