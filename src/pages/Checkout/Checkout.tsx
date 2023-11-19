import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../contexts/UserContext';
import { RootState } from "../../app/store";
import { setCartTotal, setDiscount, setPaymentMethod } from '../../features/cart/cartTotalSlice';
import { StyledDiv, StyledH2 } from "./CheckoutStyle";
import { StyledButton } from '../Login/FormStyles';


const Checkout = () => {
    const dispatch = useDispatch();
    const { cartItems } = useUser();
    const subtotal = useSelector((state: RootState) => state.cartTotal.subtotal);
    const [couponCode, setCouponCode] = useState('');
    const [localDiscount, setLocalDiscount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const applyCoupon = () => {
        if (couponCode === 'DESC10') {
            const calculatedDiscount = subtotal * 0.10
            setLocalDiscount(calculatedDiscount)
            dispatch(setDiscount(calculatedDiscount))
            dispatch(setCartTotal(subtotal - calculatedDiscount))
        } else {
            setLocalDiscount(0)
            dispatch(setDiscount(0))
            dispatch(setCartTotal(subtotal))
            alert('Cupom inválido. =( ')
        }
    };

    const handleCheckout = () => {
      dispatch(setPaymentMethod(selectedPaymentMethod));
    };

    const finalTotal = subtotal - localDiscount;

    return (
        <>
          <StyledH2 className="title">
            <h2>Checkout</h2>
          </StyledH2>
          <StyledDiv>
              <div className="checkout-content">
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
                  <div className="payment-info">
                      <input
                          type="text"
                          placeholder="Cupom de Desconto"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <StyledButton onClick={applyCoupon}>Aplicar Cupom</StyledButton>
                      <p>Subtotal: R${subtotal.toFixed(2)}</p>
                      <p>Desconto: R${localDiscount.toFixed(2)}</p>
                      <h3>Total: R${finalTotal.toFixed(2)}</h3>
                      <label>
                          <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={selectedPaymentMethod === 'card'}
                              onChange={() => setSelectedPaymentMethod('card')}
                          />
                          Cartão de Crédito
                      </label>
                      <label>
                          <input
                              type="radio"
                              name="paymentMethod"
                              value="pix"
                              checked={selectedPaymentMethod === 'pix'}
        onChange={() => setSelectedPaymentMethod('pix')}
                          />
                          Pix
                      </label>
                      <StyledButton
                          disabled={!selectedPaymentMethod}
                          onClick={handleCheckout}
                      >
                          Finalizar Compra
                      </StyledButton>
                  </div>
              </div>
          </StyledDiv>
        </>
    );
};

export default Checkout;
