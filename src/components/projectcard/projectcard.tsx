import React from 'react';

interface ProjectBigCardProps {
  imgtitle: string;
  lefttext: { __html: string };
  rightimage: string;
  downtitle: string;
  downcontent: string;
}

interface ProjectSmallCardProps {
  img: string;
  title: string;
  content: string;
}

export const ProjectBigCard: React.FC<ProjectBigCardProps> = ({
  imgtitle,
  lefttext,
  rightimage,
  downtitle,
  downcontent,
}) => {
  return (
    <div className={'project-big-card'}>
      <img src={imgtitle} alt={imgtitle} />
      <div className={'middle-div-project-big-card'}>
        <div
          className={'left-text-project-big-card'}
          dangerouslySetInnerHTML={lefttext}
        />
        <img src={rightimage} alt={rightimage} />
      </div>
      <div className={'down-div-project-big-card'}>
        <h2>{downtitle}</h2>
        <p>{downcontent}</p>
      </div>
    </div>
  );
};

export const ProjectSmallCard: React.FC<ProjectSmallCardProps> = ({
  img,
  title,
  content,
}) => {
  return (
    <div className={'project-small-card'}>
      <img src={img} alt={img} />
      <div className={'project-small-card-content'}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
