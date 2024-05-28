import React from "react";

const MainForm = () => {
  return (
    <div className="bg-[#ad9071] p-5 md:p-[50px] w-full lg:max-w-[475px]">
      <div className="flex flex-col items-center mb-[50px]">
        <span className="text-xl text-white">Contact us</span>
        <h3 className="text-[30px] md:text-[40px] text-white font-semibold">Consultation</h3>
      </div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="p-[15px] mb-5 w-full bg-transparent border border-[#dddddd] text-white placeholder:text-white text-xl focus:outline-none"
          />
          <div className="formErrorText">The name field is required.</div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="p-[15px] mb-5 w-full bg-transparent border border-[#dddddd] text-white placeholder:text-white text-xl focus:outline-none"
          />
          <div className="formErrorText">The email field is required.</div>
        </div>
        <div>
          <input
            type="tel"
            placeholder="Your Phone"
            className="p-[15px] mb-5 w-full bg-transparent border border-[#dddddd] text-white placeholder:text-white text-xl focus:outline-none"
          />
          <div className="formErrorText">The phone field is required.</div>
        </div>
        <div>
          <textarea
            placeholder="Describe Your Case in Detail"
            className="h-[130px] p-[15px] mb-5 w-full bg-transparent border border-[#dddddd] text-white placeholder:text-white text-xl focus:outline-none"
          ></textarea>
          <div className="formErrorText">The message field is required.</div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <button className="form_button">Submit Now</button>
        </div>
      </form>
    </div>
  );
};

export default MainForm;
