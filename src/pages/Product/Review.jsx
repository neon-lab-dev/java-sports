import starIcon from "@/assets/icons/star.svg";
import thumbsupIcon from "@/assets/icons/thumbs-up.svg";
import toast from "react-hot-toast";

const Review = ({ review, showBorder }) => {
  const wasHelpful = () => {
    toast.success("Thanks for your feedback");
  };
  return (
    <div
      className={`flex flex-col gap-3 lg:p-6 pb-4 sm:pb-5 ${
        showBorder ? "border-b-2 border-[#D9D9D9]" : ""
      }`}
    >
      <div className="flex gap-2 items-center">
        <img
          src={review.img}
          alt="star"
          className="w-9 h-9 sm:h-12 sm:w-12 rounded-full object-cover object-center"
        />
        <span className="text-xl sm:text-2xl font-500">{review.name}</span>
      </div>
      <div className="flex items-center text-sm gap-6">
        <span>{review.date}</span>
        <span>{review.time}</span>
      </div>
      <div className="flex gap-1">
        {Array(review.rating)
          .fill()
          .map((_, index) => (
            <img key={index} src={starIcon} alt="star" className="h-5 sm:h-6" />
          ))}
      </div>
      <p className="font-Lato text-black text-sm sm:text-base leading-6 lg:w-[80%]">
        {review.description}
      </p>
      <button
        onClick={wasHelpful}
        className="flex gap-3 items-center hover:opacity-60 transition-all"
      >
        <img src={thumbsupIcon} alt="thumbsup" className="scale-90 sm:scale-100" />
        <span className="text-[#47617A] text-sm sm:text-base">Was Helpful</span>
      </button>
    </div>
  );
};
export default Review;
