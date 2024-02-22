import { paramToWord } from "@/utils/paramUtils";

const MultiSelectFilterItem = ({
  title,
  options,
  value,
  setValue,
  resetValue,
}) => {
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">{title}:</span>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <input
            checked={value?.length === 0}
            onChange={() => {
              resetValue();
            }}
            type="checkbox"
            id="all"
            className="accent-black"
          />
          <label htmlFor="all">All</label>
        </div>
        {options.map((option, i) => (
          <div className="flex gap-3" key={i}>
            <input
              checked={value.includes(option)}
              onChange={() => {
                setValue(
                  value?.includes(option)
                    ? value.filter((v) => v !== option)
                    : [...value, option]
                );
              }}
              type="checkbox"
              id={option}
              className="accent-black"
            />
            <label htmlFor={option}>{paramToWord(option)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MultiSelectFilterItem;
