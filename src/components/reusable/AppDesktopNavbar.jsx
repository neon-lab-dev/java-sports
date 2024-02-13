import ACCORDION_LINKS from "@/assets/constants/accordion_links";
import { Link } from "react-router-dom";

const AppDesktopNavbar = () => {
  return (
    <nav className="items-center justify-center hidden py-3 my-3 bg-white lg:flex"> 
    {/* //todo bug: scroll */}
      <ul className="flex items-center justify-start gap-4 font-semibold max-w-[80%]">
        {ACCORDION_LINKS.map(({ dropdowns, label }) => (
          <li key={label} className="relative px-3 py-2 cursor-pointer group font-Lato">
            <button className="text-2xl group-hover:text-primary group-hover:underline font-500 min-w-max">
              {label}
            </button>
            <div className="absolute z-50 invisible transition duration-500 ease-in-out transform -translate-x-1/2 translate-y-0 opacity-0 left-1/2 group-hover:translate-y-5 group-hover:opacity-100 top-6 group-hover:visible group-hover:transform min-w-40">
              <div className="relative w-full p-1 bg-white rounded-sm shadow-xl">
                <div className="relative z-10">
                  <div className="flex flex-col gap-1">
                    {dropdowns.map(({ label, link }) => (
                      <Link
                        key={label}
                        to={link}
                        className="px-3 py-2 text-base transition-colors border min-w-max border-grey-light hover:bg-primary hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default AppDesktopNavbar;
