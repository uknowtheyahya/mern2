import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'
import FavvBook from './FavvBook'
import PromoBanner from './PromoBanner'
import OtherDress from './OtherDress'
import Review from './Review'



const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>
      <FavvBook/>
      <PromoBanner/>
      <OtherDress/>
      <Review/>
      
    </div>
    
  )
}

export default Home