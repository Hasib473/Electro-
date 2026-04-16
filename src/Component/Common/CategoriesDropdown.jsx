import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const categoriesData = {
    'Home Appliances': {
        slug: 'home-appliances',
        subcategories: {
            'Kitchen Appliances': [
                { name: 'Refrigerator', link: '/kitchen/refrigerator' },
                { name: 'Ovens & Microwaves', link: '/kitchen/ovens-microwaves' },
                { name: 'Dishwashers', link: '/kitchen/dishwashers' },
                { name: 'Breakfast Makers', link: '/kitchen/breakfast-makers' },
                { name: 'Blenders & Mixers', link: '/kitchen/blenders-mixers' },
                { name: 'Coffee & Beverage', link: '/kitchen/coffee-beverage' },
                { name: 'Cookers', link: '/kitchen/cookers' }
            ],
            'Laundry & Cleaning': [
                'Washing Machines',
                'Clothes Dryers',
                'Garment Care'
            ],
            'Personal Grooming': [
                'Hair Caret',
                'Grooming',
                'Oral Care'
            ],
            'Climate Control': [
                'Air Conditioning',
                'Fans',
                'Air Purifiers',
                'Heaters'
            ]
        }
    },
    'Phones & Accessories': {
        slug: 'phones-accessories',
        subcategories: {
            'Smartphones': [
                'Android Phones',
                'iPhones',
                '5G Phones',
                'Budget Phones'
            ],
            'Phone Accessories': [
                'Cases & Covers',
                'Screen Protectors',
                'Chargers & Cables',
                'Power Banks',
                'Headphones'
            ]
        }
    },
    'Smart Home & Security': {
        slug: 'smart-home-security',
        subcategories: {
            'Smart Home': [
                'Smart Speakers',
                'Smart Lighting',
                'Smart Thermostats',
                'Smart Plugs'
            ],
            'Security': [
                'Security Cameras',
                'Doorbell Cameras',
                'Alarm Systems',
                'Smart Locks'
            ]
        }
    },
    'Gaming': {
        slug: 'gaming',
        subcategories: {
            'Consoles': [
                'PlayStation',
                'Xbox',
                'Nintendo Switch'
            ],
            'Gaming Accessories': [
                'Controllers',
                'Gaming Headsets',
                'Gaming Chairs',
                'VR Headsets'
            ]
        }
    },
    'Green Energy': {
        slug: 'green-energy',
        subcategories: {
            'Solar': [
                'Solar Panels',
                'Solar Batteries',
                'Solar Chargers'
            ],
            'Energy Solutions': [
                'Wind Turbines',
                'Energy Storage',
                'Inverters'
            ]
        }
    },
    'Computing & Laptops': {
        slug: 'computing-laptops',
        subcategories: {
            'Laptops': [
                'Gaming Laptops',
                'Business Laptops',
                'Ultrabooks',
                '2-in-1 Laptops'
            ],
            'Desktops': [
                'All-in-One PCs',
                'Gaming Desktops',
                'Workstations'
            ],
            'Accessories': [
                'Monitors',
                'Keyboards',
                'Mice',
                'Webcams'
            ]
        }
    },
    'Cameras and TVs': {
        slug: 'cameras-and-tv',
        subcategories: {
            'Digital Cameras': [
                'DSLR Cameras',
                'Mirrorless Cameras',
                'Point & Shoot'
            ],
            'Camera Accessories': [
                'Lenses',
                'Tripods',
                'Camera Bags',
                'Memory Cards'
            ],
            'Televisions': [
                { name: 'LED TVs', link: '/led-tv' },
                { name: 'OLED TVs', link: '/led-tv' },
                { name: 'QLED TVs', link: '/led-tv' },
                { name: '4K & 8K TVs', link: '/led-tv' }
             ]
         }
     },
    'Wearable': {
        slug: 'wearable',
        subcategories: {
            'Smartwatches': [
                'Apple Watch',
                'Samsung Galaxy Watch',
                'Fitness Trackers'
            ],
            'VR & AR': [
                'VR Headsets',
                'AR Glasses'
            ]       
        }
    },
  
    'Office Equipment': {
        slug: 'office-equipment',
        subcategories: {
            'Printers & Scanners': [
                'Inkjet Printers',
                'Laser Printers',
                'Scanners'
            ],
            'Office Furniture': [
                'Desks',
                'Office Chairs',
                'Filing Cabinets'
            ]
        }
    }
};

const CategoriesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Home Appliances');
    const dropdownRef = React.useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setActiveCategory(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCategoryClick = (categoryName) => {
        const category = categoriesData[categoryName];
        if (category) {
            navigate(`/category/${category.slug}`);
            setIsOpen(false);
            setActiveCategory(null);
        }
    };

    return (
        <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => {
                setIsOpen(false);
                setActiveCategory(null);
            }}
        >
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

            {/* Mega Menu Dropdown */}
            {isOpen && (
                <div
                    className="absolute left-0 top-full mt-0 w-[900px] bg-white shadow-2xl border border-gray-200 z-50 flex"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {/* Left Sidebar - Categories */}
                    <div className="w-64 bg-gray-50 border-r border-gray-200 py-4">
                        {Object.keys(categoriesData).map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => handleCategoryClick(category)}
                                onMouseEnter={() => setActiveCategory(category)}
                                className={`w-full text-left px-6 py-3 transition-colors flex items-center justify-between text-sm ${
                                    activeCategory === category
                                        ? 'bg-blue-500 text-white font-medium'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <span>{category}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ${
                                        activeCategory === category ? 'text-white' : 'text-gray-400'
                                    }`}
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

                    {/* Right Content - Subcategories */}
                    {activeCategory && categoriesData[activeCategory] && (
                        <div className="flex-1 p-8">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                {Object.entries(categoriesData[activeCategory].subcategories).map(
                                    ([subcategory, items]) => (
                                        <div key={subcategory}>
                                            <h3 className="font-bold text-gray-800 text-lg mb-4 uppercase tracking-wide">
                                                {subcategory}
                                            </h3>
                                            <ul className="space-y-2">
                                                {items.map((item) => {
                                                    const itemName = typeof item === 'object' ? item.name : item;
                                                    const itemLink = typeof item === 'object' ? item.link : null;
                                                    
                                                    return (
                                                        <li key={itemName}>
                                                            {itemLink ? (
                                                                <Link
                                                                    to={itemLink}
                                                                    className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
                                                                    onClick={() => {
                                                                        setIsOpen(false);
                                                                        setActiveCategory(null);
                                                                    }}
                                                                >
                                                                    {itemName}
                                                                </Link>
                                                            ) : (
                                                                <button
                                                                    type="button"
                                                                    className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
                                                                >
                                                                    {itemName}
                                                                </button>
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoriesDropdown;
