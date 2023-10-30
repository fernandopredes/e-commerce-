import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProducts } from '../../api';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard/Card';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgb(255, 255, 255);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-top: 4px solid black;
  animation: ${spin} 1s linear infinite;
`;

const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
    setIsLoading(false);
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
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </div>
  );
}

export default ProductCarousel;
