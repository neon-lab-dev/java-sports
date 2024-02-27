// @ts-nocheck
// @ts-ignore
import hero from '../../assets/images/Hero.svg'
import bat from '@assets/images/bat-5.svg'
import "@/index.css"



const AppAuthWrapper = ({ children }) => {
    return (
    <div className="flex max-sm:flex-col-reverse bg-white justify-center">
        <div className='m-4 flex  max-sm:flex-col-reverse bg-white justify-center'>
            <div className="flex bg-black max-sm:flex-col  max-sm:mx-5">
                <div className=" sign-up rotate-180 max-sm:rotate-0">
                    <div className=" flex flex-col max-sm:flex-col-reverse " >
                        <h1 className="text-white text-2xl font-Lato  font-900 text-center p-2 max-sm:text-xs">the Power of Precision Cricket Gears! </h1>
                        <h3 className='text-white text-2xl font-Lato  font-900 text-center max-sm:text-xs m-0 p-0'>Elevate Your Game, Master Your Style – Unleash</h3>
                        <h2 className="text-white text-7xl font-900 font-Lato text-center p-2 max-md:text-[60px] max-sm:text-[40px]"><span className="text-red-500  ">Java </span> sports</h2>
                    </div>
                </div>
                <div className='max-sm:hidden' >
                    <img className=" w-[380px] h-[740px] py-2  max-sm:h-[300px]  max-sm:rotate-90" src={hero} alt="login_image" />
                </div>
                <div className='sm:hidden'>
                    <img src={bat} alt="" />
                </div>
            </div>
            {children}
        </div>
    </div>
    )
}

export default AppAuthWrapper
