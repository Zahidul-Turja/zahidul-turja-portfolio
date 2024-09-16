"use client";

import Image from "next/image";
import { LuMoonStar } from "react-icons/lu";

import avatar from "@/public/avatar-01.jpg";
import ButtonSecondary from "./ButtonSecondary";
import { usePathname } from "next/navigation";

function Navbar() {
  const curPath = usePathname();

  return (
    <nav className="fixed z-10 flex min-h-14 w-full items-center justify-between bg-primary-900/50 px-20 py-2 shadow-md shadow-primary-950/25">
      <Image
        src={avatar}
        alt="logo"
        className="h-10 w-10 cursor-pointer rounded-full"
      />
      <div className="flex items-center gap-8">
        <ButtonSecondary isActive={curPath === "/"} href="/" type="link">
          Home
        </ButtonSecondary>
        <ButtonSecondary
          isActive={curPath === "/about"}
          href="/about"
          type="link"
        >
          About
        </ButtonSecondary>
        <ButtonSecondary
          isActive={
            curPath === "/projects" || curPath.split("/")[1] === "projects"
          }
          href="/projects"
          type="link"
        >
          Projects
        </ButtonSecondary>
        <ButtonSecondary
          isActive={curPath === "/blogs" || curPath.split("/")[1] === "blogs"}
          href="/blogs"
          type="link"
        >
          Blogs
        </ButtonSecondary>

        <button href="#" className="transition-all hover:text-secondary-600">
          <LuMoonStar />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
