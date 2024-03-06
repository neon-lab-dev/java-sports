import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppRestoreScroll from "./AppRestoreScroll";

/**
 * AppLayout component
 * This component is a layout wrapper for the whole app
 */
const AppLayout = ({ children }) => {
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
