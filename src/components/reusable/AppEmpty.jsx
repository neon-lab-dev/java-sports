import { useNavigate } from "react-router-dom";
const AppEmpty = ({ img, to, text, btnText, state = {} }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-[400px]">
          <img src={img} className="h-36" />
          <h2 className="font-Jakarta font-500 text-lg sm:text-xl text-center">
            {text}
          </h2>
          <button
            onClick={() =>
              navigate(to, {
                state,
              })
            }
            className="rounded text-center px-3 py-2 w-full text-base sm:text-lg block uppercase font-600 min-w-32 bg-primary text-white lg:mt-4 xs:max-w-60"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AppEmpty;
