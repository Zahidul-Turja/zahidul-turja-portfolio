"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaSquarePersonConfined } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import {
  RiContactsBook3Line,
  RiInstagramFill,
  RiListSettingsFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { gsap } from "gsap";

import Circles from "./Circles";

function CardNavigation() {
  const component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        component.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 1.9, ease: "power2.out" },
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="min-h-[66vh] min-w-[22vw] rounded-md bg-primary-50 opacity-0"
      ref={component}
    >
      <Circles left="bg-[#74CE95]" middle="bg-[#F0CB51]" right="bg-[#DA6F6F]" />

      <div className="flex flex-col gap-1 px-6 text-primary-900">
        <h3 className="text-lg font-semibold">Socials</h3>
        <a
          href="https://github.com/Zahidul-Turja"
          target="_blank"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <FaGithub className="inline-block scale-[1.30]" /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/zahidul-turja/"
          target="_blank"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <FaLinkedin className="inline-block scale-125" /> LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <SiGmail className="inline-block scale-110" /> Gmail
        </a>
        <a
          href="https://www.instagram.com/zahidul_turja/"
          target="_blank"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <RiInstagramFill className="inline-block scale-[1.35]" /> Instagram
        </a>

        <div className="my-2 h-[0.5px] w-full bg-slate-700"></div>

        <h3 className="text-lg font-semibold">Sections</h3>
        <a
          href="#"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <FaSquarePersonConfined className="inline-block scale-125" /> About
        </a>
        <a
          href="#"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <RiListSettingsFill className="inline-block scale-125" /> Tech Stack
        </a>
        <a
          href="#"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <GrProjects className="inline-block scale-110" /> Projects
        </a>
        <a
          href="#"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <IoSettingsSharp className="inline-block scale-125" /> Services
        </a>
        <a
          href="#"
          className="flex w-full items-center gap-3 rounded py-1 pl-6 transition-all hover:bg-slate-300"
        >
          <RiContactsBook3Line className="inline-block scale-125" /> Contact
        </a>

        <div className="my-2 h-[0.5px] w-full bg-slate-700"></div>
      </div>
    </div>
  );
}

export default CardNavigation;
