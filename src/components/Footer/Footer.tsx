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
          <div className='flex'>
            <div className='w-[25%]'>
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
            <div className='w-[25%] ml-24'>
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
            <div className='w-[25%]'>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer