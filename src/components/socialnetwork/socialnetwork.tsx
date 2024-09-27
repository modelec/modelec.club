import React from "react";

interface SocialNetworkProps {
    icon: string;
    link: string;
    name: string;
}

interface SocialNetworkSmallProps {
    icon: string;
    link: string;
}

interface SocialNetworksProps {
    networks: SocialNetworkProps[];
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({ icon, link, name }) => {
    return (
        <a href={link} className={"social-network"}>
            <img src={icon} alt={name}/>
            <p className={"social-network-name"}>{name}</p>
        </a>
    );
}

export const SocialNetworkSmall: React.FC<SocialNetworkSmallProps> = ({ icon, link }) => {
    return (
        <a href={link} className={"social-network-small"}>
            <img src={icon} alt={link} className={"social-network-small-icon"}/>
        </a>
    );
}

export const SocialNetworks: React.FC<SocialNetworksProps> = ({ networks }) => {
    return (
        <div className={"social-networks"}>
            {networks.map((network, index) => <SocialNetwork key={index} {...network} />)}
        </div>
    );
}