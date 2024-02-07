import { Link } from "react-router-dom"
import AppAuthWrapper from "@/components/reusable/AppAuthWrapper"

const Signup = () => {
  return (
    <AppAuthWrapper>
      <form action="" className="flex flex-col p-14 bg-grey/1 gap-4 max-sm:mx-5 max-sm:p-8">
          <h1 className="text-center text-3xl font-900">Create Your Account</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="user_name" className="font-700 font-Lato text-sm ">User Name</label>
            <input className="p-2 rounded-xl border-none" type="text" placeholder="user name" id="user_name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-700 font-Lato text-sm">Email</label>
            <input className="p-2 rounded-xl border-none" type="Email" placeholder="Email" id="email"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-700  font-Lato text-sm">Phone</label>
            <input className="p-2 rounded-xl  border-none" type="text" placeholder="Phone" id="phone" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-700 text-sm font-Lato ">Create Password</label>
            <input className="p-2 rounded-xl  border-none" type="password" placeholder="Create Password" id="create-password" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password" className="font-700 text-sm font-Lato">Confrim Password</label>
            <input className="p-3 rounded-xl border-none" type="password" placeholder="Re-enter your Password" id="confirm-password"/>
          </div>
          <div className="flex flex-row  gap-4" >
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
          <span className="text-center text-[10px]">By clicking on sign-up, you agree to java sports <Link  to="/forgot-password" className="text-red-500  underline">Terms and Conditions of Use.</Link></span>
          <button className="bg-black text-white rounded-3xl p-2">Create account</button>
          <span className="text-center text-sm ">Have an account?<Link  to="/login" className="text-red-500  underline">Log in</Link></span>
        </form>
    </AppAuthWrapper>
  )
}
export default Signup