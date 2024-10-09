import React from 'react';
import { ProjetsHeader } from '../components/projetheader/projetheader';
import {
  ProjectBigCard,
  ProjectSmallCard,
} from '../components/projectcard/projectcard.tsx';

const Projets: React.FC = () => {
  return (
    <>
      <ProjetsHeader />
      <div className={'content-container'}>
        <ProjectBigCard
          imgtitle={'https://r2.modelec.club/cdf.png'}
          lefttext={{
            __html:
              "1 robot<br>3000 heures<br>0 compétances<br>10 étudiants<br>1ère participation<br><span style='color: #0693E3;'>14 ème</span> sur 82 équipes",
          }}
          rightimage={'https://r2.modelec.club/serge.png'}
          downtitle={'Notre robot'}
          downcontent={
            "Voici Serge, notre robot pour la coupe de France de robotique 2024. Il est équipé de 2 roues motrices, 2 roues codeuses, 3 pinces et 2 bras d'orientation pour les panneaux solaires. Il est également équipé d'une caméra pour la vision et d'un lidar pour la détection d'adversaire et la triangulation. Coté hardware, il est géré par un raspberry pi 5 et un arduino mega. Côté software, il est géré par des programmes C++ fait sur mesure dont le code est disponible sur notre github. A coté Serge est accompagné de 2 Pixels, ses PAMI (Partie Autonome Mobile Intelligente) qui sont des robots autonomes qui peuvent se déplacer et se repérer dans l'espace. Ils sont gérés par des arduino uno."
          }
        />
        <div className={'separator'}></div>
        <ProjectSmallCard
          img={'https://r2.modelec.club/table2024.jpg'}
          title={'Constructions tables de jeu CDF'}
          content={
            'Afin de pouvoir tester notre robot, nous avons construit 1 table de jeu pour la coupe de France de robotique. Elle est faites en bois et en vynile.'
          }
        />
        <div className={'separator'}></div>
        <ProjectSmallCard
          img={'https://r2.modelec.club/PAMI-V1.png'}
          title={'PAMI V1'}
          content={
            "Les PAMI V1 sont des robots autonomes qui peuvent se déplacer et se repérer dans l'espace. Ils sont gérés par des arduino uno."
          }
        />
        <div className={'separator'}></div>
        <ProjectSmallCard
          img={'https://r2.modelec.club/digitalisation.png'}
          title={'Digitalisation du bureau'}
          content={
            'Afin de faciliter la gestion du club, nous avons décidé de digitaliser le bureau.'
          }
        />
      </div>
    </>
  );
};

export default Projets;
