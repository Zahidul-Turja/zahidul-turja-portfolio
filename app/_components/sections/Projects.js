"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "../ProjectCard";
import { ProjectItems } from "@/public/data/data";
import { MdReadMore } from "react-icons/md";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title-projects",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.in",
          scrollTrigger: {
            trigger: ".title-projects",
            start: "top bottom-=50px",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".content-projects",
        { opacity: 0, y: 60 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.in",
          scrollTrigger: {
            trigger: ".content-projects",
            start: "top bottom-=50px",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        },
      );

      return () => ctx.revert(); // Cleanup
    }, component);
  }, []);

  return (
    <div ref={component} className="mb-4 w-full py-14 text-center md:mb-24">
      <h2 className="title-tech-stack text-3xl font-bold md:text-4xl lg:text-5xl">
        Projects
      </h2>

      <div className="content-projects">
        {ProjectItems.map((item, index) => (
          <ProjectCard key={index} project={item} index={index} />
        ))}
      </div>

      <Link
        className="resume-btn group relative inline-block translate-y-4 cursor-pointer overflow-hidden rounded-lg px-6 py-2 text-xl font-semibold transition-all hover:text-primary-900"
        href="/projects"
      >
        <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-y-10">
          All Projects
        </span>
        <span className="absolute inset-0 -z-10 flex h-full w-full translate-y-10 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-300 text-center transition-all duration-300 group-hover:translate-y-0">
          Projects
          <MdReadMore className="ml-1 inline h-6 w-6 text-primary-950" />
        </span>
      </Link>
    </div>
  );
}

export default Projects;
