import React from 'react';
import { useParams, Link } from 'react-router';

const categoriesData = {
    'home-appliances': {
        title: 'Home Appliances',
        slug: 'home-appliances',
        subcategories: {
            'Kitchen Appliances': [
                'Refrigerator',
                'Ovens & Microwaves',
                'Dishwashers',
                'Breakfast Makers',
                'Blenders & Mixers',
                'Coffee & Beverage',
                'Cookers'
            ],
            'Laundry & Cleaning': [
                'Refrigerator',
                'Washing Machines',
                'Clothes Dryers',
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
    'phones-accessories': {
        title: 'Phones & Accessories',
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
    'smart-home-security': {
        title: 'Smart Home & Security',
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
    'gaming': {
        title: 'Gaming',
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
    'green-energy': {
        title: 'Green Energy',
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
    'computing-laptops': {
        title: 'Computing & Laptops',
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
    'cameras': {
        title: 'Cameras',
        slug: 'cameras',
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
            ]
        }
    },
    'wearable': {
        title: 'Wearable',
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
    'office-equipment': {
        title: 'Office Equipment',
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

const CategoryPage = () => {
    const { categorySlug } = useParams();
    const category = categoriesData[categorySlug];

    if (!category) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">Category Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                        Go Back Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Breadcrumb */}
            <div className="mb-8">
                <nav className="flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-gray-700">Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-blue-600 font-medium">{category.title}</span>
                </nav>
            </div>

            {/* Category Title */}
            <h1 className="text-4xl font-bold text-slate-800 mb-10">{category.title}</h1>

            {/* Subcategories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(category.subcategories).map(([subcategoryName, items]) => (
                    <div key={subcategoryName} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">
                            {subcategoryName}
                        </h2>
                        <ul className="space-y-3">
                            {items.map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/category/${categorySlug}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
