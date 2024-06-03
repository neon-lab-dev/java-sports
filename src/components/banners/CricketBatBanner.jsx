import banner1 from "@/assets/banners/banner1.png";
import AppCTAButton from "../reusable/AppCTAButton";

const CricketBatBanner = () => {
  return (
    <>
      <style>
        {`
      .button-position {
        bottom: 31%;
        left: 7.76%;
      }
      media only screen and (max-width: 480px) {
        .button-position {
          bottom: 25%;
        }
      }
      `}
      </style>
      <div className="w-full h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute button-position">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default CricketBatBanner;
