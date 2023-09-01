import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {
      url: 'https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1600px] h-[680px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-16 text-2xl rounded-full p-1 bg-white dark:bg-white text-white cursor-pointer'>
        <BiChevronLeft onClick={prevSlide} className='text-darkMode text-3xl font-bold' />
      </div>
      {/* Right Arrow */}
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-16 text-2xl rounded-full p-1 bg-white dark:bg-white text-white cursor-pointer'>
        <BiChevronRight onClick={nextSlide} className='text-darkMode text-3xl font-bold' />
      </div>
      <div className='flex top-[50%] translate-y-[-90%] justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-4xl cursor-pointer`}
          >
            <RxDotFilled
              className={` ${
                currentIndex == slideIndex ? 'text-lightColor scale-150' : 'text-[#9ca3af]'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
