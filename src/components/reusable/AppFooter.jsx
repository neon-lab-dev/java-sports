// @ts-ignore
import logo from '@assets/images/Vector.svg'
const AppFooter = () => {
  return (
      <div className="wrapper py-5 flex justify-between">
      <div className='flex flex-col justify-center align-center'>
        <h1 className='text-xs'>JAVA SPORTS</h1>
        <img src={logo} alt="" />
      </div>
      <div className='font-Lato font-700'>
        <h1>EXPLORE OUR RANGE</h1>
      </div>
      <div className='font-Lato font-700'>
        <h1>SECURE SHOPPING</h1>
      </div>
      <div className='font-Lato font-700'>
        <h1>WHY US</h1>
      </div>
      <div className='font-Lato font-700'>
        <h1>CUSTOMER SUPPORT</h1>
      </div>
      <div className='font-Lato font-700'>
        <h1>CONNECT WITH US</h1>
      </div>
      <div className='font-Lato font-700'>
        <h1>VIST JAVA STORE</h1>
      </div>
    </div>
  )
}
export default AppFooter