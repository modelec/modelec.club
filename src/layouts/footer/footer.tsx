import React from 'react';

import './footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer-content'}>
        <img className={'footer-logo'} src={'https://r2.modelec.club/logo.png'} alt={'Modelec'} />
        <div className={'footer-part'}>
          <h3 className={'footer-title'}>Plan du site</h3>
          <div className={'footer-links'}>
            <a className={'footer-link'} href={'/'}>Accueil</a>
            <a className={'footer-link'} href={'/projets'}>Projets</a>
            <a className={'footer-link'} href={'/materiels'}>Matériels</a>
            <a className={'footer-link'} href={'/photos'}>Photos</a>
            <a className={'footer-link'} href={'/partenaires'}>Partenaires</a>
            <a className={'footer-link'} href={'/contact'}>Nous contacter</a>
          </div>
        </div>
        <div className={'footer-part'}>
          <h3 className={'footer-title'}>Nos réseaux</h3>
          <div className={'footer-links'}>
            <a className={'footer-link'} target={'_blank'} href={'https://www.instagram.com/modelec_isen'}>Instagram</a>
            <a className={'footer-link'} target={'_blank'} href={'https://youtube.com/modelec'}>Youtube</a>
            <a className={'footer-link'} target={'_blank'} href={'https://www.github.com/modelec'}>Github</a>
            <a className={'footer-link'} target={'_blank'} href={'mailto:contact@modelec.club'}>Mail</a>
          </div>
        </div>
      </div>
      <span className={'footer-credits'}>© 2024 Modelec ISEN Nantes. Site réalisé par AppenISEN.</span>
    </footer>
  );
};
