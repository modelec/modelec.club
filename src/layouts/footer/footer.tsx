import React from 'react';

import './footer.css';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  text: string;
  link: string;
  target?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, link, target="_self" }) => {
  return (
      <Link to={link} className={`footer-link`} target={target}>
        {text}
      </Link>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer-content'}>
        <img className={'footer-logo'} src={'https://r2.modelec.club/logo.png'} alt={'Modelec'} />
        <div className={'footer-part'}>
          <h3 className={'footer-title'}>Plan du site</h3>
          <div className={'footer-links'}>
            {[
              { text: 'Accueil', link: '/' },
              { text: 'Projets', link: '/projets/' },
                /*
              { text: 'Matériels', link: '/materiels/' },
              { text: 'Photos', link: '/photos/' },
                 */
              { text: 'Partenaires', link: '/partenaires/' },
              { text: 'Nous contacter', link: '/contact/' },
            ].map((link) => <FooterLink key={link.text} {...link} />)}
          </div>
        </div>
        <div className={'footer-part'}>
          <h3 className={'footer-title'}>Nos réseaux</h3>
          <div className={'footer-links'}>
            {[
              { text: 'Instagram', link: 'https://www.instagram.com/modelec_isen', target: '_blank' },
              { text: 'Youtube', link: 'https://www.youtube.com/@Modelec-ISEN', target: '_blank' },
              { text: 'Github', link: 'https://www.github.com/modelec', target: '_blank' },
              { text: 'Mail', link: 'mailto:contact@modelec.club', target: '_blank' },
            ].map((link) => <FooterLink key={link.text} {...link} />)}
          </div>
        </div>
      </div>
      <span className={'footer-credits'}>© 2024 Modelec ISEN Nantes. Site réalisé par AppenISEN.</span>
    </footer>
  );
};
