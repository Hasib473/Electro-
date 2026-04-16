import React, { useState, useEffect } from 'react';
import heroimg1 from '../../assets/slider1.png';
import heroimg2 from '../../assets/slider2.png';
import heroimg3 from '../../assets/slider3.png';

const slides = [
    {
        id: 1,
        title: 'INTELLIGENCE IN EVERY DETAIL.',
        description: 'Every morning, we wake up with a purpose: to create something meaningful that brings lasting value to our lives. Excellence is not a destination; it is a continuous journey built on attention to detail and an unwavering commitment to quality.',
        buttonText: 'SHOP NOW',
        backgroundImage: heroimg1
    },
    {
        id: 2,
        title: 'TOOLS FOR GROWING AMBITIONS.',
        description: 'Discover our curated collection of premium tools and gadgets. Business meets luxury in these ultra-sleek and purpose-built devices.',
        buttonText: 'EXPLORE NOW',
        backgroundImage: heroimg2
    },
    {
        id: 3,
        title: 'ELEVATE YOUR DAILY FLOW.',
        description: 'Technology that just works, no frills. A collection of carefully crafted tools designed to seamlessly integrate into your workflow.',
        buttonText: 'SHOP NOW',
        backgroundImage: heroimg3
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % slides.length);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-gray-900">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 relative h-full"
                    >
                        {/* Background Image */}
                        <img
                            src={slide.backgroundImage}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="eager"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/15" />
                        {/* Content */}
                        <div className="container mx-auto px-8 h-full flex items-center relative z-10">
                            <div className="max-w-2xl text-white">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                                    {slide.description}
                                </p>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {/* <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                aria-label="Previous slide"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button> */}
{/* 
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                aria-label="Next slide"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button> */}

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;