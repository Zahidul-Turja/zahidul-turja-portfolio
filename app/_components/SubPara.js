"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SubPara({ title, para, image, itemsList }) {
  const component = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Animate list items with a stagger effect
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".title",
            start: "top bottom+=50px",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
        },
      );
    }, component);
    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="my-8" ref={component}>
      <h2 className="title text-3xl font-bold capitalize opacity-0">{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL={image}
          layout="responsive"
          width={20}
          height={20}
          className="image mx-auto my-6 rounded-lg object-cover object-top md:max-h-[40rem] md:max-w-full"
        />
      )}
      <p className="para prose prose-invert my-2 !max-w-none text-justify text-lg font-medium">
        {para}
      </p>

      {itemsList && (
        <ul className="prose prose-invert my-2 ml-10 !max-w-none text-justify text-lg font-medium">
          {itemsList.map((item, index) => (
            <li key={index} ref={(el) => (itemsRef.current[index] = el)}>
              {index + 1}. &emsp;{item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubPara;
