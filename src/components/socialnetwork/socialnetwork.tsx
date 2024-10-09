import React from "react";

interface SocialNetworkProps {
    Icon: React.FC;
    link: string;
    name: string;
}

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ Icon, link, name }) => {
    return (
        <a href={link} className={"media-link"} target="_blank">
            <Icon />
            {name}
        </a>
    );
}