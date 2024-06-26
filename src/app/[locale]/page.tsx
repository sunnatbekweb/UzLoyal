import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Slider from "@/src/components/Ui/Slider";
import Counter from "@/src/components/Ui/Counter";
import MainForm from "@/src/components/Ui/MainForm";
import aboutImage from "@/public/about_image.jpg";
import Link from "next/link";
import CardSlider from "@/src/components/Ui/CardSlider";
import { IoHomeOutline } from "react-icons/io5";
import { TbMailOpened } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosClock } from "react-icons/io";
import initTranslations from "../i18n";
import TranslationsProvider from "@/srccomponents/TranslationsProvider";

interface HomeProps {
  params: {
    locale: string;
  };
}

const i18namespaces = ["header"]

export default async function Home({ params: { locale } }: HomeProps) {
  const {t,resources} = await initTranslations(locale, i18namespaces);
  return (
    <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18namespaces}>
      <Header />
      <main className="mt-[120px] md:pt-[68px]">
        <section id="hero">
          <div className="container">
            <Slider />
          </div>
        </section>
        <section className="box_shadow mt-10">
          <div className="container">
            <div className="flex items-center justify-around">
              <Counter countEnd={150} symbol="+" text={"Trusted Clients"} />
              <Counter countEnd={95} symbol="%" text={"Trusted Clients"} />
              <Counter countEnd={20} symbol="+" text={"Trusted Clients"} />
            </div>
          </div>
        </section>
        <section className="pt-[50px]">
          <div className="container">
            <div className="mb-[60px]">
              <span className="text-[#cdb091] text-[30px] font-semibold text-center block">
                {t("header:about")}
              </span>
              <h2 className="articles_title">Latest Article Update</h2>
            </div>
            <div className="">
              <CardSlider />
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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-x-[120px] xl:gap-x-[200px]">
              <div className="mb-10 lg:mb-0">
                <h3 className="text-[#1e2e3e] text-[25px] md:text-[30px] font-semibold mb-[30px]">
                  We are the best legal firm that can provide you with comprehensive assistance!
                </h3>
                <article className="about_text">
                  <p>
                    &nbsp;&nbsp;&nbsp; Law Firm LOYAL provides professional legal services to businesses (private entrepreneurs, companies and firms, LLCs, PJSCs, organizations of all forms of ownership) throughout the Republic of Uzbekistan. By contacting the LOYAL law office, you can count on qualified prompt assistance in protecting your rights and complete confidentiality of the information provided.
                  </p>
                  <br />
                  <p>
                    &nbsp;&nbsp;&nbsp; You can always be sure that your case is being handled by a professional who specializes in providing legal services to businesses, has sufficient knowledge and experience in this area, is equally well versed in economics and law, and knows all the intricacies of organizing and running a business.
                  </p>
                </article>
              </div>
              <div className="p-5 border border-[#cee0f2] w-full">
                <img
                  src={aboutImage.src}
                  alt="About image"
                  className="w-full lg:min-w-[345px] lg:h-[440px] xl:min-w-[530px] xl:h-[675px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[50px]">
          <div className="container">
            <div className="flex items-start md:items-end flex-col md:flex-row justify-between mb-10">
              <div className="news_title mb-10 md:mb-0">
                <span className="text-[30px] text-[#cdb091] font-semibold">
                  News
                </span>
                <h2 className="text-[32px] md:text-[40px] text-[#172533] font-bold">
                  Latest News Update
                </h2>
              </div>
              <div>
                <Link href="#">
                  <button className="border-2 border-[#7e7e7e] text-[#172533] text-xl font-semibold px-[25px] py-[10px] hover:bg-[#cdb091] hover:border-[#cdb091] duration-200">
                    See All News
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <CardSlider />
            </div>
          </div>
        </section>
        <section className="py-[50px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-center">
              <div className="bg-[#1e2e3e] p-5 md:p-[60px] w-full lg:max-w-[475px] mb-[50px] lg:mb-0">
                <div className="mb-[38px]">
                  <h3 className="contact_info-text font-semibold text-center sm:text-start">
                    Contact Info
                  </h3>
                  <p className="text-white text-base md:text-lg leading-[28px] mb-[15px] text-center sm:text-start">
                    You can find more information with these contact information
                  </p>
                </div>
                <div className="flex items-center mb-[30px] flex-col sm:flex-row">
                  <div className="text-[50px] text-white mr-5">
                    <IoHomeOutline />
                  </div>
                  <div>
                    <h4 className="text-[22px] md:text-3xl text-white mb-[10px] font-semibold text-center sm:text-start">
                      Office address
                    </h4>
                    <p className="text-base text-white leading-[23px] text-center sm:text-start">
                      7th Street, Zanjirbogʻ neighborhood, Yakkasaroy district, Tashkent city.
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-[30px] flex-col sm:flex-row">
                  <div className="text-[50px] text-white mr-5">
                    <TbMailOpened />
                  </div>
                  <div>
                    <h4 className="text-[22px] md:text-3xl text-white mb-[10px] font-semibold text-center sm:text-start">
                      Email
                    </h4>
                    <a
                      href="mailto:loyalxat@gmail.com"
                      className="text-base text-white leading-[23px] text-center sm:text-start"
                    >
                      loyalxat@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center mb-[30px] flex-col sm:flex-row">
                  <div className="text-[50px] text-white mr-5">
                    <TfiHeadphoneAlt />
                  </div>
                  <div>
                    <h4 className="text-[22px] md:text-3xl text-white mb-[10px] font-semibold text-center sm:text-start">
                      Phone number
                    </h4>
                    <a
                      href="tel:+998901319544"
                      className="text-base text-white leading-[23px] text-center sm:text-start"
                    >
                      +998901319544
                    </a>
                  </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="text-[50px] text-white mr-5">
                    <IoIosClock />
                  </div>
                  <div>
                    <h4 className="text-[22px] md:text-3xl text-white mb-[10px] font-semibold text-center sm:text-start">
                      Office Hours
                    </h4>
                    <p className="text-base text-white leading-[23px] text-center sm:text-start">
                      Mon-Fri from 09:00 to 18:00 Tashkent
                    </p>
                  </div>
                </div>
              </div>
              <MainForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </TranslationsProvider>
    
    </>
  );
}