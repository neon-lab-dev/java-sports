import * as Menubar from "@radix-ui/react-menubar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppLogoutDropdown = ({
  name,
  navWrapper,
  navLink,
  navLinkImg,
  profileIcon,
  logoutMutation,
}) => {
  const [activeValue, setActiveValue] = useState("");
  const [{ parent, child }, setIsHovering] = useState({
    parent: false,
    child: false,
  });

  useEffect(() => {
    if (!parent && !child) setActiveValue("");
  }, [parent, child]);
  return (
    <Menubar.Root value={activeValue}>
      <Menubar.Menu value="account">
        <Menubar.Trigger
          className={`${navWrapper} hidden lg:flex outline-none`}
          onMouseEnter={() => {
            setIsHovering((prev) => ({ ...prev, parent: true }));
            setActiveValue("account");
          }}
          onMouseLeave={() =>
            setIsHovering((prev) => ({ ...prev, parent: false }))
          }
        >
          <span>
            <img src={profileIcon} alt="Cart" className={navLinkImg} />
          </span>
          <span className={navLink}>{name}</span>
        </Menubar.Trigger>
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
            onClick={() => {
              setIsHovering((prev) => ({ ...prev, child: false }));
              setActiveValue("");
            }}
          >
            <div className="min-w-40 w-full p-1 bg-white rounded-sm card-shadow flex flex-col gap-1">
              <Menubar.Item className="outline-none">
                <Link
                  to="/account"
                  className="w-full h-full px-3 py-2 text-base cursor-pointer transition-colors min-w-max border-grey-light hover:bg-primary hover:text-white flex gap-3"
                >
                  Account
                </Link>
                <button
                  onClick={logoutMutation}
                  className="w-full h-full px-3 py-2 text-base cursor-pointer transition-colors min-w-max border-grey-light hover:bg-primary hover:text-white flex gap-3"
                >
                  Logout
                </button>
              </Menubar.Item>
            </div>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};
export default AppLogoutDropdown;
