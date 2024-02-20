import starIcon from "@/assets/icons/star.svg";
import ReviewComWrapper from "../ReviewComWrapper,";
const CustomerReviews = ({ product }) => {
  const { reviews } = product;

  const ratingsInNumbers = () => {
    const totalRatings = reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    const r = totalRatings / reviews.length;
    return r.toFixed(2);
  };

  const getReviewPercentage = (rating) => {
    const percentage =
      (reviews.filter((review) => review.rating === rating).length /
        reviews.length) *
      100;
    return percentage;
  };

  return (
    <div className="flex flex-col xl:flex-row gap-12 h-full w-full">
      {
        <>
          <div className="flex flex-col xs:flex-row xl:flex-col gap-3 sm:gap-6 justify-center xl:justify-start">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-3 items-center justify-center">
                <img src={starIcon} alt="star" />
                <span className="text-2xl font-500">{ratingsInNumbers()}</span>
              </div>
              <span className="text-lg">{reviews.length} Reviews</span>
            </div>
            <hr className="xs:hidden xl:block" />
            <hr className="hidden xs:block xl:hidden h-44 self-center w-[0.5px] bg-[#D9D9D9]" />
            <div className="flex flex-col gap-3 flex-grow mx-auto xs:m-0 xs:flex-grow-0">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div
                  key={rating}
                  className="flex gap-3 justify-center items-center self-end text-xl"
                >
                  <img src={starIcon} alt="star" className="h-7" />
                  <span>{rating}</span>
                  <div className="relative h-2 w-48 bg-[#D9D9D9] rounded-md">
                    <span
                      className="absolute top-0 left-0 h-full bg-[#FFCE31] rounded-md"
                      style={{
                        width: `${getReviewPercentage(rating)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="xl:hidden" />
          <hr className="hidden xl:block h-96 self-center w-[0.5px] bg-[#D9D9D9]" />
          <ReviewComWrapper reviews={reviews} />
        </>
      }
    </div>
  );
};
export default CustomerReviews;
