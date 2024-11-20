import React from 'react';
import { TimelineProject } from '../../src/components/timeline/timeline';
import '../../src/components/timeline/timeline.css';

describe('<TimelineProject />', () => {
  it('renders the TimelineProject component correctly', () => {
    cy.mount(
      <TimelineProject
        title={'La Coupe de France de Robotique 2025'}
        date={'À venir'}
        paragraphs={[
          <>
            Cette année encore, nous participons à la{' '}
            <u>Coupe de France de Robotique</u> pour notre{' '}
            <b>deuxième participation</b> !
          </>,
        ]}
      />
    );

    // Add your assertions here
    cy.get('.timeline-project-title').should(
      'contain.text',
      'La Coupe de France de Robotique 2025'
    );
    cy.get('.timeline-project-date').should('contain.text', 'À venir');
    cy.get('.timeline-project-paragraph').should(
      'contain.text',
      'Cette année encore, nous participons à la Coupe de France de Robotique pour notre deuxième participation !'
    );
  });
});
