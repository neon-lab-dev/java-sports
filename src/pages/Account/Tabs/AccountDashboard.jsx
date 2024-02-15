import USER from "@/assets/mockData/user";
import { Link } from "react-router-dom";

const AccountDashboard = () => {
  const trClasses =
    "px-4 py-3 xs:px-5 sm:px-6 lg:py-6 lg:px-7 border-b-8 sm:border-b-[15px] border-white text-center";
  return (
    <div className="flex flex-col sm:wrapper lg:m-0 lg:w-full">
      {/* profile info  */}
      <div className="wrapper sm:w-auto sm:m-0">
        <Heading
          heading="Account Dashboard"
          button={{
            label: "Edit",
            link: "#",
          }}
        />
        <div className="flex flex-col py-5 pb-4 lg:pb-8">
          <div className="flex items-center justify-start gap-4 mb-3">
            <img
              src={USER.img}
              alt={USER.name}
              className="w-9 sm:w-14 rounded-full aspect-square"
            />
            <span className="text-2xl font-Lato md:text-4xl font-500">
              {USER.name}
            </span>
          </div>
          <span className="font-400">
            Email: <span className="text-grey-dark">{USER.email}</span>
          </span>
          <span className="font-400">
            Phone: <span className="text-grey-dark">{USER.phone}</span>
          </span>
        </div>
      </div>
      {/* recent orders  */}
      <div className="border-y border-grey-light py-6 px-4">
        <Heading
          heading="Recent Orders"
          button={{
            label: "View full order history",
            link: "#",
          }}
        />
      </div>
      <div className="lg:border-b border-grey-light pb-4">
        <table className="w-full max-w-6xl">
          <thead className="bg-white">
            <tr>
              {["Order Id", "Order Date", "Order Total", "Status"].map(
                (heading) => (
                  <th scope="col" className="px-2 py-4" key={heading}>
                    <div className="flex items-center text-center font-Lato font-700 text-sm xs:text-lg sm:text-xl lg:text-2xl">
                      {heading}
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="text-grey/6 text-sm xs:text-base sm:text-lg lg:text-xl">
            {USER.recentOrders.map(({ date, orderId, status, total }) => (
              <tr key={orderId} className="bg-grey/2">
                <td className={trClasses}>{orderId}</td>
                <td className={trClasses}>{date}</td>
                <td className={trClasses}>{total.currency + total.amount}</td>
                <td className={trClasses}>{status}</td>
                <td className={trClasses + " " + "hidden xl:table-cell"}>
                  <Link
                    to="#"
                    className="px-4 py-2 bg-[#999999] text-white rounded min-w-36"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 wrapper sm:m-0 sm:w-full md:grid-cols-2 xl:grid-cols-3 py-8 lg:border-b border-grey-light">
        {USER.shippingAddresses.map((address, i) => (
          <div key={i} className="flex flex-col gap-1">
            {Object.keys(address).map((key, i) => {
              if (key === "img") return null;
              if (key === "title") {
                return (
                  <h3
                    key={i}
                    className="font-Lato font-600 text-lg sm:text-xl lg:text-2xl"
                  >
                    {address[key]}
                  </h3>
                );
              }
              return (
                <p
                  key={i}
                  className="font-Lato font-400 text-base lg:text-lg text-grey/6"
                >
                  {address[key]}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AccountDashboard;

const Heading = ({ heading, button: { label, link } }) => {
  return (
    <div className="flex gap-8 text-base sm:text-base 2xl:text-lg">
      <span className="font-Lato font-600">{heading}</span>
      <Link to={link} className="font-Lato font-600 text-blue">
        {label}
      </Link>
    </div>
  );
};
