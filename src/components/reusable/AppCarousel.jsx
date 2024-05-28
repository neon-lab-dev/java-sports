import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// hero img
import HeroImg1 from "@/assets/banners/1st/banner.png";
import HeroImg2 from "@/assets/banners/2nd/banner.png";
import HeroImg3 from "@/assets/banners/3rd/banner.png";

// hero bg
import HeroBg1 from "@/assets/banners/1st/bg.png";
import HeroBg2 from "@/assets/banners/2nd/bg.png";
import HeroBg3 from "@/assets/banners/3rd/bg.png";
import HeroBg4 from "@/assets/banners/4th/bg.png";

import AppCTAButton from "./AppCTAButton";

const SLIDERS = [
  {
    img: HeroImg1,
    label: "JAVa sports",
    content: "25% off on<br/>English Willow Bats!",
    bg: HeroBg1,
  },
  {
    img: HeroImg2,
    label: "JAVa sports",
    content: "25% off on<br/>Wicket Keeping Gloves!",
    bg: HeroBg2,
  },
  {
    img: HeroImg3,
    label: "JAVa sports",
    content: "25% off on<br/>Cricket Batting Gloves!",
    bg: HeroBg3,
  },
  {
    img: "",
    label: "JAVa sports",
    content: "Unleash your potential<br/>@ unbeatable prices!",
    bg: HeroBg4,
  },
];

const AppCarousel = ({ showSlidersInReverse = false }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  //scroll by 60vh when app cta button is clicked
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.6,
      behavior: "smooth",
    });
  };

  const sliders = showSlidersInReverse ? SLIDERS.reverse() : SLIDERS;

  return (
    <Slider {...settings}>
      {SLIDERS.map(({ content, img, bg, label }, index) => (
        <div
          key={index}
          className={`hero-slider h-[200px] sm:h-[250px] lg:h-[400px] relative overflow-hidden `}
        >
          {/* //gradient overlay */}
          <div
            className="absolute inset-0 z-0 w-full h-full"
            style={{
              background: `url(${bg}) no-repeat right center/cover`,
            }}
          />
          {/* //content */}
          <div className="wrapper flex justify-between items-center h-full max-h-full">
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10 ">
              <span className="font-Lato text-xs sm:text-[1rem] xl:text-2xl font-700 text-white uppercase">
                {label}
              </span>
              <h1
                className="text-white text-sm uppercase text-Lato font-700 sm:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl min-w-max"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <AppCTAButton action={handleScroll} text="Get It Now" />
            </div>
            <picture className="h-full z-10 min-w-fit ">
              {img && (
                <img
                  src={img}
                  alt="Banner Image"
                  className="w-[140px] sm:w-56 md:w-fit md:p-6 h-full object-contain object-center"
                />
              )}
            </picture>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default AppCarousel;
