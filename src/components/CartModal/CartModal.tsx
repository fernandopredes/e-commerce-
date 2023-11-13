import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { ItemsContainer, ModalContent, ModalHeader, ModalWrapper, StyledLink } from "./CartModalStyles";
import { StyledButton } from "../ProductCard/CardStyles";
import { useDispatch } from 'react-redux';
import { setCartTotal } from "../../features/cart/cartTotalSlice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: Props) => {
    const { cartItems, removeFromCart } = useUser();
    const [shouldRender, setShouldRender] = useState(isOpen);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => {
      return total + (item.quantity || 0) * parseFloat(item.price);
    }, 0);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            dispatch(setCartTotal(totalPrice));
        } else {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen, cartItems, totalPrice, dispatch]);

    if (!shouldRender) return null;

    return (
        <ModalWrapper isOpen={isOpen} onClick={onClose}>
            <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ModalHeader>
                  <h2>Carrinho de Compras</h2>
                </ModalHeader>
                <ItemsContainer>
                {cartItems.length === 0 ? (
                    <p>O carrinho está vazio</p>
                ) : (
                    <>
                      {cartItems.map(item => (
                          <div key={item.id} className="conteiner-cart">
                              <img src={item.url} alt={`foto de ${item.name}`} />
                              <div className="data">
                                <h3>{item.name}</h3>
                                <p>Preço: {item.price}</p>
                                <p>Quantidade: {item.quantity}</p>
                                <StyledButton onClick={() => removeFromCart(item.id)}>Remover</StyledButton>
                              </div>
                          </div>
                      ))}
                      <h3>Total: R${totalPrice.toFixed(2)}</h3>
                      <StyledLink to={'/payment'} onClick={onClose}>Ir para o pagamento</StyledLink>
                  </>
                )}
                </ItemsContainer>
            </ModalContent>
        </ModalWrapper>
    );
};

export default CartModal;
