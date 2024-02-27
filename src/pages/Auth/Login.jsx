// @ts-nocheck
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { useEffect } from "react";
import { login } from "@/redux/actions/auth.js";
import toast from "react-hot-toast";
 

const Login = () => {
  const { isAuthenticated, message } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const { loading, error } = useSelector(state => state.login)
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(()=>{
    if(isAuthenticated){
    navigate("/account")
    }
  },[isAuthenticated])

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearErrors' });
    }


  }, [dispatch,error]);
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8 ">
      <h1 className="text-4xl font-700">Login</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="user" className="text-sm font-700 font-Lato ">Email</label>
        <input className="p-2 border-none rounded-xl" value={email}
          onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter your email" id="user" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-700 font-Lato ">Password</label>
        <input className="p-2 border-none rounded-xl" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" id="password" />
        <Link to="/forgot-password" className="text-xs text-right text-red-500 underline">Forget your Password ?</Link>
      </div>
      <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato " isLoading={loading} > Login</button>
      <span className="text-sm text-center ">Don't Have an account ?<Link to="/signup" className="text-red-500 underline">{" "}Create an Account</Link></span>
    </form>
  )
}
export default Login

