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
