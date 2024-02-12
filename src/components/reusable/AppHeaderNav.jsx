import { useRef, useState } from "react";

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
import menuIcon from "@assets/icons/menu.svg";
// @ts-ignore
import userImg from "@assets/images/user.svg";
// @ts-ignore
import chevronDownIcon from "@assets/icons/chevron-down.svg";
// @ts-ignore
import closeIcon from "@assets/icons/close.svg";
// Components
import AppSearchBar from "./AppSearchBar";
import { Link } from "react-router-dom";

const LINKS = [
  "Appreal",
  "Batting Gears",
  "Bats",
  "Balls",
  "Wicket Keeping",
  "Shoes",
  "Helmate",
  "Kitbags",
  "Protection",
  "Accessories",
  "My Account",
  "Logout",
];

const AppHeaderNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState(" 542/133 ,Lucknow");
  const sidebarRef = useRef(null);

  const user = {
    name: "Kabir Sah",
    email: "someone@gmail.com",
    phone: "5824658726",
    img: userImg,
  };

  const handleOnSearch = (e) => {
    e.preventDefault();
    console.log("Search Product !!");
  };

  const navWrapper = `flex gap-1 items-center h-7 min-w-max`;
  const navLink = `font-Jakarta text-4 font-500 leading-4 hidden lg:block`;
  const navLinkImg = "w-5 h-5 md:w-6 md:h-6";

  const toggleSidebar = () => {
    if (!sidebarRef.current) return;
    sidebarRef.current.classList.toggle("-translate-x-full");
  };

  return (
    <>
      <div className="flex flex-col items-center pt-4 bg-white md:py-5">
        <nav className="flex items-center justify-between w-full gap-8 px-6 md:gap-16 md:justify-center">
          <button className="md:hidden" onClick={toggleSidebar}>
            <img src={menuIcon} />
          </button>
          <span>
            <Link to="/">
              <img
                src={logo}
                alt="Java Sports"
                className="w-11 sm:w-14 md:min-w-24"
              />
            </Link>
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
              <Link to="#" className={navWrapper}>
                <span>
                  <img
                    src={wishlistIcon}
                    alt="Wishlist"
                    className={navLinkImg}
                  />
                </span>
                <span className={navLink}>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to="#" className={navWrapper}>
                <span>
                  <img src={cartIcon} alt="Cart" className={navLinkImg} />
                </span>
                <span className={navLink}>My Cart</span>
              </Link>
            </li>
            <Link to="/login" className={`${navWrapper} hidden md:flex`}>
              <span>
                <img src={profileIcon} alt="Cart" className={navLinkImg} />
              </span>
              <span className={navLink}>{user.name}</span>
            </Link>
          </ul>
        </nav>
        <div className="block w-full px-8 py-3 md:hidden">
          <AppSearchBar
            placeholder={"Search for “ Bats ”"}
            onSearch={handleOnSearch}
          />
        </div>
      </div>
      <aside //todo stop body scrolling when sidebar is open
        ref={sidebarRef}
        className="fixed inset-0 z-50 max-h-screen pb-4 overflow-y-scroll transition-transform -translate-x-full bg-white font-Lato h-dvh w-dvw max-w-80"
      >
        <button className="absolute p-2 top-2 right-2" onClick={toggleSidebar}>
          <img src={closeIcon} className="w-9" />
        </button>
        <div className="flex flex-col px-6 py-5">
          <div className="flex items-center justify-start gap-4 mb-3">
            <img
              src={user.img}
              alt={user.name}
              className="w-12 rounded-full aspect-square"
            />
            <span className="text-2xl font-500">{user.name}</span>
          </div>
          <span className="font-400">Email: {user.email}</span>
          <span className="font-400">Phone: {user.phone}</span>
        </div>
        <div className="flex flex-col">
          {LINKS.map((link, i) => (
            <button
              key={link}
              className={`flex items-center justify-between px-6 py-3 border-grey-light font-700 ${i === 0 ? "border-y" : "border-b"} ${link.toLowerCase() === "my account" ? "mt-4" : "mt-0"} ${link.toLowerCase() === "logout" ? "text-primary border-none" : ""}`}
            >
              <span>{link}</span>
              {!(link.toLowerCase() === "logout") ? (
                <img src={chevronDownIcon} className="w-6" />
              ) : (
                <span />
              )}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default AppHeaderNav;
