const ShowNewArrivalsButton = ({ value, setValue }) => {
  return (
    <div className="flex flex-col gap-1 font-Lato">
      <span className="text-lg font-700">New Arrivals:</span>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <input
            checked={value}
            onChange={() => setValue()}
            type="checkbox"
            className="accent-black"
            id="show-new-arrivals-only"
          />
          <label htmlFor="show-new-arrivals-only">Show new Arrivals only</label>
        </div>
      </div>
    </div>
  );
};
export default ShowNewArrivalsButton;
