import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, NavList } from './NavbarStyles';

const Navbar = () => {
  return (
    <Nav>
      <NavList>
      <NavItem>
          <Link to="/">
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/login">
            <NavLink>Login</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/register">
            <NavLink>Registrar</NavLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
