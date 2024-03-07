import AppHeaderNav from "./AppHeaderNav";
import AppBreadCrumb from "./AppBreadCrumb";
import AppMegaMenu from "./AppMegaMenu";

const AppHeader = () => {
  return (
    <>
      <header>
        <AppHeaderNav />
        <AppMegaMenu />
        <AppBreadCrumb />
      </header>
    </>
  );
};

export default AppHeader;
