import Image from "next/image";
import { LuMoonStar } from "react-icons/lu";

import avatar from "@/public/avatar-01.jpg";
import ButtonSecondary from "./ButtonSecondary";

function Navbar() {
  return (
    <nav className="fixed z-20 flex min-h-14 w-full items-center justify-between bg-primary-900/50 px-20 py-2 shadow-md shadow-primary-950/25">
      <Image
        src={avatar}
        alt="logo"
        className="h-10 w-10 cursor-pointer rounded-full"
      />
      <div className="flex items-center gap-8">
        <ButtonSecondary isActive={true}>Home</ButtonSecondary>
        <ButtonSecondary isActive={false}>About</ButtonSecondary>
        <ButtonSecondary isActive={false}>Projects</ButtonSecondary>
        <ButtonSecondary isActive={false}>Skills</ButtonSecondary>
        <ButtonSecondary isActive={false}>Contact</ButtonSecondary>

        <a href="#" className="transition-all hover:text-secondary-600">
          <LuMoonStar />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
