import { useLocation, useNavigate, useParams } from "react-router-dom";

const TypeFilter = ({ options }) => {
  const { category, type = "All" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">Product Type:</span>
      <div className="flex flex-col">
        {options.map(({ label }, i) => (
          <div className="flex gap-3 font-500" key={i}>
            <input
              checked={label === decodeURI(type)}
              onChange={() => {
                navigate(`/${category}/${label}${location.search}`);
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

export default TypeFilter;
