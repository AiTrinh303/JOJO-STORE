
import CustomSlider from '../components/Slider/Slider'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import Categories from '../components/Categories'
import NewCollections from '../components/NewCollections'
import Contact from '../components/Contact'

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