import Hero from "./Hero";
import AppProductSlider from "@/components/reusable/AppProductSlider";

// @ts-ignore
import BannerImg from "@assets/images/banner-1.png";
import postImg from "@assets/images/post.png";

const POSTS = [
  {
    img: postImg,
    link: "/",
  },
  {
    img: postImg,
    link: "/",
  },
  {
    img: postImg,
    link: "/",
  },
  {
    img: postImg,
    link: "/",
  },
  {
    img: postImg,
    link: "/",
  },
  {
    img: postImg,
    link: "/",
  },
];

const HomePage = () => {
  const sectionWrapper = `bg-neutral-white my-[18px] pb-[18px]`;

  return (
    <>
      <Hero />
      <section className={`${sectionWrapper}`}>
        {/* Top Rated Bats */}
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
            Top Rated Bats
          </h2>
          <AppProductSlider type={"product"} />
        </section>
      </section>

      <section className={`${sectionWrapper}`}>
        {/* Featured */}
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
            Featured
          </h2>
          <AppProductSlider type={"product"} />
        </section>
      </section>

      {/* Banner */}
      <section className="h-64 md:h-80 lg:h-96 2xl:h-[524px] bg-neutral-white lg-light relative">
        <div className="wrapper flex justify-between items-center h-full max-h-full">
          <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10">
            <span className="font-Lato text-xs sm:text-lg lg:text-2xl 2xl:text-3xl font-700 text-white uppercase">
              Cricket Full Kit
            </span>
            <h1 className="text-white text-base uppercase text-Lato font-700 sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl min-w-max">
              Fill Your Kit With
              <br /> Personalized Gears
            </h1>
            <CtaButton text="Customize now" />
          </div>
          <picture className="h-full absolute right-0 opacity-30 xs:opacity-100 w-max">
            <img
              src={BannerImg}
              alt="Banner Image"
              className="h-full object-cover object-center"
            />
          </picture>
        </div>
      </section>

      <section className={`${sectionWrapper}`}>
        {/* Accessories Collection */}
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
            Accessories Collection
          </h2>
          <AppProductSlider type={"accessories"} />
        </section>
      </section>

      <section className={`${sectionWrapper}`}>
        {/* News feed */}
        <section className="wrapper flex flex-col items-center justify-center text-center font-Jakarta pt-6">
          <span className="font-500 text-lg">News Feed</span>
          <span className="font-700 text-3xl">Instagram</span>
          <span className="text-xl my-4 font-500">
            Follow us on social media for more discounts & promotions
          </span>
          <h2 className="font-Jakarta text-2xl font-500">@javasports</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6 mt-6 xs:grid-cols-3 2xl:grid-cols-6">
            {POSTS.map((post, index) => (
              <img
                key={index}
                src={post.img}
                alt="Post"
                className="aspect-square object-cover object-center"
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;

function CtaButton({ text }) {
  return (
    <a
      href="#"
      className="uppercase text-neutral-black bg-neutral-white px-4 py-2 2xl:py-4 2xl:px-10 text-xs text-Lato font-700"
    >
      {text}
    </a>
  );
}
