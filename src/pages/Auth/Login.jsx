import AppDesktopNavbar from "@/components/reusable/AppDesktopNavbar"
import AppFooter from "@/components/reusable/AppFooter"
import AppHeader from "@/components/reusable/AppHeader"
import AppHeaderNav from "@/components/reusable/AppHeaderNav"
import { Link } from "react-router-dom"
import AppLogin from "@/components/reusable/AppLogin"

const Login = () => {
  return (
    <div >
      <AppHeader/>
      <div className="flex max-xl:flex-row max-sm:flex-col-reverse max-lg:flex-row max-md:flex-col-reverse max-2xl:flex-row bg-white justify-center ">
        <AppLogin />
        <form action="" className="flex flex-col p-16 max-sm:p-5 bg-grey/1 gap-7 max-sm:mx-5">
          <h1 className=" text-4xl font-700">Login</h1>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-700 font-Lato text-sm ">Email or User name</label>
            <input className=" rounded-xl  p-2  border-none" type="text" placeholder="user name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-700 font-Lato text-sm ">Enter your password</label>
            <input className=" rounded-xl  p-2 border-none" type="paswword" placeholder="Enter Password"  />
            <Link  to="/forgot-password" className="text-red-500 text-right text-xs underline">Forget your Password ?</Link>
          </div>
          <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 "> Login</button>
          <span className="text-center text-sm ">Don't Have an account ?<Link  to="/signup" className="text-red-500  underline">Create an Account</Link></span>
        </form>
      </div>
      <AppFooter />
    </div>
  )
}


export default Login

