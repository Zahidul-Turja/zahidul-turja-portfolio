"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import avatar from "@/public/avatar-01.jpeg";

function AboutImage() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
        },
      );

      window.onmousemove = (e) => {
        if (!component.current) return; // no component, no animation!
        const componentRect = component.current.getBoundingClientRect();
        const componentCenterX = componentRect.left + componentRect.width / 2;

        // Ensure the mouse is inside the card vertically as well
        if (
          e.clientX < componentRect.left ||
          e.clientX > componentRect.right ||
          e.clientY < componentRect.top ||
          e.clientY > componentRect.bottom
        )
          return;

        let componentPercent = {
          x: (e.clientX - componentCenterX) / componentRect.width / 2,
        };

        let distFromCenterX = 1 - Math.abs(componentPercent.x);

        gsap
          .timeline({
            defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
          })
          .to(
            ".avatar",
            {
              rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
              duration: 0.5,
            },
            0,
          )
          .to(
            ".highlight",
            {
              opacity: distFromCenterX - 0.7,
              x: -10 + 20 * componentPercent.x,
              duration: 0.5,
            },
            0,
          );
      };
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <div
      className="avatar relative -z-10 col-span-2 my-8 h-[80%] w-full -rotate-3 overflow-hidden rounded-lg"
      ref={component}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image
        src={avatar}
        alt="avatar"
        placeholder="blur"
        blurDataURL="/avatar-01-small.jpg"
        layout="responsive"
        className="avatar-image absolute inset-0 h-full w-full rounded-lg border-[3px] object-cover object-top"
      />
      <div className="highlight absolute inset-0 hidden h-[90%] w-full scale-110 overflow-hidden rounded-lg bg-gradient-to-tr from-transparent via-primary-500 to-transparent opacity-0 md:block"></div>
    </div>
  );
}

export default AboutImage;
