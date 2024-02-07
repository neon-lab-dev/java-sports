import { Link } from "react-router-dom"
import AppAuthWrapper from "@/components/reusable/AppAuthWrapper"

const Login = () => {
  return (
    <AppAuthWrapper>
      <form action="" className="flex flex-col p-14 bg-grey/1 gap-4 max-sm:mx-5 max-sm:p-8">
        <h1 className=" text-4xl font-700">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="user" className="font-700 font-Lato text-sm ">Email or User name</label>
          <input className=" rounded-xl  p-2 border-none" type="text" placeholder="User name or email" id="user"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-700 font-Lato text-sm ">Enter your password</label>
          <input className=" rounded-xl  p-2 border-none" type="paswword" placeholder="Enter Password" id="password" />
          <Link  to="/forgot-password" className="text-red-500 text-right text-xs underline">Forget your Password ?</Link>
        </div>
        <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 "> Login</button>
        <span className="text-center text-sm ">Don't Have an account ?<Link  to="/signup" className="text-red-500  underline">Create an Account</Link></span>
      </form>
    </AppAuthWrapper>
  )
}


export default Login

