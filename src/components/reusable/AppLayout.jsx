import { useEffect, useState } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppRestoreScroll from "./AppRestoreScroll";
import { pageview, timing } from "react-ga";
import { useLocation } from "react-router-dom";

/**
 * AppLayout component
 * This component is a layout wrapper for the whole app
 */
const AppLayout = ({ children }) => {
  const [startTime, setStartTime] = useState(Date.now());
  const location = useLocation();
  useEffect(() => {
    {
      import.meta.env.PROD &&
        // track page view on production only
        pageview(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

  //
  useEffect(() => {
    return () => {
      const endTime = Date.now();
      const diffTime = endTime - startTime;

      timing({
        category: "Duration of user on page",
        variable: location.pathname,
        value: diffTime, // in milliseconds
        label: "Duration",
      });
    };
  }, [location.pathname]);

  useEffect(() => {
    setStartTime(Date.now());
  }, [location.pathname]);

  //disable inspect mode in production
  useEffect(() => {
    if (import.meta.env.PROD) {
      const disableInspectMode = (e) => {
        e.preventDefault();
        return false;
      };

      // disable right click
      window.addEventListener("contextmenu", disableInspectMode);

      // disable shortcut keys for inspect and view source ie F12, Ctrl+Shift+I, Ctrl+U
      // for windows
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "F12" ||
          ((e.key === "i" || e.key === "I") && e.ctrlKey) ||
          ((e.key === "u" || e.key === "U") && e.ctrlKey)
        ) {
          e.preventDefault();
          return false;
        }
      });

      // for mac
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "F12" ||
          ((e.key === "i" || e.key === "I") && e.metaKey) ||
          ((e.key === "u" || e.key === "U") && e.metaKey)
        ) {
          e.preventDefault();
          return false;
        }
      });

      return () => {
        window.removeEventListener("contextmenu", disableInspectMode);
        window.removeEventListener("keydown", disableInspectMode);
      };
    }
  }, []);

  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
      <AppRestoreScroll />
    </>
  );
};
export default AppLayout;
