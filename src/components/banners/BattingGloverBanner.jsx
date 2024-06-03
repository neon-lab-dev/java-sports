import banner1 from "@/assets/banners/banner3.png";
import AppCTAButton from "../reusable/AppCTAButton";

const BattingGloversBanner = () => {
  return (
    <>
      <div className="w-full h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute bottom-[20%] left-[9.34%] lg:bottom-[27%] ">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default BattingGloversBanner;
