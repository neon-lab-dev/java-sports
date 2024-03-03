import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import * as Menubar from "@radix-ui/react-menubar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppMegaMenu = () => {
  const [activeValue, setActiveValue] = useState("");
  const [{ parent, child }, setIsHovering] = useState({
    parent: false,
    child: false,
  });

  useEffect(() => {
    if (!parent && !child) setActiveValue("");
  }, [parent, child]);

  return (
    <div className="bg-white mt-3 pt-5 hidden lg:block">
      <div className="flex justify-center items-center wrapper">
        <Menubar.Root
          className="flex gap-9 overflow-x-scroll snap-x snap-mandatory pb-3 w-fit"
          value={activeValue}
        >
          {ACCORDION_LINKS.map((dropdown, i) => (
            <Menubar.Menu key={i} value={dropdown.label}>
              <Menubar.Trigger
                onMouseEnter={() => {
                  setIsHovering((prev) => ({ ...prev, parent: true }));
                  setActiveValue(dropdown.label);
                }}
                onMouseLeave={() =>
                  setIsHovering((prev) => ({ ...prev, parent: false }))
                }
                className={`text-lg sm:text-[1.2rem] snap-start font-500 min-w-max transition-all outline-none ${
                  activeValue === dropdown.label
                    ? "text-primary underline underline-offset-2"
                    : "text-black"
                }`}
              >
                {dropdown.dropdowns ? (
                  dropdown.label
                ) : (
                  <Link to={`/${dropdown.label}`}>{dropdown.label}</Link>
                )}
              </Menubar.Trigger>
              {dropdown.dropdowns && (
                <Menubar.Portal>
                  <Menubar.Content
                    onMouseEnter={() =>
                      setIsHovering((prev) => ({ ...prev, child: true }))
                    }
                    onMouseLeave={() =>
                      setIsHovering((prev) => ({ ...prev, child: false }))
                    }
                    align="center"
                    className="pt-4"
                  >
                    <div className="min-w-40 w-full p-1 bg-white rounded-sm shadow-xl flex flex-col gap-1">
                      {dropdown?.dropdowns?.map((item, i) => (
                        <Menubar.Item key={i} className="outline-none">
                          <Link
                            to={`/${dropdown.label}/${item.label}`}
                            className="w-full h-full px-3 py-2 text-base cursor-pointer transition-colors min-w-max border-grey-light hover:bg-primary hover:text-white block"
                          >
                            {item.label}
                          </Link>
                        </Menubar.Item>
                      ))}
                    </div>
                  </Menubar.Content>
                </Menubar.Portal>
              )}
            </Menubar.Menu>
          ))}
        </Menubar.Root>
      </div>
    </div>
  );
};

export default AppMegaMenu;
