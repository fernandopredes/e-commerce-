import { useNavigate } from 'react-router-dom';
import { AccountContainer, AccountButton } from './MyAccountStyles';
import { useUser } from '../../contexts/UserContext';

const MyAccount = () => {
  const navigate = useNavigate()
  const { logout, clearCart } = useUser()

  const userEmail = localStorage.getItem('email')
  const userName = localStorage.getItem('user')

  const handleLogout = () => {
    logout()
    clearCart()
    localStorage.removeItem('token')
    navigate('/')
  };

  const navigateHome = () => {
    navigate('/')
  };

  return (
    <AccountContainer>
      <h2>Minha Conta</h2>
      {userName && <p>Nome: {userName}</p>}
      {userEmail && <p>Email: {userEmail}</p>}
      <AccountButton onClick={handleLogout}>Logout</AccountButton>
      <AccountButton onClick={navigateHome}>Voltar para a Home</AccountButton>
    </AccountContainer>
  );
}

export default MyAccount;
