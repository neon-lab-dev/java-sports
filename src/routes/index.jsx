import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesContainer = () => {
  const LoginPage = lazy(() => import('@/pages/Auth/Login'));
  const SignupPage = lazy(() => import('@/pages/Auth/Signup'));
  const ChangePasswordPage = lazy(() => import('@/pages/Auth/ChangePassword'));
  const ForgotPasswordPage = lazy(() => import('@/pages/Auth/ForgotPassword'));
  // @ts-ignore
  const OtpPage = lazy(() => import('@/pages/Auth/otp'));
  const NotFoundPage = lazy(() => import('@/pages/NotFound'));
  const HomePage = lazy(() => import("@/pages/Home"));

  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp-verification" element={<OtpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
export default RoutesContainer;
