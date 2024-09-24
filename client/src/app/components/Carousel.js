/** @format */
"use client";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row w-full justify-between mx-auto">
      <div className="flex md:flex-col justify-center mt-4 w-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover cursor-pointer mx-1 md:mx-0 md:my-1 ${currentIndex === index ? "border-2 border-blue-500" : ""}`}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>
      <div className="overflow-hidden w-full md:w-auto">
        <img src={images[currentIndex]} alt={`carousel image ${currentIndex + 1}`} className="w-full" />
      </div>
    </div>
  );
};

export default Carousel;
