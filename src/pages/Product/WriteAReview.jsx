import { useForm } from "react-hook-form";
import crossIcon from "@/assets/icons/cross.svg";
import starIcon from "@/assets/icons/star.svg";
import starOutlineIcon from "@/assets/icons/start-outline.svg";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { writeAReview } from "@/api/products";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const WriteAReview = ({ setIsWritingAReview }) => {
  const { productId } = useParams();
  const { user } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    mutate({
      ...data,
      productId,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => writeAReview(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: () => {
      toast.success("Review submitted successfully");
      setIsWritingAReview(false);
      reset();
      queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });
    },
  });

  return (
    <>
      <div
        onClick={() => setIsWritingAReview(false)}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
        className="h-max p-6 sm:px-12 sm:py-8  w-max max-h-[80vh] max-w-[95%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-white overflow-x-scroll rounded-lg"
      >
        <button
          type="reset"
          onClick={() => {
            setIsWritingAReview(false);
            reset();
          }}
          className="fixed top-4 right-4 sm:top-6 sm:right-6"
        >
          <img src={crossIcon} alt="" />
        </button>
        <div className="flex flex-col gap-3">
          <span className="font-600 text-2xl">Write a review</span>
          <div className="flex gap-4 items-center">
            <span>Rate the product</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  type="button"
                  role="button"
                  onClick={() => setValue("rating", rating)}
                  key={rating}
                >
                  <img
                    src={watch("rating") >= rating ? starIcon : starOutlineIcon}
                    alt="star"
                    className="h-5"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="comment">Write the Comments :</label>
            <textarea
              id="comment"
              className="border-2 border-[#E4E4E4] rounded-md p-3 max-w-full h-36 sm:h-44 outline-none resize-none w-[700px]"
              placeholder="Write your comments here"
              {...register("comment", { required: true, minLength: 10 })}
            />
            {errors.comment && (
              <span className="text-primary text-xs">
                This comment is too short.
              </span>
            )}
          </div>
          <button
            disabled={!!errors.comment}
            type="submit"
            className="bg-black text-white py-2.5 rounded-md self-end px-12 sm:px-24 disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};
export default WriteAReview;
