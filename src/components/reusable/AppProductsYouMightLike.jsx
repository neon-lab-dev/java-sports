import { useQuery } from "@tanstack/react-query";
import AppProductSlider from "./AppProductSlider";
import { getTopRatedBats } from "@/api/products";

const AppProductsYouMightLike = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getTopRatedBats,
  });
  if (isError) return null;
  return (
    <section className="bg-neutral-white pb-4 lg:block hidden">
      {/* Featured */}
      <section className="wrapper">
        <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
          Products you might like
        </h2>
        <AppProductSlider items={data.products} isLoading={isLoading} />
      </section>
    </section>
  );
};
export default AppProductsYouMightLike;
