import React from 'react';
import { Partner } from '../../components/partner/partner';
import { ContactList } from '../../components/contact/contact';
import { Handbag } from 'iconoir-react';

const Partenaires: React.FC = () => {
  return (
    <>
      <h1 className={'page-title'}>Nos Partenaires</h1>
      <div className={'partner-list'}>
        <Partner
          name={'ISEN Nantes'}
          logo={'https://r2.modelec.club/isen.png'}
          texts={[
            <>
              L'ISEN Nantes est une école d'ingénieurs généraliste en 5 ans.
              Elle forme des ingénieurs dans les domaines de l'électronique, de
              l'informatique et des télécommunications. Ils nous mettent à
              disposition un local pour travailler sur nos projets.
            </>,
          ]}
          photos={['https://r2.modelec.club/ISEN-2.jpg']}
          link={'https://isen-nantes.fr'}
        />
        <Partner
          name={'MercuryCloud'}
          logo={'https://r2.modelec.club/mercurycloud.png'}
          texts={[
            <>
              MercuryCloud est un hébergeur web, de vps ainsi que de serveur de
              jeu. Ils nous mettent à disposition un vps pour de la compilation
              et pour héberger certains service dont ce site web.
            </>,
          ]}
          photos={['https://r2.modelec.club/MercuryCloud.jpg']}
          link={'https://mercurycloud.fr/aff.php?aff=14'}
        />
        <Partner
          name={'Odyssey BDE'}
          logo={'https://r2.modelec.club/bde.png'}
          texts={[
            <>
              Le BDE de l'ISEN Nantes, Odyssey, est un partenaire de longue
              date. Ils nous aident dans l'organisation de nos évènements et
              nous soutiennent dans nos projets.
            </>,
          ]}
          photos={['https://r2.modelec.club/Odyseey.JPEG']}
          link={'https://instagram.com/odyssey_bde'}
        />
      </div>
      <h1 className={'page-title'}>Nous aider</h1>
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
    </>
  );
};

export default Partenaires;
