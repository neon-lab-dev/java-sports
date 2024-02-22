const ShowNewArrivalsButton = ({ value, setValue }) => {
  return (
    <div>
      <span>New Arrivals:</span>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <input
            checked={value}
            onChange={() => setValue()}
            type="checkbox"
            id="show-new-arrivals-only"
          />
          <label htmlFor="show-new-arrivals-only">Show new Arrivals only</label>
        </div>
      </div>
    </div>
  );
};
export default ShowNewArrivalsButton;
