import React from 'react';
import { SocialNetworkList } from './socialnetwork';
import './socialnetwork.css';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

describe('<SocialNetworkList />', () => {
  it('renders', () => {
    const networks = [
      {
        Icon: FaInstagram,
        name: 'modelec_isen',
        link: 'https://www.instagram.com/modelec_isen',
      },
      {
        Icon: FaYoutube,
        name: 'modelec',
        link: 'https://www.youtube.com/@modelec2165',
      },
      {
        Icon: FaGithub,
        name: 'modelec',
        link: 'https://www.github.com/modelec',
      },
    ];

    cy.mount(<SocialNetworkList networks={networks} />);
    cy.get('.media-container').should('exist');
    cy.get('.media-link').should('have.length', networks.length);
  });
});
