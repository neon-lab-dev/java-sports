
const ChangePassword = () => {
  return (
        <form action="" className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
          <h1 className="text-4xl font-700">Reset password</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="new-password" className="text-sm font-700 font-Lato ">Password</label>
            <input className="p-2 border-none rounded-xl" type="Password" placeholder="Enter new password" id="new-password" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password" className="text-sm font-700 font-Lato ">Confirm password</label>
            <input className="p-2 border-none rounded-xl" type="Password" placeholder="Confirm new Password" id="confirm-password" />
          </div>
          <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14"> Submit</button>
        </form>
  )
}
export default ChangePassword


