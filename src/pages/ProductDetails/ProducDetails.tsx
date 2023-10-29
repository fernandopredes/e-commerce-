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
    addToCart({
      id: product!.id,
      name: product!.name,
      price: product!.price
    });
  };

  return (
  <StyledDetailContainer>
    <StyledImage src={product?.url} alt={product?.name} />
    <ProductInfoContainer>
      <StyledProductName>{product?.name}</StyledProductName>
      <StyledProductPrice>${product?.price}</StyledProductPrice>
      <StyledQuantityInput type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
      <StyledAddButton onClick={handleAddToCart}>Adicionar ao carrinho</StyledAddButton>
    </ProductInfoContainer>
  </StyledDetailContainer>
);
};

export default ProductDetails;
