"use client";

import React, { useState } from "react";
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
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { Drawer, Dropdown, Space  } from "antd";
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <ul className="sub-menu">
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
                <li>
                  <Link href="/services">corporate disputes</Link>
                </li>
              </ul>
    ),
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow">
      <div className="container">
        <Drawer
          title=""
          onClose={onClose}
          open={open}
          style={{ background: "#008251", color: "#ffffff" }}
        >
          <ul>
            <li className="px-[35px] py-3 sm:hidden">
              <Link href="/" className="text-base font-semibold">
                Home
              </Link>
            </li>
            <li className="px-[35px] py-3 sm:hidden">
              <Link href="/about" className="text-base font-semibold">
                About us
              </Link>
            </li>
            <li className="px-[35px] py-3">
              <Link href="/services" className="text-base font-semibold">
                Services
              </Link>
            </li>
            <li className="px-[35px] py-3 sm:hidden">
              <Link href="/blog" className="text-base font-semibold">
                Our publications
              </Link>
            </li>
            <li className="px-[35px] py-3">
              <Link href="/news" className="text-base font-semibold">
                News
              </Link>
            </li>
            <li className="px-[35px] py-3">
              <Link href="/faq" className="text-base font-semibold">
                FAQ
              </Link>
            </li>
            <li className="px-[35px] py-3">
              <Link href="/library" className="text-base font-semibold">
                Legal library
              </Link>
            </li>
            <li className="px-[35px] py-3">
              <Link href="/resources" className="text-base font-semibold">
                Document samples
              </Link>
            </li>
            <li className="px-[35px] py-3 sm:hidden">
              <Link href="/contact" className="text-base font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </Drawer>
        <div className="flex  items-center md:items-start gap-x-5 gmd:ap-x-10 py-[15px] ">
          <div>
            <Link href="/">
              <Image width={90} height={90} src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-col flex-grow gap-y-[10px] ">
            <div className="flex items-center justify-end md:justify-between">
              <div className="hidden md:flex items-center text-[#009034] gap-x-[10px] font-bold">
                <PiTelegramLogo />
                <AiOutlineFacebook />
                <FaInstagram />
                <a href="tel:+998901319544">+998 90 131 95 44</a>
              </div>
              <p className="text-xs text-[#c49a6c] font-bold hidden lg:flex">
                Mon-Fri from 09:00 to 18:00 Tashkent
              </p>
              <div className="flex gap-x-2">
                <Image width={25} height={25} src={uz} alt="Langulage uz" />
                <Image width={25} height={25} src={eng} alt="Langulage uz" />
                <Image width={25} height={25} src={chin} alt="Langulage uz" />
                <Image width={25} height={25} src={rus} alt="Langulage uz" />
                <Image width={25} height={25} src={trk} alt="Langulage uz" />
              </div>
            </div>
            <div className="hidden sm:flex items-center justify-between">
              <Link
                href={"/contact"}
                className="bg-[#008251] rounded-md border-2 border-[#008251] px-[20px] py-[6px] text-xs text-white hidden md:flex"
              >
                Get consultration
              </Link>
              <Link href={"/"} className="text-base font-bold">
                Home
              </Link>
              <Link href={"/about"} className="text-base font-bold">
                About us
              </Link>
              <Link href={"/contact"} className="text-base font-bold">
                Contact
              </Link>
              <Link href={"/blog"} className="text-base font-bold">
                Our publications
              </Link>
              <div className="w-[250px] hidden lg:flex"></div>
            </div>
          </div>
          <div
            className="text-2xl flex md:hidden items-center"
            onClick={showDrawer}
          >
            <HiOutlineMenu className="cursor-pointer" />
          </div>
        </div>
        <div className="bg-clip text-white text-lg uppercase hidden md:block">
          <ul className="flex justify-evenly">
            <li className="py-5 px-[10px]">
              <Link href={"/news"}>News</Link>
            </li>
            <li className="py-5 px-[10px]">
              <Link href={"/library"}>Legal library</Link>
            </li>
            <li className="py-5 px-[10px] relative">
              <Dropdown menu={{ items }} placement="bottom" overlayStyle={{borderBottom:"5px", borderColor:"#008251"}}>
                <Link href={"/services"}>Services</Link>
              </Dropdown>
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
