"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PageTransition({ message }) {
  const component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Container slides in from the left
      tl.fromTo(
        component.current,
        {
          x: -100,
          opacity: 1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      )

        // Step 2: Message slides in from the left after the container animation
        .fromTo(
          ".message-animation",
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25", // starts a bit before container finishes
        )

        // Step 3: Message stays for 0.2 seconds
        .to({}, { duration: 0.2 })

        // Step 4: Message slides out to the right
        .to(".message-animation", {
          x: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        })

        // Step 5: Container slides out to the right after the message disappears
        .to(
          component.current,
          {
            x: 100,
            opacity: 0,
            display: "none",
            duration: 1,
            ease: "power2.in",
          },
          "-=0.5", // starts when message starts disappearing
        );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-10 grid h-screen w-screen scale-150 place-items-center rounded-full bg-primary-950"
      ref={component}
    >
      <span className="message-animation max-w-[50%] -translate-y-6 text-center text-4xl font-bold uppercase tracking-wider text-primary-50 opacity-0">
        {message}
      </span>
    </div>
  );
}

export default PageTransition;

// useEffect(() => {
//     let ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.fromTo(
//         ".name-animation",
//         {
//           x: -100,
//           opacity: 0,
//           rotate: -10,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           rotate: 0,
//           ease: "elastic.out(1, 0.3)",
//           duration: 1,
//           transformOrigin: "left top",
//           stagger: {
//             each: 0.2,
//             from: "random",
//           },
//         },
//       );

//       tl.fromTo(
//         ".name-animation",
//         {
//           x: 0,
//           opacity: 1,
//           rotate: 0,
//         },
//         {
//           x: 100,
//           opacity: 0,
//           rotate: 10,
//           ease: "elastic.out(1, 0.3)",
//           duration: 1,
//           transformOrigin: "right bottom",
//           stagger: {
//             each: 0.2,
//             from: "random",
//           },
//         },
//       );

//       tl.fromTo(
//         component.current,
//         {
//           translateX: 0,
//         },
//         {
//           translateX: "150%",
//           display: "hidden",
//           duration: 1,
//           ease: "power3.out",
//         },
//       );
//     }, component);
//     return () => ctx.revert();
//   }, []);

// const renderLetters = (name, key) => {
//     if (!name) return;
//     return name.split("").map((letter, index) => (
//       <span
//         key={index}
//         className={`name-animation name-animation-${key} inline-block opacity-0`}
//       >
//         {letter}
//       </span>
//     ));
//   };
