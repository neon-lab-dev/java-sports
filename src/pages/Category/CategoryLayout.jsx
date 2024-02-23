import PRODUCTS from "@/assets/mock-data/products";
import AppCard from "@/components/reusable/AppCard";
import Filters from "./Filters";
import FilterHeader from "./FilterHeader";
import NotFound from "../NotFound";
import { useParams } from "react-router-dom";
import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import { wordToParam } from "@/utils/paramUtils";
import { useState } from "react";

const CategoryLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { category } = useParams();
  const types = ACCORDION_LINKS.filter(
    ({ label }) => wordToParam(label) === category
  )[0];
  if (!types) return <NotFound />;

  return (
    <div className="bg-white py-6 overflow-hidden">
      <section className="wrapper max-w-[1500px]">
        <FilterHeader setShowFilters={setShowFilters} />
        <div className="flex gap-5 mt-4 sm:mt-6">
          <div className="hidden lg:block">
            <Filters types={types} />
          </div>
          <div
            className={`lg:hidden absolute bg-white transition-transform ${
              !showFilters ? "-translate-x-[100vw]" : "translate-x-0"
            }`}
          >
            <Filters types={types} />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-8 mx-auto sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {PRODUCTS.map((item, idx) => (
              <AppCard
                key={`items-${idx}`}
                title={item.title}
                price={item.price}
                discounted={item.discounted}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CategoryLayout;
