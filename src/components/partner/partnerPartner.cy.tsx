import React from 'react';
import { Partner } from './partner';
import './partner.css';

describe('<Partner />', () => {
  it('renders ISEN partenaire', () => {
    cy.mount(
      <Partner
        name={'ISEN Nantes'}
        logo={'https://r2.modelec.club/isen.png'}
        texts={[
          <>
            L'ISEN Nantes est une école d'ingénieurs généraliste en 5 ans. Elle
            forme des ingénieurs dans les domaines de l'électronique, de
            l'informatique et des télécommunications. Ils nous mettent à
            disposition un local pour travailler sur nos projets.
          </>,
        ]}
        photos={['https://r2.modelec.club/ISEN-2.jpg']}
        link={'https://isen-nantes.fr'}
      />
    );

    // Add your assertions here
    cy.get('.partner-name').should('contain.text', 'ISEN Nantes');
    cy.get('.partner-logo').should(
      'have.attr',
      'src',
      'https://r2.modelec.club/isen.png'
    );
    cy.get('.partner-text').should(
      'contain.text',
      "L'ISEN Nantes est une école d'ingénieurs généraliste en 5 ans."
    );
    cy.get('.partner-photos img').should(
      'have.attr',
      'src',
      'https://r2.modelec.club/ISEN-2.jpg'
    );
    cy.get('.partner-link').should(
      'have.attr',
      'href',
      'https://isen-nantes.fr'
    );
  });

  it('renders MercuryCloud partenaire', () => {
    cy.mount(
      <Partner
        name={'MercuryCloud'}
        logo={'https://r2.modelec.club/mercurycloud.png'}
        texts={[
          <>
            MercuryCloud est un hébergeur web, de vps ainsi que de serveur de
            jeu. Ils nous mettent à disposition un vps pour de la compilation et
            pour héberger certains service dont ce site web.
          </>,
        ]}
        photos={['https://r2.modelec.club/MercuryCloud.jpg']}
        link={'https://mercurycloud.fr/aff.php?aff=14'}
      />
    );

    // Add your assertions here
    cy.get('.partner-name').should('contain.text', 'MercuryCloud');
    cy.get('.partner-logo').should(
      'have.attr',
      'src',
      'https://r2.modelec.club/mercurycloud.png'
    );
    cy.get('.partner-text').should(
      'contain.text',
      'MercuryCloud est un hébergeur web, de vps ainsi que de serveur de jeu.'
    );
    cy.get('.partner-photos img').should(
      'have.attr',
      'src',
      'https://r2.modelec.club/MercuryCloud.jpg'
    );
    cy.get('.partner-link').should(
      'have.attr',
      'href',
      'https://mercurycloud.fr/aff.php?aff=14'
    );
  });

  it('renders BDE partenaire', () => {
    cy.mount(
      <Partner
        name={'Odyssey BDE'}
        logo={'https://r2.modelec.club/bde.png'}
        texts={[
          <>
            Le BDE de l'ISEN Nantes, Odyssey, est un partenaire de longue date.
            Ils nous aident dans l'organisation de nos évènements et nous
            soutiennent dans nos projets.
          </>,
        ]}
        photos={['https://r2.modelec.club/Odyseey.JPEG']}
        link={'https://instagram.com/odyssey_bde'}
      />
    );

    // Add your assertions here
    cy.get('.partner-name').should('contain.text', 'Odyssey BDE');
    cy.get('.partner-logo').should(
      'have.attr',
      'src',
      'https://r2.modelec.club/bde.png'
    );
    cy.get('.partner-text').should(
      'contain.text',
      "Le BDE de l'ISEN Nantes, Odyssey, est un partenaire de longue date. Ils nous aident dans l'organisation de nos évènements et nous soutiennent dans nos projets."
    );
    cy.get('.partner-photos img').should(
      'have.attr',
      'src',
      'https://r2.modelec.club/Odyseey.JPEG'
    );
    cy.get('.partner-link').should(
      'have.attr',
      'href',
      'https://instagram.com/odyssey_bde'
    );
  });
});
