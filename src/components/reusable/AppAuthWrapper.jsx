// @ts-nocheck
// @ts-ignore
import bat from "@assets/images/auth-banner-sm.png";
import batLg from "@assets/images/auth-banner-sm.png";

import "@/index.css";

const AppAuthWrapper = ({ children }) => {
  return (
    <div className="flex max-sm:flex-col-reverse bg-white justify-center">
      <div className="m-4 flex  max-sm:flex-col-reverse bg-white justify-center">
        <div className="flex bg-black max-sm:flex-col relative max-sm:mx-5">
          <img src={bat} alt="bat" className="sm:hidden object-contain" />
          <img src={batLg} alt="bat" className="max-sm:hidden w-fit h-full object-contain object-top" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppAuthWrapper;
