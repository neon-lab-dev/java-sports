// @ts-nocheck
import tune from '@/assets/icons/tune.svg'
import sort from '@/assets/icons/sort.svg'
import right from '@assets/icons/right.svg'
import left from '@assets/icons/left.svg'
import { useState } from 'react'
import img1 from '@/assets/images/prostrike-elite-bat.svg'
import img2 from '@/assets/images/prostrike-elite-bat-2.svg'
import img3 from '@/assets/images/prostrike-elite-bat-3.svg'
import AppCard from '@/components/reusable/AppCard'

    // export const Sort = () => {
    //     const { filterDispatch } = useFilter();
      
    //     const handleSortChange = (option) => {
    //       filterDispatch({
    //         type: option,
    //         payload: option
    //       });
    //     }; 
      // const { state } = useFilter();
    // const getSortedProducts = (Products, sort) => {
    //     const sortedProducts = [...products].sort((item1, item2) =>
    //       sort === "lth"
    //         ? item1.newPrice - item2.newPrice
    //         : sort === "htl"
    //         ? item2.newPrice - item1.newPrice
    //         : products
    //     );
    //     return sortedProducts;
    //   };
const category = () => {
    const Product = [
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img1,
            color: 'red',
            productType:'english willow',
            size:'size5',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img1,
            color: 'red',
            productType:'english willow',
            size:'size4',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img1,
            color: 'white',
            productType:'english willow',
            size:'size5',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img3,
            color: 'black',
            productType:'english willow',
            size:'size5',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img2,
            color: 'red',
            productType:'english willow',
            size:'size5',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img1,
            color: 'red',
            productType:'english willow',
            size:'size5',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '400',
            discounted: '500',
            image: img2,
            color: 'white',
            productType:'english willow',
            size:'sizeHarrow',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '900',
            discounted: '300',
            image: img2,
            color: 'white',
            productType:'kashmir willow',
            size:'sizeShortHandle',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '900',
            discounted: '300',
            image: img2,
            color: 'white',
            productType:'kashmir willow',
            size:'size3',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '900',
            discounted: '300',
            image: img2,
            color: 'white',
            productType:'kashmir willow',
            size:'size5',
            weight:'medium'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '900',
            discounted: '300',
            image: img2,
            color: 'white',
            productType:'kashmir willow',
            size:'size2',
            weight:'light'

        },
        {
            title: 'ProStrike Elite Cricket Bat',
            price: '900',
            discounted: '300',
            image: img2,
            color: 'white',
            productType:'kashmir willow',
            size:'size5',
            weight:'light'

        },
    ]    
    const [MenuToggle, setMenuToggle] = useState(false)


    const [Close, setClose] = useState(false)
    const [Items, setItems] = useState(Product)

    const filteritems = (cateitem) => {
        const updatedItems = Product.filter((por) => {
            return por.color === cateitem;
        });
        setItems(updatedItems);
    } 
    const filteritems1 = (cateitem) => {
        const updatedItems = Product.filter((por) => {
            return por.size === cateitem;
        });
        setItems(updatedItems);
    } 
  
    return (
        <>
            <div className='bg-white justify-center relative'>
                <div className=' p-3 bg-grey/1'>
                    <div className=''>
                        <span className=' pl-[140px] max-lg:pl-9 font-Lato text-[16px] font-700 align-middle'>Home {`>>`} Bats {`>>`} <span className='text-red-500'>All</span></span>
                    </div>
                </div>
                <div className='p-5 pl-[140px] flex justify-between max-lg:pr-10 max-lg:pl-10 pr-[158px]'>
                    <div className='flex '>
                        <span className='text-[16px] font-Lato font-700 p-2'>Fillter</span>
                        <button onClick={() => setMenuToggle((prev) => !prev)} > <img src={tune} alt="" /></button>
                    </div>
                    {/**/}
                    <div className='flex gap-1'>
                        <img className='max-lg:rotate-90' src={sort} alt="" />
                        <span className='text-[16px] font-Lato font-700 p-2 max-lg:hidden'>Sort by</span>
                        <select id="countries" className="bg-gray-50 border border-gray-300 p-2">
                            <option selected>Most Relevent</option>
                            <option value="US">Low to High price</option>
                            <option value="CA">High to low price</option>
                            <option value="FR">Most Popular</option>
                            <option value="DE">Most Rating </option>
                        </select>
                    </div>
                </div>
            </div>          
            <div className='flex flex-col'>
                <div className='flex gap-4 bg-white'>
                    <div className='bg-white justify-center py-4 max-lg:hidden p'>
                        <div className='font-Lato w-[220px] border-2 '>
                            <div className='flex flex-col'>
                                <div className='flex'>
                                    <span className=' pl-2 text-xl font-Lato font-700'>Product Type:</span>
                                </div>
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input onChange={() => handleSortChange("lth"),()=>{

                                            }} id="all-checkbox" type="checkbox" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="all-checkbox" onClick={()=>setItems(Product)} class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Grip-checkbox" onClick={() => filteritems('red')}  type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Grip-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Kashmir willow</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" onClick={() => filteritems('white')} type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">English willow</label>
                                        </div>
                                    </li>
                                </ul>
                                <div className='flex'>
                                    <span className='pl-2 text-xl font-Lato font-700'>Size:</span>
                                </div>
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Allc-checkbox" onClick={()=>setItems(Product)} type="checkbox" value="Red" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Allc-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Allc-checkbox" onClick={() => filteritems1('size3')} type="checkbox" value="Red" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Allc-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">size2</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Blue-checkbox" onClick={() => filteritems1('size3')} type="checkbox" value="White" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Blue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">size3</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Green-checkbox"onClick={() => filteritems1('size6')} type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Size6</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="White-checkbox" onClick={() => filteritems1('size7')} type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="White-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Size7</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex'>
                                <span className='pl-2 text-xl font-Lato font-700'>Price Range:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="All2-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="All2-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                    </div>
                                </li>
                                <div class="ml-2 mb-6">
                                    <div className='flex justify-between '>
                                        <label htmlFor="range" class=" text-xs font-Lato font-700">₹400</label>
                                        <label htmlFor="range" class="text-xs font-Lato font-700" >₹2000</label>
                                    </div>
                                    <input type="range" name='range' id='range' class="range-field " min="400" max="2000" />
                                </div>
                            </ul>
                            <div className='flex justify-center'>
                                <span className='text-xl font-Lato font-700'>Customer Ratings:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Allr-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Allr-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="4star-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="4star-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">4 stars & above</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="3star-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="3star-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">3 stars & above</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="2star-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="2star-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">2 stars & above</label>
                                    </div>
                                </li>
                            </ul>

                            <div className='flex'>
                                <span className=' pl-2 text-xl font-Lato font-700'>New Arivals:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="vue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Show new arrivals only</label>
                                    </div>
                                </li>
                            </ul>
                            <div className='my-4'>
                                <button className='text-white font-Lato font-800 bg-black p-2 rounded-md'>Reset All</button>
                            </div>
                        </div>
                    </div>

                    {/* App Card wrapper */}
                    <div className='bg-white grid grid-cols-4 gap-5 max-lg:grid-cols-2 m-2'>
                        {
                            Items.map((item, index) => (
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
                </div>

                {/* Pagnation */}
                <div className='flex bg-white gap-1 p-5 justify-end pr-[10%]'>
                    <button className='border-2 rounded py-1 px-4 m-1'>
                        <img src={left} alt="right" />
                    </button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700 text-xs'>1</button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700'>...</button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700 text-xs'>10</button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700'>
                        <img src={right} alt="left" />
                    </button>
                </div>
            </div>
        </>
    )
}
export default category

