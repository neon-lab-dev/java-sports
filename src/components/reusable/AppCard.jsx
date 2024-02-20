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
  const cardWrapper = `w-[300px] h-[400px] rounded-[20px] bg-neutral-white px-[22px] pt-[12px] pb-[20px] border my-[20px] m-3`;
  const imageWrapper = `bg-grey/1 w-[250px] h-[250px] rounded-[20px] my-4 flex justify-center items-center`

  return (
    <article className={ `${cardWrapper} card-shadow` }>
      <div className="flex justify-between items-center">
        <span className='font-Lato font-700 text-[11px] text-grey-light'>Java Sports</span>
        <span>
          <img src={ heartIcon } alt='Wishlist' />
        </span>
      </div>
      <div className={ `${imageWrapper}` }>
        <img src={ props.image } alt={ props.title } />
      </div>
      <div className='flex flex-col'>
        <span>{ props.title }</span>

        <div className='flex justify-between items-center'>
          <ul className='flex gap-2 items-center'>
            <li className='font-Lato font-700 text-[18px]'>
              <span>₹{ props.price }</span>
            </li>
            <li className='font-Lato font-500 text-[14px] line-through'>
              <span>₹{ props.discounted }</span>
            </li>
          </ul>

          <div className='w-[47px] h-[47px]'>
            <img src={ wishlistIcon } alt='Add to Cart' />
          </div>
        </div>
      </div>
    </article>
  )
}

export default AppCard