// @ts-nocheck
import AppWishlistCard from '@/components/reusable/AppWishlistCard'
import right from '@assets/icons/right-arrow.svg'
import AppProductSlider from '@/components/reusable/AppProductSlider'
import ACCESSORIES from "@/assets/mock-data/accessories";
import { Link } from 'react-router-dom'

const wishlist = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className=''>
                    <div className='bg-white pl-[9%] max-sm:pl-[5%] flex flex-col gap-4 pt-4'>
                        <div>
                            <span className='font-700 font-Lato text-2xl'>Wishlist- 5 items</span>
                        </div>
                        <div className=' bg-white flex max-lg:justify-center pb-10'>
                            <div className="bg-white grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 ">
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
                <div className='bg-white max-lg:hidden'>
                    <div className=" bg-white wrapper py-10">
                        <span className=" font-Lato pt-[44px] text-[32px] font-700 ">
                            Products you might like
                        </span>
                        <AppProductSlider items={ ACCESSORIES } />
                    </div>
                </div>
            </div>
        </>
    )
}
export default wishlist

