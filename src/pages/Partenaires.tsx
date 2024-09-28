import React from 'react';
import { Navbar } from '../components/navbar/navbar';
import PartenairesList from '../components/partenaires/partenaires';
import { Footer } from '../components/footer/footer.tsx';
import { FromLeftCard } from '../components/sidecard/fromleftcard.tsx';
import { FromRightCard } from '../components/sidecard/fromrightcard.tsx';

const Partenaires: React.FC = () => {
  return (
    <>
      <Navbar />
      <PartenairesList
        partenaires={[
          {
            title: 'ISEN Nantes',
            logo: '/assets/images/isen.png',
            link: 'https://www.isen-nantes.fr',
          },
          {
            title: 'MercuryCloud',
            logo: '/assets/images/mercurycloud.png',
            link: 'https://www.mercurycloud.fr',
          },
          {
            title: 'Odyssey BDE',
            logo: '/assets/images/bde.png',
            link: 'https://instagram.com/odyssey_bde',
          },
        ]}
      />
      <div className={'content-container'}>
        <FromLeftCard
          title={'ISEN Nantes'}
          image={'/assets/images/isen.png'}
          content={
            "L'ISEN Nantes est une école d'ingénieurs généraliste en 5 ans. Elle forme des ingénieurs dans les domaines de l'électronique, de l'informatique et des télécommunications. Ils nous mettent à disposition un local pour travailler sur nos projets."
          }
        />
        <div className={'separator'}></div>
        <FromRightCard
          title={'MercuryCloud'}
          image={'/assets/images/mercurycloud.png'}
          content={{
            __html:
              'MercuryCloud est un hébergeur web, de vps ainsi que de serveur de jeu. Ils nous mettent à disposition un vps pour de la compilation et pour héberger certains service dont ce site web.',
          }}
        />
        <div className={'separator'}></div>
        <FromLeftCard
          title={'Odyssey BDE'}
          image={'/assets/images/bde.png'}
          content={
            "Le BDE de l'ISEN Nantes, Odyssey, est un partenaire de longue date. Ils nous aident dans l'organisation de nos évènements et nous soutiennent dans nos projets."
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Partenaires;
