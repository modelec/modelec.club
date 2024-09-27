import React, { useState, useEffect } from "react";

interface CarouselProps {
    images: string[];
}

interface CarouselClickablesProps {
    images: string[];
    links: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = React.useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    }

    const previousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    }

    return (
        <div className={"carousel"}>
            <div className={"carousel-image"}>
                <img src={images[currentImage]} alt={"carousel"}/>
            </div>
            <div className={"carousel-buttons"}>
                <button onClick={previousImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    )
}

export const CarouselClickables: React.FC<CarouselClickablesProps> = ({ images, links }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleNextImage = () => {
        setFade("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade("fade-in");
        }, 500);
    };

    const handlePreviousImage = () => {
        setFade("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade("fade-in");
        }, 500);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className={`carousel-image ${fade}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        />
                    </a>
                ))}
            </div>
            <div className="carousel-buttons">
                <button onClick={handlePreviousImage}>Previous</button>
                <button onClick={handleNextImage}>Next</button>
            </div>
        </div>
    );
};