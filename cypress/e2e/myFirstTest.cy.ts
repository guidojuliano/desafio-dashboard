describe('Mostrar si existen estos elementos en la pantalla', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);

    cy.visit('http://localhost:3000/dashboard');

    cy.get('[data-testid="header"]').should('exist');

    cy.get('.css-3e39lh-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').should('exist');

    cy.get('.MuiGrid-grid-xs-10 > :nth-child(1) > :nth-child(2) > .MuiButtonBase-root').should('exist');

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').should('exist');

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').should('exist');

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').should('exist');

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').should('exist');

    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root').should('exist');

    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root').should('exist');

    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardContent-root').should('exist');

    cy.get('canvas').should('exist');
  });
});

describe('Funcionamiento de botones de filtros', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);

    cy.visit('http://localhost:3000/dashboard');

    //HOY

    cy.get('.css-3e39lh-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();
    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();
    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();
    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();
    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();

    //7D

    cy.get('.MuiGrid-grid-xs-10 > :nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click();

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();
    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();
    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();
    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();
    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(2) > .MuiButtonBase-root').click();

    //YTD/YTG

    cy.get(':nth-child(1) > :nth-child(5) > .MuiButtonBase-root').click();

    cy.get('.css-1s4m4ge-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();

    cy.get('.css-ktofhn-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click();
  });
});
