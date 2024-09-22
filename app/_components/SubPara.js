"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SubPara({ title, para, image, itemsList }) {
  const component = useRef(null);
  const itemsRef = useRef([]);

  // useEffect(() => {
  //   // Animate list items with a stagger effect
  //   let ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       ".title",
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.5,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: ".title",
  //           start: "top bottom-=100px",
  //           end: "bottom center",
  //           toggleActions: "play none none none",
  //         },
  //       },
  //     );
  //   }, component);
  //   return () => ctx.revert(); // Cleanup
  // }, []);

  return (
    <div className="my-8" ref={component}>
      <h2 className="title text-lg font-bold capitalize opacity-0 md:text-3xl">
        {title}
      </h2>
      {image && (
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          layout="responsive"
          width={20}
          height={20}
          className="mx-auto my-6 rounded-lg object-cover object-top md:max-h-[40rem] md:max-w-full"
        />
      )}
      <p className="para prose prose-invert my-2 !max-w-none text-justify text-lg font-medium">
        {para}
      </p>

      {itemsList && (
        <ul className="prose prose-invert my-2 ml-3 !max-w-none list-outside list-decimal text-justify font-medium md:ml-10 md:text-lg">
          {itemsList.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="my-3"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubPara;
