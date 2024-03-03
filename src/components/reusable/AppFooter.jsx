// @ts-nocheck
import logo from "@assets/images/Vector.svg";
import plus from "@assets/images/plus.svg";
import minus from "@assets/images/minus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import FOOTER_LINKS from "@/assets/constants/footerLinks";

const LINKS = {
  exploreOurRange: [
    {
      title: "Bat",
      href: "/Bat/All",
    },
    {
      title: "Ball",
      href: "/Ball",
    },
    {
      title: "Protective Gear",
      href: "/Protection/All",
    },
    {
      title: "Foot Wear",
      href: "/Batting Gear/Leg Guard",
    },
    {
      title: "Clothing",
      href: "/Clothing/All",
    },
    {
      title: "Accessories",
      href: "/Accessories/All",
    },
  ],
};

const AppFooter = () => {
  const [toggledGroup, setToggledGroup] = useState(null);

  return (
    <div className="flex flex-col px-14 py-10 pt-16 gap-2 max-sm:px-5 font-Lato">
      <div className=" flex gap-6 flex-col 2xl:flex-row 3xl:wrapper">
        <div className="flex justify-center">
          <img className="p-1" src={logo} alt="logo" />
        </div>
        <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
          {FOOTER_LINKS.internal.map((link, index) => (
            <div key={index} className="flex flex-col gap-3">
              <button className="flex items-center justify-between cursor-pointer">
                <span className="font-bold uppercase">{link.label}</span>
                {/* <img src={MenuToggle ? minus : plus} alt="plus" /> */}
              </button>
              <ul className="flex flex-col gap-1 list-disc text-sm px-6">
                {link.links.map((item, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-800">
                    {item.url ? (
                      <Link to={item.url}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {FOOTER_LINKS.external.map((link, index) => (
            <div key={index} className="flex flex-col gap-3">
              <button className="flex items-center justify-between cursor-pointer">
                <span className="font-bold uppercase">{link.label}</span>
              </button>
              <ul className="flex flex-col gap-1 text-sm px-2">
                {link.links.map((item, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-800">
                    <Link to={item.url} target="_blank" className="flex gap-3 ">
                      <img src={item.logo} alt="" />
                      <span className=" min-w-fit">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="h-0.5px bg-gray-300" />
      </div>
      <div className="items-center flex justify-center">
        <span className="">© 2024 Java Sports. All rights reserved.</span>
      </div>
    </div>
  );
};
export default AppFooter;
