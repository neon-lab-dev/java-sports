import { useState } from "react";

// @ts-ignore
import logo from "@assets/images/Vector.svg";
// @ts-ignore
import locationIcon from "@assets/icons/location.svg";
// @ts-ignore
import wishlistIcon from "@assets/icons/wishlist.svg";
// @ts-ignore
import cartIcon from "@assets/icons/cart.svg";
// @ts-ignore
import profileIcon from "@assets/icons/profile.svg";
// @ts-ignore
import menuIcon from "@/assets/icons/menu.svg";
// Components
import AppSearchBar from "./AppSearchBar";

const AppHeaderNav = () => {
  // @ts-ignore
  const [location, setLocation] = useState(" 542/133 ,Lucknow");

  const handleOnSearch = (e) => {
    e.preventDefault();
    console.log("Search Product !!");
  };

  const navWrapper = `flex gap-1 items-center h-7 min-w-max`;
  const navLink = `font-Jakarta text-4 font-500 leading-4 hidden lg:block`;
  const navLinkImg = "w-5 h-5 md:w-6 md:h-6";

  return (
    <div className="flex flex-col items-center pt-4 bg-white md:py-5">
      <nav className="flex items-center justify-between w-full gap-8 px-6 md:gap-16 md:justify-center">
        <button className="md:hidden">
          <img src={menuIcon} />
        </button>
        <span>
          <a href="/">
            <img src={logo} alt="Java Sports" className="w-11 sm:w-14 md:min-w-24" />
          </a>
        </span>
        <div className="w-[400px] hidden md:block">
          <AppSearchBar
            placeholder={"Search for “ Bats ”"}
            onSearch={handleOnSearch}
          />
        </div>
        <ul className="flex items-center gap-3 md:gap-6 lg:gap-10">
          <li className={`${navWrapper} hidden xl:flex`}>
            <span>
              <img src={locationIcon} alt="Location" className={navLinkImg} />
            </span>
            <span className={navLink}>{location}</span>
          </li>
          <li>
            <a href="#" className={navWrapper}>
              <span>
                <img src={wishlistIcon} alt="Wishlist" className={navLinkImg} />
              </span>
              <span className={navLink}>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#" className={navWrapper}>
              <span>
                <img src={cartIcon} alt="Cart" className={navLinkImg} />
              </span>
              <span className={navLink}>My Cart</span>
            </a>
          </li>
          <a href="/login" className={`${navWrapper} hidden md:flex`}>
            <span>
              <img src={profileIcon} alt="Cart" className={navLinkImg} />
            </span>
            <span className={navLink}>Profile</span>
          </a>
        </ul>
      </nav>
      <div className="block w-full px-8 py-3 md:hidden">
        <AppSearchBar
          placeholder={"Search for “ Bats ”"}
          onSearch={handleOnSearch}
        />
      </div>
    </div>
  );
};

export default AppHeaderNav;
