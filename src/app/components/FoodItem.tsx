import React from 'react'

interface FoodItemProps {
  name: string
  price: number
  pieces: number
  image: string
}

const FoodItem: React.FC<FoodItemProps> = ({ name, price, pieces, image }) => {
  return (
    <div className="mb-6 rounded-lg shadow-lg">
      <div className="h-[200px] w-[550px]">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="bg-t-2 p-5 text-black">
        <h3 className="px-2 text-lg font-medium">
          {name} {pieces} шт.
        </h3>
        <div className="flex items-center gap-4 px-2 text-sm">
          <span>{price} ₴</span>
          <span className="line-through">1122 ₴</span>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
