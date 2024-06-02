// @ts-nocheck
// @ts-ignore
import hero from "../../assets/images/Hero.svg";
import bat from "@assets/images/bat-5.svg";
import "@/index.css";

const AppAuthWrapper = ({ children }) => {
  return (
    <div className="flex max-sm:flex-col-reverse bg-white justify-center">
      <div className="m-4 flex  max-sm:flex-col-reverse bg-white justify-center">
        <div className="flex bg-black max-sm:flex-col relative max-sm:mx-5">
          <img
            src="/banner-down.png"
            alt=""
            className="absolute bottom-0 sm:hidden"
          />
          <img
            src="/banner-up.png"
            alt=""
            className="absolute top-0 right-0 sm:hidden"
          />

          <img
            src="/banner-left.png"
            alt=""
            className="absolute left-0 hidden sm:block"
          />
          <img
            src="/banner-right.png"
            alt=""
            className="absolute right-0 bottom-0 hidden sm:block"
          />

          <div className=" sign-up rotate-180 max-sm:rotate-0 z-10">
            <div className=" flex flex-col max-sm:flex-col-reverse ">
              <div className="text-white flex flex-col sm:flex-col-reverse mr-9 sm:ml-0 mt-4 sm:mt-40 gap-0 text-7xl font-900 font-Lato  p-2 max-md:text-[60px] max-sm:text-[40px]">
                <div className="flex ml-9 xs:ml-12 sm:mt-12 sm:ml-0">
                  <span className="text-[#FFB95C] text-[70px] sm:text-[90px]">
                    25
                  </span>
                  <div className="flex flex-col text-lg sm:text-xl">
                    <span>%</span>
                    <span className="text-[#FFB95C] text-[26px] sm:text-[32px]">
                      off
                    </span>
                  </div>
                </div>
                <div className="ml-12 xs:ml-16 sm:mt-16 sm:ml-0 text-xl sm:text-4xl font-300">
                  On all Java Products
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden z-10">
            <img
              className=" w-[380px] h-[740px] py-2  max-sm:h-[300px]  max-sm:rotate-90 z-10"
              src={hero}
              alt="login_image"
            />
          </div>
          <div className="sm:hidden z-10">
            <img src={bat} alt="" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppAuthWrapper;
