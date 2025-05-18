import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'

import FoodGrid from './components/FoodGrid'
import Categories from './components/Categories'
import Footer from './components/Footer'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Banner />
      <Categories />
      <FoodGrid />
    
      <Footer />
    </div>
  )
}

export default Home
