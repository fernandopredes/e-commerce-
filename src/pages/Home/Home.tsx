import ProductCarousel from "../../components/Carousel/Carousel"
import banner from '../../assets/banner.jpg'
import { useUser } from "../../contexts/UserContext";
import ProductCard from "../../components/ProductCard/Card";

const Home = () => {

  const { searchResults } = useUser();
  return (
    <>
      <section style={{margin:'2rem 0'}}>
        <img style={{maxWidth:'100%'}} src={banner} alt="banner de halloween" />
      </section>
      {searchResults.length > 0 && (
        <>
          <h2>Resultado da busca:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {searchResults.map(product => (
              <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </>
      )}
      <ProductCarousel/>
    </>
  )
}

export default Home
