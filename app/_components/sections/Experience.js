"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const component = useRef(null);
  const itemRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: ".title",
            start: "top bottom-=50px",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        },
      );

      itemRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=50px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });

      return () => ctx.revert(); // Cleanup
    }, component);
  }, []);

  return (
    <div className="my-12" ref={component}>
      <h1 className="title my-10 text-4xl font-bold capitalize opacity-0 md:text-5xl">
        Experience
      </h1>

      <ul className="grid border-b border-b-slate-100">
        <li
          className="flex flex-col items-center justify-between border-t border-t-slate-100 py-8 text-slate-200 opacity-0 md:flex-row"
          ref={(el) => (itemRef.current[0] = el)}
        >
          <div>
            <h2 className="text-3xl font-bold">
              Jr. Backend Developer (Django/DRF)
            </h2>
            <h3 className="text-sm">
              EWN Bangladesh Limited, Gulshan, Dhaka, Bangladesh
            </h3>
          </div>
          <p className="text-normal italic text-yellow-400">
            March, 2025 - Present
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-between border-t border-t-slate-100 py-8 text-slate-200 md:flex-row"
          ref={(el) => (itemRef.current[1] = el)}
        >
          <div>
            <h2 className="text-3xl font-bold">
              Intern Backend Developer (Django/DRF)
            </h2>
            <h3 className="text-sm">
              EWN Bangladesh Limited, Gulshan, Dhaka, Bangladesh
            </h3>
          </div>
          <p className="text-normal italic text-yellow-400">
            November, 2024 - February, 2025
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
