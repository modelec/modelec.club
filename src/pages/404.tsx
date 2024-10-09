import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div>
      <h2>Note du 28/09/2024</h2>
      <p>
        Le site est actuellement en rénovation (passage de vanilla à ReactJS).
      </p>
      <p>
        Nous sommes désolé pour la gêne occasionnée, nous faisons de notre mieux
        pour que le site soit de nouveau disponible.
      </p>
      <h1>404 - Page Not Found</h1>
      <p>
        La page à laquel vous essayez d'accéder n'est pas disponible pour le
        moment, veuillez revenir plus tard.
      </p>
      <p>Le site est comme nous, il expériemente en continu.</p>
      <p>
        Si vous vouliez nous contacter et que la page de contact vous à amenez
        ici, nous sommes disponibles par mail à{' '}
        <a href={'mailto:contact@modelec.club'}>contact@modelec.club</a>
      </p>
    </div>
  );
};

export default NotFound;
