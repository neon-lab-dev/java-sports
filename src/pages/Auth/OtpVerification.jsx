import { Link } from "react-router-dom"

const OtpVerification = () => {
            return (
                <form action="" className="flex flex-col gap-6 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
                    <h1 className="text-4xl font-700">Otp verification</h1>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="otp" className="text-sm font-700 font-Lato ">OTP</label>
                        <input className="p-2 border-none rounded-xl" type="text" placeholder="Enter your otp" id="otp" />
                    </div>
                    <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">Verify</button>
                </form>
            )
        }

export default OtpVerification