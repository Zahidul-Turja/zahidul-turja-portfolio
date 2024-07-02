import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import Circles from "./Circles";

function ProjectDetails() {
  return (
    <div className="w-[50%] min-h-[52vh] bg-primary-900 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 mt-5 mb-1 ml-6">
          <RiNextjsFill />
          <RiSupabaseFill className="text-[#2D7555]" />
          <RiTailwindCssFill className="text-[#38BDF8]" />
          <FcGoogle />

          <a href="#">All</a>
        </div>
        <Circles
          left="bg-[#74CE95]"
          middle="bg-[#F0CB51]"
          right="bg-[#DA6F6F]"
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
