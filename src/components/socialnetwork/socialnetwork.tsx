import React, { Fragment } from "react";

import './socialnetwork.css';

interface SocialNetworkProps {
    Icon: React.FC;
    link: string;
    name: string;
}

interface SocialNetworkListProps {
    networks: SocialNetworkProps[];
}

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ Icon, link, name }) => {
    return (
        <a href={link} className={"media-link"} target="_blank">
            <Icon />
            {name}
        </a>
    );
}

export const SocialNetworkList: React.FC<SocialNetworkListProps> = ({ networks }) => {
    return (
        <div className={"media-container"}>
            {networks.map((network, index) => (<Fragment key={index}>
                <SocialNetwork Icon={network.Icon} link={network.link} name={network.name} />
                {index < (networks.length - 1) &&
                    <hr className={'media-separator'} />
                }
            </Fragment>))}
        </div>
    );
}