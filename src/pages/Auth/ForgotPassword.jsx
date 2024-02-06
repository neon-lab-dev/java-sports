import AppFooter from "@/components/reusable/AppFooter"
import AppHeader from "@/components/reusable/AppHeader"
import AppLogin from "@/components/reusable/AppLogin"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <div>
    <AppHeader />
    <div className="flex bg-white justify-center">
      <AppLogin />
      <form action="" className="flex flex-col p-16 bg-grey/1 gap-10">
        <h1 className=" text-4xl font-700">Forgot password</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-700 font-Lato text-sm ">Enter the email or phone number</label>
          <input className="p-3 rounded-xl w-96 border-none" type="text" placeholder="Enter the email or phone number" value="" />
        </div>
        <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 mx-14">Send</button>
        <span className="text-center text-sm ">Don't received ?<Link  to="#" className="text-red-500  underline">Send again</Link></span>
      </form>
    </div>
    <AppFooter />
  </div>
  )
}

export default ForgotPassword