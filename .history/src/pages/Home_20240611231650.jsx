import React from 'react'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import FeaturedProducts from '../components/FeaturedProducts'
import NewCollections from '../components/NewCollections/NewCollections'
import CustomSlider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <CustomSlider/>
      <FeaturedProducts/>
      <Categories/>
      <NewCollections />
      <Contact/>      
    </div>
  )
}

export default Home