import React, { useState } from 'react';

const categories = [
    'Home Appliances',
    'Phones & Accessories',
    'Smart Home & Security',
    'Gaming',
    'Green Energy',
    'Computing & Laptops',
    'Cameras',
    'Wearable',
    'Office Equipment'
];

const CategoriesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors font-medium text-sm uppercase tracking-wide"
            >
                Categories
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-lg border border-gray-200 rounded-lg py-3 z-50">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className="w-full text-left px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center justify-between"
                        >
                            <span className="font-medium">{category}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoriesDropdown;
