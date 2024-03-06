import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppRestoreScroll from "./AppRestoreScroll";

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
