import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "4 stars & above",
    value: "4",
  },
  {
    label: "3 stars & above",
    value: "3",
  },
  {
    label: "2 stars & above",
    value: "2",
  },
];

const CustomerReviewsButton = ({ value, setValue }) => {
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">Customer Reviews:</span>
      <div className="flex flex-col">
        {OPTIONS.map(({ label, value: val }, i) => (
          <div className="flex gap-3 font-500" key={i}>
            <input
              checked={val === value}
              onChange={() => {
                setValue(val);
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

export default CustomerReviewsButton;
