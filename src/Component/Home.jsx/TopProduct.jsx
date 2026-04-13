import React, { useState } from 'react';
import readmiimg from '../../assets/redmi.png'
import monitor from '../../assets/tv.png'
import pccase from '../../assets/pccase.png'
import acimg from '../../assets/Acimg.png'
import headphoneimg from '../../assets/headphone.png'
import owenimg from "../../assets/mowen.png"
import mixerimg from '../../assets/mixer.png'
import haircutterimg from '../../assets/braidmachine.png'


const tabs = [
  { id: 'featured', label: 'FEATURED PRODUCT' },
  { id: 'new', label: 'NEW ARRIVAL' },
  { id: 'best', label: 'BEST SELLER' },
  { id: 'recommended', label: 'RECOMMENDED FOR YOU' },
];

const products = [
  {
    id: 1,
    name: 'REDMI NOTE 15 8GB/256GB',
    originalPrice: 400,
    price: 360,
    rating: 5.0,
    reviews: 122,
    discount: 10,
    image:readmiimg,
  },
  {
    id: 2,
    name: 'SONY BRAVIA 2 43 INCH LED 4K S...',
    originalPrice: 1200,
    price: 800,
    rating: 5.0,
    reviews: 1321,
    discount: 34,
    image: monitor,
  },
  {
    id: 3,
    name: 'KELVINATOR 537L INVERTER NO FR...',
    originalPrice: 1350,
    price: 1115,
    rating: 5.0,
    reviews: 232,
    discount: 18,
    image: pccase,
  },
  {
    id: 4,
    name: 'KIESLECT KS 3 CURVED AMOLED B...',
    originalPrice: 70,
    price: 60,
    rating: 5.0,
    reviews: 1321,
    discount: 13,
    image: acimg,
  },
  {
    id: 5,
    name: 'HAYLOU S40 ANC BLUETOOTH HEA...',
    originalPrice: 70,
    price: 55,
    rating: 5.0,
    reviews: 342,
    discount: 21,
    image: headphoneimg,
  },
  {
    id: 6,
    name: 'TQUI S3 GLASS WINDOW DIGITAL AI...',
    originalPrice: 110,
    price: 89,
    rating: 5.0,
    reviews: 243,
    discount: 15,
    image: owenimg,
  },
  {
    id: 7,
    name: 'PANASONIC 1200W 3 JARS MIXER...',
    originalPrice: 127,
    price: 78,
    rating: 5.0,
    reviews: 169,
    discount: 40,
    image: mixerimg,
  },
  {
    id: 8,
    name: 'HAIER 8KG TOP LOAD AUTOMATIC...',
    originalPrice: 30,
    price: 15,
    rating: 5.0,
    reviews: 777,
    discount: 50,
    image: haircutterimg,
  },
];

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04096 1.54871 8.5C1.54871 9.95904 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg p-4 flex flex-col group hover:shadow-lg transition-shadow duration-300">
    {/* Image Container */}
    <div className="relative mb-4 flex justify-center items-center bg-gray-50 rounded-lg p-4 h-48">
      {/* Discount Badge */}
      <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
        {product.discount}% off
      </span>
      {/* Product Image Placeholder */}
      <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-xs text-center">{product.image ? <img src={product.image} alt={product.name} className="w-full h-full object-contain" /> : 'Product Image'}</span>
      </div>
    </div>

    {/* Product Info */}
    <div className="flex flex-col flex-grow">
      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-1">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        <StarIcon />
        <span className="text-xs text-gray-600">
          {product.rating} ({product.reviews})
        </span>
      </div>

      {/* Price */}
      <div className="flex flex-col items-end mb-4">
        <span className="text-xs text-gray-400 line-through">
          ${product.originalPrice}
        </span>
        <span className="text-sm font-bold text-gray-900">
          ${product.price}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 mt-auto">
        {/* Heart Button */}
        <button className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-lg hover:border-red-300 hover:text-red-500 transition-colors duration-200 text-gray-400">
          <HeartIcon />
        </button>

        {/* Buy Now Button */}
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
);

const TopProduct = () => {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">TOP PRODUCTS</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-8 py-2.5 border-2 border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
          SEE MORE
        </button>
      </div>
    </section>
  );
};

export default TopProduct;
