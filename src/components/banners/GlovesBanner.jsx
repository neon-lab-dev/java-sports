import banner1 from "@/assets/banners/banner2.png";
import AppCTAButton from "../reusable/AppCTAButton";

const GloversBanner = () => {
  return (
    <>
      <style>
        {`
      .button-position {
        bottom: 30.85%;
        left: 28.59%;
      }
      media only screen and (max-width: 480px) {
        .button-position {
          bottom: 25%;
        }
      }
      `}
      </style>
      <div className="w-screen h-fit relative">
        <img src={banner1} alt="banner1" className="w-full h-fit" />
        <div className="absolute button-position">
          <AppCTAButton />
        </div>
      </div>
    </>
  );
};

export default GloversBanner;
