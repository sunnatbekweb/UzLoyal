import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#008251]'>
      <div className='py-20'>
        <div className="container">
          <div className='grid gird-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
            <div className='w-fit'>
              <h2 className='text-white text-4xl mb-[30px]'>
                <Link href={"/"}>
                  LOYAL <br />
                  advokatlik byurosi
                </Link>
              </h2>
              <p className='text-lg text-white mb-4'>
                Biz Sizga mukammal yordam bera oladigan eng yaxshi yuridik firmamiz!
              </p>
              <div className='flex items-center pt-[10px] gap-x-4'>
                <div className="w-9 h-9 rounded-full bg-[#004d40] text-white flex items-center justify-center">
                  <FaFacebookF />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#004d40] text-white flex items-center justify-center">
                  <PiTelegramLogo />
                </div>
                <div className='w-9 h-9 rounded-full bg-[#004d40] text-white flex items-center justify-center'>
                  <FaInstagram />
                </div>
              </div>
            </div>
            <div className='w-fit md:ml-24'>
              <h2 className='text-white text-[25px] mb-[30px]'>
                Quick links
              </h2>
              <ul className="list-disc text-white ps-5">
                <li className='py-[6px]'>
                  <Link href={"/"} className="text-base">Home</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/about"} className="text-base">About us</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/services"} className="text-base">Services</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/blog"} className="text-base">Our publications</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/news"}>News</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/resources"}>Document sapmles</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/faq"}>FAQ</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='w-fit'>
              <h2 className='text-white text-[25px] mb-[30px]'>
                Services
              </h2>
              <ul className="list-disc text-base text-white ps-5">
                <li className='py-[6px]'>
                  <Link href={"/contact"} className="text-base">Family law</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/contact"} className="text-base">Personal Injury</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/contact"} className="text-base">Criminal law</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/contact"} className="text-base">Education law</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/contact"}>Business law</Link>
                </li>
                <li className='py-[6px]'>
                  <Link href={"/contact"}>Real Estate law</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5'>
        <div className="container">
          <div className="border-t border-[#30465c] flex flex-col md:flex-row gap-y-5 items-center justify-between py-5 text-[15px] text-[#d9d9d9]">
            <p className='text-center'>Copyright © 2023 Loyal.uz. All rights reserved.</p>
            <div className="flex flex-col gap-y-2 sm:flex-row items-center gap-x-5">
              <Link href="/privacy">
                Privace & Policy
              </Link>
              <Link href="/terms">
                Terms
              </Link>
              <Link href="/about">
                About us
              </Link>
              <Link href="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer