import ACCORDION_LINKS from "@/assets/constants/accordion_links";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AppDesktopNavbar = () => {
  const ulRef = useRef(null);
  return (
    <nav className="items-center justify-center hidden py-3 my-3 bg-white lg:flex overflow-hidden">
      {/* //todo bug: scroll */}
      <ul
        ref={ulRef}
        className="flex items-center justify-start gap-4 pb-2 font-semibold max-w-[80%] overflow-x-scroll snap-x snap-mandatory"
      >
        {ACCORDION_LINKS.map(({ dropdowns, label }) => (
          <AccordianLink
            key={label}
            label={label}
            dropdowns={dropdowns}
            ulRef={ulRef}
          />
        ))}
      </ul>
    </nav>
  );
};
export default AppDesktopNavbar;

const AccordianLink = ({ label, dropdowns, ulRef }) => {

  const liRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    const handleAdjustPosition = () => {
      if (!liRef.current || !divRef.current) return;
      const liPosition = liRef.current.getBoundingClientRect();
      divRef.current.style.top = `${liPosition.top + liPosition.height}px`;
      divRef.current.style.left = `${liPosition.left}px`;
      console.log("adjusting");
    };
    handleAdjustPosition();
    window.addEventListener("resize", handleAdjustPosition);
    ulRef?.current?.addEventListener("scroll", handleAdjustPosition);

    return () => {
      window.removeEventListener("resize", handleAdjustPosition);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ulRef.current?.removeEventListener("scroll", handleAdjustPosition);
    };
  }, [liRef, divRef, ulRef]);

  return (
    <li
      ref={liRef}
      key={label}
      className="px-3 py-2 cursor-pointer group font-Lato snap-start"
    >
      <button className="text-2xl group-hover:text-primary group-hover:underline font-500 min-w-max">
        {label}
      </button>
      <div
        ref={divRef}
        className="absolute z-50 hidden transition duration-500 ease-in-out opacity-0 left-1/2 group-hover:opacity-100 group-hover:block min-w-40"
      >
        <div className="relative w-full p-1 bg-white rounded-sm shadow-xl mt-3">
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
  );
};
