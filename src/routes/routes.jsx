import { lazy } from "react";

const AuthWrapper = lazy(() => import("@/components/reusable/AppAuthWrapper"));

/**
 * @description: This file contains all the routes of the application
 *  - Each route is an object with the following properties:
 *
 *  - path: string - the path of the route
 *  - component: React.lazy - the component to render when the route is matched
 *  - wrapper?: React.lazy - the wrapper component to use for the route
 */
const ROUTES = [
  {
    path: "/",
    component: lazy(() => import("@/pages/Home")),
  },
  {
    path: "/cart",
    component: lazy(() => import("@/pages/Cart")),
  },
  {
    path: "/product/:productId",
    component: lazy(() => import("@/pages/Product")),
  },
  {
    path: "/login",
    component: lazy(() => import("@/pages/Auth/Login")),
    wrapper: AuthWrapper,
  },
  {
    path: "/signup",
    component: lazy(() => import("@/pages/Auth/Signup")),
    wrapper: AuthWrapper,
  },
  {
    path: "/reset-password",
    component: lazy(() => import("@/pages/Auth/ChangePassword")),
    wrapper: AuthWrapper,
  },
  {
    path: "/forgot-password",
    component: lazy(() => import("@/pages/Auth/ForgotPassword")),
    wrapper: AuthWrapper,
  },
  {
    path: "/otp-verification",
    component: lazy(() => import("@/pages/Auth/Otp")),
    wrapper: AuthWrapper,
  },
  {
    path: "/account",
    component: lazy(() => import("@/pages/Account")),
    wrapper: lazy(() => import("@/pages/Account/AccountPageWrapper")),
  },
  {
    path: "*",
    component: lazy(() => import("@/pages/NotFound")),
  },
  {
    path: "category",
    component: lazy(() => import("@/pages/Category/MultiFilters")),
  },
  {
    path: "ApprealCategory",
    component: lazy(() => import("@/pages/Category/Apperal")),
  },
  {
    path: "BallCategory",
    component: lazy(() => import("@/pages/Category/Balls")),
  },
  {
    path: "KitCategory",
    component: lazy(() => import("@/pages/Category/Kits")),
  },
  {
    path: "AccessoriesCategory",
    component: lazy(() => import("@/pages/Category/Acceriores")),
  },
  {
    path: "ShoeCategory",
    component: lazy(() => import("@/pages/Category/Shoes")),
  },
    {
    path: "otp",
    component: lazy(() => import("@/pages/Auth/OtpVerification")),
    wrapper: AuthWrapper,
  },
  {
    path: "wishlist",
    component: lazy(() => import("@/pages/wishlist/Wishlist")),
  },
  {
    path: "contactus",
    component: lazy(() => import("@/pages/Checkout/contactUs")),
  },
  
];

export default ROUTES;
