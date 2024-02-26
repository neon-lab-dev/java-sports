import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore
import HeroImg1 from "@/assets/images/bats-img.svg";
// @ts-ignore
import HeroImg2 from "@/assets/images/hero-image2.svg";
import AppCTAButton from "./AppCTAButton";

const SLIDERS = [
  {
    img: HeroImg1,
    label: "JAVa sports",
    content: "All New Junior <br/> Cricket Bat Range!",
    ctaLabel: "explore now",
    ctaHref: "/",
  },
  {
    img: HeroImg2,
    label: "JAVa sports",
    content: "All New Junior <br/> Cricket Bat Range!",
    ctaLabel: "explore now",
    ctaHref: "/",
  },
];

const AppCarousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
  };

  return (
    <Slider {...settings}>
      {SLIDERS.map(({ content, ctaLabel, ctaHref, img, label }, index) => (
        <div
          key={index}
          className="hero-slider h-[200px] lg:h-[400px] relative"
        >
          <div className="wrapper flex justify-between items-center h-full max-h-full">
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10">
              <span className="font-Lato text-xs sm:text-[1rem] xl:text-2xl font-700 text-white uppercase">
                {label}
              </span>
              <h1
                className="text-white text-base uppercase text-Lato font-700 sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl min-w-max"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <AppCTAButton link={ctaHref} text={ctaLabel} />
            </div>
            <picture className="h-full absolute right-0 opacity-80 xs:opacity-100 w-max">
              <img
                src={img}
                alt="Banner Image"
                className="w-[140px] sm:w-auto h-full object-contain object-center"
              />
            </picture>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default AppCarousel;
