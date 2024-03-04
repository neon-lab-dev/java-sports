// @ts-nocheck
// @ts-ignore
import { getAProduct, removeFromWishlist } from "@/api/products";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import close from "@assets/icons/Wishlist-close.svg";
import noImage from "@assets/images/no-image.jpg";

import bat from "@assets/images/bats-img.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { splitString } from "@/utils/splitString";
const AppWishlistCard = ({ productId }) => {
  const cardWrapper = `  w-[300px]  max-xl:w-[280px] rounded-2xl bg-white p-6 border `;
  const imageWrapper = `bg-grey/1 w-[25w  0px] h-[240px] max-xl:w-[230px] rounded-2xl my-2 p-8 flex justify-center items-center  `;
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getAProduct(productId),
  });

  const handleAddToCart = () => {
    const items = getLocalStorage("cartItems", []);
    let updatedItems = [];
    const isAlreadyAdded = items.find((item) => item.id === data.product._id);
    if (isAlreadyAdded) {
      updatedItems = items.map((item) =>
        item.id === data.product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [
        ...items,
        {
          id: data.product._id,
          product: data.product._id,
          quantity: 1,
          color: data.product.color,
          size: splitString(data.product.size)[0],
          name: data.product.name,
          image: data.product.images[0].url,
          price: data.product.discountedprice,
          basePrice: data.product.baseprice,
        },
      ];
    }
    setLocalStorage("cartItems", updatedItems);
    toast.success(`Added ${data.product.name} to cart!`);
    //remove from wishlist
    removeFromWishlist(data.product._id).then(() => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    });
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

  if (isLoading) return <p>Loading...</p>;
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
        <span className="font-Lato font-700 text-[16px]">
          {data.product.name.split(" ").slice(0, 4).join(" ")}
        </span>
        <div className="flex justify-between items-center">
          <ul className="flex  items-center gap-2">
            <li className="font-Lato font-700 text-lg">
              <span>₹{data.product.baseprice}</span>
            </li>
            <li className="font-Lato font-500 text-sm line-through">
              <span>₹{data.product.discountedprice}</span>
            </li>
            <li className="font-Lato font-700 text-[13px] text-green-400">
              <span>
                {calculatePercentage(
                  data.product.baseprice,
                  data.product.discountedprice
                )}
                % off
              </span>
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
