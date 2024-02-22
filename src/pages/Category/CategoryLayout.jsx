import tune from "@/assets/icons/tune.svg";
import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import APPAREL_FILTERS from "@/assets/categoryFilters/apparel";
import sort from "@/assets/icons/sort.svg";
import { wordToParam } from "@/utils/paramUtils";
import { useEffect, useState } from "react";
import ShowNewArrivalsButton from "./ShowNewArrivalsButton";
import MultiSelectFilterItem from "./MultiSelectFilterItem";
import CustomerReviewsButton from "./CustomerReviewsButton";
import PriceRange from "./PriceRange";

const SORTING_OPTIONS = [
  "Most Relevant",
  "Low to High price",
  "High to low price",
  "Most Popular",
  "Most Rating",
];

const DEFAULT_FILTERS = {
  showNewArrivalsOnly: false,
  customerReviews: "all",
  priceRange: "all",
  type: [],
  size: [],
  color: [],
};

const CategoryLayout = () => {
  const types = ACCORDION_LINKS.filter((link) => link.label === "Apparel")[0];
  const [sortBy, setSortBy] = useState(wordToParam(SORTING_OPTIONS[0]));
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  useEffect(() => {
    console.log("sortBy = ", sortBy);
    console.log("filters = ", filters);
  }, [sortBy, filters]);

  return (
    <div className="bg-white ">
      <section className="wrapper">
        {/* filter header */}
        <div className="flex justify-between items-center">
          <button className="flex gap-3 items-center">
            <span className="">Filter</span>
            <img src={tune} alt="" />
          </button>
          <div className="flex gap-1">
            <img className="max-lg:rotate-90" src={sort} alt="" />
            <span className="text-[16px] font-Lato font-700 p-2 max-lg:hidden">
              Sort by
            </span>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 border border-gray-300 p-2"
            >
              {SORTING_OPTIONS.map((option, i) => (
                <option key={i} value={wordToParam(option)}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* filters and products */}
        <div className="flex gap-4 max-lg:justify-center">
          <div className="border-2 p-3">
            <MultiSelectFilterItem
              title="Type"
              options={types.dropdowns.filter((link) => link !== "All")}
              value={filters.type}
              setValue={(val) => setFilters((prev) => ({ ...prev, type: val }))}
            />
            {APPAREL_FILTERS.map((filter, i) => {
              if (filter.type !== "multiselect") return null;
              return (
                <MultiSelectFilterItem
                  key={i}
                  title={filter.title}
                  options={filter.options}
                  value={filters[filter.title.toLowerCase()]}
                  setValue={(val) =>
                    setFilters((prev) => ({
                      ...prev,
                      [filter.title.toLowerCase()]: val,
                    }))
                  }
                />
              );
            })}
            {APPAREL_FILTERS.map((filter, i) => {
              if (filter.type !== "range") return null;
              return (
                <PriceRange
                  key={i}
                  min={filter.min}
                  max={filter.max}
                  value={filters.priceRange}
                  setValue={(val) =>
                    setFilters((prev) => ({ ...prev, priceRange: val }))
                  }
                />
              );
            })}
            <CustomerReviewsButton
              value={filters.customerReviews}
              setValue={(val) =>
                setFilters((prev) => ({ ...prev, customerReviews: val }))
              }
            />
            <ShowNewArrivalsButton
              value={filters.showNewArrivalsOnly}
              setValue={() =>
                setFilters((prev) => ({
                  ...prev,
                  showNewArrivalsOnly: !prev.showNewArrivalsOnly,
                }))
              }
            />
            <div className="my-4">
              <button
                onClick={() => setFilters(DEFAULT_FILTERS)}
                className="text-white font-Lato font-800 bg-black p-2 rounded-md"
              >
                Reset All
              </button>
            </div>
          </div>
          <div className="bg-white grid grid-cols-4  max-2xl:grid-cols-3 max-lg:grid-cols-2  max-sm:grid-cols-1 ">
            {/* {filteredItems.map((item, idx) => (
            <AppCard
              key={`items-${idx}`}
              title={item.title}
              price={item.price}
              discounted={item.discounted}
              image={item.img}
            />
          ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CategoryLayout;
