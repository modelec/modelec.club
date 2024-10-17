import { WarningCircle } from 'iconoir-react';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <>
      <h1 className={'page-title'}>Page non-trouvée</h1>
      <div className={'page-warning'}>
        <div className={'page-warning-content'}>
          <WarningCircle className={'page-warning-icon'} />
          <p className={'page-warning-text'}>
            Le contenu que vous essayez d'afficher n'existe pas ou plus.
          </p>
        </div>
        <div className={'page-warning-actions'}>
          <a className={'page-warning-action'} href={'/'}>Retourner à l'accueil</a>
          <a className={'page-warning-action'} href={'mailto:contact@modelec.club'}>Nous signaler un problème</a>
        </div>
      </div>
    </>
    // <div>
    //   <h2>Note du 28/09/2024</h2>
    //   <p>
    //     Le site est actuellement en rénovation (passage de vanilla à ReactJS).
    //   </p>
    //   <p>
    //     Nous sommes désolé pour la gêne occasionnée, nous faisons de notre mieux
    //     pour que le site soit de nouveau disponible.
    //   </p>
    //   <h1>404 - Page Not Found</h1>
    //   <p>
    //     La page à laquel vous essayez d'accéder n'est pas disponible pour le
    //     moment, veuillez revenir plus tard.
    //   </p>
    //   <p>Le site est comme nous, il expériemente en continu.</p>
    //   <p>
    //     Si vous vouliez nous contacter et que la page de contact vous à amenez
    //     ici, nous sommes disponibles par mail à{' '}
    //     <a href={'mailto:contact@modelec.club'}>contact@modelec.club</a>
    //   </p>
    // </div>
  );
};

export default NotFound;
