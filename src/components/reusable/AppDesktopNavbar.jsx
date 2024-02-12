import ACCORDION_LINKS from "@/assets/constants/accordion_links";

const AppDesktopNavbar = () => {
  return (
    <div className="mt-[20px] bg-white items-center hidden md:flex">
      <div className="flex items-center capitalize wrapper">
        <ul className="flex items-center flex-1 gap-20 pt-5 pb-6 overflow-x-scroll text-2xl leading-6 cursor-pointer snap-x font-Jakarta font-500 whitespace-nowrap">
          {ACCORDION_LINKS.map(({ dropdowns, label }, index) => (
            <li key={index} className="relative pointer snap-start group">
              <button className="transition-all group-hover:text-primary group-hover:underline">
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AppDesktopNavbar;
