import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProducts } from '../../api';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard/Card';
import Spinner from '../Spinner/Spinner';


const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h2>Produtos disponíveis</h2>
      {products.length !== 0 ? (
        <>
          <Slider {...settings}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                quantity={product.quantity}
                url={product.url}
                price={product.price}
              />
            ))}
          </Slider>
        </>

      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default ProductCarousel;
