import AppAuthWrapper from "@/components/reusable/AppAuthWrapper"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <AppAuthWrapper>
      <form action="" className="flex flex-col p-14 bg-grey/1 gap-4 max-sm:mx-5 max-sm:p-8">
        <h1 className=" text-4xl font-700">Forgot password</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="font-700 font-Lato text-sm ">Enter email or phone number</label>
          <input className="p-2 rounded-xl  border-none" type="text" placeholder="Enter email or phone number" id="phoneNo"/>
        </div>
        <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 mx-14">Send</button>
        <span className="text-center text-sm ">Don't received ?<Link  to="/forgot-password" className="text-red-500  underline">Send again</Link></span>
      </form>
    </AppAuthWrapper>
  )
}

export default ForgotPassword