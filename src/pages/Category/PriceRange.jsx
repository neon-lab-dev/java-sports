const PriceRange = ({ min, max, value, setValue }) => {
  return (
    <div>
      <span>
        Price Range:
        {value !== "all" && `${value}+`}
      </span>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <input
            checked={value === "all"}
            onChange={(e) => {
              setValue(e.target.checked ? "all" : min);
            }}
            type="checkbox"
            id="all"
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="flex justify-between w-full">
          <span>{min}</span>
          <span>{max}</span>
        </div>
        <input
          value={value === "all" ? min : value}
          onChange={(e) => setValue(e.target.value)}
          type="range"
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};
export default PriceRange;
