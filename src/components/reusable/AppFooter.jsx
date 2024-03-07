import logo from '@assets/images/Vector.svg'
import insta from '@assets/images/instagram.svg'
import facebook from '@assets/images/devicon_facebook.svg'
import loaction from '@assets/images/Group.svg'
import plus from '@assets/images/plus.svg'
import minus from '@assets/images/minus.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  const [MenuToggle, setMenuToggle] = useState(false)
  const [ExploreMenuToggle, setExploreMenuToggle] = useState(false)
  const [SecureToggle, setSecureToggle] = useState(false)
  const [ConnectMenuToggle, setConnectMenuToggle] = useState(false)
  const [VistMenuToggle, setVistMenuToggle] = useState(false)

  const addressMapLink = `https://www.google.com/maps/place/90+Feet+Rd,+Patna,+Bihar/@25.589066,85.15713,16z/data=!4m6!3m5!1s0x39ed589d3565c8c7:0xf197d8a4b0688b5d!8m2!3d25.5890664!4d85.15713!16s%2Fg%2F11byl6rs5m?hl=en&entry=ttu`
  const fbLink = "https://www.facebook.com/p/Java-sports-100075864027997/?paipv=0&eav=AfbItktfMC5SeAtleHM-MDIWNmvS8-XXEcWr18V1D7E07zc-t7grnm6p7A886zvdIwc&_rdr"
  const instaLink = "https://www.instagram.com/javasports_official/"

  return (
    <div className='flex flex-col px-14 py-10 pt-16 gap-2 max-sm:px-5'>
      <div className=" flex justify-between gap-7 max-sm:flex-col max-sm:px-1 max-lg:flex-col">
        <div className='flex justify-center'>
          <img className='p-1' src={ logo } alt="logo" />
        </div>
        <div className='font-Lato font-700 flex flex-col gap-2'>

          {/* Explore Menu */ }
          <div className='flex justify-between'>
            <h1 >EXPLORE OUR RANGE</h1>
            <button className='lg:hidden' onClick={ () => setMenuToggle((prev) => !prev) }>
              { !MenuToggle ? (
                <img className="" src={ plus } alt="" />
              ) : (
                <img className="" src={ minus } alt="" />
              ) }
            </button>
          </div>
          { MenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li><Link to="/Bat/All">Bats</Link></li>
                <li><Link to="/Ball">Balls</Link></li>
                <li><Link to="/Protection/All">Protective Gear</Link></li>
                <li><Link to="/Shoes/All">Shoes</Link></li>
                <li><Link to="/Clothing/All">Clothing</Link></li>
                <li><Link to="/Accessories/All">Accessories</Link></li>
              </ul>
            </div>
          ) }
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden max-lg:hidden'>
            <li><Link to="/Bat/All">Bats</Link></li>
            <li><Link to="/Ball">Balls</Link></li>
            <li><Link to="/Protection/All">Protective Gear</Link></li>
            <li><Link to="/Shoes/All">Shoes</Link></li>
            <li><Link to="/Clothing/All">Clothing</Link></li>
            <li><Link to="/Accessories/All">Accessories</Link></li>
          </ul>
        </div>

        <div className='font-Lato font-700 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='uppercase'>Legal</h1>
            <button className='lg:hidden' onClick={ () => setExploreMenuToggle((prev) => !prev) }>
              { !ExploreMenuToggle ? (
                <img className="" src={ plus } alt="" />
              ) : (
                <img className="" src={ minus } alt="" />
              ) }
            </button>
          </div>
          { ExploreMenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link to="/shipping-and-returns">Shipping & Returns</Link></li>
              </ul>
            </div>
          ) }
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden max-lg:hidden'>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/shipping-and-returns">Shipping & Returns</Link></li>
          </ul>
        </div>

        <div className='font-Lato font-700 flex flex-col gap-2 '>
          <div className='flex justify-between'>
            <h1 className='uppercase' >Company</h1>
            <button className='lg:hidden' onClick={ () => setSecureToggle((prev) => !prev) }>
              { !SecureToggle ? (
                <img className="" src={ plus } alt="" />
              ) : (
                <img className="" src={ minus } alt="" />
              ) }
            </button>
          </div>
          { SecureToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc'>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/size-guide">Size Guide</Link></li>
              </ul>
            </div>
          ) }
          <hr className='h-0.3 bg-black lg:hidden' />
          <ul className='font-500 list-disc px-6 text-[14px] max-sm:hidden  max-lg:hidden'>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
          </ul>
        </div>

        <div className='font-Lato font-700 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='uppercase'>Connect with Us</h1>
            <button className='lg:hidden' onClick={ () => setConnectMenuToggle((prev) => !prev) }>
              { !ConnectMenuToggle ? (
                <img className="" src={ plus } alt="" />
              ) : (
                <img className="" src={ minus } alt="" />
              ) }
            </button>
          </div>
          { ConnectMenuToggle && (
            <div className='p-2 m-2'>
              <ul className='font-lato font-500 text-base list-disc flex gap-3'>
                <img src={ facebook } alt="" />
                <span><Link to={fbLink} target='_blank'>@Javasport</Link></span>
                <img src={ insta } alt="" />
                <span><Link to={instaLink} target='_blank'>@Javasport</Link></span>
              </ul>
            </div>)
          }
          <hr className='h-0.3 bg-black lg:hidden' />
          <div className='font-Lato font-500 flex flex-row gap-2 justify-center max-sm:hidden  max-lg:hidden'>
            <img src={ facebook } alt="facebook" />
            <span><Link to={fbLink}>@Javasport</Link></span>
          </div>
          <div className='font-Lato font-500 flex flex-row gap-2 justify-center max-sm:hidden  max-lg:hidden'>
            <img src={ insta } alt="insta" />
            <span><Link to={instaLink}>@Javasport</Link></span>
          </div>
        </div>

        <div className='font-Lato font-700 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='uppercase'>Visit Our Java Store</h1>
            <button className='lg:hidden' onClick={ () => setVistMenuToggle((prev) => !prev) }>
              { !VistMenuToggle ? (
                <img className="" src={ plus } alt="" />
              ) : (
                <img className="" src={ minus } alt="" />
              ) }
            </button>
          </div>
          { VistMenuToggle && (
            <div className='p-1 m-1'>
              <ul className='font-lato font-500 text-base list-disc flex gap-3'>
                <img src={ loaction } alt="Java Sports" />
                <span><Link to={ `${addressMapLink}` }>Address of the store</Link></span>
              </ul>
            </div>)
          }
          <div className='font-Lato font-500 flex flex-row gap-2 max-sm:hidden  max-lg:hidden'>
            <img src={ loaction } alt="Java Sports" />
            <span><Link to={ `${addressMapLink}` }>Address of the store</Link></span>
          </div>
        </div>
      </div>
      <div>
        <hr className='h-0.5px bg-gray-300' />
      </div>
      <div className='items-center flex justify-center'>
        <span>© 2024 Java Sports. All rights reserved.</span>
      </div>
    </div>
  )
}
export default AppFooter