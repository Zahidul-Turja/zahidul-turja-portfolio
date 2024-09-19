"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import avatar from "@/public/avatar-03.jpg";
import ButtonSecondary from "./ButtonSecondary";

function Navbar() {
  const curPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-30 flex min-h-14 w-full items-center justify-between bg-primary-900/50 px-6 py-2 shadow-md shadow-primary-950/25 md:pt-6 lg:px-20">
      {/* Logo on the left */}
      <Link href="/">
        <Image
          src={avatar}
          alt="logo"
          className="h-6 w-6 cursor-pointer rounded-full border-2 border-primary-300 md:h-8 md:w-8 lg:h-10 lg:w-10"
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
          className="fixed right-0 top-0 z-40 h-screen w-3/4 bg-white px-8 py-14 text-primary-900 shadow-lg"
        >
          <ul className="space-y-6 text-lg font-semibold">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={toggleMenu}>
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
