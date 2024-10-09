import React from "react";

interface FromLeftCardProps {
    title: string;
    content: string;
    image: string;
}

interface FromLeftCardCarouselProps {
    title: string;
    carousel: string[];
    links: string[];
}

export const FromLeftCard: React.FC<FromLeftCardProps> = ({ title, content, image }) => {
    return (
        <>
            <div className={"from-left-card"}>
                <div className={"from-left-card-content"}>
                    <h2>{title}</h2>
                    {content}
                </div>
                <div className={"from-left-card-image"}>
                    <img src={image} alt={title}/>
                </div>
            </div>
        </>
    )
}

export const FromLeftCardCarousel: React.FC<FromLeftCardCarouselProps> = ({ title, carousel, links }) => {
    return (
        <>
            <div className={"from-left-card-carousel"}>
                <div className={"from-left-card-content"}>
                    <h2>{title}</h2>
                    {/* <CarouselClickables images={carousel} links={links} /> */}
                </div>
            </div>
        </>
    )
}