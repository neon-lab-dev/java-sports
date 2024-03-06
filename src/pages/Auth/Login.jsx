// @ts-nocheck
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setIsAuthenticating } from "@/redux/slices/userSlice";
import { login } from "@/api/user";

const Login = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const redirect = searchParams.get("redirect");

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => login({ email, password }),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: () => {
      dispatch(setIsAuthenticating(true));
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate(redirect || "/account");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ email, password });
      }}
      className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8 "
    >
      <h1 className="text-4xl font-700">Login</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="user" className="text-sm font-700 font-Lato ">
          Email
        </label>
        <input
          className="p-2 border-none rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
          id="user"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-700 font-Lato ">
          Password
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          id="password"
        />
        <Link
          to="/forgot-password"
          className="text-xs text-right text-red-500 underline"
        >
          Forget your Password ?
        </Link>
      </div>
      <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato ">
        {isPending ? "Loading..." : "Login"}
      </button>
      <span className="text-sm text-center ">
        Don&apos;t Have an account ?
        <Link
          to={`/signup${redirect ? `?redirect=${redirect}` : ""}`}
          className="text-red-500 underline"
        >
          {" "}
          Create an Account
        </Link>
      </span>
    </form>
  );
};
export default Login;
