import { Link } from "react-router-dom";
import HeadingWithLink from "../HeadingWithLink";
import { useQuery } from "@tanstack/react-query";
import avatar from "@/assets/images/avatar.jpg";
import { getAllMyOrders } from "@/api/orders";
import { getRecentOrders } from "@/utils/order-utils";
import { useSelector } from "react-redux";
const AccountDashboard = () => {
  const { user } = useSelector((state) => state.user);
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myOrders"],
    queryFn: getAllMyOrders,
  });
  const tableRowClasses =
    "px-4 py-3 xs:px-5 sm:px-6 lg:py-6 lg:px-7 border-b-8 sm:border-b-[15px] border-white";
  return (
    <div className="flex flex-col sm:wrapper lg:m-0 lg:w-full">
      {/* profile info  */}
      <div className="wrapper sm:w-auto sm:m-0">
        <HeadingWithLink
          heading="Account Dashboard"
          button={{
            label: "Edit",
            link: "/account?tab=account-details&isEditing=true",
          }}
        />
        <div className="flex flex-col py-5 pb-4 lg:pb-8">
          <div className="flex items-center justify-start gap-4 mb-3">
            <img
              src={user?.avatar?.url || avatar}
              className="w-9 sm:w-14 rounded-full aspect-square object-cover object-center"
            />
            <span className="text-2xl font-Lato md:text-4xl font-500">
              {user.full_name}
            </span>
          </div>
          <span className="font-400">
            Email: <span className="text-grey-dark">{user.email}</span>
          </span>
          <span className="font-400">
            Phone: <span className="text-grey-dark">{user.phoneNo}</span>
          </span>
        </div>
      </div>
      {/* recent orders  */}
      {isError && (
        <p className="text-center">An error occurred while fetching orders</p>
      )}
      {isLoading && <p className="text-center">Loading orders...</p>}
      {!isError && !isLoading && orders?.orders?.length > 0 && (
        <>
          <div className="border-y border-grey-light py-6 px-4">
            <HeadingWithLink
              heading="Recent Orders"
              button={{
                label: "View full order history",
                link: "/account?tab=order-history",
              }}
            />
          </div>
          <div className="lg:border-b border-grey-light pb-4">
            <table className="w-full max-w-6xl">
              <thead className="bg-white">
                <tr>
                  {["Order Id", "Order Date", "Order Total", "Status"].map(
                    (heading) => (
                      <th
                        scope="col"
                        className="px-4 py-3 xs:px-5 sm:px-6 lg:py-6 lg:px-7"
                        key={heading}
                      >
                        <div className="flex items-center font-Lato font-700 text-sm xs:text-lg sm:text-xl lg:text-2xl">
                          {heading}
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-grey/6 text-sm xs:text-base sm:text-lg lg:text-xl">
                {getRecentOrders(orders.orders).map(
                  ({ createdAt, _id, orderStatus, totalPrice }) => (
                    <tr key={_id} className="bg-grey/2">
                      <td className={tableRowClasses}>
                        #{_id.slice(_id.length - 5, _id.length)}...
                      </td>
                      <td className={tableRowClasses}>
                        {new Date(createdAt).toLocaleDateString()}
                      </td>
                      <td className={tableRowClasses}>₹{totalPrice}</td>
                      <td className={tableRowClasses}>{orderStatus}</td>
                      <td
                        className={
                          tableRowClasses + " " + "hidden xl:table-cell"
                        }
                      >
                        <Link
                          to={`/account?tab=order-history#product-${_id}`}
                          className="px-4 py-2 bg-[#999999] text-white rounded min-w-36"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
      {/* shipping addresses  */}
      {(user?.primaryaddress ||
        user?.secondaryaddress ||
        user?.thirdaddress) && (
        <div className="grid grid-cols-1 gap-4 wrapper sm:m-0 sm:w-full md:grid-cols-2 xl:grid-cols-3 py-8">
          {user?.primaryaddress && (
            <div className="flex flex-col gap-1">
              <span className="font-600 text-lg">Shipping Address 1</span>
              <AddressComp {...user.primaryaddress} />
            </div>
          )}
          {user?.secondaryaddress && (
            <div className="flex flex-col gap-1">
              <span className="font-600 text-lg">Shipping Address 2</span>
              <AddressComp {...user.secondaryaddress} />
            </div>
          )}
          {user?.thirdaddress && (
            <div className="flex flex-col gap-1">
              <span className="font-600 text-lg">Shipping Address 3</span>
              <AddressComp {...user.thirdaddress} />
            </div>
          )}
        </div>
      )}
      <hr />
    </div>
  );
};
export default AccountDashboard;

const AddressComp = ({ address, city, state, pin_code }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-Lato font-400 text-base lg:text-lg text-grey/6">
        {address}
      </p>
      <p className="font-Lato font-400 text-base lg:text-lg text-grey/6">
        {city}
      </p>
      <p className="font-Lato font-400 text-base lg:text-lg text-grey/6">
        {state}
      </p>
      <p className="font-Lato font-400 text-base lg:text-lg text-grey/6">
        {pin_code}
      </p>
    </div>
  );
};
