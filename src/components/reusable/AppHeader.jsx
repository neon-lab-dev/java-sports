import { Link } from "react-router-dom";
import AppHeaderNav from "./AppHeaderNav";

// @ts-ignore
import Facebook from "@/assets/icons/facebook.svg";
// @ts-ignore
import Instagram from "@/assets/icons/instagram.svg";
import AppMegaMenu from "./AppMegaMenu";

const HEADER_LINKS = {
  socialLinks: [
    {
      link: "https://facebook.com",
      icon: Facebook,
      label: "Facebook",
    },
    {
      link: "https://instagram.com",
      icon: Instagram,
      label: "Instagram",
    },
  ],
  others: [
    {
      path: "/about",
      label: "About Us",
    },
    {
      path: "/payment-delivery",
      label: "Payment & delivery",
    },
    {
      path: "/contact",
      label: "Contact Us",
    },
    {
      path: "/help",
      label: "Help",
    },
  ],
};

const AppHeader = () => {
  return (
    <>
      <header>
        <nav className="hidden py-4 bg-grey/1 md:block">
          <div className="wrapper flex justify-between items-center text-grey-dark text-[12px] font-[500] font-Jakarta">
            <ul className="flex gap-8">
              {HEADER_LINKS.socialLinks.map(({ label, link, icon }) => (
                <li key={label}>
                  <Link to={link} target="_blank" rel="noreferrer">
                    <img src={icon} alt={label} />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex capitalize gap-9">
              {HEADER_LINKS.others.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* HEADER NAVBAR */}
        <AppHeaderNav />

        {/* Mega Menu */}
        <AppMegaMenu />
      </header>
    </>
  );
};

export default AppHeader;
