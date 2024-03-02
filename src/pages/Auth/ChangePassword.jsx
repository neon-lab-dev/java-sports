// @ts-nocheck
import { changePasswordUsingToken } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ChangePassword = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => changePasswordUsingToken({ data, resetToken }),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({
      password,
      confirmPassword,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8"
    >
      <h1 className="text-4xl font-700">Reset password</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="new-password" className="text-sm font-700 font-Lato ">
          Password
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="Password"
          placeholder="Enter new password"
          id="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="confirm-password"
          className="text-sm font-700 font-Lato "
        >
          Confirm password
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="Password"
          placeholder="Confirm new Password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">
        {isPending ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
export default ChangePassword;
