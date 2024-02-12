import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import AppLayout from "@/components/reusable/AppLayout";
import AppLoading from "@/components/reusable/AppLoading";

const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map(
          ({ component: Component, path, wrapper: Wrapper }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <AppLayout>
                  <Suspense fallback={<AppLoading />}>
                    {Wrapper ? (
                      <Wrapper>
                        <Component />
                      </Wrapper>
                    ) : (
                      <Component />
                    )}
                  </Suspense>
                </AppLayout>
              }
            />
          )
        )}
      </Routes>
    </Router>
  );
};
export default RoutesContainer;
