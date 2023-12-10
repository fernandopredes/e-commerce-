
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';


describe('<Footer />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
          <Footer />
      </Router>
    );
  });
});
