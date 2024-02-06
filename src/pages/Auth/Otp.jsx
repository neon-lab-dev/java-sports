import AppFooter from "@/components/reusable/AppFooter"
import AppHeader from "@/components/reusable/AppHeader"
import { Link } from "react-router-dom"
import AppLogin from "@/components/reusable/AppLogin"
const Otp = () => {
  return (
    <div className="warpper">
       <div>
      <AppHeader />
      <div className="flex bg-white justify-center">
        <AppLogin />
        <form action="" className="flex flex-col p-16 bg-grey/1 gap-10">
          <h1 className=" text-4xl font-700">Otp verification</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-700 font-Lato text-sm ">Enter the Otp</label>
            <input className="p-3 rounded-xl w-96 border-none" type="text" placeholder="Otp" value="" />
          </div>
          <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 mx-14">Verify</button>
          <span className="text-center text-sm ">Don't recevied ?<Link  to="#" className="text-red-500  underline">Send again</Link></span>
        </form>
      </div>
      <AppFooter />
    </div>
    </div>
  )
}

export default Otp