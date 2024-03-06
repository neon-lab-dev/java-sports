import { useQuery } from "@tanstack/react-query";
import AppProductSlider from "./AppProductSlider";
import { getHelmets } from "@/api/products";

const AppProductsYouMightLike = () => {
  // get featured products
  const {
    data: featuredProducts,
    isLoading: isFeaturedProductsLoading,
    isError: isFeaturedProductsError,
  } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getHelmets,
  });
  if (isFeaturedProductsError) return null;
  return (
    <section className="bg-neutral-white pb-4 lg:block hidden">
      {/* Featured */}
      <section className="wrapper">
        <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
          Products you might like
        </h2>
        <AppProductSlider
          items={featuredProducts?.products}
          isLoading={isFeaturedProductsLoading}
        />
      </section>
    </section>
  );
};
export default AppProductsYouMightLike;
