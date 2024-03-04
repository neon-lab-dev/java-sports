import { useState } from "react";
import Review from "./Review";
import crossIcon from "@/assets/icons/cross.svg";
import WriteAReview from "./WriteAReview";

const ReviewComWrapper = ({ reviews }) => {
  const [isAllReviewsOpen, setIsAllReviewsOpen] = useState(false);
  const [isWritingAReview, setIsWritingAReview] = useState(false);

  return (
    <>
      <div className="flex flex-col-reverse xl:flex-col gap-3 flex-grow">
        <div className="flex gap-2 sm:gap-12 self-end flex-col w-full mt-6 sm:flex-row justify-center xl:justify-end">
          <button
            onClick={() => setIsAllReviewsOpen(true)}
            disabled={reviews.length === 0}
            className="bg-transparent w-full sm:w-auto sm:px-12 disabled:opacity-50 py-3 rounded-md text-[#007DBC] border-2 border-[#007DBC] font-[700]"
          >
            View all reviews
          </button>
          <button
            onClick={() => setIsWritingAReview(true)}
            className="py-3 w-full sm:w-auto sm:px-16 rounded-md bg-[#007DBC] text-white font-[700]"
          >
            Write a review
          </button>
        </div>
        <div className="flex flex-col gap-3 sm:gap-8 max-w-4xl my-auto">
          {reviews.map((review, index) => {
            if (index > 1) return null;
            return (
              <Review
                key={index}
                review={review}
                showBorder={index !== reviews.length - 1}
              />
            );
          })}
          {reviews.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-3 h-full">
              <span className="text-2xl font-500">No reviews yet</span>
              <span className="text-lg text-center">
                Be the first to review this product
              </span>
            </div>
          )}
        </div>
      </div>
      {isAllReviewsOpen && (
        <>
          <div
            onClick={() => setIsAllReviewsOpen(false)}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur"
          />
          <div className="h-max p-6 sm:px-12 sm:py-8 max-h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-white overflow-x-scroll rounded-lg  w-[80vw] max-w-4xl">
            <button
              onClick={() => setIsAllReviewsOpen(false)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6"
            >
              <img src={crossIcon} alt="" />
            </button>
            <div className="flex flex-col gap-3 sm:gap-8 max-w-4xl my-auto">
              {reviews.map((review, index) => {
                return (
                  <Review
                    key={index}
                    review={review}
                    showBorder={index !== reviews.length - 1}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      {isWritingAReview && (
        <WriteAReview setIsWritingAReview={setIsWritingAReview} />
      )}
    </>
  );
};
export default ReviewComWrapper;
