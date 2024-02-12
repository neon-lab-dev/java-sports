import { MoonLoader } from "react-spinners";

const AppLoading = () => {
  return (
    <div className="flex items-center justify-center w-full h-52">
      <MoonLoader className="text-primary" size={30} />
    </div>
  );
};

export default AppLoading;
