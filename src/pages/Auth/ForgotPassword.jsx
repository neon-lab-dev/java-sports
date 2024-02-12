import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
      <form action="" className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
        <h1 className="text-4xl font-700">Forgot password</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="text-sm font-700 font-Lato ">Enter email or phone number</label>
          <input className="p-2 border-none rounded-xl" type="text" placeholder="Enter email or phone number" id="phoneNo"/>
        </div>
        <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">Send</button>
        <span className="text-sm text-center ">Don't received ?<Link  to="/forgot-password" className="text-red-500 underline">Send again</Link></span>
      </form>
  )
}
export default ForgotPassword