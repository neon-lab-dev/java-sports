// @ts-nocheck
import AppWishlistCard from '@/components/AppWishlistCard'
import AppCard from '@/components/reusable/AppCard'
import right from '@assets/icons/right.svg'
import pervious from '@assets/icons/pre.svg'
import next from '@assets/icons/next.svg'


const wishlist = () => {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className=''>
                    <div className=' p-3 bg-grey/1'>
                        <div className=''>
                            <span className=' pl-[9%] max-sm:pl-0  font-Lato text-lg font-700 '>Home {`>>`} <span className='text-red-500'>Wishlist</span></span>
                        </div>
                    </div>
                    <div className='bg-white max-sm:pl-0 pl-[9%] flex flex-col'>
                        <div className=''>
                            <button className='border-black bg-neutral-white border rounded-xl p-2 m-3'>
                                <div className='flex'>
                                    <img src={right} alt="right-arrow" />
                                    <span>Contiune Shopping</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <span className='font-700 font-Lato text-2xl m-3'>Wishlist- 5 items</span>
                        </div>

                        <div className="bg-white grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 ">
                            <AppWishlistCard />
                            <AppWishlistCard />
                            <AppWishlistCard />
                            <AppWishlistCard />
                            <AppWishlistCard />
                        </div>
                        <div className='bg-white my-10'>

                        </div>
                    </div>
                </div>
                <div className='bg-white max-sm:pl-0 pl-[9%] flex flex-col p-5'>
                    <div className='flex justify-between pr-[5%]'>
                        <span className='font-700 font-Lato text-3xl'>Products you might like</span>
                        <div className='flex gap-2 align-middle'>
                            <img src={pervious} alt="pervious-slider"/>
                            <img src={next} alt="pervious-slider"/>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2'>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default wishlist