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
    path: "*",
    component: lazy(() => import("@/pages/NotFound")),
  },
  {
    path: "cat",
    component: lazy(() => import("@/pages/Category/category")),
  },
];

export default ROUTES;
