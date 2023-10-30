import { Link } from 'react-router-dom';
import { CartContainer, CartCount, CartIcon, DropdownMenu, DropdownMenuItem, Nav, NavConteiner, NavItem, NavLink, NavList, StyledButton, StyledLink, User } from './NavbarStyles';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { fetchCategories } from '../../api';
import { Category } from '../../types/category';


const Navbar = () => {
  const { user, logout, cartItems, clearCart } = useUser();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    fetchCategories().then(data => setCategories(data));
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [])

  const handleLogout = () => {
    logout();
    navigate('/');
    clearCart();
  };

  return (
    <Nav>
      <NavConteiner className='options'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <User>
          {user ? <p>Bem-vindo, {user.email}</p>: null}
        </User>
      </NavConteiner>
      <NavConteiner className='options'>
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
            <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>Categorias</StyledButton>
            {isMenuOpen && (
              <DropdownMenu ref={menuRef}>
                {categories.map(category => (
                  <DropdownMenuItem key={category.id}>
                    <StyledLink to={`/category/${category.id}`}>{category.name}</StyledLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>
            )}
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
