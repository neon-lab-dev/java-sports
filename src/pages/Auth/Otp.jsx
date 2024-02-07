import { Link } from "react-router-dom"
import AppAuthWrapper from "@/components/reusable/AppAuthWrapper"
const Otp = () => {
  return (
    <AppAuthWrapper>
         <form action="" className="flex flex-col p-14 bg-grey/1 gap-6 max-sm:mx-5 max-sm:p-8">
          <h1 className=" text-4xl font-700">Otp verification</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="otp" className="font-700 font-Lato text-sm ">Enter OTP</label>
            <input className="p-2 rounded-xl  border-none" type="text" placeholder="Otp"  id="otp"/>
          </div>
          <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 mx-14">Verify</button>
          <span className="text-center text-sm ">Don't recevied ?<Link  to="/otp-verification" className="text-red-500  underline">Send again</Link></span>
        </form>
    </AppAuthWrapper>
  )
}

export default Otp