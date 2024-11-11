import './banner.css';
import '../../App.css';
import React from 'react';
import { Banner } from './banner';

describe('<Banner />', () => {
  it('renders the first Banner component correctly', () => {
    const image = {
      src: 'https://r2.modelec.club/coupe-2024.png',
      alt: 'Modelec Photo',
    };
    const header = 'Qui sommes-nous ?';
    const children =
      "Nous sommes Modelec, une association étudiante de l'ISEN qui a pour but de promouvoir la robotique, l'éléctronique et le modélisme auprès des étudiants de notre campus grâce à l'organisation d'ateliers et d'événements. Nous participons également à la coupe de France de robotique où en 2024, nous avons fini 14e sur 82 pour notre première participation.";

    cy.mount(
      <Banner image={image} header={header}>
        {children}
      </Banner>
    );
    cy.get('img').should('have.attr', 'src', image.src);
    cy.get('h3').should('contain.text', header);
    cy.get('p.banner-text', { timeout: 10000 }).should(
      'contain.html',
      children
    );
  });

  it('renders the second Banner component correctly', () => {
    const image = {
      src: 'https://r2.modelec.club/isen_group_photo.png',
      alt: "Photo de groupe à l'ISEN",
    };
    const header = 'Une question ?';
    const children =
      "Vous avez une question vis-à-vis de notre club ou de l'un de nos projets ? N'hésitez pas à nous contacter via l'une des méthode ci-dessus, nous serons ravis de vous répondre.";

    cy.mount(
      <Banner image={image} header={header}>
        {children}
      </Banner>
    );
    cy.get('img').should('have.attr', 'src', image.src);
    cy.get('h3').should('contain.text', header);
    cy.get('p.banner-text', { timeout: 10000 }).should(
      'contain.html',
      children
    );
  });
});
