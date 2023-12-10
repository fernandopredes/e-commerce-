import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

describe('<Router />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    )
  })
})
