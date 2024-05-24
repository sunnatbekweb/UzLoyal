import React from "react";
import Header from "@/srccomponents/Header/Header";
import Footer from "@/srccomponents/Footer/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <main className="mt-[120px] py-[68px]">
        <div className="service-fon">
          <div className="container">
            <div className=" pt-[15%]">
              <h2 className="text-white text-5xl font-500">Services</h2>
              <h3 className="text-white text-2xl mt-8">
                Home{" "}
                <span className="text-gray-400 text-2xl mt-9">- services</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10 text-center flex flex-col items-center">
          <h2 className="text-custom-beige text-3xl">How Can We Assist You?</h2>
          <h2 className="text-custom-dark text-5xl font-bold">
            Legal Practice Areas
          </h2>
          <hr className="border-custom-beige w-20 text-center mt-4" />
        </div>
        <div className="container mx-auto max-w-screen-lg grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 cursor-pointer pb-20">
          <div className="bg-white p-4 rounded-[20px] shadow-[0_0_10px_rgb(214,196,196)] pb-4 h-[500px]">
            <img
              className="w-[100%] h-[300px]"
              src="/loyal-img.jpg"
              alt="Xatolik"
            />
            <h3 className="text-custom-dark text-3xl font-bold hover:text-custom-beige mt-4">
              corporate disputes
            </h3>
          </div>
          <div className="bg-white p-4 rounded-[20px] shadow-[0_0_10px_rgb(214,196,196)] pb-4 h-[500px]">
            <img
              className="w-[100%] h-[300px]"
              src="/loyal-img.jpg"
              alt="Xatolik"
            />
            <h3 className="text-custom-dark text-3xl font-bold hover:text-custom-beige mt-4">
              corporate disputes
            </h3>
          </div>
          <div className="bg-white p-4 rounded-[20px] shadow-[0_0_10px_rgb(214,196,196)] pb-4 h-[500px]">
            <img
              className="w-[100%] h-[300px]"
              src="/loyal-img.jpg"
              alt="Xatolik"
            />
            <h3 className="text-custom-dark text-3xl font-bold hover:text-custom-beige mt-4">
              corporate disputes
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
