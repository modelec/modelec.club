import React from "react";

interface NavbarLinkProps {
    text: string;
    link: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ text, link }) => {
    return (
        <a href={link} className={"navbar-link"}>
            {text}
        </a>
    );
};