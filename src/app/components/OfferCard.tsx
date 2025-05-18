import React from 'react'
import Image from 'next/image'

const PromotionBanner = () => {
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-orange-500 shadow-lg">
      <div className="absolute inset-0">
        <img
          src="/image63.png"
          alt="Sushi Set"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* <div className="relative p-6 flex flex-col justify-center h-full">
        <h1 className="text-5xl font-bold text-white mb-4">-30%</h1>
        <p className="text-xl font-medium text-white">знижка на суші-сети</p>
      </div> */}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        <span className="h-3 w-3 rounded-full bg-white"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
      </div>
    </div>
  )
}

const OfferCard: React.FC = () => {
  return <PromotionBanner />
}

export default OfferCard
