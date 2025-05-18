import React from 'react'
import { SlArrowRight } from 'react-icons/sl'

const categories = [
  { id: 1, name: 'Усі заклади', active: true },
  { id: 2, name: 'Доставка', active: false },
  { id: 3, name: 'Самовивіз', active: false },
  { id: 4, name: 'Самовивіз', active: false },
  { id: 5, name: 'Самовивіз', active: false },
]

const Categories = () => {
  return (
    <div className="mt-4 mb-6 flex w-full items-center gap-10 overflow-x-auto px-[33px] py-[14px] px-4 sm:px-[34px] sm:py-[21px] md:px-10 lg:px-20">
      <button className="mr-2 flex items-center justify-center rounded-full border border-gray-200 bg-white p-3 shadow-md transition-shadow duration-300 hover:border-gray-300 hover:shadow-lg">
        <img src="/settings.svg" alt="Settings" className="h-6 w-6" />
      </button>

      {categories.map((category) => (
        <div
          key={category.id}
          className={`mr-3 whitespace-nowrap rounded-full px-6 py-2 px-[49px] ${
            category.active
              ? 'bg-orange-500 text-white'
              : 'font-[20px] bg-gray-100 bg-gray-200 text-gray-700 shadow-lg hover:bg-gray-200'
          }`}
        >
          {category.name}
        </div>
      ))}
      <SlArrowRight className="font-bold text-black" width={42} height={42} />
    </div>
  )
}

export default Categories
