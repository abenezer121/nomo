import React from 'react'
import FoodItem from './FoodItem'
import { FaPlusCircle } from 'react-icons/fa' 


const foodItems = [
  {
    id: 1,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 2,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 3,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 4,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 5,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 6,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 7,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 8,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
  {
    id: 9,
    name: 'Філадельфія сет',
    price: 799,
    pieces: 32,
    image: 'cardphoto.avif',
  },
]
const Pagination: React.FC = () => {
  return (
    <div className="mt-8 mb-12 flex justify-center text-black">
      <button className="mx-1 cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100">
        ПОПЕРЕДНЯ
      </button>
      <div className="mx-1 cursor-pointer rounded-md bg-gray-300 px-3 py-1">
        1
      </div>
      <div className="mx-1 cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100">
        2
      </div>
      <div className="mx-1 cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100">
        3
      </div>
      <div className="mx-1 cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100">
        ...
      </div>
      <div className="mx-1 cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100">
        10
      </div>
      <button className="mx-1 cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100">
        НАСТУПНА
      </button>
    </div>
  )
}

const FoodGrid = () => {
  return (
    <div className="flex-row w-full">
      <div className="gap-4 px-[33px] py-[14px] sm:px-[34px] sm:py-[21px] md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="food-card 21 mb-6 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center text-gray-400">
              <FaPlusCircle size={40} strokeWidth={1} />
            </div>
          </div>

          {foodItems.map((item) => (
            <FoodItem
              key={item.id}
              name={item.name}
              price={item.price}
              pieces={item.pieces}
              image={item.image}
            />
          ))}
         
        </div>
      </div>
      <Pagination/>
    </div>
  )
}

export default FoodGrid
