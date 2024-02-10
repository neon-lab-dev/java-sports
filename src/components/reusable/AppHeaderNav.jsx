import { useState } from 'react'

import logo from '@assets/images/Vector.svg'
import locationIcon from '@assets/icons/location.svg'
import wishlistIcon from '@assets/icons/wishlist.svg'
import cartIcon from '@assets/icons/cart.svg'
import profileIcon from '@assets/icons/profile.svg'

// Components
import AppSearchBar from './AppSearchBar'

const AppHeaderNav = () => {
  // @ts-ignore
  const [location, setLocation] = useState(' 542/133 ,Lucknow');

  const handleOnSearch = (e) => {
    e.preventDefault();
    console.log('Search Product !!');
  }

  const navWrapper = `flex gap-1 items-center h-[32px]`
  const navLink = `font-Jakarta text-4 font-500 leading-4`

  return (
    <div className="h-[163px] bg-white flex items-center">
      <nav className="wrapper flex items-center gap-8">
        <span>
          <a href="/">
            <img src={ logo } alt="Java Sports" />
          </a>
        </span>
        <span className='w-[700px]'>
          <AppSearchBar placeholder={ 'Search for “ Bats ”' } onSearch={ handleOnSearch } />
        </span>
        <ul className='flex items-center gap-4'>
          <li className={ navWrapper }>
            <span>
              <img src={ locationIcon } alt="Location" />
            </span>
            <span className={ navLink }>{ location }</span>
          </li>
          <li>
            <a href="#" className={ navWrapper }>
              <span>
                <img src={ wishlistIcon } alt="Wishlist" />
              </span>
              <span className={ navLink }>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#" className={ navWrapper }>
              <span>
                <img src={ cartIcon } alt="Cart" />
              </span>
              <span className={ navLink }>My Cart</span>
            </a>
          </li>
          <li className={ navWrapper }>
            <span>
              <img src={ profileIcon } alt="Cart" />
            </span>
            <a href="/login">
              <span className={ navLink }>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AppHeaderNav