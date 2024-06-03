import banner1 from "@/assets/banners/banner1.png";
import AppCTAButton from "../reusable/AppCTAButton";

const CricketBatBanner = () => {
  return (
    <>
      <div className="w-full h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute bottom-[31%] xs:bottom-[35%] xl:bottom-[37%] left-[6%]">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default CricketBatBanner;
