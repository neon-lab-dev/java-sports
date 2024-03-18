import Hero from "./Hero";
import AppProductSlider from "@/components/reusable/AppProductSlider";
import BannerImg from "@assets/images/personalized-kit.png";
import POSTS from "@/assets/mock-data/posts";
import { useQuery } from "@tanstack/react-query";
import { getAccessories, getHelmets, getTopRatedBats } from "@/api/products";
import { useEffect } from "react";
import { getInstagramPosts } from "@/api/instagram";
import { Link } from "react-router-dom";
import AppSkeleton from "@/components/skeletons/AppSkeleton";

const HomePage = () => {
  const sectionWrapper = `bg-neutral-white my-[18px] pb-[18px]`;

  // get top rated bats
  const {
    data: topRatedBats,
    isLoading: isTopRatedBatsLoading,
    isError: isTopRatedBatsError,
  } = useQuery({
    queryKey: ["topRatedBats"],
    queryFn: getTopRatedBats,
  });

  // get featured products
  const {
    data: featuredProducts,
    isLoading: isFeaturedProductsLoading,
    isError: isFeaturedProductsError,
  } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getHelmets,
  });

  // get accessories
  const {
    data: accessories,
    isLoading: isAccessoriesLoading,
    isError: isAccessoriesError,
  } = useQuery({
    queryKey: ["accessories"],
    queryFn: getAccessories,
  });

  //get the insta posts
  const { data: instaPosts, isLoading: isInstaPostsLoading } = useQuery({
    queryKey: ["instaPosts"],
    queryFn: getInstagramPosts,
  });

  return (
    <>
      <Hero />
      {!isTopRatedBatsError && (
        <section className={`${sectionWrapper}`}>
          {/* Top Rated Bats */}
          <section className="wrapper">
            <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
              Top Rated Bats
            </h2>
            <AppProductSlider
              items={topRatedBats?.products}
              isLoading={isTopRatedBatsLoading}
            />
          </section>
        </section>
      )}

      {!isFeaturedProductsError && (
        <section className={`${sectionWrapper}`}>
          {/* Featured  Products*/}
          <section className="wrapper">
            <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
              Featured
            </h2>
            <AppProductSlider
              items={featuredProducts?.products}
              isLoading={isFeaturedProductsLoading}
            />
          </section>
        </section>
      )}

      {/* Banner */}
      <section className="h-[200px] xs:h-[250px] lg:h-[300px] xl:h-[400px] bg-neutral-white lg-light relative overflow-hidden">
        <div className="wrapper flex justify-between items-center h-full max-h-full">
          <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10">
            <span className="font-Lato text-xs sm:text-lg lg:text-2xl 2xl:text-3xl font-700 text-white uppercase">
              Cricket Full Kit
            </span>
            <h1 className="text-white text-base uppercase text-Lato font-700 sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl min-w-max">
              Something new
              <br /> is coming
            </h1>
          </div>
          <picture className="h-full z-10 min-w-fit flex items-center justify-center">
            <img
              src={BannerImg}
              alt="Banner Image"
              className="w-[140px] h-[140px] sm:w-56 md:w-fit md:p-6 xs:h-full object-contain object-center"
            />
          </picture>
        </div>
      </section>

      {!isAccessoriesError && (
        <section className={`${sectionWrapper}`} id="top-rated-bats">
          {/* Accessories Collection */}
          <section className="wrapper">
            <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
              Accessories Collection
            </h2>
            <AppProductSlider
              items={accessories?.products}
              isLoading={isAccessoriesLoading}
            />
          </section>
        </section>
      )}

      <section className={`${sectionWrapper}`}>
        {/* News feed */}
        <section className="wrapper flex flex-col items-center justify-center text-center font-Jakarta pt-6">
          <span className="font-500 text-base sm:text-lg">News Feed</span>
          <span className="font-700 text-2xl sm:text-3xl">Instagram</span>
          <span className="text-base sm:text-xl my-2 sm:my-4 font-500">
            Follow us on social media for more discounts & promotions
          </span>
          <Link
            to="https://www.instagram.com/javasports_official/"
            target="_blank"
            className="font-Jakarta text-xl sm:text-2xl font-500 hover:underline transition-all"
          >
            @javasports
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6 mt-6 md:grid-cols-3 w-full max-w-[250px] sm:max-w-[520px] md:max-w-[800px] 2xl:max-w-[1200px]">
            {isInstaPostsLoading ? (
              <>
                {Array(6)
                  .fill()
                  .map((_, index) => (
                    <AppSkeleton
                      key={index}
                      className="w-full h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden group hover:scale-[1.01] transition-all rounded-md"
                    />
                  ))}
              </>
            ) : (
              //render the posts
              instaPosts?.map((post, index) => {
                return (
                  <Link
                    key={index}
                    to={post.permalink}
                    target="_blank"
                    className="w-full h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden group hover:scale-105 transition-all rounded-md"
                  >
                    <img
                      src={post.thumbnail_url || post.media_url}
                      alt="Instagram Post"
                      className="w-full h-full object-cover object-center rounded-md"
                    />
                  </Link>
                );
              })
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
