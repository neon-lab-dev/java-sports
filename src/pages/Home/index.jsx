import AppHeader from "@/components/reusable/AppHeader"
import Hero from "./Hero"
import AppProductSlider from "@/components/reusable/AppProductSlider"
import AppFooter from "@/components/reusable/AppFooter"

// @ts-ignore
import BannerImg from '@assets/images/banner-1.svg'

const HomePage = () => {
  const sectionWrapper = `bg-neutral-white my-[18px] pb-[18px]`
  const wrapper = `w-[45%] h-full`
  const label = `font-Lato text-[2rem] font-800 leading-[41.6px] text-white uppercase`;
  const contentText = `text-white uppercase leading-[86px] text-Lato font-800 text-[4.5rem] my-[50px]`;


  return (
    <>
      <AppHeader />
      <Hero />
      <section className={ `${sectionWrapper}` }>
        {/* Top Rated Bats */ }
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">Top Rated Bats</h2>
          <AppProductSlider type={ 'product' } />
        </section>
      </section>

      <section className={ `${sectionWrapper}` }>
        {/* Featured */ }
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">Featured</h2>
          <AppProductSlider type={ 'product' } />
        </section>
      </section>

      {/* Banner */ }
      <section className='h-[524px] bg-neutral-white lg-light flex justify-center items-center'>
        <div className={ `${wrapper}` }>
          <div className="flex flex-col justify-center items-start">
            <span className={ `${label} pt-[59px]` }>JAVA sports</span>
            <h1 className={ `${contentText}` }>
              All New Junior<br /> Cricket Bat Range!
            </h1>

            <span>
              <CtaButton text={ 'explore now' } />
            </span>
          </div>
        </div>

        <picture>
          <img src={ BannerImg } alt="Banner Image" />
        </picture>
      </section>

      <section className={ `${sectionWrapper}` }>
        {/* Accessories Collection */ }
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">Accessories Collection</h2>
          <AppProductSlider type={ 'accessories' } />
        </section>
      </section>
      <AppFooter />
    </>
  )
}

export default HomePage

function CtaButton(prop) {
  const button = `uppercase text-neutral-black bg-neutral-white py-[21px] px-[41px] text-Lato font-700`

  return (
    <a href="#" className={ `${button}` }>
      { prop.text }
    </a>
  )
}