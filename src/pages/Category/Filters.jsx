import { useEffect, useState } from "react";
import MultiSelectFilterItem from "./MultiSelectFilterItem";
import { useLocation, useParams } from "react-router-dom";
import CustomerReviewsButton from "./CustomerReviewsButton";
import PriceRange from "./PriceRange";
import TypeFilter from "./TypeFilter";

const DEFAULT_FILTERS = {
  type: [],
  customerReviews: "all",
  priceRange: "all",
  quantity: [],
  color: [],
  size: [],
};

const Filters = ({ types }) => {
  const { type } = useParams();
  const customFilters = null;
  const location = useLocation();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  useEffect(() => {
    const isTypeAvailable =
      type &&
      (type.toLowerCase() === "all" ||
        types?.dropdowns?.filter((link) => link.label === decodeURI(type))
          .length > 0);

    if (isTypeAvailable) return setFilters(DEFAULT_FILTERS);
    setFilters((prev) => ({ ...prev, type: [type] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, location.pathname]);

  return (
    <div className="border-2 p-3 flex flex-col gap-2 rounded-md min-w-64 lg:min-w-fit 2xl:min-w-64">
      {types.dropdowns && types.dropdowns.length > 0 && (
        <TypeFilter
          options={types.dropdowns.map((link) => {
            return { label: link.label };
          })}
        />
      )}
      {customFilters?.filters.map((filter, i) => {
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
            resetValue={() =>
              setFilters((prev) => ({
                ...prev,
                [filter.title.toLowerCase()]: [],
              }))
            }
          />
        );
      })}
      {customFilters?.filters.map((filter, i) => {
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
      <button
        onClick={() => setFilters(DEFAULT_FILTERS)}
        className="text-white font-Lato font-800 bg-black p-2 rounded-md mt-3"
      >
        Reset All
      </button>
    </div>
  );
};
export default Filters;
