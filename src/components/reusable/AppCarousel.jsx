import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore
import HeroImg1 from "@/assets/images/hero-bats.png";
// @ts-ignore
import HeroImg2 from "@/assets/images/batsman.png";
import AppCTAButton from "./AppCTAButton";

const SLIDERS = [
  {
    img: HeroImg1,
    label: "JAVa sports",
    content: "All New Junior <br/> Cricket Bat Range!",
    ctaLabel: "explore now",
    ctaHref: "#top-rated-bats",
  },
  {
    img: HeroImg2,
    label: "JAVa sports",
    content: "All New Junior <br/> Cricket Bat Range!",
    ctaLabel: "explore now",
    ctaHref: "#top-rated-bats",
  },
];

const AppCarousel = () => {
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

  return (
    <Slider {...settings}>
      {SLIDERS.map(({ content, ctaLabel, ctaHref, img, label }, index) => (
        <div
          key={index}
          className="hero-slider h-[200px] sm:h-[250px] lg:h-[400px] relative overflow-hidden"
        >
          {/* //gradient overlay */}
          <div
            className="absolute inset-0 z-0 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(34, 34, 34, 0.2) 100%)",
            }}
          />
          {/* //content */}
          <div className="wrapper flex justify-between items-center h-full max-h-full">
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10 ">
              <span className="font-Lato text-xs sm:text-[1rem] xl:text-2xl font-700 text-white uppercase">
                {label}
              </span>
              <h1
                className="text-white text-base uppercase text-Lato font-700 sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl min-w-max"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <AppCTAButton action={handleScroll} text={ctaLabel} />
            </div>
            <picture className="h-full z-10 min-w-fit ">
              <img
                src={img}
                alt="Banner Image"
                className="w-[140px] sm:w-56 md:w-fit md:p-6 h-full object-contain object-center"
              />
            </picture>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default AppCarousel;
