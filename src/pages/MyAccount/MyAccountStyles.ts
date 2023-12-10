import styled from 'styled-components';
import { StyledButton } from '../Login/FormStyles';

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: auto;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AccountButton = styled(StyledButton)`
  margin: 10px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
