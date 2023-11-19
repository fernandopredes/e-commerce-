import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import { useUser } from '../../contexts/UserContext';


const OrderConfirmation = () => {
    const { cartItems } = useUser();
    const { subtotal, discount, total, paymentMethod } = useSelector((state: RootState) => state.cartTotal);

    return (
        <div>
            <h1>Confirmação do Pedido</h1>
            <p>Seu pedido foi realizado com sucesso!</p>
            <div className="order-details">
                <h2>Detalhes do Pedido</h2>
                {cartItems.map(item => (
                    <div key={item.id}>
                        <img src={item.url} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Preço: R$ {item.price}</p>
                            <p>Quantidade: {item.quantity}</p>
                        </div>
                    </div>
                ))}
                <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
                <p>Desconto: R$ {discount.toFixed(2)}</p>
                <h3>Total: R$ {total.toFixed(2)}</h3>
                <p>Método de Pagamento: {paymentMethod === 'card' ? 'Cartão de Crédito' : 'Pix'}</p>
            </div>
        </div>
    );
}

export default OrderConfirmation;
