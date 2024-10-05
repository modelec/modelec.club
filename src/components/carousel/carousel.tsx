import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CarouselProps {
    images: string[];
}

interface CarouselClickablesProps {
    images: string[];
    links: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

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
    const intervalRef = useRef<number | null>(null); // Store the interval ID

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = window.setInterval(() => {
            handleNextImage();
        }, 3000);
    };

    useEffect(() => {
        resetInterval();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleNextImage = () => {
        setFade("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade("fade-in");
        }, 500);
        resetInterval();
    };

    const handlePreviousImage = () => {
        setFade("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade("fade-in");
        }, 500);
        resetInterval();
    };

    return (
      <div className="carousel-container">
          <ArrowBackIosNewIcon className="carousel-button" onClick={handlePreviousImage}/>
          <div className="carousel-slide">
              {images.map((image, index) => (
                <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer"
                   hidden={index !== currentIndex}>
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className={`carousel-image ${fade}`}
                    />
                </a>
              ))}
          </div>
          <ArrowForwardIosIcon className="carousel-button" onClick={handleNextImage}/>
      </div>
    );
};