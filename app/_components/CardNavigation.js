import { FaGithub, FaLinkedin, FaSquarePersonConfined } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import {
  RiContactsBook3Line,
  RiInstagramFill,
  RiListSettingsFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";

import Circles from "./Circles";

function CardNavigation() {
  return (
    <div className="min-w-[22vw] min-h-[66vh] bg-primary-50 rounded-md">
      <Circles left="bg-[#74CE95]" middle="bg-[#F0CB51]" right="bg-[#DA6F6F]" />

      <div className="text-primary-900 px-6 flex flex-col gap-1">
        <h3 className="font-semibold text-lg">Socials</h3>
        <a
          href="https://github.com/Zahidul-Turja"
          target="_blank"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <FaGithub className="inline-block scale-[1.30]" /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/zahidul-islam-turja-4384262b3/"
          target="_blank"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <FaLinkedin className="inline-block scale-125" /> LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <SiGmail className="inline-block scale-110" /> Gmail
        </a>
        <a
          href="https://www.instagram.com/zahidul_turja/"
          target="_blank"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <RiInstagramFill className="inline-block scale-[1.35]" /> Instagram
        </a>

        <div className="h-[0.5px] w-full bg-slate-700 my-2"></div>

        <h3 className="font-semibold text-lg">Sections</h3>
        <a
          href="#"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <FaSquarePersonConfined className="inline-block scale-125" /> About
        </a>
        <a
          href="#"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <RiListSettingsFill className="inline-block scale-125" /> Skills
        </a>
        <a
          href="#"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <GrProjects className="inline-block scale-110" /> Projects
        </a>
        <a
          href="#"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <IoSettingsSharp className="inline-block scale-125" /> Services
        </a>
        <a
          href="#"
          className="pl-6 py-1 flex items-center gap-3 w-full rounded transition-all hover:bg-slate-300"
        >
          <RiContactsBook3Line className="inline-block scale-125" /> Contact
        </a>

        <div className="h-[0.5px] w-full bg-slate-700 my-2"></div>
      </div>
    </div>
  );
}

export default CardNavigation;
