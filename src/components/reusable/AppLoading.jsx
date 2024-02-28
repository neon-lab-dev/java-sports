import { MoonLoader } from "react-spinners";

const AppLoading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-143.18px)] lg:h-[calc(100vh-205px)]">
      <MoonLoader className="text-primary" size={30} />
    </div>
  );
};

export default AppLoading;
