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

function TechStack() {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-between px-[10vw]">
      <h2 className="my-10 text-4xl font-bold">Teck Stack</h2>
      {/* <h1 className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-slate-950 text-3xl font-semibold text-primary-50">
        Tech <br />
        Stack
      </h1> */}
      {/* <div className="w-[80%] grid grid-cols-8 items-center justify-between"> */}
      <div className="flex w-[75%] flex-wrap justify-center gap-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <RiNextjsLine className="text-5xl text-primary-900" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <FaReact className="text-5xl text-[#5ED3F3]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiReactquery className="text-5xl text-[#FF4154]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <TbBrandRedux className="text-5xl text-[#7248B6]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiExpress className="text-5xl text-primary-900" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <IoLogoNodejs className="text-5xl text-[#428A3C]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiMongodb className="text-5xl text-[#428A3C]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <RiTailwindCssFill className="text-5xl text-[#13B9B3]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiChakraui className="text-5xl text-[#4FD1C5]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiSupabase className="text-5xl text-[#2D7555]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiMysql className="text-5xl text-[#00718B]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <FaFigma className="text-5xl text-secondary-800" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiDjango className="text-5xl text-[#092D1F]" />
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-primary-900/30">
          <SiTensorflow className="text-5xl text-[#F77500]" />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
