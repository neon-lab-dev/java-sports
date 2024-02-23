// @ts-nocheck
import call from '@/assets/icons/Call.svg'
import clock from '@assets/icons/Clock.svg'
import email from '@/assets/icons/Email.svg'
import loaction from '@/assets/icons/Location on.svg'

const contactUs = () => {
    const MapStyle = {
        width: 800,
        height: 400
    };
    return (
        <div className=' bg-white'>
            <div className='flex justify-center p-6'>
                <span className='text-4xl font-600'>Contact US</span>
            </div>
            <div className='flex justify-center p-10'>
                <div className='flex  flex-col bg-black gap-10 p-10'>
                    <span className='text-white text-2xl'>Corprate Office</span>
                    <div className='flex flex-col gap-20'>
                        <div className='flex'>
                            <img src={call} alt="call" />
                            <div className='flex flex-col'>
                                <span className='text-white'>+91 995 599 2502</span>
                                <span className='text-white'>+91 995 599 2505</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={clock} alt="clock" />
                            <span className='text-white'>10am to 10pm, all days</span>
                        </div>
                        <div className='flex'>
                            <img src={email} alt="email" />
                            <span className='text-white'>webmedlifeeasy@gmail.com</span>
                        </div>
                        <div className='flex'>
                            <img src={loaction} alt="location" />
                            <p className='text-white'>H.NO, 2M/94, Bahadurpur Housing Colony, Kankarbagh,
                                <br />Chitragupta Nagar, Patna, Bihar 800026</p>
                        </div>
                    </div>
                </div>
                <form action="" className=' bg-grey/1 py-8 px-16 flex flex-col gap-5'>
                    <span className='text-3xl font-500 '>Write to us</span>
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
                        <input className="p-2 border-none rounded-xl w-80 pb-40 " type="text" placeholder="Write your message here" id="user" />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-black text-white px-16 py-2 rounded-3xl'> Submit</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center'>
                <span className='text-4xl font-700 p-6'> View On Map </span>
            </div>
            <div className='flex justify-center p-10'>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin"
                        width={MapStyle.width}
                        height={MapStyle.height}
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="JavaSport"
                    />
                </div>
            </div>
        </div>
    )
}
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */ }

export default contactUs