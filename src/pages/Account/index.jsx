import { useSearchParams } from "react-router-dom";
import AccountDashboard from "./Tabs/AccountDashboard";
import AccountDetails from "./Tabs/AccountDetails";
import AddressRegister from "./Tabs/Address";
import OrderHistory from "./Tabs/OrderHistory";
import PasswordReset from "./Tabs/PasswordReset";
import RecentOrders from "./Tabs/RecentOrders";

const TAB_COMPONENTS = {
  "account-dashboard": AccountDashboard,
  "recent-orders": RecentOrders,
  "order-history": OrderHistory,
  "password-reset": PasswordReset,
  "addresses": AddressRegister,
  "account-details": AccountDetails,
};

const AccountPage = () => {
  const [searchParams] = useSearchParams();
  const Component =
    TAB_COMPONENTS[searchParams.get("tab")] ||
    TAB_COMPONENTS["account-dashboard"];

  return <Component />;
};
export default AccountPage;
