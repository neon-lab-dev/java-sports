 import { useForm } from "react-hook-form";

const PasswordReset = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-xl wrapper lg:m-0 lg:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="font-500 text-2xl sm:text-3xl">Password Reset</span>
      <div className="flex flex-col gap-1">
        <label htmlFor="newPassword" className="font-600 text-lg">
          Enter new password
        </label>
        <input
          type="password"
          placeholder="Enter new password here"
          className="bg-grey/2 px-4 py-3 sm:px-6 sm:py-4"
          {...register("newPassword", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="confirmNewPassword" className="font-600 text-lg">
          Confirm new password
        </label>
        <input
          type="password"
          placeholder="Enter new password here"
          className="bg-grey/2 px-4 py-3 sm:px-6 sm:py-4"
          {...register("confirmNewPassword", {
            required: true,
            validate: (value) => value === watch("newPassword"),
          })}
        />
      </div>
      <button
        type="submit"
        className="rounded-lg px-4 py-2.5 bg-blue w-32 sm:w-48 self-end"
      >
        Submit
      </button>
    </form>
  );
};
export default PasswordReset;
