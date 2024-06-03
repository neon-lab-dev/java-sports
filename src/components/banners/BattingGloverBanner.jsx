import banner1 from "@/assets/banners/banner3.png";
import AppCTAButton from "../reusable/AppCTAButton";

const BattingGloversBanner = () => {
  return (
    <>
      <div className="w-full h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute bottom-[49%] right-[5.36%]">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default BattingGloversBanner;
