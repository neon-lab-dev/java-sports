import { MoonLoader } from "react-spinners";

const AppLoading = ({ className = "", ...props }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-[calc(100vh-143.18px)] lg:h-[calc(100vh-205px)] ${className}`}
      {...props}
    >
      <MoonLoader className="text-primary" size={30} />
    </div>
  );
};

export default AppLoading;
