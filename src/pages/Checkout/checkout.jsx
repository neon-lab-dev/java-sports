// @ts-nocheck
import profile from '@/assets/icons/Ellipse.svg'
import close from '@assets/icons/close.svg'
import bat from '@assets/images/prostrike-elite-bat-2.svg'
import remove from '@assets/images/minus.svg'
import plus from '@assets/images/plus.svg'
import { useState } from 'react'



const checkout = () => {
    const intialvalue = 0
    const [count, setCount] = useState(intialvalue);
    return (
        <div className='bg-white px-[140px] py-10 flex flex-col gap-10 max-xl:px-4'>
            <div className=' bg-white flex flex-col gap-5 justify-center shadow-xl  p-6 '>
                <div className='flex justify-between'>
                    <span className='text-3xl font-700 font-Lato'>Login Id</span>
                    <span className='text-blue font-500'>Edit</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <img src={profile} alt="profile-image" />
                    <span className='font-500'>Kabir Sah</span>
                </div>
                <span> Email: www.kabirsah@gmail.com</span>
                <span> Phone: 5824658726</span>
            </div>
            <div className='flex flex-col gap-5 justify-center shadow-xl  p-6 m-2'>
                <div className='flex justify-between'>
                    <span className='text-3xl font-700 font-Lato'>Shopping Address</span>
                    <span className='text-blue font-500'>Edit</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <span>Kabir Sah ,123 Main Street , Apt 4B , Cityville, State 54321 ,United States</span>
                    <span>Phone: +1 (555) 123-4567</span>
                    <span>Email: kabir.sah@example.com</span>
                </div>
            </div>
            <div className='shadow-xl p-6 m-2 flex flex-col gap-2'>
                <div className='flex justify-between p-2' >
                    <span className='text-3xl font-500 max-sm:text-lg p-5'>Order Summery</span>
                    <img className='w-[30px] h-[30px] rounded-[50%] border' src={close} alt="" />
                </div>
                <div className='flex gap-4 max-sm:flex-col max-sm:justify-center'>
                    <div className='p-10  bg-grey/1 rounded-xl  flex justify-center'>
                        <img src={bat} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <span className='text-2xl'><span className='font-700'>Product:</span> Elite Series Kashmiri Willow Cricket Bat</span>
                        <span>Delivery by 28-01-2024</span>
                        <span className='text-xl font-500'>Quantity</span>
                        <div className="flex">
                            <button onClick={() => setCount((prev) => prev - 1)} className='border px-2 p-1'><img src={remove} alt="minus" /></button>
                            <div className='border p-1 px-2 text-lg'>{count}</div>
                            <button onClick={() => setCount((prev) => prev + 1)} className='border p-1 px-2'><img src={plus} alt="plus" /></button>
                        </div>
                        <span className='text-xl'><span className='font-500'>Total Price:</span> ₹149.99</span>
                        <span className='text-xl'><span className='font-500'>Discount : </span>₹00.00</span>
                        <span className='text-xl'><span className='font-500'>Delivery charges :</span> ₹00.00</span>
                        <div className='flex  max-lg:hidden'>
                            <input className="pr-24 pl-3 py-1 max-sm:pr-2  border max-sm:text-xs text-xl " type="text" placeholder="Enter the Coupon code" id="user" />
                            <button className='bg-grey/1 px-16  max-sm:px-2 font-500'>Apply</button>
                        </div>
                        <button className="bg-red-500 text-lg p-1 text-white  max-lg:hidden"> Proceed to Pay</button>
                    </div>
                </div>
                <div className='flex lg:hidden p-1'>
                    <input className="pr-24 pl-3 py-1 max-sm:pr-2 border max-sm:text-xs text-xl " type="text" placeholder="Enter the Coupon code" id="user" />
                    <button className='bg-grey/1 pr-24 pl-24  max-sm:pr-2  max-sm:pl-2 font-500'>Apply</button>
                </div>
                <button className="bg-red-500 text-lg p-1 text-white lg:hidden rounded-md"> Proceed to Pay</button>
            </div>
        </div>
    )
}
export default checkout
