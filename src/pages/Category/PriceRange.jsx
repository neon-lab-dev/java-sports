const PriceRange = ({ min, max, value, setValue }) => {
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <div className="text-lg font-700 flex gap-3 items-center">
        <span>Price Range:</span>
        <span className="text-base font-600 opacity-60">
          {value !== "all" && `₹${value}+`}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-3">
          <input
            checked={value === "all"}
            onChange={(e) => {
              setValue(e.target.checked ? "all" : min);
            }}
            type="checkbox"
            id="all"
            className="accent-black"
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="flex justify-between w-full">
          <span>₹{min}</span>
          <span>₹{max}</span>
        </div>
        <input
          value={value === "all" ? min : value}
          onChange={(e) => setValue(e.target.value)}
          type="range"
          min={min}
          max={max}
          className="accent-primary/2 range-field"
        />
      </div>
    </div>
  );
};
export default PriceRange;
