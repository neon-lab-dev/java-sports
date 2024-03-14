import AppCard from "@/components/reusable/AppCard";
import Filters from "./Filters";
import FilterHeader from "./FilterHeader";
import NotFound from "../NotFound";
import { useParams, useSearchParams } from "react-router-dom";
import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import nothingImg from "@/assets/images/nothing.svg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "@/api/products";
import Error503 from "../Error503";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import sortProducts from "@/utils/sortProducts";

const SORTING_OPTIONS = [
  "Most Relevant",
  "Low to High price",
  "High to low price",
];

const CategoryLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();
  const priceRange = searchParams.get("priceRange");
  const size = searchParams.get("size");
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0]);
  const { category, type } = useParams();
  const types = ACCORDION_LINKS.filter(
    ({ label }) => label === decodeURI(category)
  )[0];

  const { isLoading, data, isError } = useQuery({
    queryKey: ["allFilteredProducts", { type, category, priceRange, size }],
    queryFn: () =>
      getFilteredProducts({
        category: types.queryAs,
        categoryType:
          types?.dropdowns?.filter((item) => item.label === decodeURI(type))[0]
            ?.queryAs || "all",
        mainCategoryLabel: types.type,
        priceRange: priceRange === "all" ? 0 : priceRange || 0,
        size: size === "all" ? null : size,
      }),
  });

  if (!types) return <NotFound />;
  if (isError) return <Error503 />;
  return (
    <div className="bg-white py-6 overflow-hidden">
      <section className="wrapper max-w-[1500px]">
        <FilterHeader
          setShowFilters={setShowFilters}
          options={SORTING_OPTIONS}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="flex gap-5 mt-4 sm:mt-6">
          <div className="hidden lg:block">
            <Filters types={types} />
          </div>
          {/* // filter for mobile view */}
          <div
            className={`lg:hidden absolute bg-white transition-transform ${
              !showFilters ? "-translate-x-[100vw]" : "translate-x-0"
            }`}
          >
            <Filters types={types} />
          </div>
          {data?.products?.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-4 w-full h-[400px] w-full">
              <img src={nothingImg} className="h-36" />
              <h2 className="font-Jakarta font-500 text-lg sm:text-xl">
                No products found
              </h2>
            </div>
          )}
          <div className="grid grid-cols-1 gap-3 lg:gap-8 sm:grid-cols-2 mx-auto xl:grid-cols-3 3xl:grid-cols-4 w-full sm:w-max h-fit">
            {data?.products?.length > 0 &&
              sortProducts(data?.products, sortBy)?.map((item, idx) => (
                <AppCard
                  key={`items-${idx}`}
                  product={item}
                  className="w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"
                />
              ))}
            {isLoading && (
              <>
                <CardSkeleton className="w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]" />
                <CardSkeleton className="w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]" />
                <CardSkeleton className="w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]" />
                <CardSkeleton className="w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]" />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CategoryLayout;
