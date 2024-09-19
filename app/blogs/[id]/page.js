"use client";

import { useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MdCircle } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubPara from "@/app/_components/SubPara";
import PageTransition from "@/app/_components/PageTransition";
import { BlogDetails as blogs } from "@/public/data/data";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  const { id } = useParams();
  const content = useRef();
  const blog = blogs[id];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".description",
            start: "top bottom-=10px",
            end: "bottom center",
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
      <PageTransition message={blog.title} />

      <div className="mx-72 px-10 py-24" ref={content}>
        <h1 className="title text-4xl font-bold opacity-0">{blog.title}</h1>
        <span className="date block text-sm font-normal text-white">
          {blog.date}
        </span>
        <div className="tags my-1 flex gap-3 text-secondary-600">
          {blog.tags.map((tag, i) => (
            <span className="text-xl font-bold" key={tag}>
              {tag}
              {i < blog.tags.length - 1 && (
                <MdCircle className="ml-3 inline h-3 w-3" />
              )}
            </span>
          ))}
        </div>

        {blog.image && (
          <div className="image max-h-[40rem] max-w-full">
            <Image
              src={blog.image}
              alt={blog.title}
              placeholder="blur"
              blurDataURL={blog.image}
              layout="responsive" // Makes the image responsive
              width={20}
              height={20}
              className="mx-auto my-6 rounded-lg object-cover object-top md:max-h-[40rem] md:max-w-full"
            />
          </div>
        )}
        <p className="description my-6 text-justify text-lg font-medium opacity-0">
          {blog.description}
        </p>

        {/* Subs */}
        {blog.subs &&
          blog.subs.map((sub) => (
            <SubPara
              key={sub.title}
              title={sub.title}
              para={sub.para}
              image={sub.image}
            />
          ))}
      </div>
    </>
  );
}

export default Page;
