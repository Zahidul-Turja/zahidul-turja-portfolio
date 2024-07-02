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
    <div className="w-full h-[30rem] my-12 bg-slate-100 px-[10vw] flex items-center justify-between gap-16">
      <h1 className="h-[10rem] w-[10rem]  text-primary-50 text-3xl bg-slate-950 rounded-full justify-center items-center flex font-semibold">
        Tech <br />
        Stack
      </h1>
      {/* <div className="w-[80%] grid grid-cols-8 items-center justify-between"> */}
      <div className="w-[75%] flex flex-wrap gap-8 justify-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <RiNextjsLine className="text-primary-900 text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <FaReact className="text-[#5ED3F3] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiReactquery className="text-[#FF4154] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <TbBrandRedux className="text-[#7248B6] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiExpress className="text-primary-900 text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <IoLogoNodejs className="text-[#428A3C] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiMongodb className="text-[#428A3C] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <RiTailwindCssFill className="text-[#13B9B3] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiChakraui className="text-[#4FD1C5] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiSupabase className="text-[#2D7555] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiMysql className="text-[#00718B] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <FaFigma className="text-secondary-800 text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiDjango className="text-[#092D1F] text-5xl" />
        </div>
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shadow-md shadow-primary-900/30">
          <SiTensorflow className="text-[#F77500] text-5xl" />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
