import tune from "@/assets/icons/tune.svg";
import sort from "@/assets/icons/sort.svg";
import { useEffect, useState } from "react";

const SORTING_OPTIONS = [
  "Most Relevant",
  "Low to High price",
  "High to low price",
  "Most Popular",
  "Most Rating",
];

const FilterHeader = ({ setShowFilters }) => {
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0]);

  useEffect(() => {
    console.log("sort by", sortBy);
  }, [sortBy]);

  return (
    <div className="flex justify-between items-center font-700 text-[18px] font-Lato">
      {/* //for mobile view */}
      <button
        onClick={() => setShowFilters((prev) => !prev)}
        className="flex gap-3 items-center lg:hidden"
      >
        <span className="">Filters</span>
        <img src={tune} alt="" />
      </button>
      {/* //for desktop view */}
      <button className="gap-3 items-center hidden lg:flex">
        <span className="">Filters</span>
        <img src={tune} alt="" />
      </button>
      <div className="flex items-center gap-2">
        <img className="max-lg:rotate-90 hidden xs:inline" src={sort} alt="" />
        <span className="hidden xs:inline">Sort by</span>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-50 border border-gray-300 p-1 text-base cursor-pointer"
        >
          {SORTING_OPTIONS.map((option, i) => (
            <option
              className="font-500 text-base cursor-pointer"
              key={i}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default FilterHeader;
