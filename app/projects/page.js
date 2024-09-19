"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContentList from "../_components/ContentList";
import PageTransition from "../_components/PageTransition";

import { ProjectItems as items } from "@/public/data/data";

function Page() {
  const content = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".title",
        {
          opacity: 0,
          x: -30,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 1.5,
          ease: "power2.out",
        },
      ).fromTo(
        ".list",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4",
      );
    }, content);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={content}>
      <PageTransition message="Projects" />

      <div className="mx-10 py-24">
        <h2 className="title text-center text-5xl font-bold">Projects</h2>
        <div className="list opacity-0">
          <ContentList items={items} pageType={"projects"} yCal={430} />
        </div>
      </div>
    </div>
  );
}

export default Page;
