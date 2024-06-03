import banner1 from "@/assets/banners/banner4.png";
import AppCTAButton from "../reusable/AppCTAButton";

const EnglishWillBatBanner = () => {
  return (
    <>
      <div className="w-screen h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute bottom-[31.85%] left-[5.48%]">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default EnglishWillBatBanner;
