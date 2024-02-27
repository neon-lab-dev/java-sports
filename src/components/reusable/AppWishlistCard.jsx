// @ts-nocheck
// @ts-ignore
import close from '@assets/icons/Wishlist-close.svg'
import bat from "@assets/images/bats-img.svg"
const AppWishlistCard = (props) => {
  const cardWrapper = `  w-[300px]  max-xl:w-[280px] rounded-2xl bg-white p-6 border `;
  const imageWrapper = `bg-grey/1 w-[25w  0px] h-[240px] max-xl:w-[230px] rounded-2xl my-2 p-8 flex justify-center items-center  `
  return (
    <article className={ `${cardWrapper} card-shadow` }>
      <div className="flex justify-between items-center">
        <span className='font-Lato font-700 text-xs text-grey-light'>Java Sports</span>
        <span>
          <img src={close} alt='Wishlist' />
        </span>
      </div>
      <div className={ `${imageWrapper}`}>
        <img src={ props.img || bat } alt={ props.title } />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-Lato font-700 text-[16px]'>{ props.title } Pro Elite Bat</span>
        <div className='flex justify-between items-center'>
          <ul className='flex gap-1 items-center gap-2'>
            <li className='font-Lato font-700 text-lg'>
              <span>₹{ props.price } 600</span>
            </li>
            <li className='font-Lato font-500 text-sm line-through'>
              <span>₹{ props.discounted } 900</span>
            </li>
            <li className='font-Lato font-700 text-[13px] text-green-400'>
              <span>₹{ props.discounted } 30%</span>
            </li>
          </ul>
        </div>
          <button className='bg-primary/2 text-white font-500 text-lg  p-1 rounded'>Move to Cart</button>
      </div>
    </article>
  )
}
export default AppWishlistCard