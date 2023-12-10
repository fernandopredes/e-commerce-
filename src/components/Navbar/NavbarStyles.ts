import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  @media (max-width: 530px) {
    padding: 0;
    margin:0 auto;
    display: block;
    text-align: center;
    .options{
      justify-content: center;
      padding: 0;
      margin: 0;
      ul{
        padding: 0;
      }
    }
  }
`;

export const NavConteiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img{
  max-width: 4rem;
  margin-right: 2rem;
}
@media (max-width: 530px) {
    flex-direction: column;
    align-items: center;

  }
`

export const User = styled.div`

`

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }`;

export const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 1rem;
`;

export const CartCount = styled.span`
 position: absolute;
  top: -10px;
  right: -5px;
  background-color: #ff8400;
  color: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 68px;
  right: 90px;
  z-index: 55;
  width: 200px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  animation: ${fadeIn} 0.3s forwards;
`;

export const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;
  color: white;
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

export const SearchButton = styled.button`
  background-color: #ff8400;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ff5900;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;
