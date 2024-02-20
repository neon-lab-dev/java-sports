import NotFoundImg from "@/assets/images/404.svg";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-white">
      <div className="wrapper flex flex-col items-center justify-center pt-8 pb-12 gap-5">
        <Link to="/" className="flex gap-2 px-2 py-1 sm:gap-3 sm:px-3 sm:py-2 items-center self-start bg-grey/1 rounded-md border-2 border-[#999999]">
          <img src={arrowLeft} alt="Go Back" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center justify-center gap-4 flex-col">
          <img
            src={NotFoundImg}
            alt="Not Found"
            className="h-full w-full max-h-[70vh] max-w-full"
          />
          <span
          className="font-500 text-xl sm:text-3xl"
          >Page Not Found</span>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
