import { NavbarLink } from '../../components/navbarlink/navbarLink';

import './navbar.css';

export const Navbar = ({ activeLink }: { activeLink: number }) => {
  const links = [
    { text: 'Accueil', link: '/' },
    { text: 'Projets', link: '/projets' },
    { text: 'Matériels', link: '/materiels' },
    { text: 'Photos', link: '/photos' },
    { text: 'Partenaires', link: '/partenaires' },
    { text: 'Nous contacter', link: '/contact' },
  ]
  return (
    <>
      <nav className={'navbar'}>
        <a href={'/'} className={'navbar-logo'}>
          <img
            className='navbar-logo-img'
            src={'https://r2.modelec.club/logo-full.png'} // TODO: Change to SVG logo / import it from assets
            alt={'Modelec Logo'}
          />
        </a>
        <div className={'navbar-links'}>
          {
            links.map((link, index) => (
              <NavbarLink key={index} text={link.text} link={link.link} isActive={activeLink == index} />
            ))
          }
        </div>
      </nav>
    </>
  );
};
