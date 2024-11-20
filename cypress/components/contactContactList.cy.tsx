import React from 'react';
import { ContactList } from '../../src/components/contact/contact';
import { Handbag } from 'iconoir-react';
import '../../src/components/contact/contact.css';

describe('<ContactList />', () => {
  it('renders the ContactList component correctly', () => {
    cy.mount(
      <ContactList
        contacts={[
          {
            Icon: Handbag,
            title: 'Devenir partenaire',
            description:
              'Devenez vous aussi partenaire de Modelec et soutenez notre projet.',
            link: {
              location: 'mailto:partenariat@modelec.club',
              text: 'partenariat@modelec.club',
            },
          },
        ]}
      />
    );

    // Add your assertions here
    cy.get('.contact-title').should('contain.text', 'Devenir partenaire');
    cy.get('.contact-description').should(
      'contain.text',
      'Devenez vous aussi partenaire de Modelec et soutenez notre projet.'
    );
    cy.get('.contact-link').should('contain.text', 'partenariat@modelec.club');
  });
});
