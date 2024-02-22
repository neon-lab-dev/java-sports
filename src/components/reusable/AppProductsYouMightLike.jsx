import PRODUCTS from "@/assets/mock-data/products";
import AppProductSlider from "./AppProductSlider";

const AppProductsYouMightLike = () => {
  return (
    <section className="bg-neutral-white pb-4 lg:block hidden">
      {/* Featured */}
      <section className="wrapper">
        <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
          Products you might like
        </h2>
        <AppProductSlider items={PRODUCTS} />
      </section>
    </section>
  );
};
export default AppProductsYouMightLike;
