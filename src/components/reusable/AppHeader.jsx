// import { Link } from "react-router-dom";
import AppHeaderNav from "./AppHeaderNav";
import AppBreadCrumb from "./AppBreadCrumb";
import AppMegaMenu from "./AppMegaMenu";
// import HEADER_LINKS from "@/assets/constants/headerLinks";

const AppHeader = () => {
  return (
    <>
      <header>
        {/* <nav className="hidden py-4 bg-grey/1 md:block">
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
        </nav> */}
        {/* HEADER NAVBAR */}
        <AppHeaderNav />

        {/* Mega Menu */}
        <AppMegaMenu />
        <AppBreadCrumb />
      </header>
    </>
  );
};

export default AppHeader;
