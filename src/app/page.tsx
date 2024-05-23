import Footer from "@/srccomponents/Footer/Footer";
import Header from "@/srccomponents/Header/Header";
import Slider from "@/srccomponents/Ui/Slider";
import Counter from "@/srccomponents/Ui/Counter";
import cardImage from "@/publicarticleCard_image.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[120px] pt-[68px]">
        <section>
          <div className="container">
            <Slider />
          </div>
        </section>
        <section className="box_shadow mt-5">
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
                <div className="pt-[30px]">
                  <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
                    <li>
                      2023-12-05
                    </li>
                    <li className="list-disc">
                      Xushnudbek Xudoyberdiyev
                    </li>
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
                <div className="pt-[30px]">
                  <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
                    <li>
                      2023-12-05
                    </li>
                    <li className="list-disc">
                      Xushnudbek Xudoyberdiyev
                    </li>
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
                <div className="pt-[30px]">
                  <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
                    <li>
                      2023-12-05
                    </li>
                    <li className="list-disc">
                      Xushnudbek Xudoyberdiyev
                    </li>
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
      </main>
      <Footer />
    </>
  );
}
