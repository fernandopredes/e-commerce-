import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../contexts/UserContext';
import { RootState } from "../../app/store";
import { StyledDiv } from "./CheckoutStyle";
import { useState } from 'react';
import { setCartTotal, setDiscount } from '../../features/cart/cartTotalSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useUser();
  const subtotal = useSelector((state: RootState) => state.cartTotal.subtotal);
  const [couponCode, setCouponCode] = useState('');
  const [localDiscount, setLocalDiscount] = useState(0);

  const applyCoupon = () => {
      if (couponCode === 'DESC10') {
          const calculatedDiscount = subtotal * 0.10;
          setLocalDiscount(calculatedDiscount);
          dispatch(setDiscount(calculatedDiscount));
          dispatch(setCartTotal(subtotal - calculatedDiscount));
      } else {
          setLocalDiscount(0);
          dispatch(setDiscount(0));
          dispatch(setCartTotal(subtotal));
          alert('Cupom inválido!');
      }
  };

  const finalTotal = subtotal - localDiscount;


    return (
        <StyledDiv>
            <h2>Checkout</h2>
            <div className="items">
                {cartItems.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.url} alt={item.name} />
                        <div className="info">
                            <h3>{item.name}</h3>
                            <p>Preço: R${item.price}</p>
                            <p>Quantidade: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Cupom de Desconto"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                <button onClick={applyCoupon}>Aplicar Cupom</button>
            </div>
            <div>
                <p>Subtotal: R${subtotal.toFixed(2)}</p>
                <p>Desconto: R${localDiscount.toFixed(2)}</p>
                <h3>Total: R${finalTotal.toFixed(2)}</h3>
            </div>
            {/* Implementação de seleção de método de pagamento e botão de finalizar compra */}
        </StyledDiv>
    );
};

export default Checkout;
