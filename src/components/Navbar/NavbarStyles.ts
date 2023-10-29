import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
`;

export const NavConteiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img{
  max-width: 4rem;
  margin-right: 2rem;
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
