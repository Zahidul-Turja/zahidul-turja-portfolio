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
import { SiGmail, SiLeetcode } from "react-icons/si";
import { gsap } from "gsap";

import Circles from "./Circles";
import toast from "react-hot-toast";
import Link from "next/link";

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

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Optional: Adjust the duration of the scroll
      const scrollDuration = 700; // 1 second

      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const position = Math.min(progress / scrollDuration, 1);

        // Calculate smooth step position and scroll
        window.scrollTo(
          0,
          position * (target.getBoundingClientRect().top + window.pageYOffset),
        );

        if (progress < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  return (
    <div
      className="hidden min-h-[66vh] rounded-md bg-primary-50 opacity-0 md:block md:min-h-[40vh] md:min-w-[35vw] lg:min-h-[66vh] lg:min-w-[22vw]"
      ref={component}
    >
      <Circles left="bg-[#74CE95]" middle="bg-[#F0CB51]" right="bg-[#DA6F6F]" />

      <div className="flex flex-col gap-1 px-6 text-primary-900">
        <h3 className="md:text-lg md:font-bold lg:font-semibold">Socials</h3>
        <Link
          href="https://github.com/Zahidul-Turja"
          target="_blank"
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <FaGithub className="inline-block md:scale-100 lg:scale-[1.30]" />{" "}
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/zahidul-turja/"
          target="_blank"
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <FaLinkedin className="inline-block scale-125" /> LinkedIn
        </Link>
        <Link
          href="/"
          // target="_blank"
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
          onClick={() => {
            navigator.clipboard.writeText("zahidulturja@gmail.com");
            toast.success("Email copied to clipboard");
          }}
        >
          <SiGmail className="inline-block scale-110" /> Gmail
        </Link>
        <Link
          href="https://leetcode.com/u/Zahidul_Turja/"
          target="_blank"
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <SiLeetcode className="inline-block scale-[1.35]" /> LeetCode
        </Link>

        <div className="my-2 h-[0.5px] w-full bg-slate-700"></div>

        <h3 className="md:text-base md:font-bold lg:text-lg lg:font-semibold">
          Sections
        </h3>

        <a
          href="#tech-stack"
          onClick={(e) => smoothScroll(e, "tech-stack")}
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <RiListSettingsFill className="inline-block scale-125" /> Tech Stack
        </a>
        <a
          href="#projects"
          onClick={(e) => smoothScroll(e, "projects")}
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <GrProjects className="inline-block scale-110" /> Projects
        </a>
        <a
          href="#blogs"
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <FaSquarePersonConfined className="inline-block scale-125" /> Blogs
        </a>
        <a
          href="#services"
          onClick={(e) => smoothScroll(e, "services")}
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <IoSettingsSharp className="inline-block scale-125" /> Services
        </a>
        <a
          href="#contact"
          onClick={(e) => smoothScroll(e, "contact")}
          className="flex w-full items-center rounded py-1 pl-6 transition-all hover:bg-slate-300 md:gap-2 md:text-base md:font-semibold lg:gap-3 lg:text-base"
        >
          <RiContactsBook3Line className="inline-block scale-125" /> Contact
        </a>

        <div className="my-2 h-[0.5px] w-full bg-slate-700"></div>
      </div>
    </div>
  );
}

export default CardNavigation;
