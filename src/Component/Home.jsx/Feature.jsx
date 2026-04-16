import React, { useState, useEffect } from 'react';
import CategoryCard from '../Common/CategoryCard';
import img1 from '../../assets/featureimg1.png'
import computerimg from '../../assets/Computerimg.png'
import kichenimg from '../../assets/kichenimg.png'
import homeimg from '../../assets/homeimg.png'

const Feature = () => {
    const categories = [
        {
            id: 1,
            title: 'Camera & Accessories',
            description: 'Discover our curated collection of premium camera and accessories.',
            image: img1
        },
        {
            id: 2,
            title: 'Computer & Accessories',
            description: 'Discover our curated collection of premium computer and accessories.',
            image: computerimg
        },
        {
            id: 3,
            title: 'Cooking Ware',
            description: 'Discover our curated collection of premium cooking ware.',
            image: kichenimg
        },

        {
            id: 4,
            title: 'Home Appliances',
            description: 'Discover our curated collection of premium home appliances.',
            image: homeimg
        }
    ];

    const cardsPerView = 3;
    const cardWidth = 408; // card width (400px) + margins (8px from mx-2)
    const containerPadding = 16; // small padding on right side
    const visibleWidth = cardsPerView * cardWidth + containerPadding; // 1240px
    const totalCards = categories.length; // 4
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Build extended track: original + duplicate for seamless loop
    const extendedCards = [...categories, ...categories];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= totalCards) {
                    return 0;
                }
                return prev + cardsPerView;
            });
            setIsTransitioning(true);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalCards, cardsPerView]);

    const handleTransitionEnd = () => {
        if (currentIndex >= totalCards) {
            setIsTransitioning(false);
            setCurrentIndex(0);
        }
    };

    return (
        <div className="w-full bg-white py-12">

            <div>
                <h1 className='text-3xl font-bold text-gray-800 text-center uppercase mb-8'>Featured Categories</h1>
            </div>
            <div
                className="mx-auto overflow-hidden relative"
                style={{ maxWidth: `${visibleWidth}px` }}
            >
                <div
                    className="flex gap-0"
                    style={{
                        transform: `translateX(-${currentIndex * cardWidth}px)`,
                        transition: isTransitioning
                            ? 'transform 0.7s ease-in-out'
                            : 'none',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedCards.map((category, index) => (
                        <div
                            key={`card-${index}`}
                            className="flex-shrink-0"
                            style={{ width: `${cardWidth}px` }}
                        >
                            <CategoryCard
                                title={category.title}
                                description={category.description}
                                image={category.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
