"use client";

import { useEffect, useRef } from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDjango,
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiTensorflow,
  SiSupabase,
  SiMysql,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TechStack() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title-tech-stack",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.in",
          scrollTrigger: {
            trigger: ".title-tech-stack",
            start: "top bottom-=50px",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".content",
        { opacity: 0, y: 80 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.in",
          scrollTrigger: {
            trigger: ".content",
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
    <div
      ref={component}
      className="my-8 flex w-full flex-col items-center justify-between bg-gray-950 px-[3vw] py-10 md:my-10 md:px-[10vw] md:py-16 lg:my-12 lg:py-24"
    >
      <h2 className="title-tech-stack text-3xl font-bold md:text-4xl lg:text-5xl">
        Tech Stack
      </h2>

      <div className="content my-14 flex w-full flex-wrap justify-center gap-8 md:w-[85%] lg:w-[75%]">
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <RiNextjsLine className="text-5xl text-primary-900" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <FaReact className="text-5xl text-[#5ED3F3]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiReactquery className="text-5xl text-[#FF4154]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <TbBrandRedux className="text-5xl text-[#7248B6]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiExpress className="text-5xl text-primary-900" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <IoLogoNodejs className="text-5xl text-[#428A3C]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiMongodb className="text-5xl text-[#428A3C]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <RiTailwindCssFill className="text-5xl text-[#13B9B3]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiChakraui className="text-5xl text-[#4FD1C5]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiSupabase className="text-5xl text-[#2D7555]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiMysql className="text-5xl text-[#00718B]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <FaFigma className="text-5xl text-secondary-800" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiDjango className="text-5xl text-[#092D1F]" />
        </motion.div>
        <motion.div
          className="flex h-20 w-20 cursor-grab items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30"
          drag
          dragConstraints={{
            top: -12,
            right: 12,
            bottom: 12,
            left: -12,
          }}
          dragTransition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
        >
          <SiTensorflow className="text-5xl text-[#F77500]" />
        </motion.div>
      </div>
    </div>
  );
}

export default TechStack;
