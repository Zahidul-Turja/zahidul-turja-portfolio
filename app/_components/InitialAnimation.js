"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MdPersonalVideo } from "react-icons/md";
import { FaCode, FaFigma } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function InitialAnimation() {
  const component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Create a timeline
      const tl = gsap.timeline();

      // 2. Fade in name then wait and fade out top
      tl.fromTo(
        ".name",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
      )
        //   wait 0.5 seconds
        .to(".name", { duration: 0.3 })
        // fade out top
        .to(".name", { y: -50, opacity: 0, duration: 0.3, ease: "power2.in" })
        .fromTo(
          ".programmer",
          {
            y: 0,
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.1,
            delay: 0.2,
            ease: "power2.out",
          },
        )
        .to(".programmer", { opacity: 0, duration: 0.1, ease: "power2.in" })
        .fromTo(
          ".developer",
          {
            y: 0,
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out",
          },
        )
        .to(".developer", { opacity: 0, duration: 0.1, ease: "power2.in" })
        .fromTo(
          ".designer",
          {
            y: 0,
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out",
          },
        )
        .to(".designer", { opacity: 0, duration: 0.1, ease: "power2.in" })
        .fromTo(
          ".problem-solver",
          {
            y: 0,
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out",
          },
        )
        .to(".problem-solver", {
          delay: 0.3,
        })
        .to(".problem-solver", {
          opacity: 0,
          duration: 0.1,
          ease: "power2.in",
        })

        .to(
          component.current,
          {
            y: -1000,
            display: "none",
            duration: 1,
            ease: "power2.in",
          },
          "-=0.5",
        );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed left-1/2 top-1/2 z-50 grid h-[80rem] w-[90rem] -translate-x-1/2 -translate-y-1/2 scale-[1.5] place-items-center rounded-b-full bg-gray-950"
      ref={component}
    >
      <h1 className="name absolute flex items-center gap-2 text-3xl font-bold capitalize text-primary-100 opacity-0">
        Zahidul I. Turja
      </h1>
      <h1 className="programmer absolute flex items-center gap-2 text-3xl font-semibold capitalize text-primary-100 opacity-0">
        <FaCode />
        Programmer
      </h1>
      <h1 className="developer absolute flex items-center gap-2 text-3xl font-semibold capitalize text-primary-100 opacity-0">
        <MdPersonalVideo />
        Web Developer
      </h1>
      <h1 className="designer absolute flex items-center gap-2 text-3xl font-semibold capitalize text-primary-100 opacity-0">
        <FaFigma />
        Designer
      </h1>
      <h1 className="problem-solver absolute flex items-center gap-2 text-3xl font-semibold capitalize text-primary-100 opacity-0">
        <SiLeetcode />
        Problem Solver
      </h1>
    </div>
  );
}

export default InitialAnimation;
