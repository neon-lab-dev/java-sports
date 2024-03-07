// @ts-nocheck
import AppWishlistCard from "@/components/reusable/AppWishlistCard";
import AppProductsYouMightLike from "@/components/reusable/AppProductsYouMightLike";
import { useSelector } from "react-redux";
import AppEmpty from "@/components/reusable/AppEmpty";
import forgotPassword from "@/assets/images/forgot-password.svg";
import nothing from "@/assets/images/nothing.svg";

const Wishlist = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return (
      <AppEmpty
        btnText="Login"
        text="Please login to view your wishlist"
        to="/login"
        img={forgotPassword}
      />
    );
  }

  if (user.wishlist.length === 0)
    return (
      <AppEmpty
        text="Your wishlist is empty"
        img={nothing}
        btnText="Continue Shopping"
        to="/"
      />
    );
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white">
          <div className="wrapper flex flex-col gap-4 pt-6">
              <span className="font-700 font-Lato text-2xl">
                Wishlist- {user.wishlist.length} items
              </span>
            <div className=" bg-white flex max-lg:justify-center pb-10">
              {user.wishlist.length > 0 && (
                <div className="bg-white grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 ">
                  {user.wishlist.map((item) => (
                    <AppWishlistCard key={item._id} productId={item.product} />
                  ))}
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
