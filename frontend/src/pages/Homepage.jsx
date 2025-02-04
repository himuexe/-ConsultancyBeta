import Hero from '../components/Hero'
import Services from '../components/services'
import SubServices from '../components/SubServices'
import AboutUs from '../components/aboutUs'
import Intersngrid from '../components/cards'
import QuoteCarousel from '../components/Carousel'
import Tech from '../components/Tech'
import Pricing from '../components/Pricing'
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <SubServices/>
      <Tech/>
      <AboutUs/>
      <Pricing/>
      <Intersngrid/>
      <QuoteCarousel/>
    </div>
  )
}

export default Homepage
