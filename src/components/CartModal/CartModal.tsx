import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { ModalContent, ModalWrapper } from "./CartModalStyles";
import { StyledButton } from "../ProductCard/CardStyles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: Props) => {
    const { cartItems, removeFromCart } = useUser();
    const [shouldRender, setShouldRender] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    const totalPrice = cartItems.reduce((total, item) => {
          return total + (item.quantity || 0) * parseFloat(item.price);
      }, 0);

    return (
        <ModalWrapper isOpen={isOpen} onClick={onClose}>
            <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <h2>Carrinho de Compras</h2>
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
                      <StyledButton>Ir para o pagamento</StyledButton>
                  </>
                )}
            </ModalContent>
        </ModalWrapper>
    );
};

export default CartModal;
