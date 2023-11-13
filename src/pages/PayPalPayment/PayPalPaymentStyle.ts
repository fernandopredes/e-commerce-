import styled from 'styled-components';
import { PayPalButtons} from "@paypal/react-paypal-js";

export const StyledDiv = styled.div`
  margin-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    max-width: 450px;
    margin: 2rem 0;
    border-radius: 25px;
  }
  span{
    margin-bottom: 2rem;
  }
`;
export const StyledButtons = styled(PayPalButtons)`
width: 400px;

`
