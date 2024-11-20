describe('Home Page Redirections', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to Projets page', () => {
    cy.get('a[href="/projets/"]').first().click();
    cy.url().should('include', '/projets/');
  });

  it('should redirect to Partenaires page', () => {
    cy.get('a[href="/partenaires/"]').first().click();
    cy.url().should('include', '/partenaires/');
  });

  it('should redirect to Contact page', () => {
    cy.get('a[href="/contact/"]').first().click();
    cy.url().should('include', '/contact/');
  });
});
