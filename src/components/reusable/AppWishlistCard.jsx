// @ts-nocheck
// @ts-ignore
import { getAProduct, removeFromWishlist } from "@/api/products";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import close from "@assets/icons/Wishlist-close.svg";
import noImage from "@assets/images/no-image.jpg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { splitString } from "@/utils/splitString";
import CardSkeleton from "../skeletons/CardSkeleton";
import { updateCartItemsCount } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { getPriceAfterDiscount } from "@/utils/getPriceAfterDiscount";
const AppWishlistCard = ({ productId }) => {
  const dispatch = useDispatch();
  const cardWrapper = `  w-[300px]  max-xl:w-[280px] rounded-2xl bg-white p-6 border `;
  const imageWrapper = `bg-grey/1 w-[25w  0px] h-[240px] max-xl:w-[230px] rounded-2xl my-2 p-8 flex justify-center items-center  `;
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getAProduct(productId),
  });

  const handleAddToCart = () => {
    const items = getLocalStorage("cartItems", []);
    //remove the item if it is already added
    const newItems = items.filter((item) => item.id !== data.product._id);

    const updatedItems = [
      ...newItems,
      {
        id: data.product._id,
        product: data.product._id,
        quantity: 1,
        color: data.product.color,
        size: data.product.sizes[0].size,
        name: data.product.name,
        image: data.product.images[0].url,
        side: data.product.sub_category2 === "Gloves" ? "Left" : undefined,
        price: getPriceAfterDiscount(
          data?.product.sizes[0].basePrice,
          data?.product.sizes[0].discountedPercent
        ),
        basePrice: data.product.sizes[0].basePrice,
      },
    ];
    setLocalStorage("cartItems", updatedItems);
    toast.success(`Added ${data.product.name} to cart!`);
    dispatch(updateCartItemsCount());
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => removeFromWishlist(id),
    onSuccess: () => {
      toast.success(`Removed ${data.product.name} from wishlist!`);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  if (isLoading) return <CardSkeleton className="h-full" />;
  if (isError) return null;
  return (
    <article className={`${cardWrapper} card-shadow`}>
      <div className="flex justify-between items-center">
        <span className="font-Lato font-700 text-xs text-grey-light">
          Java Sports
        </span>
        <button
          disabled={isPending}
          onClick={() => {
            mutate(data.product._id);
          }}
          className="cursor-pointer"
        >
          {isPending ? (
            <ClipLoader size={26} color="#00B553" />
          ) : (
            <img src={close} alt="Wishlist" />
          )}
        </button>
      </div>
      <Link
        to={`/product/${data.product._id}`}
        className={`${imageWrapper} overflow-hidden group`}
      >
        <img
          src={data.product?.images[0]?.url || noImage}
          alt={data.product.name}
          onError={(e) => (e.currentTarget.src = noImage)} // set this image if the provided url does not work
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-all"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <Link
          to={`/product/${data.product._id}`}
          className="font-Lato font-700 text-[16px] hover:underline hover:text-blue transition-all"
        >
          {data.product.name.split(" ").slice(0, 4).join(" ")}
        </Link>
        <div className="flex justify-between items-center">
          <ul className="flex  items-center gap-2">
            <li className="font-Lato font-700 text-lg">
              <span>
                ₹
                {getPriceAfterDiscount(
                  data?.product.sizes[0].basePrice,
                  data?.product.sizes[0].discountedPercent
                )}
              </span>
            </li>
            <li className="font-Lato font-500 text-sm line-through">
              <span>₹{data.product.sizes[0].basePrice}</span>
            </li>
            <li className="font-Lato font-700 text-[13px] text-green-400">
              <span>{data.product.sizes[0].discountedPercent || 0}% off</span>
            </li>
          </ul>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-primary/2 text-white font-500 text-lg  p-1 rounded"
        >
          Move to Cart
        </button>
      </div>
    </article>
  );
};
export default AppWishlistCard;
