import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

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
    </>
  );
};
export default AppLayout;
