import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import { useUser } from '../../contexts/UserContext';
import { Container, Item, ItemList, OrderDetails, PaymentMethod, SuccessMessage, Summary, Title } from './OrderConfirmationStyle';
import witch from '../../assets/witch.jpg';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../features/cart/cartTotalSlice';
import { StyledButton } from '../../components/ProductCard/CardStyles';



const OrderConfirmation = () => {
    const { cartItems } = useUser();
    const { subtotal, discount, total, paymentMethod } = useSelector((state: RootState) => state.cartTotal);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoHome = () => {
      dispatch(clearCart())
      navigate('/')
  }

    return (
      <Container>
        <img src={witch} alt="foto de bruxa com placa" />
        <Title>Confirmação do Pedido</Title>
        <SuccessMessage>Seu pedido foi realizado com sucesso!</SuccessMessage>
        <OrderDetails>
          <h2>Detalhes do Pedido</h2>
          <ItemList>
            {cartItems.map((item) => (
              <Item key={item.id}>
                <img src={item.url} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Preço: R$ {item.price}</p>
                  <p>Quantidade: {item.quantity}</p>
                </div>
              </Item>
            ))}
          </ItemList>
          <Summary>
            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
            <p>Desconto: R$ {discount.toFixed(2)}</p>
            {total === 0 ?<h3>Total: R$ {subtotal.toFixed(2)}</h3> : <h3>Total: R$ {total.toFixed(2)}</h3>}
          </Summary>
          <PaymentMethod>
            Método de Pagamento:{" "}
            {paymentMethod === "card" ? "Cartão de Crédito" : "Pix"}
          </PaymentMethod>
          <StyledButton onClick={handleGoHome}>Voltar para a Home</StyledButton>
        </OrderDetails>
      </Container>
    );
}

export default OrderConfirmation;
