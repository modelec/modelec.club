import React from 'react';

import {
  Github,
  Youtube,
  Instagram,
  Handbag,
  MapPin,
  ChatBubbleEmpty,
} from 'iconoir-react';
import { SocialNetworkList } from '../../components/socialnetwork/socialnetwork';

import { ContactList } from '../../components/contact/contact';
import { Banner } from '../../components/banner/banner';


const Contact: React.FC = () => {
  return (
    <>
      <h1 className={'page-title'}>Nous Contacter</h1>
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
          {
            Icon: MapPin,
            title: 'Nous rendre visite',
            description:
              '33 QUATER Avenue du Champ de Manoeuvre, 44470 Carquefou.',
            link: {
              location: 'https://maps.app.goo.gl/UVK3KFS8Zrpx7x9e6',
              text: 'Voir sur Google Maps',
            },
          },
          {
            Icon: ChatBubbleEmpty,
            title: 'Nous contacter',
            description:
              "Pour toute question ou demande, n'hésitez pas à nous contacter.",
            link: {
              location: 'mailto:contact@modelec.club',
              text: 'contact@modelec.club',
            },
          },
        ]}
      />
      <Banner
        image={{ src: "/assets//isen_group_photo.png", alt: "Photo de groupe à l'ISEN" }}
        header={'Une question ?'}
      >
        Vous avez une <b>question</b> vis-à-vis de notre <u>club</u> ou de l'un
        de nos <u>projets</u> ? N'hésitez pas à nous <u>contacter</u> via l'une
        des méthode ci-dessus, nous serons ravis de vous répondre.
      </Banner>
      <h1 className={'page-title'}>Nos Réseaux</h1>
      <SocialNetworkList
        networks={[
          {
            Icon: Instagram,
            name: 'modelec_isen',
            link: 'https://www.instagram.com/modelec_isen',
          },
          {
            Icon: Youtube,
            name: 'modelec',
            link: 'https://www.youtube.com/@Modelec-ISEN',
          },
          {
            Icon: Github,
            name: 'modelec',
            link: 'https://www.github.com/modelec',
          },
        ]}
      />
    </>
  );
};

export default Contact;
