import React from "react";

import { NavArrowLeft, NavArrowRight } from "iconoir-react";

import "./carousel.css";

interface CarouselProps {
    carousel: CarouselImageProps[];
}

interface CarouselImageProps {
    image: string;
    title: string;
    text: string;
    link?: string;
    alt?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ carousel }) => {
    const [currentIndex, setCurrentImage] = React.useState(0);
    const [imagesSize, setImagesSize] = React.useState<number[]>([]);
    const carouselSlider = React.useRef<HTMLDivElement>(null);

    const nextImage = () => {
        setCurrentImage((currentIndex + 1) % carousel.length);
    }

    const previousImage = () => {
        setCurrentImage((currentIndex - 1 + carousel.length) % carousel.length);
    }

    React.useEffect(() => {
        const interval = setTimeout(() => {
            nextImage();
        }, 3000);

        if (carouselSlider.current) {
            const translate = imagesSize.reduce((acc, size, index) => index < currentIndex ? acc + size : acc, 0);
            const gap = 25; // TODO: Find a way to get this value (HARDCODED)
            carouselSlider.current.style.translate = `-${translate+gap*currentIndex}px`;
        }
        
        return () => clearInterval(interval);
    }, [currentIndex, imagesSize, carouselSlider]);

    function handleImageLoad(i: number, event: React.SyntheticEvent<HTMLImageElement>) {
        setImagesSize((old) => {
            const newSizes = [...old];
            newSizes[i] = (event.target as HTMLImageElement).clientWidth;
            return newSizes;
        });
    }

    return (
        <div className={"carousel"}>
            <div className={"carousel-wrapper"}>
                <div className={"carousel-slider"} ref={carouselSlider}>
                    {
                        carousel.map((image, index) => (
                            <div key={index} className={'slide'}>
                                <img
                                    key={index}
                                    className={`slide-image ${index === currentIndex ? "active" : ""}`}
                                    src={image.image}
                                    alt={image.alt ?? "Image Carousel"}
                                    onLoad={(e) => handleImageLoad(index, e)}
                                />
                                <div className={'slide-content'}>
                                    <h3 className={'slide-title'}>{image.title}</h3>
                                    <p className={'slide-text'}>{image.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="carousel-bar">
                <button className={"carousel-button button_left"} onClick={previousImage}><NavArrowLeft /></button>
                {
                    carousel.map((_, index) => (
                        <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? "dot_active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                        />
                    ))
                }
                <button className={"carousel-button button_right"} onClick={nextImage}><NavArrowRight /></button>
            </div>
        </div>
    )
};