import React from 'react';
import PartenairesList from '../../components/partenaires/partenaires';
import { FromLeftCard } from '../../components/sidecard/fromleftcard.tsx';
import { FromRightCard } from '../../components/sidecard/fromrightcard.tsx';

import './Partenaires.css';

const Partenaires: React.FC = () => {
  return (
    <>
      <PartenairesList
        partenaires={[
          {
            title: 'ISEN Nantes',
            logo: 'https://r2.modelec.club/isen.png',
            link: 'https://www.isen-nantes.fr',
          },
          {
            title: 'MercuryCloud',
            logo: 'https://r2.modelec.club/mercurycloud.png',
            link: 'https://www.mercurycloud.fr',
          },
          {
            title: 'Odyssey BDE',
            logo: 'https://r2.modelec.club/bde.png',
            link: 'https://instagram.com/odyssey_bde',
          },
        ]}
      />
      <div className={'content-container'}>
        <FromLeftCard
          title={'ISEN Nantes'}
          image={'https://r2.modelec.club/isen.png'}
          content={
            "L'ISEN Nantes est une école d'ingénieurs généraliste en 5 ans. Elle forme des ingénieurs dans les domaines de l'électronique, de l'informatique et des télécommunications. Ils nous mettent à disposition un local pour travailler sur nos projets."
          }
        />
        <FromRightCard
          title={'MercuryCloud'}
          image={'https://r2.modelec.club/mercurycloud.png'}
          content={{
            __html:
              'MercuryCloud est un hébergeur web, de vps ainsi que de serveur de jeu. Ils nous mettent à disposition un vps pour de la compilation et pour héberger certains service dont ce site web.',
          }}
        />
        <FromLeftCard
          title={'Odyssey BDE'}
          image={'https://r2.modelec.club/bde.png'}
          content={
            "Le BDE de l'ISEN Nantes, Odyssey, est un partenaire de longue date. Ils nous aident dans l'organisation de nos évènements et nous soutiennent dans nos projets."
          }
        />
      </div>
    </>
  );
};

export default Partenaires;
