import React from 'react'
// @ts-ignore
import hero from '../../assets/images/Hero.svg'
import "../../../src/index.css"
import AppHeaderNav from './AppHeaderNav'
import AppHeader from './AppHeader'
const AppLogin = () => {
    return (
        <div className="flex bg-black max-sm:flex-col max-md:flex-col max-sm:mx-5">
            <div className=" sign-up rotate-180 max-sm:rotate-0 max-md:rotate-0">
                <div className=" flex flex-col max-sm:flex-col-reverse max-md:flex-col-reverse" >
                    <h1 className="text-white text-2xl font-Lato  font-900 text-center p-2 max-sm:text-xs">the Power of Precision Cricket Gears! </h1>
                    <h3 className='text-white text-2xl font-Lato  font-900 text-center  max-sm:text-xs m-0 p-0'>Elevate Your Game, Master Your Style – Unleash</h3>
                    <h2 className="text-white text-7xl font-900 font-Lato text-center p-2 max-sm:text-5xl"><span className="text-red-500  ">Java </span> sports</h2>
                </div>
            </div>
            <div className='img1'>
                <img className=" w-[380px] h-[740px] py-2  max-sm:h-[300px] max-sm:rotate-90" src={hero} alt="login_image" />
            </div>
        </div>
    )
}
export default AppLogin