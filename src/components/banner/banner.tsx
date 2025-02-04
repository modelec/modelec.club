import './banner.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface BannerProps {
  image: { src: string; alt?: string };
  header: string;
  children?: React.ReactNode;
  label?: string;
}

export const Banner: React.FC<BannerProps> = ({
  image,
  header,
  children,
  label,
}) => {
  return (
    <div className={'banner'}>
      <LazyLoadImage
        className={'banner-image'}
        src={image.src}
        alt={image.alt}
      />
      <div className={'banner-content'}>
        <h3 className={'banner-header'}>{header}</h3>
        <p className={'banner-text'}>{children}</p>
        {label && <span className={'banner-label'}>{label}</span>}
      </div>
    </div>
  );
};
