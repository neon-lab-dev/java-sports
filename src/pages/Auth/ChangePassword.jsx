import AppFooter from "@/components/reusable/AppFooter"
import AppHeader from "@/components/reusable/AppHeader"
import AppLogin from "@/components/reusable/AppLogin"

const ChangePassword = () => {
  return (
    <div>
      <AppHeader />
      <div className="flex bg-white justify-center">
        <AppLogin />
        <form action="" className="flex flex-col p-16 bg-grey/1 gap-7">
          <h1 className=" text-4xl font-700">Reset password</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-700 font-Lato text-sm ">Enter the new password</label>
            <input className="p-3 rounded-xl w-96 border-none" type="Password" placeholder="enter  new password here" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-700 font-Lato text-sm ">Confirm new password</label>
            <input className="p-3 rounded-xl w-96 border-none" type="Password" placeholder="Re-enter  new Password here"  />
          </div>
          <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 mx-14"> Submit</button>
        </form>
      </div>
      <AppFooter />
    </div>
  )
}

export default ChangePassword