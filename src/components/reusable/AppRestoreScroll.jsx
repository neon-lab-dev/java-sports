import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppRestoreScroll = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div>AppRestoreScroll</div>;
};
export default AppRestoreScroll;
