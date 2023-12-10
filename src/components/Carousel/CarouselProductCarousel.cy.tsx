import ProductCarousel from './Carousel'

describe('<ProductCarousel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductCarousel />)
  })
})
