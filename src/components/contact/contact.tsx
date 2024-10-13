import React from "react";

import './contact.css';

interface ContactProps {
    Icon: React.ElementType;
    title: string;
    description: string;
    link: {
        location: string;
        text: string;
    };
    alt?: string;
}

interface ContactListProps {
    contacts: ContactProps[];
}

const Contact: React.FC<ContactProps> = ({ Icon, title, description, link }) => {
    return (<a href={link.location} className={'contact'} target="_blank" rel="noreferrer">
        <Icon className={'contact-icon'} />
        <div className={'contact-content'}>
            <h2 className={'contact-title'}>{title}</h2>
            <p className={'contact-description'}>{description}</p>
            <p className={'contact-link'}>{link.text}</p>
        </div>
    </a>)
}

export const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
    return (
        <div className={'contact-list'}>
            {contacts.map((contact, index) => (
                <Contact key={index} {...contact} />
            ))}
        </div>
    );
}