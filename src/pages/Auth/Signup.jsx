import AppDesktopNavbar from "@/components/reusable/AppDesktopNavbar"
import AppFooter from "@/components/reusable/AppFooter"
import AppHeader from "@/components/reusable/AppHeader"
import AppHeaderNav from "@/components/reusable/AppHeaderNav"
// @ts-ignore
import hero from "../../../src/assets/images/hero.png"

const Signup = () => {
  return (
    <div>
      <AppHeader />

      <div className="flex flex-row  bg-white" style={{paddingLeft:"20vw", paddingBottom:"20px"}}>
        <div className="flex flex-row" >
          <div className="Sign_image bg-black rotate-180" style={{ writingMode: "vertical-lr" }}>
            <h1 className="text-white text-2xl  font-900 text-center p-2">Elevate Your Game, Master Your Style – Unleash <br />the Power of Precision Cricket Gears!</h1>
            <h1 className="text-white text-6xl font-900 text-center p-1"><span style={{ color: "red" }}>Java </span> sports</h1>
          </div>
          <div>
          <img className="bg-black h-100vh" src={hero} alt="" />
          </div>
        </div>
        <form action="" className="flex flex-col p-10 bg-grey/1 gap-5">
          <h1 className="text-center text-3xl font-700">Create Your Account</h1>
          <div className="flex flex-col g-100">
            <label htmlFor="" className="font-500 text-xs ">User Name</label>
            <input className="p-1 rounded-xl w-96 border-none" type="text" placeholder="user name" value="" />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-500 text-xs">Email</label>
            <input className="p-1 rounded-xl w-96" type="text" placeholder="Email" value="" />
          </div>
          <div className="flex flex-col g-1">
            <label htmlFor="" className="font-500 text-xs ">Phone</label>
            <input className="p-1 rounded-xl w-96" type="text" placeholder="Phone" value="" />
          </div>
          <div className="flex flex-col g-1">
            <label htmlFor="" className="font-500 text-xs ">Create Password</label>
            <input className="p-1 rounded-xl w-96" type="text" placeholder="Create Password" value="" />
          </div>
          <div className="flex flex-col g-1">
            <label htmlFor="" className="font-500 text-xs">Confrim Password</label>
            <input className="p-1 rounded-xl w-96" type="text" placeholder="Confrim Password" value="" />
          </div>
          <div className="flex flex-row  gap-4 " >
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-black-600 bg-black-100 border-black-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-black-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">Male</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">Female</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">others</label>
            </div>
          </div>
          <span className="text-center text-[10px]">By clicking on sign-up, you agree to java sports <a style={{ color: "red", textUnderlinePosition: "under" }} href="#">Terms and Conditions of Use.</a></span>
          <button className="bg-black text-white rounded-xl p-2">Create account</button>
          <span className="text-center text-xs">Have an account? <a href="" style={{ color: "red", textUnderlinePosition: "under" }}>Log in.</a></span>
        </form>
      </div>
      <AppFooter />
    </div>
  )
}
export default Signup