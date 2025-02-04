import React from 'react';

import './timeline.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface StatCardProps {
  type: 'stat';
  data: string;
  label: string;
}

interface ImageCardProps {
  type: 'image';
  src: string;
  alt: string;
  fit: 'contain' | 'cover';
}

interface TimelineProjectProps {
  title: string;
  date: string;
  banner?: string;
  paragraphs: React.ReactNode[];
  cards?: (StatCardProps | ImageCardProps)[];
}

interface TimelineProps {
  projects: TimelineProjectProps[];
}

const TimelineProjectCard: React.FC<StatCardProps | ImageCardProps> = (
  props
) => {
  if (props.type === 'stat') {
    const { data, label } = props as StatCardProps;
    return (
      <div className={'timeline-project-card card_stat'}>
        <p className={'timeline-project-card-number'}>{data}</p>
        <p className={'timeline-project-card-subtext'}>{label}</p>
      </div>
    );
  } else if (props.type === 'image') {
    const { src, alt, fit } = props as ImageCardProps;
    return (
      <div className={`timeline-project-card card_image_${fit}`}>
        <LazyLoadImage
          className={'timeline-project-card-image'}
          src={src}
          alt={alt}
        />
      </div>
    );
  }
};

export const TimelineProject: React.FC<TimelineProjectProps> = ({
  title,
  banner,
  date,
  paragraphs,
  cards,
}) => {
  return (
    <div className={'timeline-project'}>
      <div className={'timeline-project-content'}>
        <h3 className={'timeline-project-title'}>{title}</h3>
        <p className={'timeline-project-date'}>{date}</p>
      </div>
      {banner && (
        <LazyLoadImage
          className={'timeline-project-banner'}
          src={banner}
          alt={title}
        />
      )}
      <div className={'timeline-project-description'}>
        {paragraphs.map((paragraph, i) => (
          <p className={'timeline-project-paragraph'} key={i}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={'timeline-project-cards'}>
        {cards &&
          cards.map((card, i) => <TimelineProjectCard key={i} {...card} />)}
      </div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ projects }) => {
  return (
    <div className={'timeline'}>
      <h4 className={'timeline-tag'}>Aujourd'hui</h4>
      {projects.map((project, i) => {
        return <TimelineProject key={i} {...project} />;
      })}
      <h4 className={'timeline-tag'}>Il y a quelques temps</h4>
    </div>
  );
};
