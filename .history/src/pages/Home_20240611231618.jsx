import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import NewCollections from '../../components/NewCollections/NewCollections'
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