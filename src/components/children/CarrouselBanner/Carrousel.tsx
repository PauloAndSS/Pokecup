import React, { useState, useEffect } from "react";
import Style  from "./Carrousel.module.css";

export type CarrouselItem = {
  imagem: React.ReactNode;
  descricao: React.ReactNode;
};

type CarrouselProps = {
  items: CarrouselItem[];
};

export function Carrousel({ items }: CarrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[currentIndex];

  return (
    <div className={Style.banner}>
      <div>
        <img
          src={currentItem.imagem as string}
          alt={`Imagem ${currentIndex + 1}`}
        />
      </div>
      <span className={Style.spanBanner}>
        {currentItem.descricao}
      </span>
    </div>
  );
}