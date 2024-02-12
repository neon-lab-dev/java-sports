import { Link } from "react-router-dom"

const Login = () => {
  return (
      <form action="" className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
        <h1 className="text-4xl font-700">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="user" className="text-sm font-700 font-Lato ">Email or User name</label>
          <input className="p-2 border-none rounded-xl" type="text" placeholder="User name or email"id="user"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-700 font-Lato ">Enter your password</label>
          <input className="p-2 border-none rounded-xl" type="password" placeholder="Enter Password" id="password" />
          <Link  to="/forgot-password" className="text-xs text-right text-red-500 underline">Forget your Password ?</Link>
        </div>
        <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato "> Login</button>
        <span className="text-sm text-center ">Don't Have an account ?<Link  to="/signup" className="text-red-500 underline">Create an Account</Link></span>
      </form>
  )
}


export default Login

