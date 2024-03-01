import AppCard from "@/components/reusable/AppCard";
import Filters from "./Filters";
import FilterHeader from "./FilterHeader";
import NotFound from "../NotFound";
import { useParams } from "react-router-dom";
import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import { wordToParam } from "@/utils/paramUtils";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "@/api/products";
import AppLoading from "@/components/reusable/AppLoading";
import Error503 from "../Error503";

const CategoryLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { category, type } = useParams();
  const types = ACCORDION_LINKS.filter(
    ({ label }) => wordToParam(label) === category
  )[0];

  const { isLoading, data, isError } = useQuery({
    queryKey: ["allFilteredProducts", { type, category }],
    queryFn: () =>
      getFilteredProducts({
        type: type === "all" ? category : type,
        categoryType: types?.type,
      }),
  });

  if (!types) return <NotFound />;
  if (isError) return <Error503 />;
  return (
    <div className="bg-white py-6 overflow-hidden">
      <section className="wrapper max-w-[1500px]">
        <FilterHeader setShowFilters={setShowFilters} />
        {isLoading ? (
          <AppLoading />
        ) : (
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
            <div className="grid grid-cols-1 gap-3 lg:gap-8 sm:grid-cols-2 mx-auto xl:grid-cols-3 3xl:grid-cols-4 w-full sm:w-max h-fit">
              {data?.products?.length === 0 ? (
                <div className="w-full flex justify-center items-center">
                  <h1 className="text-2xl font-500">No products found</h1>
                </div>
              ) : (
                data?.products?.map((item, idx) => (
                  <AppCard
                    key={`items-${idx}`}
                    product={item}
                    className="w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"
                  />
                ))
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default CategoryLayout;
