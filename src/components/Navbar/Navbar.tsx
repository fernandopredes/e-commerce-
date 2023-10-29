import { Link } from 'react-router-dom';
import { CartContainer, CartCount, CartIcon, Nav, NavConteiner, NavItem, NavLink, NavList, User } from './NavbarStyles';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const { user, logout, cartItems, clearCart } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    clearCart();
  };

  return (
    <Nav>
      <NavConteiner>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <User>
          {user ? <p>Bem-vindo, {user.email}</p>: null}
        </User>
      </NavConteiner>
      <NavConteiner>
        <NavList>
          <CartContainer>
            <CartIcon icon={faShoppingCart} />
            {cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
          </CartContainer>
          <NavItem>
              <Link to="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            {user === null ?
              <NavItem>
                <Link to="/login">
                  <NavLink>Login</NavLink>
                </Link>
              </NavItem>
            :
              null}
            {user === null ?
              <NavItem>
                <Link to="/register">
                  <NavLink>Registrar</NavLink>
                </Link>
              </NavItem>
            :
            null}
            {user && (
            <NavItem>
              <li onClick={handleLogout}>Sair</li>
            </NavItem>
          )}
        </NavList>
      </NavConteiner>
    </Nav>
  );
}

export default Navbar;
