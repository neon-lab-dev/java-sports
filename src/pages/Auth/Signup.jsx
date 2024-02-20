import { Link } from "react-router-dom"

const Signup = () => {
  return (
        <form action="" className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
          <h1 className="text-3xl text-center font-900">Create Your Account</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="user-name" className="text-sm font-700 font-Lato ">User Name</label>
            <input className="p-2 border-none rounded-xl" type="text" placeholder="user name" id="user_name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-700 font-Lato">Email</label>
            <input className="p-2 border-none rounded-xl" type="Email" placeholder="Email" id="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-700 font-Lato">Phone</label>
            <input className="p-2 border-none rounded-xl" type="text" placeholder="Phone" id="phone" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-700 font-Lato ">Create Password</label>
            <input className="p-2 border-none rounded-xl" type="password" placeholder="Create Password" id="create-password" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password" className="text-sm font-700 font-Lato">Confrim Password</label>
            <input className="p-3 border-none rounded-xl" type="password" placeholder="Re-enter your Password" id="confirm-password" />
          </div>
          <div className="flex flex-row gap-4" >
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-black-600 bg-black-100 border-black-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-black-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="text-sm font-medium ms-2 text-black-900 dark:text-black-300">Male</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="text-sm font-medium ms-2 text-black-900 dark:text-black-300">Female</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="text-sm font-medium ms-2 text-black-900 dark:text-black-300">others</label>
            </div>
          </div>
          <span className="text-center text-[10px]">By clicking on sign-up, you agree to java sports <Link to="/forgot-password" className="text-red-500 underline">Terms and Conditions of Use.</Link></span>
          <button className="p-2 text-white bg-black rounded-3xl">Create account</button>
          <span className="text-sm text-center ">Have an account?<Link to="/login" className="text-red-500 underline">Log in</Link></span>
        </form>
  )
}
export default Signup