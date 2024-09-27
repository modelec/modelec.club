import React from "react";

interface MiddleTextProps {
    triptic: { __html: string };
    text: { __html: string };
}

export const MiddleText: React.FC<MiddleTextProps> = ({ triptic, text }) => {
    return (
        <div className="middle-text">
            <div className="middle-text-triptic" dangerouslySetInnerHTML={triptic}></div>
            <div className="middle-text-text" dangerouslySetInnerHTML={text}></div>
        </div>
    );
};