import React from 'react';
import { Team } from '../../src/components/team/team';
import '../../src/components/team/team.css';

describe('<Team />', () => {
  it('renders the team with groups and members', () => {
    const groups = [
      {
        title: 'Bureau',
        members: [
          {
            name: 'Maxime Chauveau',
            role: 'Président',
            image: 'https://r2.modelec.club/maxime.png',
          },
          {
            name: 'Vincent Rocher',
            role: 'Vice-Président',
            image: 'https://r2.modelec.club/vincent.jpg',
          },
          {
            name: 'Felix Marquet',
            role: 'Secrétaire',
            image: 'https://r2.modelec.club/felix.png',
          },
          {
            name: 'Florent Butery',
            role: 'Trésorier',
            image: 'https://r2.modelec.club/flo.jpg',
          },
        ],
      },
      {
        title: 'Responsables',
        members: [
          {
            name: 'Cléo Sionville',
            role: 'Communication',
            image: 'https://r2.modelec.club/cleo.jpg',
          },
          {
            name: 'Arthur Grossmann-Le Mauguen',
            role: 'Evenementiel',
            image: 'https://r2.modelec.club/arthur.png',
          },
          {
            name: 'Allan Cueff',
            role: 'Partenariat',
            image: 'https://r2.modelec.club/allan.png',
          },
        ],
      },
    ];

    cy.mount(<Team groups={groups} />);

    cy.get('.team-group').should('have.length', groups.length);
    groups.forEach((group, groupIndex) => {
      cy.get(`.team-group:eq(${groupIndex}) .team-group-title`).should(
        'contain.text',
        group.title
      );
      cy.get(`.team-group:eq(${groupIndex}) .team-member`).should(
        'have.length',
        group.members.length
      );
      group.members.forEach((member, memberIndex) => {
        cy.get(
          `.team-group:eq(${groupIndex}) .team-member:eq(${memberIndex}) .team-member-name`
        ).should('contain.text', member.name);
        cy.get(
          `.team-group:eq(${groupIndex}) .team-member:eq(${memberIndex}) .team-member-role`
        ).should('contain.text', member.role);
        cy.get(
          `.team-group:eq(${groupIndex}) .team-member:eq(${memberIndex}) img`
        ).should('have.attr', 'src', member.image);
      });
    });
  });
});
