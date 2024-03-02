import { useNavigate, useParams } from "react-router-dom";

const TypeFilter = ({ options }) => {
  const { category, type } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">Product Type:</span>
      <div className="flex flex-col">
        {options.map(({ label, value: val }, i) => (
          <div className="flex gap-3 font-500" key={i}>
            <input
              checked={val === type}
              onChange={() => {
                navigate(`/${category}/${val}`);
              }}
              className="accent-black"
              type="checkbox"
              id={val}
            />
            <label htmlFor={val}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
