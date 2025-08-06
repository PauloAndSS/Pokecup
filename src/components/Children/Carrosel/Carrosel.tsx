import React, { useState, useEffect } from 'react';
import style from './Carrosel.module.css';

export interface CarouselItem {
  path: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer); // Clean up the interval when component unmounts
    }
  }, [autoPlay, interval]);

  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselItemContainer}>
        <div className={style.carouselItem}>
          <img
            src={items[currentIndex].path}
            alt={`Imagem ${currentIndex}`}
            className={style.carouselImage}
          />
          <span className={style.description}>{items[currentIndex].description}</span>
        </div>
      </div>
      <div className={style.dotsContainer}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${currentIndex === index ? style.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;