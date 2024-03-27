import { useCallback, useEffect, useState } from "react";
import MultiSelectFilterItem from "./SingleSelectFilterItem";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import CustomerReviewsButton from "./CustomerReviewsButton";
import PriceRange from "./PriceRange";
import TypeFilter from "./TypeFilter";
import debounce from "@/utils/debounce";
import { getCategoryFilters } from "@/utils/getCategoryFilters";
import SingleSelectFilterItem from "./SingleSelectFilterItem";

const Filters = ({ types }) => {
  const { type, category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [customFilters, setCustomFilters] = useState(null);

  const DEFAULT_FILTERS = {
    type: undefined,
    customerReviews: searchParams.get("customerReviews") || "all",
    priceRange: searchParams.get("priceRange") || "all",
    size: searchParams.get("size") || undefined,
  };

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const debouncedSetSearchParams = useCallback(
    debounce((val) => {
      setFilters((prev) => ({ ...prev, priceRange: val }));
    }),
    [] // dependencies
  ); //callback to ensure that setSearchParams is not called on every render

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

  useEffect(() => {
    const filters = getCategoryFilters(decodeURI(category), decodeURI(type));
    setCustomFilters(filters);
  }, [category, type]);

  useEffect(() => {
    const filtersWithoutUndefined = Object.keys(filters).reduce((acc, key) => {
      if (filters[key] != undefined) acc[key] = filters[key];
      return acc;
    }, {});
    setSearchParams(filtersWithoutUndefined);
  }, [filters]);

  return (
    <div className="border-2 p-3 flex flex-col gap-2 rounded-md min-w-64 lg:min-w-fit 2xl:min-w-64">
      {types.dropdowns && types.dropdowns.length > 0 && (
        <TypeFilter
          options={types.dropdowns.map((link) => {
            return { label: link.label };
          })}
        />
      )}
      {customFilters &&
        Object.keys(customFilters).map((key) => {
          return (
            <SingleSelectFilterItem
              options={customFilters[key]}
              type={key}
              onChange={(val) => {
                setFilters((prev) => ({ ...prev, [key]: val }));
              }}
            />
          );
        })}

      <PriceRange
        min={0}
        max={2500}
        value={filters.priceRange}
        setValue={(val) => {
          setFilters((prev) => ({ ...prev, priceRange: val }));
          debouncedSetSearchParams(val);
        }}
      />

      <CustomerReviewsButton
        value={filters.customerReviews}
        setValue={(val) =>
          setFilters((prev) => ({ ...prev, customerReviews: val }))
        }
      />
      <button
        onClick={() => {
          navigate(location.pathname);
          setFilters({
            type: undefined,
            customerReviews: "all",
            priceRange: "all",
            size: undefined,
          });
        }}
        className="text-white font-Lato font-800 bg-black p-2 rounded-md mt-3"
      >
        Reset All
      </button>
    </div>
  );
};
export default Filters;
