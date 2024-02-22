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

const FilterHeader = () => {
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0]);

  useEffect(() => {
    console.log("sort by", sortBy);
  }, [sortBy]);

  return (
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
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default FilterHeader;
