// @ts-nocheck
import AppWishlistCard from "@/components/reusable/AppWishlistCard";
import AppProductsYouMightLike from "@/components/reusable/AppProductsYouMightLike";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return (
      <section className="bg-white">
        <div className="flex justify-center items-center h-[50vh] w-full">
          <span className="text-2xl text-grey/6 text-center ">
            Please login to see your wishlist
          </span>
        </div>
      </section>
    );
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <div className="bg-white pl-[10%] max-sm:pl-[5%] flex flex-col gap-4 pt-4">
            <div>
              <span className="font-700 font-Lato text-2xl">
                Wishlist- {user.wishlist.length} items
              </span>
            </div>
            <div className=" bg-white flex max-lg:justify-center pb-10">
              {user.wishlist.length > 0 ? (
                <div className="bg-white grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 ">
                  {user.wishlist.map((item) => (
                    <AppWishlistCard key={item._id} productId={item.product} />
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-[50vh] w-full">
                  <span className="text-2xl text-grey-light text-center ">
                    Your wishlist is empty
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="m-6"></div>
        <AppProductsYouMightLike />
      </div>
    </>
  );
};
export default Wishlist;
