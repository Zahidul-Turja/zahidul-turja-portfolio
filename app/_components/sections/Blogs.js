"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContentList from "../ContentList";
import { BlogItems as items } from "@/public/data/data";
import Link from "next/link";
import { MdReadMore } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

function Blogs() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title-blogs",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.in",
          scrollTrigger: {
            trigger: ".title-blogs",
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
    <section
      className="mx-auto mb-16 mt-8 max-w-[90%] text-center md:mb-32 md:mt-16"
      ref={component}
    >
      <h2 className="title-tech-stack text-3xl font-bold md:text-4xl lg:text-5xl">
        Blogs
      </h2>
      <ContentList items={items} pageType={"blogs"} />
      <Link
        className="resume-btn group relative inline-block translate-y-4 cursor-pointer overflow-hidden rounded-lg px-6 py-2 text-xl font-semibold transition-all hover:text-primary-900"
        href="/blogs"
      >
        <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-y-10">
          All Blogs
        </span>
        <span className="absolute inset-0 -z-10 flex h-full w-full translate-y-10 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-300 text-center transition-all duration-300 group-hover:translate-y-0">
          Blogs
          <MdReadMore className="ml-1 inline h-6 w-6 text-primary-950" />
        </span>
      </Link>
    </section>
  );
}

export default Blogs;
