import banner1 from "@/assets/banners/banner4.png";
import AppCTAButton from "../reusable/AppCTAButton";

const EnglishWillBatBanner = () => {
  return (
    <>
      <div className="w-full h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute bottom-[31%] left-[3.48%]">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default EnglishWillBatBanner;
