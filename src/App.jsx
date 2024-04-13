import "@/index.css";
import { Toaster } from "react-hot-toast";
import RoutesContainer from "./routes";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthenticating, setUser } from "./redux/slices/userSlice";

import ReactGA from "react-ga";
ReactGA.initialize(import.meta.env.VITE_GOOGLE_MEASUREMENT_ID);

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: Infinity,
    retry: 0,
  });

  useEffect(() => {
    if (!isLoading) {
      dispatch(setIsAuthenticating(false));
    }
    if (!isLoading && !isError) {
      dispatch(setUser(data.user));
    }
  }, [isLoading, data, isError]);

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2500,
          style: {
            background: "#856544",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2000,
            style: {
              background: "green",
              color: "#fff",
            },
          },
          error: {
            duration: 2000,
            style: {
              background: "red",
              color: "#fff",
            },
          },
        }}
      />
      <RoutesContainer />
    </div>
  );
}

export default App;
