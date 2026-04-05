import React from 'react';

const CategoryCard = ({ title, description, image }) => {
    return (
        <div className="flex-shrink-0 w-[400px] h-[500px] rounded-xl overflow-hidden mx-2 relative group cursor-pointer">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

            {/* Content Overlay */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
                {/* Title */}
                <h3 className="text-white font-bold text-3xl mb-4 uppercase tracking-wide drop-shadow-lg">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-[280px] drop-shadow-md">
                    {description}
                </p>

                {/* Arrow Icon */}
               
            </div>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>
    );
};

export default CategoryCard;
