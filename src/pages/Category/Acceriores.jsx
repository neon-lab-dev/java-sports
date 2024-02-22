// @ts-nocheck
import { useEffect, useState } from "react";
import { items } from "./MockData/Accessories";
import AppCard from "@/components/reusable/AppCard";
import tune from '@/assets/icons/tune.svg'
import sort from '@/assets/icons/sort.svg'


export default function Appreal() {
    const [MenuToggle, setMenuToggle] = useState(false)
    const labelWrapper = `w-full py-2 ms-1 text-xs font-Lato font-700`
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };
    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = items.filter((item) => item.color === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...items]);
        }
    };
    return (
        <div className="bg-white ">
            <div className='bg-white justify-center relative'>
                <div className='p-5 pl-[9%]  flex justify-between max-lg:pr-10 max-lg:pl-10 pr-[10%]'>
                    <div className='flex '>
                        <span className='text-[16px] font-Lato font-700 p-2'>Fillter</span>
                        <button onClick={() => setMenuToggle((prev) => !prev)} > <img src={tune} alt="" /></button>
                    </div>
                    {!MenuToggle && (
                        <div className='bg-white  absolute left-[-400px] top-[100px] border-2 xl:hidden p-5 duration-1500 translate-x-[400px]'>
                            <div className='font-Lato  border-2 p-3 absolute bg-white top-0 left-0'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <span className=' pl-2 text-xl font-Lato font-700'>Accessory Type:</span>
                                    </div>
                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                                <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">All</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input className="p-2" onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                                <label className={`${labelWrapper}`} htmlFor="Bags" id="Bags">Grips</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                                <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Stickers</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                                <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Cricket Balls</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                                <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Bat Covers</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                                <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Wrist Bands</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='flex'>
                                        <span className='pl-2 text-xl font-Lato font-700'>Color:</span>
                                    </div>
                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="size3" />
                                                <label htmlFor="size3" className={`${labelWrapper}`} id="Bags">All</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="white" id="size4" />
                                                <label htmlFor="size4" className={`${labelWrapper}`} id="Bags">Blue</label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="size6" />
                                                <label htmlFor="size6" className={`${labelWrapper}`} id="Bags"></label>
                                            </div>
                                        </li>
                                        <li className="w-full">
                                            <div className="flex items-center ps-3">
                                                <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="black" id="" />
                                                <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">black</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className='flex'>
                                    <span className='pl-2 text-xl font-Lato font-700'>Price Range:</span>
                                </div>
                                <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="All2-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label htmlFor="All2-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                        </div>
                                    </li>
                                    <div className="ml-2 mb-6">
                                        <div className='flex justify-between '>
                                            <label className="text-xs font-700 font-Lato" htmlFor="range" >₹400</label>
                                            <label className="text-xs font-700 font-Lato" htmlFor="range" >₹2000</label>
                                        </div>
                                        <input type="range" name='range' id='range' className="range-field " min="400" max="2000" />
                                    </div>
                                </ul>
                                <div className='flex justify-center'>
                                    <span className='text-xl font-Lato font-700'>Customer Ratings:</span>
                                </div>
                                <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="Allr-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label htmlFor="Allr-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="4star-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label htmlFor="4star-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">4 stars & above</label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="3star-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label htmlFor="3star-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">3 stars & above</label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="2star-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label htmlFor="2star-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">2 stars & above</label>
                                        </div>
                                    </li>
                                </ul>

                                <div className='flex'>
                                    <span className=' pl-2 text-xl font-Lato font-700'>New Arivals:</span>
                                </div>
                                <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label htmlFor="vue-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">Show new arrivals only</label>
                                        </div>
                                    </li>
                                </ul>
                                <div className='my-4'>
                                    <button className='text-white font-Lato font-800 bg-black p-2 rounded-md'>Reset All</button>
                                </div>
                            </div>
                        </div>
                    )}
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
            <div className="flex gap-4 max-lg:justify-center">
                <div className='bg-white pl-[9%] justify-center py-4 max-xl:hidden'>
                    <div className=' font-Lato  border-2 p-3'>
                        <div className='flex flex-col'>
                            <div className='flex'>
                                <span className=' pl-2 text-xl font-Lato font-700'>Accessory Type:</span>
                            </div>
                            <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                        <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">All</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input className="p-2" onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                        <label className={`${labelWrapper}`} htmlFor="Bags" id="Bags">Grips</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                        <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Stickers</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                        <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Cricket Balls</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                        <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Bat Covers</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="" />
                                        <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">Wrist Bands</label>
                                    </div>
                                </li>
                            </ul>
                            <div className='flex'>
                                <span className='pl-2 text-xl font-Lato font-700'>Color:</span>
                            </div>
                            <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="size3" />
                                        <label htmlFor="size3" className={`${labelWrapper}`} id="Bags">All</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="white" id="size4" />
                                        <label htmlFor="size4" className={`${labelWrapper}`} id="Bags">Blue</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="red" id="size6" />
                                        <label htmlFor="size6" className={`${labelWrapper}`} id="Bags">Green</label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input onClick={() => handleFilterButtonClick(event.target.value)} type="checkbox" name="" value="black" id="" />
                                        <label htmlFor="Bags" className={`${labelWrapper}`} id="Bags">black</label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='flex'>
                            <span className='pl-2 text-xl font-Lato font-700'>Price Range:</span>
                        </div>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="All2-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label htmlFor="All2-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                </div>
                            </li>
                            <div className="ml-2 mb-6">
                                <div className='flex justify-between '>
                                    <label className="text-xs font-700 font-Lato" htmlFor="range" >₹400</label>
                                    <label className="text-xs font-700 font-Lato" htmlFor="range" >₹2000</label>
                                </div>
                                <input type="range" name='range' id='range' className="range-field " min="400" max="2000" />
                            </div>
                        </ul>
                        <div className='flex justify-center'>
                            <span className='text-xl font-Lato font-700'>Customer Ratings:</span>
                        </div>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="Allr-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label htmlFor="Allr-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="4star-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label htmlFor="4star-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">4 stars & above</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="3star-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label htmlFor="3star-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">3 stars & above</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="2star-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label htmlFor="2star-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">2 stars & above</label>
                                </div>
                            </li>
                        </ul>

                        <div className='flex'>
                            <span className=' pl-2 text-xl font-Lato font-700'>New Arivals:</span>
                        </div>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label htmlFor="vue-checkbox" className="w-full py-2 ms-1 text-xs font-Lato font-700">Show new arrivals only</label>
                                </div>
                            </li>
                        </ul>
                        <div className='my-4'>
                            <button className='text-white font-Lato font-800 bg-black p-2 rounded-md'>Reset All</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white grid grid-cols-4  max-2xl:grid-cols-3 max-lg:grid-cols-2  max-sm:grid-cols-1 ">
                    {filteredItems.map((item, idx) => (
                        <AppCard
                            key={`items-${idx}`}
                            title={item.title}
                            price={item.price}
                            discounted={item.discounted}
                            image={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
