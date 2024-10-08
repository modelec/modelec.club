import React from "react";
import { CarouselClickables } from "../carousel/carousel.tsx";

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
            <div className={'from-left-card'}>
                <div className={'from-left-card-content'}>
                    <h2>{title}</h2>
                    {content}
                </div>
                <img src={image} alt={title} />
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
                    <CarouselClickables images={carousel} links={links} />
                </div>
            </div>
        </>
    )
}