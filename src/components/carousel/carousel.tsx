import React from 'react';
import { NavArrowLeft, NavArrowRight } from 'iconoir-react';
import './carousel.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
    setCurrentImage((prevIndex) => (prevIndex + 1) % (carousel.length * 2));
  };

  const previousImage = () => {
    setCurrentImage(
      (prevIndex) =>
        (prevIndex - 1 + carousel.length * 2) % (carousel.length * 2)
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    if (carouselSlider.current) {
      const translate = imagesSize.reduce(
        (acc, size, index) => (index < currentIndex ? acc + size : acc),
        0
      );
      const gap = 25; // TODO: Find a way to get this value (HARDCODED)
      carouselSlider.current.style.transform = `translateX(-${translate + gap * currentIndex}px)`;
    }

    if (currentIndex >= carousel.length) {
      setTimeout(() => {
        setCurrentImage(0);
        if (carouselSlider.current) {
          carouselSlider.current.style.transition = 'none';
          carouselSlider.current.style.transform = 'translateX(0)';
        }
      }, 300);
    } else {
      if (carouselSlider.current) {
        carouselSlider.current.style.transition = 'transform 0.3s ease';
      }
    }

    return () => clearInterval(interval);
  }, [currentIndex, imagesSize, carouselSlider]);

  function handleImageLoad(
    i: number,
    event: React.SyntheticEvent<HTMLImageElement>
  ) {
    setImagesSize((old) => {
      const newSizes = [...old];
      newSizes[i] = (event.target as HTMLImageElement).clientWidth;
      return newSizes;
    });
  }

  return (
    <div className={'carousel'}>
      <div className={'carousel-wrapper'}>
        <div className={'carousel-slider'} ref={carouselSlider}>
          {[...carousel, ...carousel].map((image, index) => (
            <div key={index} className={'slide'}>
              <LazyLoadImage
                key={index}
                className={`slide-image ${index === currentIndex ? 'active' : ''}`}
                src={image.image}
                alt={image.alt ?? 'Image Carousel'}
                onLoad={(e) => handleImageLoad(index, e)}
              />
              <div className={'slide-content'}>
                <h3 className={'slide-title'}>{image.title}</h3>
                <p className={'slide-text'}>{image.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-bar">
        <button
          className={'carousel-button button_left'}
          onClick={previousImage}
        >
          <NavArrowLeft />
        </button>
        {carousel.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex % carousel.length ? 'dot_active' : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
        <button className={'carousel-button button_right'} onClick={nextImage}>
          <NavArrowRight />
        </button>
      </div>
    </div>
  );
};
