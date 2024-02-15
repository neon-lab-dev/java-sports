// @ts-nocheck
import heartIcon from '@/assets/icons/heart.svg'
import wishlistIcon from '@assets/icons/wishlist-filled.svg'

/**
 * @props
 * Title
 * Image
 * Price
 * Discounted price
 */

const AppCard = (props) => {
  const cardWrapper = ` h-[400px] w-[240px] rounded-2xl bg-white p-5 border my-5 max-lg:w-[300px] max-sm:w-[160px] max-sm:h-[350px] `;
  const imageWrapper = `bg-grey/1 rounded-2xl my-4 flex justify-center items-center max-sm:w-[120px]  `
  return (
    <article className={ `${cardWrapper} card-shadow` }>
      <div className="flex justify-between items-center">
        <span className='font-Lato font-700 text-xs text-grey-light'>Java Sports</span>
        <span>
          <img src={ heartIcon } alt='Wishlist' />
        </span>
      </div>
      <div className={ `${imageWrapper}`}>
        <img src={ props.image } alt={ props.title } />
      </div>
      <div className='flex flex-col'>
        <span>{ props.title }</span>

        <div className='flex justify-between items-center'>
          <ul className='flex gap-2 items-center'>
            <li className='font-Lato font-700 text-lg'>
              <span>₹{ props.price }</span>
            </li>
            <li className='font-Lato font-500 text-sm line-through'>
              <span>₹{ props.discounted }</span>
            </li>
          </ul>

          <div className='w-[30px] h-[35px]'>
            <img src={ wishlistIcon } alt='Add to Cart' />
          </div>
        </div>
      </div>
    </article>
  )
}

export default AppCard