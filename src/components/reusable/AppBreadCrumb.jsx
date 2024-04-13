import { Link, useLocation } from "react-router-dom";

const AppBreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .filter((x) => x.toLowerCase() !== "all");

  const excludeLinks = [
    "/",
    "/login",
    "/signup",
    "/otp",
    "/forgot-password",
    "/reset-password",
    "/paymentsuccess",
  ];

  const excludeDynamicLinks = ["/product"];

  if (excludeLinks.includes(location.pathname)) return null;
  if (excludeDynamicLinks.some((link) => location.pathname.includes(link)))
    return <div className="h-3" />;
  return (
    <div className="wrapper py-[0.5rem] text-lg flex gap-1 items-center">
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = decodeURI(value);

        return (
          <span key={to} className="flex items-center">
            <span className="tracking-tighter">&nbsp;&gt;&gt;&nbsp;</span>
            <Link
              className={index === pathnames.length - 1 ? "text-primary" : ""}
              to={to}
            >
              <span className="sm:hidden ">
                {label.length > 8 ? label.slice(0, 6) + "..." : label}
              </span>
              <span className="hidden sm:inline-block">{label}</span>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default AppBreadCrumb;
