import Image from "next/image";
import { LuMoonStar } from "react-icons/lu";

import avatar from "@/public/avatar-01.jpg";

function Navbar() {
  return (
    <nav className="fixed w-full min-h-14 px-20 py-2 bg-primary-900/50 flex justify-between items-center shadow-md shadow-primary-950/25 z-20">
      <Image
        src={avatar}
        alt="logo"
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      <div className="flex items-center gap-8">
        <a
          href="#"
          className="transition-all origin-left hover:rotate-[-12deg] hover:translate-y-1 hover:text-secondary-600"
        >
          Home
        </a>
        <a
          href="#"
          className="transition-all origin-right hover:rotate-[12deg] hover:translate-y-1 hover:text-secondary-600"
        >
          About
        </a>
        <a
          href="#"
          className="transition-all origin-left hover:rotate-[-12deg] hover:translate-y-1 hover:text-secondary-600"
        >
          Projects
        </a>
        <a
          href="#"
          className="transition-all origin-right hover:rotate-[12deg] hover:translate-y-1 hover:text-secondary-600"
        >
          Skills
        </a>
        <a
          href="#"
          className="transition-all origin-left hover:rotate-[-12deg] hover:translate-y-1 hover:text-secondary-600"
        >
          Contact
        </a>
        <a href="#" className="transition-all hover:text-secondary-600">
          <LuMoonStar />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
