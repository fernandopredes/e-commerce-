import { useUser } from '../../contexts/UserContext';
import { Product } from '../../types/product';
import { CardContainer, ProductDescription, ProductImage, ProductName, ProductPrice, StyledButton } from './CardStyles';

const ProductCard = ({ id, name, description, url, price }:Product) => {
  const { addToCart } = useUser();

  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <CardContainer>
      <ProductImage src={url} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
      <StyledButton onClick={handleAddToCart}>Adicionar no carrinho</StyledButton>
    </CardContainer>
  );
};

export default ProductCard;
