import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";

function ProjectLinks({ youtube, github, live, styles }) {
  return (
    <div
      className={`my-2 flex items-center gap-4 text-sm font-light ${styles}`}
    >
      {youtube && (
        <Link
          href={youtube}
          className="group relative overflow-hidden rounded p-1"
        >
          <span className="absolute inset-0 z-0 h-full translate-y-12 rounded bg-[#FF0000] transition-transform duration-300 ease-in-out group-hover:translate-y-[1.6rem]" />

          <span className="relative flex items-center justify-center gap-2">
            <FaYoutube className="text- inline text-xl text-[#FF0000]" /> Live
            Demo
          </span>
        </Link>
      )}
      {github && (
        <Link
          href={github}
          className="group relative overflow-hidden rounded p-1"
        >
          <span className="absolute inset-0 z-0 h-full translate-y-12 rounded bg-primary-50 transition-transform duration-300 ease-in-out group-hover:translate-y-[1.6rem]" />

          <span className="relative flex items-center justify-center gap-2">
            <IoLogoGithub className="inline text-xl" /> Source Code
          </span>
        </Link>
      )}

      {live && (
        <Link
          href={live}
          className="group relative overflow-hidden rounded p-1"
        >
          <span className="absolute inset-0 z-0 h-full translate-y-12 rounded bg-[#74CE95] transition-transform duration-300 ease-in-out group-hover:translate-y-[1.6rem]" />

          <span className="relative flex items-center justify-center gap-2">
            <TbWorldCode className="inline text-xl text-[#74CE95]" /> Website
          </span>
        </Link>
      )}
    </div>
  );
}

export default ProjectLinks;
