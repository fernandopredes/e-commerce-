import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { UserContext } from '../../contexts/UserContext';

type Product = {
  id: number;
  name: string;
  description: string;
  url: string;
  price: string;
};

const mockSearchResults: Product[] = [
  { id: 1, name: 'Produto Exemplo 1', description: 'Descrição 1', url: 'url-imagem-1', price: '19.99' },
  { id: 2, name: 'Produto Exemplo 2', description: 'Descrição 2', url: 'url-imagem-2', price: '29.99' },
];

describe('<Home />', () => {
  it('renders with search results', () => {
    // Simule o contexto do UserProvider
    cy.mount(
      <BrowserRouter>
        <UserContext.Provider value={{
          searchResults: mockSearchResults,
          user: null,
          setUser: () => {},
          logout: () => {},
          cartItems: [],
          addToCart: () => {},
          removeFromCart: () => {},
          clearCart: () => {},
          setSearchResults: () => {}
        }}>
          <Home />
        </UserContext.Provider>
      </BrowserRouter>
    );

    cy.get('img[alt="banner de halloween"]').should('be.visible');
    if (mockSearchResults.length > 0) {
      cy.contains('Resultado da busca:').should('be.visible');
      mockSearchResults.forEach(product => {
        cy.contains(product.name).should('be.visible');
      });
    }
  });
});
