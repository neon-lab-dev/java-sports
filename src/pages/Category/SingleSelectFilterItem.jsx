import { useNavigate, useParams } from "react-router-dom";

const SingleSelectFilterItem = ({ options }) => {
  const { category, type } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">Product Type:</span>
      <div className="flex flex-col">
        {options.map(({ label }, i) => (
          <div className="flex gap-3 font-500" key={i}>
            <input
              checked={label === decodeURI(type)}
              onChange={() => {
                navigate(`/${category}/${label}`);
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
