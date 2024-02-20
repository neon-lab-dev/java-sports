// @ts-nocheck
import AppWishlistCard from '@/components/AppWishlistCard'
import AppCard from '@/components/reusable/AppCard'
import right from '@assets/icons/right.svg'
import pervious from '@assets/icons/pre.svg'
import next from '@assets/icons/next.svg'
import AppProductSlider from '@/components/reusable/AppProductSlider'
import ACCESSORIES from "@/assets/mock-data/accessories";
import second from '@assets/mock-data/accessories'
import { Link } from 'react-router-dom'



const wishlist = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className=''>
                    <div className=' p-3 bg-grey/1'>
                        <div className=''>
                            <span className=' pl-[9%] max-sm:pl-[10%] max-lg:pl-[5%] font-Lato text-xl font-700 '>Home {`>>`} <span className='text-red-500'>Wishlist</span></span>
                        </div>
                    </div>
                    <div className='bg-white pl-[9%] max-sm:pl-[3%] max-lg:pl-[5%] flex flex-col gap-4'>
                        <div className='py-5'>
                            <button className='border-black  bg-neutral-white border rounded-xl p-1'>
                                <div className='flex gap-1'>
                                    <Link to="/">
                                        <img src={right} alt="right-arrow" />
                                    </Link>
                                    <span className='max-sm:text-2xs p-1'>Contiune Shopping</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <span className='font-700 font-Lato text-2xl py-16'>Wishlist- 5 items</span>
                        </div>
                        <div className=' bg-white flex max-lg:justify-center'>
                            <div className="bg-white grid grid-cols-4 max-xl:grid-col s-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 ">
                                <AppWishlistCard />
                                <AppWishlistCard />
                                <AppWishlistCard />
                                <AppWishlistCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-6'>

                </div>
                <div className='bg-white'>
                    <div className=" bg-white wrapper py-10">
                        <span className=" font-Lato pt-[44px] text-[32px] font-700 ">
                            Products you might like
                        </span>
                        <AppProductSlider items={ACCESSORIES} />
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default wishlist

