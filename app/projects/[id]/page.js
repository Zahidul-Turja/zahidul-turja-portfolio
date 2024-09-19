"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Projects } from "@/public/data/data";
import VideoPlayer from "@/app/_components/VideoPlayer";
import PageTransition from "@/app/_components/PageTransition";
import SubPara from "@/app/_components/SubPara";
import ProjectLinks from "@/app/_components/ProjectLinks";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  const { id } = useParams();
  const content = useRef();

  const project = Projects[id];
  const { youtube, github, live } = project.links;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          delay: project.video ? 1.8 : 0,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: ".description",
            start: "top bottom-=50px",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        },
      );

      const tl = gsap.timeline();

      tl.fromTo(
        ".title",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 1.5,
          ease: "power2.out",
        },
      )
        .fromTo(
          ".date",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .fromTo(
          ".tags",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .fromTo(
          ".image",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2",
        );
    }, content);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageTransition message={project.title} />
      <div className="mx-72 px-10 py-24" ref={content}>
        {project.video && <VideoPlayer video={project.video} />}
        <h1 className="title text-4xl font-bold">
          {project.title} - {project.subtitle}
        </h1>
        <div className="tags my-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 inline-block rounded-full bg-gradient-to-tr from-secondary-950 via-secondary-800 to-secondary-600 px-4 py-1 text-sm font-semibold capitalize text-primary-100"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.image && !project.video && (
          <div className="image overflow-hidden md:max-h-[40rem] md:max-w-full">
            <Image
              src={project.image}
              alt={project.title}
              placeholder="blur"
              blurDataURL={project.image}
              layout="responsive" // Makes the image responsive
              width={20}
              height={20}
              className="image mx-auto my-6 max-h-full w-full rounded-lg object-cover object-top"
            />
          </div>
        )}

        <p className="description prose prose-invert my-6 !max-w-none text-justify text-lg font-medium">
          {project.description}
        </p>

        <SubPara title={"Features"} itemsList={project.features} />

        {/* <h2 className="text-3xl font-bold capitalize">Links</h2> */}
        <ProjectLinks
          youtube={youtube}
          github={github}
          live={live}
          styles={"scale-125 justify-end font-semibold"}
        />
      </div>
    </>
  );
}

export default Page;
