describe('overboard store', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('can pick color', () => {
    cy.get('[data-cy=green]').click()
    cy.get('[data-cy=red]').click()
    cy.get('[data-cy=blue]').click()
  })
  it('can buy', () => {
    cy.get('[data-cy=AddToCartButton]').click()
    cy.get('[data-cy=AddToCartButtonError]').should('not.exist');
  })
})