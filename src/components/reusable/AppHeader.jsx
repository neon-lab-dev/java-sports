import AppDesktopNavbar from './AppDesktopNavbar'
import AppHeaderNav from './AppHeaderNav'

import FaceBook from '@/assets/icons/facebook.svg'
import Instagram from '@/assets/icons/instagram.svg'

const AppHeader = () => {
  return (
    <>
      <header>
        <nav className="bg-grey/1 py-4 md:block hidden">
          <div className="wrapper flex justify-between items-center text-grey-dark text-[12px] font-[500] font-Jakarta">
            <ul className="flex gap-8">
              <li>
                <a href="">
                  <img src={ FaceBook } alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={ Instagram } alt="Instagram" />
                </a>
              </li>
            </ul>
            <ul className="flex gap-9 capitalize">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Payment & delivery</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* HEADER NAVBAR */}
        <AppHeaderNav />

        {/* DESKTOP NAVBAR */}
        <AppDesktopNavbar />
        
      </header>
    </>
  )
}

export default AppHeader