import{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductInfoContainer, StyledAddButton, StyledDetailContainer, StyledImage, StyledProductName, StyledProductPrice, StyledQuantityInput } from './ProductDetailsStyles';
import { useUser } from '../../contexts/UserContext';
import { fetchProductDetails } from '../../api';
import { Product } from '../../types/product';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useUser();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProductDetails(id)
      .then(data => {
        setProduct(data);
      });
  }, [id]);

  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    const cartItem = {
      id: product!.id,
      name: product!.name,
      price: product!.price,
      quantity: 1
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }
  }

  return (
  <StyledDetailContainer>
    <StyledImage src={product?.url} alt={product?.name} />
    <ProductInfoContainer>
      <StyledProductName>{product?.name}</StyledProductName>
      <h3>{product?.description}</h3>
      <StyledProductPrice>${product?.price}</StyledProductPrice>
      <StyledQuantityInput
        type="number"
        min="0"
        max="15"
        value={quantity}
        onChange={e => {
          const value = Number(e.target.value);
          if (value >= 0 && value <= 15) {
            setQuantity(value);
          } else {
            alert("Por favor, insira uma quantidade entre 0 e 15.");
          }
        }}
      />
      <StyledAddButton onClick={handleAddToCart}>Adicionar ao carrinho</StyledAddButton>
    </ProductInfoContainer>
  </StyledDetailContainer>
);
};

export default ProductDetails;
