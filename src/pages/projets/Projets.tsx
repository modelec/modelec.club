import React from 'react';
import { Timeline, TimelineProject } from '../../components/timeline/timeline';

const Projets: React.FC = () => {
  return (
    <>
      <h1 className={'page-title'}>Cette année</h1>
      <TimelineProject
        title={'La Coupe de France de Robotique 2025'}
        date={'À venir'}
        paragraphs={[
          <>Cette année encore, nous participons à la <u>Coupe de France de Robotique</u> pour notre <b>deuxième participation</b> !</>,
        ]}
      />
      <h1 className={'page-title'}>Remonter dans le Temps</h1>
      <Timeline
        projects={[
          {
            title: 'Serge : Notre robot',
            date: '2024',
            banner: 'https://r2.modelec.club/serge.png',
            paragraphs: [
              <>Voici Serge, notre robot pour la <u>coupe de France de Robotique</u> 2024 !</>,
              <>Il est équipé de <b>2 roues motrices</b>, <b>2 roues codeuses</b>, <b>3 pinces</b> et <b>2 bras d'orientation</b> pour les panneaux solaires. Il est également équipé d'<b>une caméra</b> pour la vision et d'<b>un LiDAR</b> pour la détection d'adversaire et la triangulation.</>,
              <>Coté <u>Hardware</u>, il est géré par un <b>Raspberry Pi 5</b> et un <b>Arduino Mega</b>.</>,
              <>Côté <u>Software</u>, il est géré par des programmes <b>C++</b> faits sur mesure dont le code est disponible sur notre Github.</>,
              <>Serge n'est pas seul, il est accompagné de <u>2 Pixels</u>, ses <b>Partie Autonome Mobile Intelligente</b> ou <u>PAMI</u> qui sont des robots autonomes gérés par des <b>Arduino Uno</b> qui peuvent se déplacer et se repérer dans l'espace.</>
            ],
            cards: [
              { type: 'stat', data: '3000', label: 'Heures de travail' },
              { type: 'stat', data: '10', label: 'Étudiants' },
              { type: 'stat', data: '2024', label: 'Première participation' },
              { type: 'stat', data: '14', label: '/82 équipes' },
              { type: 'image', src: 'https://r2.modelec.club/cdf.png', alt: 'Logo Coupe de France de Robotique', fit: 'contain' },
            ],
          },
          {
            title: 'Construction de la table de jeu',
            date: '2024',
            paragraphs: [
              <>Afin de pouvoir tester notre robot, nous avons construit une <b>table de jeu</b> pour la <u>coupe de France de Robotique</u>.</>,
              <>Elle est faite en <b>bois</b> et en <b>vinyle</b>.</>,
            ],
            cards: [
              { type: 'image', src: 'https://r2.modelec.club/table2024.jpg', alt: 'Table de jeu pour la Coupe de France de Robotique', fit: 'cover' },
            ],
          },
          {
            title: 'PAMI v1',
            date: '2024',
            paragraphs: [
              <>Les <b>PAMI v1</b> sont des <b>robots autonomes</b> qui peuvent se déplacer et se repérer dans l'espace.</>,
              <>Ils sont gérés par des <b>Arduino Uno</b>.</>,
            ],
            cards: [
              { type: 'image', src: 'https://r2.modelec.club/PAMI-V1.png', alt: 'PAMI v1', fit: 'cover' },
            ],
          },
          {
            title: 'Digitalisation du bureau',
            date: '2024',
            paragraphs: [
              <>Afin de faciliter la gestion du club, nous avons décidé de <b>digitaliser</b> le <b>bureau</b>.</>,
            ],
          }
        ]}
      />

    </>
  );
};

export default Projets;
