import Footer from "@/srccomponents/Footer/Footer";
import Header from "@/srccomponents/Header/Header";
import React from "react";
import img1 from "public/img1.jpeg";
import { FaAngleDoubleRight } from "react-icons/fa";

const News = () => {
  return (
    <>
      <Header />
      <main className="mt-[120px] pt-[48px]">
        <div>
          {/* News header */}
          <div className="library-img">
            <div className="md:px-[150px] md:py-[150px]">
              <h3 className="text-[40px] font-bold text-white">NEWS</h3>
              <span className="flex items-center gap-5">
                <p className="text-[22px] font-bold text-yellow-600">Home</p>
                <span className="text-[22px] font-bold text-yellow-600 ">
                  -
                </span>
                <p className="text-[22px] font-bold text-white">News</p>
              </span>
            </div>
          </div>
          {/* news main */}
          <div className="py-10">
            <div className="container gap-10 mx-auto my-[100px] flex flex-col-reverse md:flex-row">
              {/* main conainer 1 */}
              <div className="w-1/3  bg-slate-200  rounded-md">
                {/* service */}
                <div className=" p-5 w-[100%] md:p-8 lg:p-10">
                  <h4 className=" text-[20px] lg:text-[24px]">Service</h4>
                  <div className="flex bg-white drop-shadow-md rounded-md hover:bg-orange-400 cursor-pointer hover:text-white justify-evenly items-center p-5">
                    <FaAngleDoubleRight className="w-[30px] h-[25px] hover:font-white" />
                    <p className="text-[17px] md:text-[20px] font-medium ">
                      corparate disputes
                    </p>
                  </div>
                </div>
                {/* Related Posts */}
                <div></div>
              </div>
              {/* main container 2 */}
              <div className="w-2/3">
                <div className=" w-[100%] flex flex-col gap-4">
                  <img className=" rounded-md" src={img1.src} alt="jpeg" />
                  <span className="flex items-center gap-3">
                    <p className="text-[19px] md:text-[24px] font-medium text-yellow-800">
                      BY SARVARJON AMRIYEV
                    </p>
                    <span className=" w-2 h-2 bg-yellow-800 rounded-2xl"></span>
                    <p className="text-[17px] text-blue-600">2023-12-05</p>
                  </span>
                  <h4 className="text-[20px] lg:text-[27px] text-gray-800">
                    Citizens allowed to cross Kyrgyz-Uzbek border with an ID
                    card
                  </h4>
                  <button
                    type="button"
                    className="text-blue-700 w-[120px] hover:text-white border border-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2 dark:hover:text-white dark:hover:bg-blue-500 "
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
