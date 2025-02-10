import React from 'react';
import { Timeline } from '../../src/components/timeline/timeline';
import '../../src/components/timeline/timeline.css';

describe('<Timeline />', () => {
  it('renders the Timeline component correctly', () => {
    cy.mount(
      <Timeline
        projects={[
          {
            title: 'Digitalisation du bureau',
            date: '2024',
            paragraphs: [
              <>
                Afin de faciliter la gestion du club, nous avons décidé de{' '}
                <b>digitaliser</b> le <b>bureau</b>.
              </>,
            ],
            cards: [
              {
                type: 'image',
                src: 'https://r2.modelec.club/Bureau/IMG_3881.PNG',
                alt: 'Table de jeu pour la Coupe de France de Robotique',
                fit: 'cover',
              },
              {
                type: 'image',
                src: 'https://r2.modelec.club/Bureau/IMG_3882.PNG',
                alt: 'Table de jeu pour la Coupe de France de Robotique',
                fit: 'cover',
              },
            ],
          },
          {
            title: 'Serge : Notre robot',
            date: '2024',
            banner: 'https://r2.modelec.club/serge.png',
            paragraphs: [
              <>
                Voici Serge, notre robot pour la{' '}
                <u>coupe de France de Robotique</u> 2024 !
              </>,
              <>
                Il est équipé de <b>2 roues motrices</b>,{' '}
                <b>2 roues codeuses</b>, <b>3 pinces</b> et{' '}
                <b>2 bras d'orientation</b> pour les panneaux solaires. Il est
                également équipé d'<b>une caméra</b> pour la vision et d'
                <b>un LiDAR</b> pour la détection d'adversaire et la
                triangulation.
              </>,
              <>
                Coté <u>Hardware</u>, il est géré par un <b>Raspberry Pi 5</b>{' '}
                et un <b>Arduino Mega</b>.
              </>,
              <>
                Côté <u>Software</u>, il est géré par des programmes <b>C++</b>{' '}
                faits sur mesure dont le code est disponible sur notre Github.
              </>,
              <>
                Serge n'est pas seul, il est accompagné de <u>2 Pixels</u>, ses{' '}
                <b>Partie Autonome Mobile Intelligente</b> ou <u>PAMI</u> qui
                sont des robots autonomes gérés par des <b>Arduino Uno</b> qui
                peuvent se déplacer et se repérer dans l'espace.
              </>,
            ],
            cards: [
              { type: 'stat', data: '3000', label: 'Heures de travail' },
              { type: 'stat', data: '10', label: 'Étudiants' },
              { type: 'stat', data: '2024', label: 'Première participation' },
              { type: 'stat', data: '14', label: '/82 équipes' },
              {
                type: 'image',
                src: 'https://r2.modelec.club/cdf.png',
                alt: 'Logo Coupe de France de Robotique',
                fit: 'contain',
              },
            ],
          },
          {
            title: 'PAMI v1',
            date: '2024',
            paragraphs: [
              <>
                Les <b>PAMI v1</b> sont des <b>robots autonomes</b> qui peuvent
                se déplacer et se repérer dans l'espace.
              </>,
              <>
                Ils sont gérés par des <b>Arduino Uno</b>.
              </>,
            ],
            cards: [
              {
                type: 'image',
                src: 'https://r2.modelec.club/PAMI-V1.png',
                alt: 'PAMI v1',
                fit: 'cover',
              },
            ],
          },
          {
            title: 'Construction de la table de jeu',
            date: '2023',
            paragraphs: [
              <>
                Afin de pouvoir tester notre robot, nous avons construit une{' '}
                <b>table de jeu</b> pour la <u>coupe de France de Robotique</u>.
              </>,
              <>
                Elle est faite en <b>bois</b> et en <b>vinyle</b>.
              </>,
            ],
            cards: [
              {
                type: 'image',
                src: 'https://r2.modelec.club/table2024.jpg',
                alt: 'Table de jeu pour la Coupe de France de Robotique',
                fit: 'cover',
              },
              {
                type: 'image',
                src: 'https://r2.modelec.club/Table/20231102_163959.jpg',
                alt: 'Table de jeu pour la Coupe de France de Robotique',
                fit: 'cover',
              },
              {
                type: 'image',
                src: 'https://r2.modelec.club/Table/20231102_164300.jpg',
                alt: 'Table de jeu pour la Coupe de France de Robotique',
                fit: 'cover',
              },
              {
                type: 'image',
                src: 'https://r2.modelec.club/Table/IMG_20231202_160702.jpg',
                alt: 'Table de jeu pour la Coupe de France de Robotique',
                fit: 'cover',
              },
            ],
          },
        ]}
      />
    );

    // Add your assertions here
    cy.get('.timeline-project-title').should(
      'contain.text',
      'Digitalisation du bureau'
    );
    cy.get('.timeline-project-date').should('contain.text', '2024');
    cy.get('.timeline-project-paragraph').should(
      'contain.text',
      'Afin de faciliter la gestion du club, nous avons décidé de digitaliser le bureau.'
    );
    cy.get('.timeline-project-card-image')
      .eq(0)
    cy.get('.timeline-project-card-image')
      .eq(1)
    cy.get('.timeline-project-title').should(
      'contain.text',
      'Serge : Notre robot'
    );
    cy.get('.timeline-project-paragraph').should(
      'contain.text',
      'Voici Serge, notre robot pour la coupe de France de Robotique 2024 !'
    );
    cy.get('.timeline-project-card-number').should('contain.text', '3000');
    cy.get('.timeline-project-card-subtext').should(
      'contain.text',
      'Heures de travail'
    );
    cy.get('.timeline-project-card-image')
      .eq(2)
    cy.get('.timeline-project-title').should('contain.text', 'PAMI v1');
    cy.get('.timeline-project-paragraph').should(
      'contain.text',
      "Les PAMI v1 sont des robots autonomes qui peuvent se déplacer et se repérer dans l'espace."
    );
    cy.get('.timeline-project-card-image')
      .eq(3)
    cy.get('.timeline-project-title').should(
      'contain.text',
      'Construction de la table de jeu'
    );
    cy.get('.timeline-project-paragraph').should(
      'contain.text',
      'Afin de pouvoir tester notre robot, nous avons construit une table de jeu pour la coupe de France de Robotique.'
    );
    cy.get('.timeline-project-card-image')
      .eq(4)
    cy.get('.timeline-project-card-image')
      .eq(5)
    cy.get('.timeline-project-card-image')
      .eq(6)
    cy.get('.timeline-project-card-image')
      .eq(7)
  });
});
