describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/dashboard');

    cy.get('[data-testid="header"]').should('exist');
  });
});
