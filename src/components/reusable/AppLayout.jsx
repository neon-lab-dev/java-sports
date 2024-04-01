import { useEffect } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppRestoreScroll from "./AppRestoreScroll";
import { pageview } from "react-ga";
import { useLocation } from "react-router-dom";

/**
 * AppLayout component
 * This component is a layout wrapper for the whole app
 */
const AppLayout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    {
      import.meta.env.PROD &&
        // track page view on production only
        pageview(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

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
