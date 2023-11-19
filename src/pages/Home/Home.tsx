import ProductCarousel from "../../components/Carousel/Carousel"
import banner from '../../assets/banner.jpg'

const Home = () => {
  return (
    <>
      <section style={{margin:'2rem 0'}}>
        <img style={{maxWidth:'100%'}} src={banner} alt="banner de halloween" />
      </section>
      <ProductCarousel/>
    </>
  )
}

export default Home
