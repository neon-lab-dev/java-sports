// @ts-nocheck
import logo from '@assets/images/Vector.svg'
import insta from '@assets/images/instagram.svg'
import facebook from '@assets/images/devicon_facebook.svg'
import loaction from '@assets/images/Group.svg'
import plus from '@assets/images/plus.svg'
import minus from '@assets/images/minus.svg'
import { useState } from 'react'

const AppFooter = () => {
  const [MenuToggle, setMenuToggle] = useState(false)
  const [ExploreMenuToggle, setExploreMenuToggle] = useState(false)
  const [SecureToggle, setSecureToggle] = useState(false)
  const [CustomerMenuToggle, setCustomerMenuToggle] = useState(false)
  const [ConnectMenuToggle, setConnectMenuToggle] = useState(false)
  const [VistMenuToggle, setVistMenuToggle] = useState(false)
  return (
    <div className='flex flex-col px-14 py-10 pt-16 gap-2 max-sm:px-5'>
      <div className=" flex justify-between gap-7 max-sm:flex-col max-sm:px-1 max-lg:flex-col">
        <div className='flex justify-center'>
        <img className='p-1' src={logo} alt="logo" />
        </div>
        <div className='font-Lato font-700 flex flex-col gap-2'>

          {/* Explore Menu */}
          <div className='flex justify-between'>
            <h1 >EXPLORE OUR RANGE</h1>
            <button className='lg:hidden' onClick={() => setMenuToggle((prev) => !prev)}>
              {!MenuToggle ? (
                <img className="" src={plus} alt="" />
              ) : (
                <img className="" src={minus} alt="" />
              )}
            </button>
          </div>
          {MenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li className=''>Bats</li>
                <li>Balls</li>
                <li>Protective Gear</li>
                <li>FootWear</li>
                <li>Apparel</li>
                <li>Accessiories</li>
              </ul>
            </div>
          )}
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden max-lg:hidden'>
            <li>Bats</li>
            <li>Balls</li>
            <li>Protective Gear</li>
            <li>FootWear</li>
            <li>Apparel</li>
            <li>Accessiories</li>
          </ul>
        </div>


        <div className='font-Lato font-700 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1  className='uppercase'>Secure Shopping</h1>
            <button className='lg:hidden' onClick={() => setExploreMenuToggle((prev) => !prev)}>
              {!ExploreMenuToggle ? (
                <img className="" src={plus} alt="" />
              ) : (
                <img className="" src={minus} alt="" />
              )}
            </button>
          </div>
          {ExploreMenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Payment Options</li>
                <li>SSL Encrypted</li>
              </ul>
            </div>
          )}
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden max-lg:hidden'>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Options</li>
            <li>SSL Encrypted</li>
          </ul>
        </div>



        <div className='font-Lato font-700 flex flex-col gap-2 '>
          <div className='flex justify-between'>
            <h1 className='uppercase' >Why Us</h1>
            <button className='lg:hidden' onClick={() => setSecureToggle((prev) => !prev)}>
              {!SecureToggle ? (
                <img className="" src={plus} alt="" />
              ) : (
                <img className="" src={minus} alt="" />
              )}
            </button>
          </div>
          {SecureToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li>Quality Assurance</li>
                <li>Expert Advice</li>
                <li>Fast Shipping</li>
                <li>100% Satisfaction Guarantee</li>
              </ul>
            </div>
          )}
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden  max-lg:hidden'>
            <li>Quality Assurance</li>
            <li>Expert Advice</li>
            <li>Fast Shipping</li>
            <li>100% Satisfaction Guarantee</li>
          </ul>
        </div>


        <div className='font-Lato font-700 flex flex-col gap-2 max'>
          <div className='flex justify-between'>
            <h1  className='uppercase'>Customer Support</h1>
            <button className='lg:hidden' onClick={() => setCustomerMenuToggle((prev) => !prev)}>
              {!CustomerMenuToggle ? (
                <img className="" src={plus} alt="" />
              ) : (
                <img className="" src={minus} alt="" />
              )}
            </button>
          </div>
          {CustomerMenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li>Contact us</li>
                <li>FAQs</li>
                <li>Size Guide</li>
                <li>Shipping & Return</li>
              </ul>
            </div>
          )}
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden  max-lg:hidden'>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Size Guide</li>
            <li>Shipping & Return</li>
          </ul>
        </div>



        <div className='font-Lato font-700 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1  className='uppercase'>Connect with Us</h1>
            <button className='lg:hidden' onClick={() => setConnectMenuToggle((prev) => !prev)}>
              {!ConnectMenuToggle ? (
                <img className="" src={plus} alt="" />
              ) : (
                <img className="" src={minus} alt="" />
              )}
            </button>
          </div>
          {ConnectMenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc flex gap-3'>
                <img src={facebook} alt="" />
                <span>@Javasport</span>
                <img src={insta} alt="" />
                <span>@Javasport</span>
              </ul>
            </div>)
          }
          <hr className='h-0.3 bg-black lg:hidden' />
          <div className='font-Lato font-500 flex flex-row gap-2 justify-center max-sm:hidden  max-lg:hidden'>
            <img src={facebook} alt="facebook" />
            <span>@Javasport</span>
          </div>
          <div className='font-Lato font-500 flex flex-row gap-2 justify-center max-sm:hidden  max-lg:hidden'>
            <img src={insta} alt="insta" />
            <span>@Javasport</span>
          </div>
        </div>




        <div className='font-Lato font-700 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='uppercase'>Visit Our Java Store</h1>
            <button className='lg:hidden' onClick={() => setVistMenuToggle((prev) => !prev)}>
              {!VistMenuToggle ? (
                <img className="" src={plus} alt="" />
              ) : (
                <img className="" src={minus} alt="" />
              )}
            </button>
          </div>
          {VistMenuToggle && (
            <div className='p-1 m-1'>
              <ul className='font-lato font-500 text-base list-disc flex gap-3'>
                <img src={loaction} alt="" />
                <span>Address of the store</span>
              </ul>
            </div>)
          }
          <div className='font-Lato font-500 flex flex-row gap-2 max-sm:hidden  max-lg:hidden'>
            <img src={loaction} alt="" />
            <span>Address of the store</span>
          </div>
        </div>
      </div>
      <div>
        <hr className='h-0.5px bg-gray-300' />
      </div>
      <div className='items-center flex justify-center'>
        <span className=''>© 2024 Java Sports. All rights reserved.</span>
      </div>
    </div>
  )
}
export default AppFooter