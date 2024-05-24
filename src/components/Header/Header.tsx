import React from "react";
import logo from "@/publiclogo.png";
import uz from "@/publiclang_uz.png";
import eng from "@/publiclang_eng.png";
import chin from "@/publiclang_chin.png";
import rus from "@/publiclang_rus.png";
import trk from "@/publiclang_trk.png";
import Image from "next/image";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="container">
        <div className="flex gap-x-10 py-[15px]">
          <div>
            <Image width={90} height={90} src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col flex-grow gap-y-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-[#009034] gap-x-[10px] font-bold">
                <PiTelegramLogo />
                <AiOutlineFacebook />
                <FaInstagram />
                <a href="tel:+998901319544">+998 90 131 95 44</a>
              </div>
              <p className="text-xs text-[#c49a6c] font-bold">Mon-Fri from 09:00 to 18:00 Tashkent</p>
              <div className="flex gap-x-2">
                <Image width={25} height={25} src={uz} alt="Langulage uz" />
                <Image width={25} height={25} src={eng} alt="Langulage uz" />
                <Image width={25} height={25} src={chin} alt="Langulage uz" />
                <Image width={25} height={25} src={rus} alt="Langulage uz" />
                <Image width={25} height={25} src={trk} alt="Langulage uz" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link href={"/contact"} className="bg-[#008251] rounded-md border-2 border-[#008251] px-[20px] py-[6px] text-xs text-white">Get consultration</Link>
              <Link href={"/"} className="text-base font-bold">Home</Link>
              <Link href={"/about"} className="text-base font-bold">About us</Link>
              <Link href={"/contact"} className="text-base font-bold">Contact</Link>
              <Link href={"/blog"} className="text-base font-bold">Our publications</Link>
              <div className="w-[250px]"></div>
            </div>
          </div>
        </div>
        <div className="bg-clip text-white text-lg uppercase">
          <ul className="flex justify-evenly">
            <li className="py-5 px-[10px]">
              <Link href={"/news"}>News</Link>
            </li>
            <li className="py-5 px-[10px]">
              <Link href={"/library"}>Legal library</Link>
            </li>
            <li className="py-5 px-[10px]">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="py-5 px-[10px]">
              <Link href={"/resources"}>Document samples</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
