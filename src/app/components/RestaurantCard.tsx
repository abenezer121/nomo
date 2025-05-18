import React from 'react'

import {
  BiMenuAltRight,
  BiDollarCircle,
  BiTimeFive,
  BiInfoCircle,
  BiMap,
} from 'react-icons/bi'

const SushiBanner = () => {
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="image.png"
          alt="Sushi Rolls"
          className="h-full w-full object-cover object-center opacity-75"
        />
      </div>

      <div className="relative flex h-full flex-col justify-between gap-4 p-6">
        <div className="flex items-center gap-2 py-2 text-white">
          <span>Усі заклади</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L15 12L10 6Z" />
          </svg>
        </div>

        <div className="flex items-center gap-4 py-2">
          <div className="rounded-full bg-white p-2">
            <img
              src="/wesushi.png"
              alt="We Sushi Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">We Sushi</h1>
            <p className="text-sm text-gray-400">everyday rolls</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 py-2">
          <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 hover:bg-white/40">
            <BiMenuAltRight className="text-black" />
            <span className="text-black">Меню</span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 hover:bg-white/40">
            <BiDollarCircle className="text-white" />
            <span className="text-white">Від 0 ₴</span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 hover:bg-white/40">
            <BiTimeFive className="text-white" />
            <span className="text-white">45 хв.</span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 hover:bg-white/40">
            <BiInfoCircle className="text-white" />
          </button>
          <button className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 hover:bg-white/40">
            <BiMap className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

const RestaurantCard: React.FC = () => {
  return (
    <div className="h-full">
      <SushiBanner />
    </div>
  )
}

export default RestaurantCard
