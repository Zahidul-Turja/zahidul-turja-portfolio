import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight, FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";

import Circles from "./Circles";
import ButtonSecondary from "./ButtonSecondary";
import ProjectLinks from "./ProjectLinks";

function ProjectDetails() {
  return (
    <div className="shadow-white-glow min-h-[52vh] w-[50%] rounded-lg bg-primary-900">
      <div className="flex items-center justify-between">
        <div className="mb-1 ml-6 mt-5 flex items-center gap-4">
          <RiNextjsFill />
          <RiSupabaseFill className="text-[#2D7555]" />
          <RiTailwindCssFill className="text-[#38BDF8]" />
          <FcGoogle />

          <ButtonSecondary styles={"text-sm font-medium"}>
            more &gt;&gt;
          </ButtonSecondary>
        </div>
        <Circles
          left="bg-[#74CE95]"
          middle="bg-[#F0CB51]"
          right="bg-[#DA6F6F]"
        />
      </div>

      <div className="mx-auto my-2 h-[80%] w-[92%] rounded-md border border-primary-50 bg-primary-950">
        <div className="title py-2 text-center text-xl font-semibold">
          The Wild Oasis
        </div>
        <div className="mx-auto px-4 text-justify">
          <p className="text-sm text-primary-50/80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eaque
            modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi
            quis a omnis tenetur sunt enim, ut itaque! A, voluptatem? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            <br />
            At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius
            eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <ButtonSecondary
            styles={"text-sm border-b-4 pt-2 border-secondary-800 mt-2"}
          >
            read more <FaArrowRight className="inline" />
          </ButtonSecondary>

          <ProjectLinks>
            <a href="#" className="flex items-center justify-center gap-2">
              <FaYoutube className="text- inline text-xl text-[#FF0000]" /> Live
              Demo
            </a>
            <a href="#" className="flex items-center justify-center gap-2">
              <IoLogoGithub className="inline text-xl" /> Source Code
            </a>
            <a href="#" className="flex items-center justify-center gap-2">
              <TbWorldCode className="inline text-xl text-[#74CE95]" /> Website
            </a>
          </ProjectLinks>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
