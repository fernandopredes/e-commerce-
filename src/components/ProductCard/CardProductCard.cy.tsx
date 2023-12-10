
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from '../../contexts/UserContext';
import ProductCard from './Card';


const mockProduct = {
  id: 1,
  name: 'Produto',
  description: 'Descrição do produtoo',
  url: 'url',
  price: '19',
};

describe('<ProductCard />', () => {
  it('renders', () => {


    cy.mount(
      <BrowserRouter>
        <UserProvider >
          <ProductCard {...mockProduct} />
        </UserProvider>
      </BrowserRouter>
    );
    cy.contains(mockProduct.name).should('be.visible');
    cy.contains('Adicionar no carrinho').should('be.visible');
    cy.get('button').contains('Adicionar no carrinho').click();

  });
});
