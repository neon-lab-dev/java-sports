import AppDesktopNavbar from "@/components/reusable/AppDesktopNavbar"
import AppFooter from "@/components/reusable/AppFooter"
import AppHeader from "@/components/reusable/AppHeader"
import AppHeaderNav from "@/components/reusable/AppHeaderNav"
// @ts-ignore
import hero from "../../../src/assets/images/hero.png"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    
    <div>
    <AppHeader />

    <div className="flex flex-row  bg-white" style={{paddingLeft:"20vw", paddingBottom:"20px"}}>
      <div className="flex flex-row" >
        <div className="Sign_image bg-black rotate-180" style={{ writingMode: "vertical-lr" }}>
          <h1 className="text-white text-2xl  font-900 text-center p-2">Elevate Your Game, Master Your Style – Unleash <br />the Power of Precision Cricket Gears!</h1>
          <h1 className="text-white text-4xl font-900 text-center p-1"><span style={{ color: "red" }}>Java </span> sports</h1>
        </div>
        <div>
        <img className="bg-black h-100vh" src={hero} alt="" />
        </div>
      </div>
      <form action="" className="flex flex-col p-10 bg-grey/1 gap-5">
        <h1 className=" text-4xl font-700">Login</h1>
        <div className="flex flex-col ">
          <label htmlFor="" className="font-500 text-xs">Email or User Name</label>
          <input className="p-1 rounded-xl w-96" type="text" placeholder="Email or User Name" value="" />
        </div>
        <div className="flex flex-col g-100">
          <label htmlFor="" className="font-500 text-xs ">User Name</label>
          <input className="p-1 rounded-xl w-96 border-none" type="text" placeholder="user name" value="" />
        </div>
        {/* <span className="text-center text-[10px]">By clicking on sign-up, you agree to java sports <a style={{ color: "red", textUnderlinePosition: "under" }} href="#">Terms and Conditions of Use.</a></span> */}
        <button className="bg-black text-white rounded-xl p-2">Create account</button>
        <span className="text-center text-xs">Don't Have an account? <Link to="../signup" style={{ color: "red", textUnderlinePosition: "under" }}>sign in.</Link></span>
      </form>
    </div>
    <AppFooter />
  </div>
  )
}
  

export default Login

