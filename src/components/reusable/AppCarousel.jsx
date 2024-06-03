import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CricketBatBanner from "../banners/CricketBatBanner";
import { Fragment } from "react";
import GloversBanner from "../banners/GlovesBanner";
import BattingGloversBanner from "../banners/BattingGloverBanner";
import EnglishWillBatBanner from "../banners/EnglishWilllowBatBanner";

const AppCarousel = ({ showSlidersInReverse = false }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const SLIDERS = [
    <EnglishWillBatBanner />,
    <GloversBanner />,
    <BattingGloversBanner />,
    <CricketBatBanner />,
  ];

  if (showSlidersInReverse) {
    SLIDERS.reverse();
  }

  return (
    <Slider {...settings}>
      {SLIDERS.map((slider, i) => (
        <Fragment key={i}>{slider}</Fragment>
      ))}
    </Slider>
  );
};

export default AppCarousel;
