import React from 'react';
import { ProjectHeaderCard } from './projectheadercard.tsx';

export const ProjetsHeader: React.FC = () => {
  return (
    <div className={'project-header-container'}>
      <h1>PROJETS</h1>
      <p>Vous retrouvez ici la liste des projets en cours et passé.</p>
      <div className={'project-header-card-list'}>
        <ProjectHeaderCard
          title={'Projets en cours'}
          content={[
            'Coupe de France de robotique 2025',
            'Digitalisation du bureau',
          ]}
        />
        <ProjectHeaderCard
          title={'Projets passés'}
          content={['Coupe de France de robotique 2024', 'Drone DIY']}
        />
      </div>
    </div>
  );
};
