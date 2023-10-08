import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: #333;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
