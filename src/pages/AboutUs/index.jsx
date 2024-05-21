import img1 from "@/assets/images/Screenshot 2024-05-02 161213.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/Frame 178.png";
import premiumQualityIcon from "@/assets/images/premium-quality.png";
import puzzleIcon from "@/assets/images/puzzle-pieces 1.png";
import customerSurveyIcon from "@/assets/images/customer-survey.png";
import innovation from "@/assets/images/innovation.png";
import globalIcon from "@/assets/images/global-business.png";
import marketIcon from "@/assets/images/ight-bulb-with-design-tool.png";
import cricketBats1 from "@/assets/images/cricket-bats 1.png";
import sportsShoes1 from "@/assets/images/sports-shoes 1.png";
import schoolShoes1 from "@/assets/images/school-shoes 1.png";
import travelBag1 from "@/assets/images/travel-bag 1.png";
import leather1 from "@/assets/images/leather 1.png";
import tennisBall1 from "@/assets/images/tennis-ball 1.png";
import Frame1021 from "@/assets/images/Frame 1021.png";
import nishant from "@/assets/images/nishant.jpg";
import prakash from "@/assets/images/prakash.jpg";
import Rectangle126 from "@/assets/images/Rectangle 126.png";
import { Link } from "react-router-dom";
import call from "@/assets/icons/Call.svg";
import email from "@/assets/icons/Email.svg";
import location from "@/assets/icons/Location on.svg";

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      <div className="sm:py-12 py-8 flex max-w-[1800px] m-auto flex-col gap-8 md:gap-12 xl:gap-24 w-full">
        <div className="flex flex-col gap-5 xl:gap-9 md:gap-6 xl:flex-row-reverse lg:wrapper">
          <img
            src={img1}
            alt=""
            className="w-full h-[221px] xs:h-[300px] sm:h-[350px] md:h-[417px] lg:h-[500px] xl:w-[700px] xl:h-auto object-cover object-center"
          />
          <div className="flex flex-col gap-3 md:gap-5 wrapper lg:w-full lg:flex-grow 2xl:gap-6">
            <h3 className="text-2xl font-Lato font-700 sm:text-3xl md:text-[42px]">
              About Us
            </h3>
            <p className="font-Lato xl:text-[20px]">
              Welcome to Java Sports Pvt Ltd, a beacon of innovation in sports
              manufacturing. Founded by Nishant Ranjan and Dev Prakash Pandey,
              we bring a fusion of financial acumen and over two decades of
              production expertise. Java Sports is not just a manufacturer;
              we're architects of sporting experiences. Our focus on quality,
              innovation, and eco-friendly practices sets us apart, as we
              redefine the standards for sports equipment. Join us on this
              journey as we shape the future of athletic excellence.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 xl:gap-9 md:gap-6 xl:flex-row lg:wrapper">
          <img
            src={img2}
            alt=""
            className="w-full h-[221px] xs:h-[300px] sm:h-[350px] md:h-[417px] lg:h-[500px] xl:min-w-[500px] xl:h-auto object-cover object-center"
          />
          <div className="flex flex-col gap-3 md:gap-5 wrapper lg:w-full lg:flex-grow 2xl:gap-6">
            <h3 className="text-2xl font-Lato font-700 sm:text-3xl md:text-[42px]">
              Our Value Proposition
            </h3>
            <div className="font-Lato xl:text-[20px] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  label: "Premium Quality",
                  icon: premiumQualityIcon,
                },
                {
                  label: "Versatile Range",
                  icon: puzzleIcon,
                },
                {
                  label: "Customer-Centric Approach",
                  icon: customerSurveyIcon,
                },
                {
                  label: "Innovation Hub",
                  icon: innovation,
                },
                {
                  label: "Global Recognition",
                  icon: globalIcon,
                },
                {
                  label: "Market-Leading Design",
                  icon: marketIcon,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    boxShadow: "0px 1.895px 6.633px 0px rgba(0, 0, 0, 0.12)",
                  }}
                  className="flex flex-col items-start gap-3 px-5 py-4 w-full rounded-lg"
                >
                  <img src={item.icon} alt="" className="w-20 h-20" />
                  <span className="text-[18px] font-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 xl:gap-9 md:gap-6 xl:flex-row-reverse lg:wrapper">
          <img
            src={img3}
            alt=""
            className="w-full h-[221px] xs:h-[300px] sm:h-[350px] md:h-[417px] lg:h-[500px] xl:min-w-[500px] xl:h-auto object-cover object-center"
          />
          <div className="flex flex-col gap-3 md:gap-5 wrapper lg:w-full lg:flex-grow 2xl:gap-6">
            <h3 className="text-2xl font-Lato font-700 sm:text-3xl md:text-[42px]">
              What we offer
            </h3>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Bats",
                  desc: "Precision-crafted cricket bats for enthusiasts and professionals.",
                  icon: cricketBats1,
                },
                {
                  title: "Sports Shoes",
                  icon: sportsShoes1,
                  desc: "Performance-driven athletic footwear for various sports.",
                },
                {
                  title: "School Shoes",
                  icon: schoolShoes1,
                  desc: "Comfortable and durable footwear designed for school activities.",
                },
                {
                  title: "Bags",
                  icon: travelBag1,
                  desc: "Stylish and functional sports bags, ensuring convenience on and off the field.",
                },
                {
                  title: "Soft Leathers",
                  icon: leather1,
                  desc: "Eco-friendly, customizable sports equipment with new trend.",
                },
                {
                  title: "Balls",
                  icon: tennisBall1,
                  desc: "High-quality cricket and sports balls for optimal performance.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 px-5 py-4 w-full rounded-lg bg-[#F4F4F4]"
                >
                  <div className="flex gap-2 items-start">
                    <img src={item.icon} alt="" className="w-8 h-8" />
                    <span className="text-[20px] font-500">{item.title}</span>
                  </div>
                  <span className="text-[14px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] py-4 md:py-8 xl:py-12">
          <div className="flex flex-col gap-5 sm:gap-7 md:gap-12 wrapper">
            <h3 className="text-2xl font-Lato font-700 sm:text-3xl md:text-[42px]">
              Making quality product
            </h3>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-4 gap-2">
                {[
                  {
                    title: "Design Excellence",
                  },
                  {
                    title: "Precision Manufacturing",
                  },
                  {
                    title: "Eco-Friendly Practices",
                  },
                  {
                    title: "Rigorous Testing",
                  },
                ].map((item, index) => (
                  <span
                    key={index}
                    className="text-[8px] text-center sm:text-[11px] md:text-[24px] font-700 font-Lato mt-auto"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
              <img src={Frame1021} alt="" />
              <div className="grid grid-cols-4 gap-2">
                {[
                  {
                    desc: "Innovative concepts tailored for optimal performance.",
                  },
                  {
                    desc: "State-of-the-art facilities ensuring top-tier quality.",
                  },
                  {
                    desc: "Sustainable materials for a greener sporting future.",
                  },
                  {
                    desc: "Stringent quality checks guaranteeing product durability and performance.",
                  },
                ].map((item, index) => (
                  <span
                    key={index}
                    className="text-[7px] text-center sm:text-[11px] md:text-[20px]  font-Lato"
                  >
                    {item.desc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full h-[337px] bg-black pt-9 flex">
            <h3 className="text-2xl font-Lato text-white mx-auto text-center font-700 sm:text-3xl md:text-[42px]">
              Brain Behind the Business
            </h3>
          </div>
          <div className="flex flex-col wrapper -mt-60 sm:-mt-52">
            <div className="flex flex-col xl:flex-row xl:gap-36 gap-6 sm:gap-9 m-auto">
              <div className="flex flex-col gap-4 xl:max-w-[400px]">
                <div className="w-full max-w-[400px] aspect-square m-auto mt-0 relative bg-[#FF5F75] mb-6">
                  <img
                    src={nishant}
                    alt=""
                    className="absolute w-full h-full inset-6 object-cover object-center border border-black rounded-sm"
                  />
                </div>
                <h3 className="text-[18px] sm:text-[24px] lg:text-[28px] font-700 font-Lato">
                  Nishant Ranjan | CEO & Managing Director
                </h3>
                <p className="text-[14px] sm:text-[20px]">
                  With an MBA and 12 years in banking, Nishant Ranjan is the
                  visionary leader driving Java Sports. His strategic acumen,
                  combined with a passion for sports, fuels our commitment to
                  excellence. Nishant's financial expertise ensures the sound
                  management of our operations, making Java Sports a formidable
                  force in the sports manufacturing landscape.
                </p>
              </div>
              <div className="flex flex-col gap-4 xl:max-w-[400px]">
                <div className="w-full max-w-[400px] mt-0 m-auto aspect-square relative bg-[#FF5F75] mb-6">
                  <img
                    src={prakash}
                    alt=""
                    className="absolute w-full h-full top-6 -left-6 object-cover object-center border border-black rounded-sm"
                  />
                </div>
                <h3 className="text-[18px] font-700 font-Lato sm:text-[24px] lg:text-[28px]">
                  Dev Prakash Pandey | Director - Production
                </h3>
                <p className="text-[14px] sm:text-[20px]">
                  A veteran with over 25 years in sports equipment production,
                  Dev Prakash Pandey is the backbone of Java Sports. His
                  profound knowledge and innovative approach to manufacturing
                  have positioned us as pioneers in the industry. Dev Prakash’s
                  relentless pursuit of quality and design excellence defines
                  our commitment to crafting top-tier sports equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9F9]">
          <div className="md:wrapper">
            <div className="flex flex-col md:flex-row-reverse gap-5 py-12">
              <img
                src={Rectangle126}
                alt=""
                className="w-full h-[221px] xs:h-[300px] md:w-[300px] xl:w-[500px] 2xl:w-[800px] sm:h-[350px] md:h-[417px] object-contain object-center"
              />
              <div className="flex flex-col gap-3 wrapper md:w-auto">
                <h3 className="text-2xl font-Lato font-700">Contact Us</h3>
                <div className="flex flex-col gap-2 text-[18px]">
                  <Link
                    to="tel:+91 9334219079"
                    target="_blank"
                    className="flex gap-3"
                  >
                    <img src={call} alt="" className="w-8 h-8" />
                    <span>+91 9334219079</span>
                  </Link>
                  <Link
                    to="mailto:nishant.ranjan@javasports.in"
                    target="_blank"
                    className="flex gap-3"
                  >
                    <img src={email} alt="" className="w-8 h-8" />
                    <span>nishant.ranjan@javasports.in</span>
                  </Link>
                  <div className="flex gap-3">
                    <img src={location} alt="" className="w-8 h-8" />
                    <span>
                      Java Sports Pvt Ltd Ground & First Floor, Chak Bairiya,
                      Karanpur, Illahibagh, Near Illahibagh Petrol Pump, Patna
                      Gaya Road Patna - 800007 Bihar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsPage;
