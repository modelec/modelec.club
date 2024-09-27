import React from "react";

interface FromRightCardProps {
    title: string;
    content: { __html: string };
    image: string;
    className?: string; // Ajout de la prop className
}

export const FromRightCard: React.FC<FromRightCardProps> = ({ title, content, image, className }) => {
    return (
        <div className={`from-right-card`}>
            <div className="from-right-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="from-right-card-content">
                <h2 className={`${className}`}>{title}</h2>
                <div dangerouslySetInnerHTML={content}></div>
            </div>
        </div>
    );
};