/** @format */
"use client";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // animasyon durumu ekledik

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsAnimating(false), 300); // animasyon süresi boyunca beklet
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const selectSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full h-full mt-4  justify-evenly mx-auto">
      <div className="flex lg:flex-col    ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail ${index + 1}`}
            className={`max-w-16 max-h-16 w-auto h-auto  md:w-16 md:h-16 object-cover rounded-md cursor-pointer mx-1 lg:mx-0 lg:my-1 ${
              currentIndex === index ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>
      <div className="relative overflow-hidden lg:max-w-[446px] lg:max-h-[446px] h-auto w-auto">
        <div
          className="whitespace-nowrap transition-transform duration-300 ease-in-out   w-[446px] h-full lg:overflow-visible overflow-hidden mx-auto "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel image ${index + 1}`}
              className="inline-block w-full h-full rounded-md "
              style={{ width: "446px" }} // Görüntü genişliğini ayarlıyoruz
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
