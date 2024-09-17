"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Education() {
  const component = useRef(null);
  const itemRef = useRef([]);

  useEffect(() => {
    // Animate list items with a stagger effect
    let ctx = gsap.context(() => {
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
      <h1 className="my-10 text-5xl font-bold capitalize">Education</h1>

      <ul className="grid border-b border-b-slate-100">
        <li
          className="flex flex-col items-center justify-between border-t border-t-slate-100 py-8 text-slate-200 opacity-0 md:flex-row"
          ref={(el) => (itemRef.current[0] = el)}
        >
          <div>
            <h2 className="text-3xl font-bold">B.Sc. in Computer Science</h2>
            <h3 className="text-sm">East West University, Dhaka, Bangladesh</h3>
          </div>
          <p className="text-normal italic text-yellow-400">
            January, 2020 - September, 2024
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-between border-t border-t-slate-100 py-8 text-slate-200 md:flex-row"
          ref={(el) => (itemRef.current[1] = el)}
        >
          <div>
            <h2 className="text-3xl font-bold">HSC in Science</h2>
            <h3 className="text-sm">
              Brahman Baria Govt. Collage, Brahman Baria, Bangladesh
            </h3>
          </div>
          <p className="text-normal italic text-yellow-400">
            September, 2017 - June, 2019
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
