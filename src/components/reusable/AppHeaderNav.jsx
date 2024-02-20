import { useEffect, useRef, useState } from "react";

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
import chevronDownIcon from "@assets/icons/chevron-down.svg";
// @ts-ignore
import closeIcon from "@assets/icons/close.svg";
// Components
import AppSearchBar from "./AppSearchBar";
import { Link } from "react-router-dom";
import ACCORDION_LINKS from "@/assets/constants/accordion_links";
import USER from "@/assets/mockData/user";
import ACCOUNT_PAGE_TABS from "@/assets/constants/accountPageTabs";
import { paramToWord } from "@/utils/paramUtils";

const AppHeaderNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState(" 542/133 ,Lucknow");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleOnSearch = (e) => {
    e.preventDefault();
    console.log("Search Product !!");
  };

  const navWrapper = `flex gap-1 items-center h-7 min-w-max`;
  const navLink = `font-Jakarta text-4 font-500 leading-4 hidden lg:block`;
  const navLinkImg = "w-5 h-5 lg:w-6 lg:h-6";

  useEffect(() => {
    const toggleSidebar = () => {
      if (!sidebarRef.current) return;
      if (!isSidebarOpen) {
        document.body.style.overflow = "auto";
        return sidebarRef.current.classList.add("-translate-x-full");
      }
      sidebarRef.current.classList.remove("-translate-x-full");
      //stop body scrolling when sidebar is open
      document.body.style.overflow = "hidden";
    };
    toggleSidebar();
  }, [isSidebarOpen]);

  return (
    <>
      <div className="flex flex-col items-center pt-4 bg-white lg:py-5">
        <nav className="flex items-center justify-between w-full gap-8 px-6 lg:gap-16 lg:justify-center lg:h-[123.15px]">
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <img src={menuIcon} />
          </button>
          <span>
            <Link to="/">
              <img
                src={logo}
                alt="Java Sports"
                className="w-11 sm:w-14 lg:min-w-24"
              />
            </Link>
          </span>
          <div className="w-[400px] hidden lg:block">
            <AppSearchBar
              placeholder={"Search for “ Bats ”"}
              onSearch={handleOnSearch}
            />
          </div>
          <ul className="flex items-center gap-3 lg:gap-10">
            <li className={`${navWrapper} hidden xl:flex`}>
              <span>
                <img src={locationIcon} alt="Location" className={navLinkImg} />
              </span>
              <span className={navLink}>{location}</span>
            </li>
            <li>
              <Link to="/wishlist" className={navWrapper}>
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
              <Link to="cart" className={navWrapper}>
                <span>
                  <img src={cartIcon} alt="Cart" className={navLinkImg} />
                </span>
                <span className={navLink}>My Cart</span>
              </Link>
            </li>
            <Link to="/account" className={`${navWrapper} hidden lg:flex`}>
              <span>
                <img src={profileIcon} alt="Cart" className={navLinkImg} />
              </span>
              <span className={navLink}>{USER.name}</span>
            </Link>
          </ul>
        </nav>
        <div className="block w-full px-8 py-3 lg:hidden">
          <AppSearchBar
            placeholder={"Search for “ Bats ”"}
            onSearch={handleOnSearch}
          />
        </div>
      </div>
      <aside
        ref={sidebarRef}
        className="fixed inset-0 z-50 max-h-screen pb-4 overflow-y-scroll transition-transform -translate-x-full bg-white font-Lato h-dvh w-dvw max-w-80"
      >
        <button
          className="absolute p-2 top-2 right-2"
          onClick={() => setIsSidebarOpen(false)}
        >
          <img src={closeIcon} className="w-9" />
        </button>
        <div className="flex flex-col px-6 py-5">
          <div className="flex items-center justify-start gap-4 mb-3">
            <img
              src={USER.img}
              alt={USER.name}
              className="w-12 rounded-full aspect-square"
            />
            <span className="text-2xl font-500">{USER.name}</span>
          </div>
          <span className="font-400">Email: {USER.email}</span>
          <span className="font-400">Phone: {USER.phone}</span>
        </div>
        <div className="flex flex-col">
          {ACCORDION_LINKS.map((link, i) => (
            <LinkDropdown
              key={link.label}
              link={link}
              i={i}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ))}
          <LinkDropdown
            link={{
              label: "My Account",
              dropdowns: ACCOUNT_PAGE_TABS.map((tab) => ({
                label: paramToWord(tab),
                link: `/account?tab=${tab}`,
              })),
            }}
            i={ACCORDION_LINKS.length}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <LinkDropdown
            link={{
              label: "Logout",
            }}
            i={ACCORDION_LINKS.length + 1}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          onScroll={(e) => e.stopPropagation()} //todo: stop body scrolling when sidebar is open
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default AppHeaderNav;

const LinkDropdown = ({
  link: { label, dropdowns = null },
  i,
  setActiveDropdown,
  activeDropdown,
  setIsSidebarOpen,
}) => (
  <div
    className={`flex flex-col px-6 py-3 border-grey-light font-700 ${i === 0 ? "border-y" : "border-b"} ${label.toLowerCase() === "my account" ? "mt-4" : "mt-0"} ${label.toLowerCase() === "logout" ? "text-primary border-none" : ""}`}
  >
    <button
      onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
      className="flex justify-between w-full"
    >
      <span>{label}</span>
      {!(label.toLowerCase() === "logout") ? (
        <img src={chevronDownIcon} className="w-6" />
      ) : (
        <span />
      )}
    </button>
    {dropdowns && (
      <div
        className="flex flex-col justify-center gap-2 overflow-y-hidden transition-all"
        style={{
          height:
            activeDropdown === i
              ? `${(33.6 + 8) * dropdowns.length + 20}px` // 33.6 is the height of each link and 8 is the gap between each link and 20 is the padding to center the links
              : "0px",
        }}
      >
        {dropdowns.map((dropdown, i) => (
          <Link
            key={i}
            onClick={() => setIsSidebarOpen(false)}
            to={dropdown.link}
            className="px-3 py-1 border font-400 border-grey-light"
          >
            {dropdown.label}{" "}
            {dropdown.label.toLowerCase() === "recent orders" && (
              <>({USER.recentOrders.length})</>
            )}
          </Link>
        ))}
      </div>
    )}
  </div>
);
