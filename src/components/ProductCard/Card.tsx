import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { Product } from '../../types/product';
import { CardContainer, ProductDescription, ProductImage, ProductName, ProductPrice, StyledButton } from './CardStyles';

const ProductCard = ({ id, name, description, url, price }:Product) => {
  const { addToCart } = useUser();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToCart = (e:any) => {
    e.stopPropagation();
    addToCart({ id, name, price });
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  }

  return (
    <CardContainer onClick={handleClick}>
      <ProductImage src={url} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
      <StyledButton onClick={handleAddToCart}>Adicionar no carrinho</StyledButton>
    </CardContainer>
  );
};

export default ProductCard;
