import React from 'react'
import CustomSlider from '../components/Slider'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import FeaturedProducts from '../components/FeaturedProducts'
import NewCollections from '../components/NewCollections'

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