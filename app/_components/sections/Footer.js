import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer
      id="contact"
      className="container mx-auto flex w-full flex-col items-center justify-between gap-8 bg-gray-950 px-[10vw] py-16 sm:flex-row md:gap-6 md:py-24"
    >
      <h2 className="text-3xl font-extrabold">Zahidul Turja</h2>

      <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
        <Link
          href={"/about"}
          className="text-xl font-semibold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
        >
          About
        </Link>
        <span
          className="hidden text-4xl font-extralight leading-[0] text-slate-400 sm:inline"
          aria-hidden={true}
        >
          |
        </span>
        <Link
          href={"/projects"}
          className="text-xl font-semibold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
        >
          Projects
        </Link>
        <span
          className="hidden text-4xl font-extralight leading-[0] text-slate-400 sm:inline"
          aria-hidden={true}
        >
          |
        </span>
        <Link
          href={"/blogs"}
          className="text-xl font-semibold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
        >
          Blogs
        </Link>
      </div>
      <div className="socials inline-flex justify-center sm:justify-end">
        <Link
          href={"https://www.linkedin.com/in/zahidul-turja"}
          target="_blank"
          className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-110 hover:text-[#0A66C2]"
        >
          <FaLinkedin />
        </Link>
        <Link
          href={"https://github.com/Zahidul-Turja"}
          target="_blank"
          className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-110"
        >
          <FaGithub />
        </Link>
        <Link
          href={"https://leetcode.com/u/Zahidul_Turja/"}
          target="_blank"
          className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-110 hover:text-[#1A8CD8]"
        >
          <SiLeetcode />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
