import { NavbarLink } from '../navbarlink/navbarLink';

export const Navbar = () => {
  return (
    <>
      <nav className={'navbar'}>
        <div className={'navbar-container'}>
          <div className={'navbar-logo'}>
            <a href={'/'} className={'navbar-logo-img'}>
              <img
                src={'https://r2.modelec.club/logo.png'}
                alt={'Modelec Logo'}
              />
            </a>
          </div>
          <div className={'navbar-links'}>
            <NavbarLink text={'Projets'} link={'/projets'} />
            <NavbarLink text={'Matériels'} link={'/materiels'} />
            <NavbarLink text={'Photos'} link={'/photos'} />
            <NavbarLink text={'Partenaires'} link={'/partenaires'} />
            <NavbarLink text={'Nous contacter'} link={'/contact'} />
          </div>
        </div>
      </nav>
    </>
  );
};
