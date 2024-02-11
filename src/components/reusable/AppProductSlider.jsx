import AppCard from "./AppCard"

// @ts-ignore
import pImg1 from '@/assets/images/prostrike-elite-bat.svg'
// @ts-ignore
import pImg2 from '@/assets/images/prostrike-elite-bat-2.svg' 
// @ts-ignore
import pImg3 from '@/assets/images/prostrike-elite-bat-3.svg'
// @ts-ignore
import accImg1 from '@/assets/images/wicket.svg'
// @ts-ignore
import accImg2 from '@/assets/images/hammer.svg'
// @ts-ignore
import accImg3 from '@/assets/images/gloves.svg'
// @ts-ignore
import accImg4 from '@/assets/images/leg-protection.svg'
// @ts-ignore
import accImg5 from '@/assets/images/thigh-protection.svg'

// Mock Data
const Product = [
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg1
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg1
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg1
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg3
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg2
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg1
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: pImg2
  },
]

// Accessories 
const Accessories = [
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '500',
    image: accImg1
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '825',
    discounted: '900',
    image: accImg2
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '700',
    discounted: '800',
    image: accImg3
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '1200',
    image: accImg4
  },
  {
    title: 'ProStrike Elite Cricket Bat',
    price: '400',
    discounted: '1200',
    image: accImg5
  }
]

const AppProductSlider = ({type}) => {

  return (
    <div className="py-[20px] flex overflow-x-auto gap-[36px]">
      {
        type === 'product' &&
        Product.map((item, index) => (
          <AppCard 
            key={index}
            title={item.title}
            price={item.price}
            discounted={item.discounted}
            image={item.image}
          />
        ))
      }
      {
        type === 'accessories' && 
        Accessories.map((item, index) => (
          <AppCard 
            key={index}
            title={item.title}
            price={item.price}
            discounted={item.discounted}
            image={item.image}
          />
        ))
      }
    </div>
  )
}

export default AppProductSlider