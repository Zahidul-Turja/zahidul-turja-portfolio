"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import avatar from "@/public/avatar-02.jpeg";
import ButtonSecondary from "./ButtonSecondary";

function Navbar() {
  const curPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-30 flex w-full items-center justify-between overflow-hidden bg-primary-900/50 px-6 py-4 shadow-md shadow-primary-950/25 md:py-4 lg:px-20">
      {/* Logo on the left */}
      <Link href="/">
        <Image
          src={avatar}
          alt="logo"
          placeholder="blur"
          className="h-10 w-10 cursor-pointer rounded-full border-2 border-primary-300 lg:h-12 lg:w-12"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 md:flex">
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
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="z-50 text-2xl text-white">
          {isOpen ? (
            <FaTimes className="my-2 text-primary-900" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed right-0 top-0 z-40 h-screen w-full bg-white px-8 py-14 text-primary-900 shadow-lg"
        >
          <ul className="mt-6 flex flex-col space-y-6 text-center text-lg font-bold">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className="block w-full border-b-2 border-slate-400 py-6 text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="block w-full border-b-2 border-slate-400 py-6 text-2xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={toggleMenu}
                className="block w-full border-b-2 border-slate-400 py-6 text-2xl"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={toggleMenu}
                className="block w-full border-b-2 border-slate-400 py-6 text-2xl"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
