import { Link } from 'react-router-dom';
import { CartContainer, CartCount, CartIcon, DropdownMenu, DropdownMenuItem, Nav, NavConteiner, NavItem, NavLink, NavList, SearchButton, SearchForm, SearchInput, StyledButton, StyledLink, User, UserIcon } from './NavbarStyles';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { fetchCategories, fetchSearchResults } from '../../api';
import { Category } from '../../types/category';
import CartModal from '../CartModal/CartModal';
import Spinner from '../Spinner/Spinner';


const Navbar = () => {
  const { user, logout, cartItems, clearCart, setSearchResults } = useUser();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const menuRef = useRef<HTMLUListElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    localStorage.removeItem('token');
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + (item.quantity || 0);
  }, 0);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      setSearchResults([])
      return
    }
    const data = await fetchSearchResults(searchTerm);
    setSearchResults(data)
    navigate('/')

  };

  return (
    <Nav>
      <CartModal isOpen={isCartOpen} onClose={closeCart}/>
      <NavConteiner className='options'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <User>
          {user ? <p>Bem-vindo, {user.email}</p>: null}
        </User>
      </NavConteiner>
      <NavConteiner className='options'>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar itens..." />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm>
        <NavList>
          <CartContainer onClick={openCart}>
            <CartIcon icon={faShoppingCart} />
            {cartItems.length > 0 && <CartCount>{totalQuantity}</CartCount>}
          </CartContainer>
          {user && (
          <Link to="/my-account">
            <UserIcon icon={faUser} />
          </Link>
          )}
          <NavItem>
              <Link to="/">
                <NavLink>Home</NavLink>
              </Link>
          </NavItem>
          <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>Categorias</StyledButton>
            {isMenuOpen && (
              <DropdownMenu ref={menuRef}>
                {categories.length > 0 ? (
                  categories.map(category => (
                    <DropdownMenuItem key={category.id}>
                      <StyledLink to={`/category/${category.id}`}>{category.name}</StyledLink>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <Spinner />
                )}
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
