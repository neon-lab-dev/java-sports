import ACCORDION_LINKS from "@/assets/constants/accordion_links";
import * as Menubar from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";

const MenubarDemo = () => {
  return (
    <div className="bg-white my-3 pt-5">
      <Menubar.Root className="wrapper flex gap-9 overflow-x-scroll snap-x snap-mandatory pb-3">
        {ACCORDION_LINKS.map((dropdown, i) => (
          <Menubar.Menu key={i}>
            <Menubar.Trigger className="text-lg sm:text-2xl snap-start cursor-default font-400 min-w-max">
              {dropdown.label}
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="min-w-40 w-full p-1 bg-white rounded-sm shadow-xl mt-3 flex flex-col gap-1"
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                {dropdown.dropdowns.map((item, i) => (
                  <Menubar.Item
                    key={i}
                    className="px-3 py-2 text-base transition-colors border min-w-max border-grey-light hover:bg-primary hover:text-white"
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Menubar.Item>
                ))}
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        ))}
      </Menubar.Root>
    </div>
  );
};

export default MenubarDemo;
