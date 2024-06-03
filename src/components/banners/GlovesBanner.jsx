import banner1 from "@/assets/banners/banner2.png";
import AppCTAButton from "../reusable/AppCTAButton";

const GloversBanner = () => {
  return (
    <>
      <div className="w-full h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute bottom-[29%] left-[6.39%]">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default GloversBanner;
