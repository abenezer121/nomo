import React from 'react'
import RestaurantCard from './RestaurantCard'
import OfferCard from './OfferCard'

const Banner: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="flex w-full gap-4 px-[33px] py-[14px] sm:px-[34px] sm:py-[21px] md:px-10 lg:px-20">
        <div className="w-2/3">
          <RestaurantCard />
        </div>
        <div className="w-1/3">
          <OfferCard />
        </div>
      </div>
    </div>
  )
}

export default Banner
