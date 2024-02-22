const MultiSelectFilterItem = ({ title, options, value, setValue }) => {
  return (
    <div>
      <span>{title}</span>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <input
            checked={value.length === 0}
            onChange={() => {
              setValue("all");
            }}
            type="checkbox"
            id="all"
          />
          <label htmlFor="all">All</label>
        </div>
        {options.map((option, i) => (
          <div className="flex gap-3" key={i}>
            <input
              checked={value.includes(option)}
              onChange={() => {
                setValue(
                  value.includes(option)
                    ? value.filter((v) => v !== option)
                    : [...value, option]
                );
              }}
              type="checkbox"
              id={option}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MultiSelectFilterItem;
