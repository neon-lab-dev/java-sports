import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore
import HeroImg1 from '@/assets/images/hero-image.svg'
// @ts-ignore
import HeroImg2 from '@/assets/images/hero-image2.svg'

const AppCarousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const parentContainer = `flex items-center jsutify-center`
  const wrapper = `w-[45%] h-full m-auto`
  const label = `font-Lato text-[2rem] font-800 leading-[41.6px] text-white uppercase`;
  const contentText = `text-white uppercase leading-[86px] text-Lato font-800 text-[4.5rem] my-[69px]`;

  return (
    <Slider { ...settings }>
      {/* SLIDE 1 */ }
      <>
        <div className={ `${parentContainer} hero-slider`}>
          <div className={ `${wrapper}` }>
            <span className={ `${label}` }>JAVa sports</span>
            <h1 className={ `${contentText}` }>
              All New Junior<br /> Cricket Bat Range!
            </h1>

            <CtaButton text={'explore now'}/>
          </div>

          <picture>
            <img src={ HeroImg1 } alt="Hero image 1" />
          </picture>
        </div>
      </>

      {/* SLIDE 2 */ }
      <>
        <div className={ `${parentContainer} hero-slider` }>
          <div className={ `${wrapper}` }>
            <span className={ `${label}`}>JAVa sports</span>
            <h1 className={ `${contentText}` }>
              All New Junior<br /> Cricket Bat Range!
            </h1>

            <CtaButton text={'explore now'}/>
          </div>

          <picture>
            <img src={ HeroImg2 } alt="Hero image 2" />
          </picture>

        </div>
      </>
    </Slider>

  );
}

export default AppCarousel

function CtaButton (prop) {
  const button = `uppercase text-neutral-black bg-neutral-white py-[21px] px-[41px] text-Lato font-700`

  return (
    <a href="#" className={ `${button}` }>
      {prop.text}
    </a>
  )
}