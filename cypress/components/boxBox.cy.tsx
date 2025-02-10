import React from 'react';
import { Box } from '../../src/components/box/box';
import '../../src/components/box/box.css';

describe('<Box />', () => {
  it('renders the first box', () => {
    const elements = [
      {
        type: 'image',
        src: '/assets//serge-pixel.png',
        alt: 'Serge Pixel',
      },
      { type: 'data', data: '14e', subtext: '/82 équipes' },
    ];

    cy.mount(
      <Box
        title={'Coupe de France de robotique'}
        subtext={'Première participation'}
        label={'Édition 2024'}
        elements={elements}
      />
    );

    cy.get('.box-title').should('contain.text', 'Coupe de France de robotique');
    cy.get('.box-subtext').should('contain.text', 'Première participation');
    cy.get('.box-label').should('contain.text', 'Édition 2024');
    cy.get('img').should('have.attr', 'src', elements[0].src);
    cy.get('img').should('have.attr', 'alt', elements[0].alt);
    cy.get('.box-data').should('contain.text', elements[1].data);
    cy.get('.box-data-subtext').should('contain.text', elements[1].subtext);
  });

  it('renders the second box', () => {
    const elements = [
      "Parce que les technologies du numérique sont partout, l’ISEN forme des ingénieurs aptes à répondre aux besoins des entreprises dans tous les secteurs d’activités. Sur un parc de 10 hectares, le campus est doté d'un restaurant. Depuis la rentrée 2021 les étudiants sont accueillis dans le nouveau bâtiment ISEN construit avec le soutien de la Région Pays de la Loire.",
    ];

    cy.mount(
      <Box title={'ISEN Nantes'} subtext={'Notre école'} elements={elements} />
    );

    cy.get('.box-title').should('contain.text', 'ISEN Nantes');
    cy.get('.box-subtext').should('contain.text', 'Notre école');
    cy.get('.box-paragraph').should('contain.text', elements[0]);
  });
});
