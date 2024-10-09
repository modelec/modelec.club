import React from "react";

interface BoxImageProps {
    type: "image";
    src: string;
    alt?: string;
}

interface BoxDataProps {
    type: "data";
    data: string;
    subtext?: string;
}

interface BoxProps {
    title: string;
    subtext?: string;
    label?: string;
    elements: (string|BoxImageProps|BoxDataProps)[];
}

export const Box: React.FC<BoxProps> = ({ title, subtext, label, elements }) => {
    return (
        <div className={'box-container'}>
            {label && <span className={'box-label'}>{label}</span>}
            <div>
                <h4 className={'box-title'}>{title}</h4>
                {subtext && <p className={'box-subtext'}>{subtext}</p>}
            </div>
            <div className={'box-parts'}>
                {elements.map((element, index) => {
                    if (typeof element === 'string') {
                        return <p key={index} className={'box-paragraph'}>{element}</p>;
                    } else if (element.type === 'data') {
                        return (
                            <div key={index} className={'box-data'}>
                                <span className={'box-data-number'}>{element.data}</span>
                                {element.subtext && <span className={'box-data-subtext'}>{element.subtext}</span>}
                            </div>
                        );
                    } else if (element.type === 'image') {
                        return <img key={index} className={'box-image'} src={element.src} alt={element.alt} />;
                    }
                })}
            </div>
        </div>
    );
};