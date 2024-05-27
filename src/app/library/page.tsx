import Footer from "@/srccomponents/Footer/Footer";
import Header from "@/srccomponents/Header/Header";
import React from "react";
import puzzle from "@/publicpuzzle.svg";
import Headerimg from "@/publicpages img.jpg";

const Library = () => {
  return (
    <>
      <Header />
      <main className="mt-[120px] pt-[48px]">
        <div className="library-img">
          <div className="md:px-[150px] md:py-[150px]">
            <h3 className="text-[40px] font-bold text-white">LEGAL LIBRARY</h3>
            <span className="flex items-center gap-5">
              <p className="text-[22px] font-bold text-yellow-600">Home</p>
              <span className="text-[22px] font-bold text-yellow-600 ">-</span>
              <p className="text-[22px] font-bold text-white">Legal Library</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center md:gap-20 my-20">
          <div className="w-[700px] h-[700px] bg-white shadow-2xl shadow-indigo-500/40 rounded-md p-[50px]">
            <div className="flex justify-start gap-5">
              <img
                src={puzzle}
                className="w-[50px] h-[50px]"
                alt="puzzle icon"
              />
              <ul>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  Адвокатура тугрисида конун..doc
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  {" "}
                  адвокат_каволатларива_иж_химояси..doc
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  тергов хибсхона коида..doc
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[700px] h-[700px] bg-white shadow-2xl shadow-indigo-500/40 rounded-md p-[50px]">
            <div className="flex justify-start gap-5">
              <img
                src={puzzle}
                className="w-[50px] h-[50px]"
                alt="puzzle icon"
              />
              <ul>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="LexUz_1438525..doc">LexUz_1438525..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href=" LexUz_1438529..doc"> LexUz_1438529..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="LexUz_1449617..doc">LexUz_1449617..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="LexUz_1452652..doc">LexUz_1452652..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="LexUz_1452654(1)..doc">LexUz_1452654(1)..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="LexUz_1592419..doc"> LexUz_1592419..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="LexUz_1592421..doc">LexUz_1592421..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="ПЛЕНУМ ВАЛЮТА УЗБЕКЧА..doc">
                    ПЛЕНУМ ВАЛЮТА УЗБЕКЧА..doc
                  </a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href=" ПЛЕНУМ ВАЛЮТА..doc"> ПЛЕНУМ ВАЛЮТА..doc</a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href=" Пленум о приз дог недейст..doc">
                    Пленум о приз дог недейст..doc
                  </a>
                </li>
                <li className="text-blue-400 text-[17px] cursor-pointer">
                  <a href="Пленум о суд актах..doc">Пленум о суд актах..doc</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Library;
