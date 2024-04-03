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
