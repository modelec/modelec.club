import React from 'react';
import { Navbar } from './navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../App.css';
import './navbar.css';

describe('<Navbar />', () => {
  it('renders the Navbar component correctly', () => {
    cy.mount(
      <Router>
        <Navbar />
      </Router>
    );

    // Add your assertions here
    cy.get('.navbar').should('exist');
    cy.get('.navbar-logo').should('exist');
    cy.get('.navbar-links').should('exist');
    cy.get('.navbar-link').should('have.length', 4); // Adjust the number based on the actual number of links
    cy.get('.navbar-open').should('exist');
  });

  it('opens and closes the mobile menu correctly', () => {
    cy.mount(
      <Router>
        <Navbar />
      </Router>
    );

    // Open the mobile menu
    cy.get('.navbar-open').click();
    cy.get('.mobileNavbar').should('exist');
    cy.get('.mobileNavbar-links').should('exist');
    cy.get('.mobileNavbar-link').should('have.length', 4); // Adjust the number based on the actual number of links

    // Close the mobile menu
    cy.get('.mobileNavbar-overlay').click();
    cy.get('.mobileNavbar').should('not.exist');
  });
});
