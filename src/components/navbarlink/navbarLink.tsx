import React from "react";

interface NavbarLinkProps {
    text: string;
    link: string;
    isActive?: boolean;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ text, link, isActive }) => {
    return (
        <a href={link} className={`navbar-link ${isActive ? "link_active" : ""}`}>
            {text}
        </a>
    );
};