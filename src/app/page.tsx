import Footer from "@/srccomponents/Footer/Footer";
import Header from "@/srccomponents/Header/Header";
import Slider from "@/srccomponents/Ui/Slider";
import Counter from "@/srccomponents/Ui/Counter";
import MainForm from "@/srccomponents/Ui/MainForm";
import cardImage from "@/publicarticleCard_image.jpeg";
import aboutImage from "@/publicabout_image.jpg";
import Link from "next/link";
import CardSlider from "@/srccomponents/Ui/CardSlider";
import { IoHomeOutline } from "react-icons/io5";
import { TbMailOpened } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosClock } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[120px] pt-[68px]">
        <section id="hero">
          <div className="container">
            <Slider />
          </div>
        </section>
        <section className="box_shadow mt-10">
          <div className="container">
            <div className="flex items-center justify-around">
              <Counter countEnd={150} symbol={"+"} text={"Trusted Clients"} />
              <Counter countEnd={95} symbol={"%"} text={"Trusted Clients"} />
              <Counter countEnd={20} symbol={"+"} text={"Trusted Clients"} />
            </div>
          </div>
        </section>
        <section className="pt-[50px]">
          <div className="container">
            <div className="mb-[60px]">
              <span className="text-[#cdb091] text-[30px] font-semibold text-center block">
                Articles
              </span>
              <h2 className="articles_title">Latest Article Update</h2>
            </div>
            <div className="grid grid-cols-3 gap-10">
              <div className="rounded-xl overflow-hidden">
                <div>
                  <img src={cardImage.src} alt="Card image" />
                </div>
                <div className="py-[30px]">
                  <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
                    <li>2023-12-05</li>
                    <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
                  </ul>
                  <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
                    <Link href="">
                      Onix and Tracker cars withdrawn from sale
                    </Link>
                  </h2>
                  <Link href="" className="read_more-btn">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <div>
                  <img src={cardImage.src} alt="Card image" />
                </div>
                <div className="py-[30px]">
                  <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
                    <li>2023-12-05</li>
                    <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
                  </ul>
                  <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
                    <Link href="">
                      Onix and Tracker cars withdrawn from sale
                    </Link>
                  </h2>
                  <Link href="" className="read_more-btn">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <div>
                  <img src={cardImage.src} alt="Card image" />
                </div>
                <div className="py-[30px]">
                  <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
                    <li>2023-12-05</li>
                    <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
                  </ul>
                  <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
                    <Link href="">
                      Onix and Tracker cars withdrawn from sale
                    </Link>
                  </h2>
                  <Link href="" className="read_more-btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[50px]">
          <div className="container">
            <div className="mb-[60px]">
              <span className="text-[#cdb091] text-[30px] font-semibold text-center block">
                About us
              </span>
              <h2 className="articles_title">Why choose us</h2>
            </div>
            <div className="flex items-center justify-between gap-x-[200px]">
              <div>
                <h3 className="text-[#1e2e3e] text-[30px] font-semibold mb-[30px]">
                  We are the best legal firm that can provide you with
                  comprehensive assistance!
                </h3>
                <article className="about_text">
                  <p>
                    Law Firm 'LOYAL' provides professional legal services to
                    businesses (private entrepreneurs, companies and firms,
                    LLCs, PJSCs, organizations of all forms of ownership)
                    throughout the Republic of Uzbekistan. By contacting the
                    LOYAL law office, you can count on qualified prompt
                    assistance in protecting your rights and complete
                    confidentiality of the information provided.
                  </p>
                  <br /> <br />
                  <p>
                    You can always be sure that your case is being handled by a
                    professional who specializes in providing legal services to
                    businesses, has sufficient knowledge and experience in this
                    area, is equally well versed in economics and law, and knows
                    all the intricacies of organizing and running a business.
                  </p>
                </article>
              </div>
              <div className="p-5 border border-[#cee0f2]">
                <img
                  src={aboutImage.src}
                  alt="About image"
                  className="min-w-[450px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[50px]">
          <div className="container">
              <div className="flex items-end justify-between mb-10">
                <div className="news_title">
                  <span className="text-[30px] text-[#cdb091] font-semibold">
                    News
                  </span>
                  <h2 className="text-[40px] text-[#172533] font-semibold">
                    Latest News Update
                  </h2>
                </div>
                <div>
                  <Link href="">
                  < button className="border-2 border-[#7e7e7e] text-[#172533] text-xl font-semibold px-[25px] py-[10px] hover:bg-[#cdb091] hover:border-[#cdb091] duration-200">See All News</button>
                  </Link>
                </div>
              </div>
              <div>
                <CardSlider/>
              </div>
          </div>
        </section>
        <section className="py-[50px]">
          <div className="container">
            <div className="flex justify-center">
              <div className="bg-[#1e2e3e] p-[60px] w-full md:max-w-[475px]">
                <div className="mb-[38px]">
                  <h3 className="contact_info-text font-semibold">Contact Info</h3>
                  <p className="text-white text-lg leading-[28px] mb-[15px]">You can find more information with these contact information</p>
                </div>
                <div className="flex items-center mb-[30px]">
                  <div className="text-[50px] text-white mr-5">
                  <IoHomeOutline />
                  </div>
                  <div>
                    <h4 className="text-3xl text-white mb-[10px] font-semibold">Office address</h4>
                    <p className="text-base text-white leading-[23px]">7th Street, Zanjirbogʻ neighborhood, Yakkasaroy district, Tashkent city.</p>
                  </div>
                </div>
                <div className="flex items-center mb-[30px]">
                  <div className="text-[50px] text-white mr-5">
                  <TbMailOpened />
                  </div>
                  <div>
                    <h4 className="text-3xl text-white mb-[10px] font-semibold">Email</h4>
                    <a href="mailto:loyalxat@gmail.com" className="text-base text-white leading-[23px]">loyalxat@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center mb-[30px]">
                  <div className="text-[50px] text-white mr-5">
                  <TfiHeadphoneAlt />
                  </div>
                  <div>
                    <h4 className="text-3xl text-white mb-[10px] font-semibold">Phone number</h4>
                    <a href="tel:+998901319544" className="text-base text-white leading-[23px]">+998901319544</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-[50px] text-white mr-5">
                  <IoIosClock />
                  </div>
                  <div>
                    <h4 className="text-3xl text-white mb-[10px] font-semibold">Office Hours</h4>
                    <p className="text-base text-white leading-[23px]">Mon-Fri from 09:00 to 18:00 Tashkent</p>
                  </div>
                </div>
              </div>
              <MainForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
