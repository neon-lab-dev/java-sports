// @ts-nocheck
import profile from '@/assets/icons/Ellipse.svg'
import AppCheckoutCard from '@/components/AppCheckoutCard'

const checkout = () => {
    
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
            <AppCheckoutCard/>
        </div>
    )
}
export default checkout
