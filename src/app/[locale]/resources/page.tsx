import React from "react";
import Header from "@/srccomponents/Header/Header";
import Footer from "@/srccomponents/Footer/Footer";
import Link from "next/link";

const Resources = () => {
  return (
    <>
      <Header />
      <main className="mt-[120px] md:pt-[68px]">
        <div className="service-fon">
          <div className="container">
            <div className=" pt-[15%]">
              <h2 className="text-white text-5xl font-500">Document Samples</h2>
              <h3 className="text-white text-2xl mt-8">
                Home{" "}
                <span className="text-gray-400 text-2xl mt-9">
                  - Document Samples
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F5F7] w-[100%] p-12">
          <div className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 ">
            <div className="bg-white p-10 rounded-[5px]  flex ">
              <div className="w-30 mr-12 flex items-center ">
                <img
                  className="w-[150px] h-[150px]"
                  src="/document-icon.svg"
                  alt="Error"
                />
              </div>
              <div className="w-70">
                <p className="text-custom-dark text-xl font-bold mb-2">
                  Arizalar
                </p>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Бошқа фуқаролик низолари бўйича аризалар
                </Link>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Оилавий низолар бўйича аризалар
                </Link>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Уй-жой низолари бўйича аризалар
                </Link>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[5px]  flex ">
              <div className="w-30 mr-12 flex items-center ">
                <img
                  className="w-[150px] h-[150px]"
                  src="/document-icon.svg"
                  alt="Error"
                />
              </div>
              <div className="w-70">
                <p className="text-custom-dark text-xl font-bold mb-2">
                  Shartnomalar
                </p>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Бошқа фуқаролик низолари бўйича аризалар
                </Link>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Оилавий низолар бўйича аризалар
                </Link>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Уй-жой низолари бўйича аризалар
                </Link>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[5px]  flex ">
              <div className="w-30 mr-12 flex items-center ">
                <img
                  className="w-[150px] h-[150px]"
                  src="/document-icon.svg"
                  alt="Error"
                />
              </div>
              <div className="w-70">
                <p className="text-custom-dark text-xl font-bold mb-2">
                  Talabnoma
                </p>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Бошқа фуқаролик низолари бўйича аризалар
                </Link>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Оилавий низолар бўйича аризалар
                </Link>
                <Link href="#" className="text-blue-500 blok">
                  {" "}
                  Уй-жой низолари бўйича аризалар
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Resources;
