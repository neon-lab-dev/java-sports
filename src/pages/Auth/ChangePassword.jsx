import AppAuthWrapper from "@/components/reusable/AppAuthWrapper"
import AppLayout from "@/components/reusable/AppLayout"

const ChangePassword = () => {
  return (
    <AppLayout>
      <AppAuthWrapper>
        <form action="" className="flex flex-col p-14 bg-grey/1 gap-4 max-sm:mx-5 max-sm:p-8">
          <h1 className=" text-4xl font-700">Reset password</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="new-password" className="font-700 font-Lato text-sm ">Enter new password</label>
            <input className="p-2 rounded-xl  border-none" type="Password" placeholder="Enter new password here" id="new-password" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password" className="font-700 font-Lato text-sm ">Confirm new password</label>
            <input className="p-2 rounded-xl border-none" type="Password" placeholder="Re-enter new Password here" id="confirm-password" />
          </div>
          <button className="bg-black text-white font-700  rounded-3xl font-Lato  p-3 mx-14"> Submit</button>
        </form>
      </AppAuthWrapper>
    </AppLayout>
  )
}
export default ChangePassword


