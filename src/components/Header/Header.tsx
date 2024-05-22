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
    <header>
      <div className="container">
        <div className="flex">
          <div>
            <Image width={90} height={90} src={logo} alt="Logo" />
          </div>
          <div>
            <div>
              <div className="bg-green-400">
                <PiTelegramLogo />
                <AiOutlineFacebook />
                <FaInstagram />
                <a href="tel:+998901319544">+998 90 131 95 44</a>
              </div>
              <p>Mon-Fri from 09:00 to 18:00 Tashkent</p>
              <div>
                <Image width={25} height={25} src={uz} alt="Langulage uz" />
                <Image width={25} height={25} src={eng} alt="Langulage uz" />
                <Image width={25} height={25} src={chin} alt="Langulage uz" />
                <Image width={25} height={25} src={rus} alt="Langulage uz" />
                <Image width={25} height={25} src={trk} alt="Langulage uz" />
              </div>
            </div>
            <div>
              <Link href={"/contact"}>Get consultration</Link>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About us</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/blog"}>Our publications</Link>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link href={"/news"}>News</Link>
            </li>
            <li>
              <Link href={"/library"}>News</Link>
            </li>
            <li>
              <Link href={"/services"}>News</Link>
            </li>
            <li>
              <Link href={"/resources"}>News</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
