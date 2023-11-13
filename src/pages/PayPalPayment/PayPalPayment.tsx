import { PayPalButtonsComponentProps } from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import { StyledButtons, StyledDiv } from "./PayPalPaymentStyle";
import witch from '../../assets/witch.jpg'

const PayPalPayment = () => {
    const cartTotal = useSelector((state: RootState) => state.cartTotal.total);

    const createOrder: PayPalButtonsComponentProps['createOrder'] = (data, actions) => {
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: cartTotal.toString(),
                    },
                },
            ],
        });
    };

    const onApprove: PayPalButtonsComponentProps['onApprove'] = (data, actions) => {
        return actions.order!.capture().then((details) => {

            console.log("Pagamento aprovado", details, data);
        });
    };

    return (
        <StyledDiv>
          <img src={witch} alt="Foto de uma bruxa" />
          <span>Total a pagar: R${cartTotal}</span>
          <StyledButtons
              createOrder={createOrder}
              onApprove={onApprove}
          />
        </StyledDiv>
    );
};

export default PayPalPayment;
