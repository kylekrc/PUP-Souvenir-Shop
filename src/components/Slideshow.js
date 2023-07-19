import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    'https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png',
    'https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png',
    'https://htmlcolorcodes.com/assets/images/colors/yellow-orange-color-solid-background-1920x1080.png',
    'https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png',
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto overflow-x-hidden animate-slide">
      <div className="w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-full h-full flex transition-transform duration-1000 animate-slide"
        >
          {data.map((image, index) => (
            <img key={index} src={image} alt={`img${index}`} loading="priority" />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
