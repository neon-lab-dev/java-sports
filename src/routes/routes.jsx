import { lazy } from "react";

const AuthWrapper = lazy(() => import("@/components/reusable/AppAuthWrapper"));

/**
 * @description: This file contains all the routes of the application
 *  - Each route is an object with the following properties:
 *
 *  - path: string - the path of the route
 *  - component: React.lazy - the component to render when the route is matched
 *  - wrapper?: React.lazy - the wrapper component to use for the route
 *  - protectFromUnauthenticated?: boolean - if the route should be protected from unauthenticated users
 *  - protectedFromAuthenticated?: boolean - if the route should be protected from authenticated users
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
    protectFromAuthenticated: true,
  },
  {
    path: "/signup",
    component: lazy(() => import("@/pages/Auth/Signup")),
    wrapper: AuthWrapper,
    protectFromAuthenticated: true,
  },
  {
    path: "/reset-password/:resetToken",
    component: lazy(() => import("@/pages/Auth/ChangePassword")),
    wrapper: AuthWrapper,
  },
  {
    path: "/forgot-password",
    component: lazy(() => import("@/pages/Auth/ForgotPassword")),
    wrapper: AuthWrapper,
    protectFromAuthenticated: true,
  },
  {
    path: "/otp-verification",
    component: lazy(() => import("@/pages/Auth/Otp")),
    wrapper: AuthWrapper,
    protectFromAuthenticated: true,
  },
  {
    path: "/account",
    component: lazy(() => import("@/pages/Account")),
    wrapper: lazy(() => import("@/pages/Account/AccountPageWrapper")),
    protectFromUnauthenticated: true,
  },
  {
    path: "/otp",
    component: lazy(() => import("@/pages/Auth/OtpVerification")),
    wrapper: AuthWrapper,
  },
  {
    path: "/wishlist",
    component: lazy(() => import("@/pages/Wishlist/Wishlist")),
  },
  {
    path: "/contact",
    component: lazy(() => import("@/pages/ContactUs/contactus")),
  },
  {
    path: "/checkout",
    component: lazy(() => import("@/pages/Checkout/Checkout")),
    protectFromUnauthenticated: true,
  },
  {
    path: "/:category",
    component: lazy(() => import("@/pages/Category")),
  },
  {
    path: "/:category/:type",
    component: lazy(() => import("@/pages/Category")),
  },
  {
    path: "*",
    component: lazy(() => import("@/pages/NotFound")),
  },
];
export default ROUTES;
