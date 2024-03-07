import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import AppLayout from "@/components/reusable/AppLayout";
import AppLoading from "@/components/reusable/AppLoading";
import { ProtectedRoute } from "protected-route-react";
import { useSelector } from "react-redux";

const RoutesContainer = () => {
  const { isAuthenticated, isAuthenticating } = useSelector(
    (state) => state.user
  );
  return (
    <Router>
      <Routes>
        {ROUTES.map(
          (
            {
              component: Component,
              path,
              wrapper: Wrapper,
              protectFromUnauthenticated,
              protectFromAuthenticated,
            },
            index
          ) => {
            // Wrap the component with the wrapper if it exists
            const ComponentWithWrapper = Wrapper ? (
              <Wrapper>
                <Component />
              </Wrapper>
            ) : (
              <Component />
            );

            // Wrap the component with the protected route if it needs to be protected
            const ComponentWithAuth =
              protectFromUnauthenticated || protectFromAuthenticated ? (
                <ProtectedRoute
                  isAuthenticated={
                    protectFromAuthenticated
                      ? !isAuthenticated
                      : isAuthenticated
                  }
                  redirect={protectFromAuthenticated ? "/account" : "/login"}
                >
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
                  // Wrap the component with the layout
                  <AppLayout>
                    <Suspense fallback={<AppLoading />}>
                      {isAuthenticating ? <AppLoading /> : ComponentWithAuth}
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
