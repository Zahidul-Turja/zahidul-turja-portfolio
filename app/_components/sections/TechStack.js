"use client";

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

function TechStack() {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-between px-[10vw]">
      <h2 className="my-10 text-4xl font-bold">Tech Stack</h2>
      {/* <h1 className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-slate-950 text-3xl font-semibold text-primary-50">
        Tech <br />
        Stack
      </h1> */}
      {/* <div className="w-[80%] grid grid-cols-8 items-center justify-between"> */}
      <div className="flex w-[75%] flex-wrap justify-center gap-8">
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
