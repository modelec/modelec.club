describe('Class and Component Presence Test', () => {
  it('Checks if specific classes and components are present', () => {
    // Visite la page d'accueil
    cy.visit('/');

    // Vérifie si un élément avec la classe 'my-class' est présent
    cy.get('.page').should('exist');

    // Vérifie si un composant avec le texte 'My Component' est présent
    cy.contains('Modelec').should('exist');
  });
});
