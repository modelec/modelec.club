import React from "react";

import './sidecard.css';

interface FromRightCardProps {
    title: string;
    content: { __html: string };
    image: string;
    className?: string; // Ajout de la prop className
}

export const FromRightCard: React.FC<FromRightCardProps> = ({ title, content, image, className }) => {
    return (
        <div className={`from-right-card`}>
            <img src={image} alt={title} />
            <div className="from-right-card-content">
                <h2 className={`${className}`}>{title}</h2>
                <div dangerouslySetInnerHTML={content}></div>
            </div>
        </div>
    );
};