import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface CartModalContainerProps {
  isOpen: boolean;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const ModalWrapper = styled.div<CartModalContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: ${props => (props.isOpen ? 999 : 10)};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
    transition: opacity 0.5s;
`;

export const ModalContent = styled.div<CartModalContainerProps>`
    width: 300px;
    max-height: 100vh;
    background-color: black;
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    z-index: 1000;
    animation: ${props => props.isOpen ? slideIn : slideOut} 0.5s forwards;
    display: flex;
    flex-direction: column;
`;

export const ModalHeader = styled.div`

`;

export const ItemsContainer = styled.div`
    overflow-y: auto;
    flex-grow: 1;
    img{
      max-width: 6rem;
      border-radius: 25px;
    }

    .conteiner-cart {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 10px;
    }
    .data {
      max-width: 8rem;
      text-align: center;
    }
`;

export const StyledLink = styled(Link)`
 padding: 10px;
  background-color: #ff8400;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:link, &:visited, &:hover, &:active, &:focus {
    color: #ffffff;
  }

  &:hover {
    background-color: #ff5900;
  }
`
