import { useEffect, useRef, useState } from "react";
import logo from "@assets/images/Vector.svg";
import locationIcon from "@assets/icons/location.svg";
import wishlistIcon from "@assets/icons/wishlist.svg";
import cartIcon from "@assets/icons/cart.svg";
import profileIcon from "@assets/icons/profile.svg";
import menuIcon from "@assets/icons/menu.svg";
import chevronDownIcon from "@assets/icons/chevron-down.svg";
import closeIcon from "@assets/icons/close.svg";
import AppSearchBar from "./AppSearchBar";
import { Link, useNavigate } from "react-router-dom";
import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import ACCOUNT_PAGE_TABS from "@/assets/constants/accountPageTabs";
import { useSelector } from "react-redux";
import { paramToWord } from "@/utils/paramUtils";
import avatar from "@assets/images/avatar.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/api/user";
import toast from "react-hot-toast";
import AppLogoutDropdown from "./AppLogoutDropdown";

const AppHeaderNav = () => {
  const { isAuthenticated, user, cartItemsCount } = useSelector(
    (state) => state.user
  );
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [location, setLocation] = useState("India");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleOnSearch = (q) => {
    navigate(`/search?q=${q}`);
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

  // Logout mutation
  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["user"],
        })
        .then(() => {
          toast.success("Logged out successfully");
          navigate("/");
        })
        .catch((err) => {
          toast.error(err);
        });
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center pt-4 lg:py-5 wrapper">
        <nav className="flex items-center justify-between w-full gap-8 lg:gap-16">
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <img src={menuIcon} />
          </button>
          <span>
            <Link to="/">
              <img
                src={logo}
                alt="Java Sports"
                className="w-9 sm:w-12 lg:min-w-[85px] lg:h-[85px]"
              />
            </Link>
          </span>
          <div className="w-[400px] lg:w-full hidden lg:block">
            <AppSearchBar
              placeholder="Search by product name"
              onSearch={handleOnSearch}
            />
          </div>
          <ul className="flex items-center gap-3 lg:gap-5">
            <li className={`${navWrapper} hidden xl:flex`}>
              <span>
                <img src={locationIcon} alt="Location" className={navLinkImg} />
              </span>
              <span className={navLink}>{location}</span>
            </li>
            <li>
              <Link to="/wishlist" className={navWrapper}>
                <span className="relative">
                  <img
                    src={wishlistIcon}
                    alt="Wishlist"
                    className={navLinkImg}
                  />
                  {/* //wishlist count */}
                  {user?.wishlist?.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      {user?.wishlist?.length}
                    </span>
                  )}
                </span>
                <span className={navLink}>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className={navWrapper}>
                <span className="relative">
                  <img src={cartIcon} alt="Cart" className={navLinkImg} />
                  {/* //cart count */}
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </span>
                <span className={navLink}>My Cart</span>
              </Link>
            </li>
            {!isAuthenticated ? (
              <Link to="/login" className={`${navWrapper} hidden lg:flex`}>
                <span>
                  <img src={profileIcon} alt="Cart" className={navLinkImg} />
                </span>
                <span className={navLink}>Login</span>
              </Link>
            ) : (
              <AppLogoutDropdown
                name={user.full_name}
                navWrapper={navWrapper}
                navLinkImg={navLinkImg}
                navLink={navLink}
                profileIcon={profileIcon}
                avatar={user?.avatar?.url || avatar}
                logoutMutation={mutate}
              />
            )}
          </ul>
        </nav>
        <div className="block w-full py-3 lg:hidden">
          <AppSearchBar
            placeholder="Search by product name"
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
          {isAuthenticated && (
            <>
              <div className="flex items-center justify-start gap-4 mb-3">
                <img
                  src={user?.avatar?.url || avatar}
                  alt={user.full_name}
                  className="w-12 rounded-full aspect-square object-cover object-center"
                />
                <span className="text-2xl font-500">{user.full_name}</span>
              </div>
              <span className="font-400">Email: {user.email}</span>
              <span className="font-400">Phone: {user.phoneNo}</span>
            </>
          )}
        </div>
        <div className="flex flex-col">
          {ACCORDION_LINKS.map((link, i) => (
            <LinkDropdown
              key={i}
              links={{
                label: link.label,
                dropdowns: link.dropdowns?.map((dropdown) => ({
                  label: dropdown.label,
                  link: `/${link.label}/${dropdown.label}`,
                })),
              }}
              i={i}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ))}
          {isAuthenticated && (
            <LinkDropdown
              links={{
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
          )}

          {isAuthenticated && (
            <div className="px-6 py-3 mt-2 font-700 text-primary">
              <button
                className="flex justify-between w-full"
                onClick={() => {
                  setIsSidebarOpen(false);
                  mutate();
                }}
              >
                <span>Logout</span>
              </button>
            </div>
          )}
          {!isAuthenticated && (
            <Link to="/login" className="px-6 py-3 font-700 mt-2 text-primary">
              <button
                className="flex justify-between w-full"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Login</span>
              </button>
            </Link>
          )}
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          onScroll={(e) => e.stopPropagation()} //todo: stop body scrolling when sidebar is open
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AppHeaderNav;

const LinkDropdown = ({
  links: { label, dropdowns = null },
  i,
  setActiveDropdown,
  activeDropdown,
  setIsSidebarOpen,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col px-6 py-3 font-700 ${i === 0 ? "border-y" : "border-b"} ${label.toLowerCase() === "my account" ? "mt-4" : "mt-0"} ${label.toLowerCase() === "logout" ? "text-primary border-none" : ""}`}
    >
      <button
        onClick={() => {
          setActiveDropdown(activeDropdown === i ? null : i);
          if (!dropdowns) {
            navigate(`/${label}`);
            setIsSidebarOpen(false);
          }
        }}
        className="flex justify-between w-full"
      >
        <span>{label}</span>
        {dropdowns ? <img src={chevronDownIcon} className="w-6" /> : <span />}
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
              className="px-3 py-1 font-400"
            >
              {dropdown.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
