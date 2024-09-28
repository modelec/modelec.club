import React from 'react';

interface ProjectHeaderCardProps {
  title: string;
  content: string[];
}

export const ProjectHeaderCard: React.FC<ProjectHeaderCardProps> = ({
  title,
  content,
}) => {
  return (
    <div className={'project-header-card'}>
      <h2>{title}</h2>
      <ul className={'project-header-card-ul'}>
        {content.map((item, index) => (
          <li className={'project-header-card-li'} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
