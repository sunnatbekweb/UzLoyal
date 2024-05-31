import Footer from "@/srccomponents/Footer/Footer";
import Header from "@/srccomponents/Header/Header";
import React from "react";

const Blog = () => {
  return (
    <>
      <Header />
      <main className="mt-[120px] md:pt-[68px]">
        <div className="library-img">
          <div className="container md:py-[150px]">
            <h3 className="text-[40px] font-bold text-white">NEWS</h3>
            <span className="flex items-center gap-5">
              <p className="text-[22px] font-bold text-yellow-600">Home</p>
              <span className="text-[22px] font-bold text-yellow-600 ">-</span>
              <p className="text-[22px] font-bold text-white">News</p>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
