import call from '@/assets/icons/Call.svg'
import clock from '@assets/icons/Clock.svg'
import email from '@/assets/icons/Email.svg'
import loaction from '@/assets/icons/Location on.svg'



const contactUs = () => {
    return (
        <div className=' bg-white'>
            <div className='flex justify-center p-10'>
                <div className='flex  flex-col bg-black gap-10 p-10'>
                    <span className='text-white text-2xl'>Corprate Office</span>
                    <div className='flex flex-col gap-20'>
                        <div className='flex'>
                            <img src={call} alt="" />
                            <div className='flex flex-col'>
                                <span className='text-white'>+91 995 599 2502</span>
                                <span className='text-white'>+91 995 599 2505</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={clock} alt="" />
                            <span className='text-white'>10am to 10pm, all days</span>
                        </div>
                        <div className='flex'>
                            <img src={email} alt="" />
                            <span className='text-white'>webmedlifeeasy@gmail.com</span>
                        </div>
                        <div className='flex'>
                            <img src={loaction} alt="" />
                            <p className='text-white'>H.NO, 2M/94, Bahadurpur Housing Colony, Kankarbagh,
                                <br />Chitragupta Nagar, Patna, Bihar 800026</p>
                        </div>
                    </div>
                </div>
                <form action="" className=' bg-grey/1 py-5 px-16 flex flex-col gap-5'>
                    <span className='text-3xl '>Write to us</span>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user" className="text-sm font-700 font-Lato ">Name</label>
                        <input className="p-2 border-none rounded-xl" type="text" placeholder="Enter Name" id="user" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user" className="text-sm font-700 font-Lato ">Email</label>
                        <input className="p-2 border-none rounded-xl" type="text" placeholder="Enter your email" id="user" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user" className="text-sm font-700 font-Lato ">Phone</label>
                        <input className="p-2 border-none rounded-xl" type="text" placeholder="Enter your phone number" id="user" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user" className="text-sm font-700 font-Lato ">Message</label>
                        <input className="p-2 border-none rounded-xl w-80 h-[200px]" type="text" placeholder="Write your message here" id="user" />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-black text-white px-16 py-2 rounded-3xl'> Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default contactUs