import React from 'react';
import { SocialNetworkSmall } from '../socialnetwork/socialnetwork';

export const Footer: React.FC = () => {
  return (
    <div className={'footer-container'}>
      <footer className={'footer'}>
        <div className={'footer-separator'}></div>
        <div className={'footer-content'}>
          <div className={'footer-content-top'}>
            <img src={'https://r2.modelec.club/logo-full.png'} alt={'Modelec'} />
          </div>
          <div className={'footer-content-middle'}>
            <div className={'social-networks'}>
              <SocialNetworkSmall
                icon={'https://r2.modelec.club/github-dark.svg'}
                link={'https://www.github.com/modelec'}
              />
              <SocialNetworkSmall
                icon={'https://r2.modelec.club/youtube-dark.svg'}
                link={'https://www.youtube.com/@modelec2165'}
              />
              <SocialNetworkSmall
                icon={'https://r2.modelec.club/insta-dark.svg'}
                link={'https://www.instagram.com/modelec_isen'}
              />
              <SocialNetworkSmall
                icon={'https://r2.modelec.club/mail.svg'}
                link={'mailto:contact@modelec.club'}
              />
            </div>
          </div>
          <div className={'footer-content-bottom'}>
            <nav className={'footer-nav'}>
              <a href={'/projets'}>Projets</a>
              <a href={'/materiels'}>Matériels</a>
              <a href={'/photos'}>Photos</a>
              <a href={'/partenaires'}>Partenaires</a>
              <a href={'/contact'}>Nous contacter</a>
            </nav>
          </div>
        </div>
      </footer>
      <div className={'footer-credits'}>
        <p>© 2024 Modelec ISEN Nantes. Site réalisé par AppenISEN.</p>
      </div>
    </div>
  );
};
