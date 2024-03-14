import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const SingleSelectFilterItem = ({ options, type: filterKey }) => {
  const { category, type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">
        {filterKey[0].toUpperCase() + filterKey.slice(1)}:
      </span>
      <div className="flex flex-col">
        {options.map((label, i) => (
          <div className="flex gap-3 font-500" key={i}>
            <input
              checked={label === decodeURI(searchParams.get(filterKey))}
              onChange={() => {
                setSearchParams({ [filterKey]: label });
              }}
              className="accent-black"
              type="checkbox"
              id={label}
            />
            <label htmlFor={label}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleSelectFilterItem;
