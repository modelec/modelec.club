interface PartnerProps {
    name: string;
    logo: string;
    texts: React.ReactNode[];
    photos: string[];
    link: string;
}

import { ArrowUpRight } from 'iconoir-react';
import './partner.css';

export const Partner: React.FC<PartnerProps> = ({ name, logo, texts, photos, link }) => (
    <div className={'partner'}>
        <div className={'partner-infos'}>
            <img className={'partner-logo'} src={logo} alt={name} />
            <div className={'partner-content'}>
                <h2 className={'partner-name'}>{name}</h2>
                {texts.map((text, index) => (
                    <p key={index} className={'partner-text'}>{text}</p>
                ))}
            </div>
            <a className={'partner-link'} target={'_blank'} href={link}>
                <ArrowUpRight />
                Accéder au site
            </a>
        </div>
        <div className={'partner-photos'}>
            {photos.map((photo, index) => (
                <img key={index} className={'partner-preview'} src={photo} alt={`Photo ${index + 1} - ${name}`} />
            ))}
        </div>
    </div>
);