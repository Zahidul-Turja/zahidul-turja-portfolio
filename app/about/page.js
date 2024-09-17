"use client";

import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";

import PageTransition from "../_components/PageTransition";
import AboutImage from "../_components/AboutImage";
import Education from "../_components/sections/Education";
import { useEffect, useRef } from "react";

function Page() {
  const component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".resume-btn",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 1,
          ease: "power2.out",
        },
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageTransition message="About" />

      <div className="mx-72 px-10 py-24" ref={component}>
        <div className="grid grid-cols-5 gap-10 gap-x-24 gap-y-32">
          <div className="col-span-3">
            <h1 className="text-5xl font-bold capitalize">About</h1>
            <p className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text font-light text-transparent">
              Programmer | Web-developer | Designer
            </p>
            <p className="prose prose-xl prose-slate prose-invert my-4 max-w-full text-justify leading-8">
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
          <AboutImage />
        </div>
        <a className="resume-btn group relative inline-block cursor-pointer overflow-hidden rounded-lg px-4 py-2 text-xl font-semibold opacity-0 transition-all hover:text-primary-900">
          Resume
          <MdArrowOutward className="ml-1 inline" />
          <span className="absolute inset-0 -z-10 h-full w-full translate-y-10 bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-300 transition-all duration-300 group-hover:translate-y-0" />
        </a>
        <Education />
      </div>
    </>
  );
}

export default Page;
