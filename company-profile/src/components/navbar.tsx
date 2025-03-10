"use client"
import { useState } from "react";
import { GiCoffeePot } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full max-w-[1100px] mx-auto h-[100px] px-4 md:flex-nowrap border-b-2  border-black font-bold text-sm">

      <div className="flex items-center">
        <GiCoffeePot className="h-[50px] w-[40px]" />
      </div>

    
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

    
      <div
        className={`absolute z-10 top-[100px] left-0 w-full md:mt-[80px] max-md:bg-amber-800 md:static md:flex md:w-auto md:gap-9 h-auto md:h-[100px] p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <Link href={"/"} className="block py-2 md:py-0 hover:border-b-2 text-black max-md:text-white">HOME</Link>
        <Link href={"/aboutus"} className="block py-2 md:py-0 hover:border-b-2 text-black max-md:text-white">ABOUT US</Link>
        <Link href={"/menu"} className="block py-2 md:py-0 hover:border-b-2 text-black max-md:text-white">MENU</Link>
        <Link href={"/kontak"} className="block py-2 md:py-0 hover:border-b-2 text-black max-md:text-white">CONTACT</Link>
      </div>

  
      <div className="hidden md:block">
        <p className="outline p-2 rounded-sm">Explore Now</p>
      </div>
    </div>
  );
}
