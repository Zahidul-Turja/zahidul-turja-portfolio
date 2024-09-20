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

      <div ref={component} className="overflow-x-hidden px-10 py-24 lg:mx-72">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-24 lg:gap-y-32">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h1 className="about-title text-4xl font-bold capitalize sm:text-5xl">
              About
            </h1>
            <p className="skills bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text font-light text-transparent">
              Programmer | Web-developer | Designer
            </p>
            <p className="about-text prose prose-lg prose-slate prose-invert my-4 max-w-full text-justify leading-7 sm:prose-xl sm:leading-8">
              Hey 👋! This is Zahidul Islam Turja, a recent graduate of the
              Computer Science and Engineering program at East West University,
              Dhaka, Bangladesh. I specialize in full-stack web development with
              MERN and have knowledge about Django as well. I enjoy the creative
              process of turning ideas into functional and user-friendly
              interfaces. Whether it&apos;s crafting elegant front-end designs
              or architecting robust back-end systems.
              <br />
              <br />
              Currently seeking opportunities to apply and further develop my
              skills in a dynamic and collaborative environment. Let&apos;s
              connect and explore how we can work together to bring exciting
              projects to life!
            </p>
          </div>
          <AboutImage className="avatar h-40 w-40 sm:h-60 sm:w-60 lg:h-full lg:w-full" />
        </div>

        <a
          className="resume-btn group relative inline-block translate-y-4 cursor-pointer overflow-hidden rounded-lg px-6 py-2 text-xl font-semibold opacity-0 transition-all hover:text-primary-900"
          target="_blank"
          href="/zahidul-turja.pdf"
          download={"zahidul-turja.pdf"}
        >
          <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-y-10">
            Resume
            <MdArrowOutward className="ml-1 inline" />
          </span>
          <span className="absolute inset-0 -z-10 flex h-full w-full translate-y-10 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-300 text-center transition-all duration-300 group-hover:translate-y-0">
            Download
            <MdOutlineFileDownload className="ml-1 inline h-6 w-6 text-primary-950" />
          </span>
        </a>
        <Education />
      </div>
    </>
  );
}

export default Page;
