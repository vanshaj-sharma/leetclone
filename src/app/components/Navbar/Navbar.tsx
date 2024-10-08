import Link from "next/link";
import React from "react";
import logo from "../../../public/logo-full.png";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/app/store/atoms/authModalAtoms";
import Image from "next/image";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href={"/"} className="flex items-center justify-center h-20 ">
        {/* <img src="/logo-full.png" alt="LeetClone"  /> Image optimization below */}

        <Image src="/logo-full.png" alt="LeetClone" height={200} width={200} />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium 
        hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
        transition duration-300 ease-in-out
        "
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
