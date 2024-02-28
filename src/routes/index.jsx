// @ts-nocheck
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import AppLayout from "@/components/reusable/AppLayout";
import AppLoading from "@/components/reusable/AppLoading";
import { ProtectedRoute } from "protected-route-react";
import { useSelector } from "react-redux";

const RoutesContainer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        {ROUTES.map(
          (
            {
              component: Component,
              path,
              wrapper: Wrapper,
              isProtected,
              redirect,
            },
            index
          ) => {
            const ComponentWithWrapper = Wrapper ? (
              <Wrapper>
                <Component />
              </Wrapper>
            ) : (
              <Component />
            );

            const ComponentWithAuth = isProtected ? (
              <ProtectedRoute isAuthenticated={isAuthenticated} redirect={redirect}>
                {ComponentWithWrapper}
              </ProtectedRoute>
            ) : (
              ComponentWithWrapper
            );
            return (
              <Route
                key={index}
                path={path}
                element={
                  <AppLayout>
                    <Suspense fallback={<AppLoading />}>
                      {ComponentWithAuth}
                    </Suspense>
                  </AppLayout>
                }
              />
            );
          }
        )}
      </Routes>
    </Router>
  );
};
export default RoutesContainer;
