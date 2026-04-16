import React, { useState } from 'react';
import { Link } from 'react-router';
import tvimg from '../assets/tv.png';

// TV Products data
const tvProducts = [
  { id: 1, name: 'SAMSUNG 43 INCH QLED 4K UHD VI...', originalPrice: 700, price: 620, rating: 5.0, reviews: 122, discount: 10, image:tvimg },
  { id: 2, name: 'ROWA 43U62 43 INCH 4K ANDROID...', originalPrice: 400, price: 360, rating: 5.0, reviews: 122, discount: 10, image: '/placeholder-tv2.png' },
  { id: 3, name: 'ROWA 55U62 55 INCH 4K ANDROID...', originalPrice: 650, price: 570, rating: 5.0, reviews: 122, discount: 10, image: '/placeholder-tv3.png' },
  { id: 4, name: 'LG 77 INCH SLIM DESIGN 4K OLED...', originalPrice: 5000, price: 4000, rating: 5.0, reviews: 122, discount: 10, image: '/placeholder-tv4.png' },
  { id: 5, name: 'SAMSUNG 85 INCH NEO QLED 8K S...', originalPrice: 11000, price: 9000, rating: 5.0, reviews: 122, discount: 10, image: '/placeholder-tv5.png' },
  { id: 6, name: 'SONY BRAVIA 2 43 INCH LED 4K S...', originalPrice: 1020, price: 750, rating: 5.0, reviews: 122, discount: 10, image: '/placeholder-tv6.png' },
  { id: 7, name: 'SAMSUNG 55 INCH QLED 4K SMART...', originalPrice: 850, price: 765, rating: 5.0, reviews: 98, discount: 10, image: '/placeholder-tv7.png' },
  { id: 8, name: 'ROWA 65U62 65 INCH 4K ANDROID...', originalPrice: 900, price: 780, rating: 5.0, reviews: 156, discount: 10, image: '/placeholder-tv8.png' },
  { id: 9, name: 'LG 55 INCH OLED 4K SMART TV...', originalPrice: 1500, price: 1320, rating: 5.0, reviews: 203, discount: 10, image: '/placeholder-tv9.png' },
  { id: 10, name: 'SONY BRAVIA 65 INCH LED 4K HDR...', originalPrice: 1200, price: 1050, rating: 5.0, reviews: 178, discount: 10, image: '/placeholder-tv10.png' },
  { id: 11, name: 'SAMSUNG 75 INCH QLED 8K SMART...', originalPrice: 3500, price: 3100, rating: 5.0, reviews: 89, discount: 10, image: '/placeholder-tv11.png' },
  { id: 12, name: 'ROWA 32U62 32 INCH HD ANDROID...', originalPrice: 250, price: 220, rating: 5.0, reviews: 267, discount: 10, image: '/placeholder-tv12.png' },
];

const itemsPerPage = 6;

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04096 1.54871 8.5C1.54871 9.95904 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <span className="text-sm text-gray-600">{label}</span>
  </label>
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
        <span className="text-gray-400 text-xs text-center">{product.image}</span>
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

const LedTvPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    price: { min: '', max: '' },
    category: { led: false, '4k': false, android: false, '4kSmart': false },
    screenSize: { '72': false, '52': false, '32': false },
    color: { black: false, gray: false },
    brand: { sony: false, panasonic: false, haier: false, singer: false, bravia: false, walton: false, samsung: false },
  });

  const totalPages = Math.ceil(tvProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = tvProducts.slice(startIndex, endIndex);

  const handleFilterChange = (category, filter) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [filter]: !prev[category][filter],
      },
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700">Search</span>
        </nav>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h2 className="text-lg font-bold text-gray-900 mb-6">FILTERS</h2>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Price, $</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.price.min}
                  onChange={(e) => setFilters((prev) => ({ ...prev, price: { ...prev.price, min: e.target.value } }))}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.price.max}
                  onChange={(e) => setFilters((prev) => ({ ...prev, price: { ...prev.price, max: e.target.value } }))}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                <Checkbox label="LED TV" checked={filters.category.led} onChange={() => handleFilterChange('category', 'led')} />
                <Checkbox label="4k TV" checked={filters.category['4k']} onChange={() => handleFilterChange('category', '4k')} />
                <Checkbox label="Android TV" checked={filters.category.android} onChange={() => handleFilterChange('category', 'android')} />
                <Checkbox label="4k Smart TV" checked={filters.category['4kSmart']} onChange={() => handleFilterChange('category', '4kSmart')} />
              </div>
            </div>

            {/* Screen Size Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Screen Size</h3>
              <div className="space-y-2">
                <Checkbox label="72 inch" checked={filters.screenSize['72']} onChange={() => handleFilterChange('screenSize', '72')} />
                <Checkbox label="52 inch" checked={filters.screenSize['52']} onChange={() => handleFilterChange('screenSize', '52')} />
                <Checkbox label="32 inch" checked={filters.screenSize['32']} onChange={() => handleFilterChange('screenSize', '32')} />
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Color</h3>
              <div className="space-y-2">
                <Checkbox label="Black" checked={filters.color.black} onChange={() => handleFilterChange('color', 'black')} />
                <Checkbox label="Gray" checked={filters.color.gray} onChange={() => handleFilterChange('color', 'gray')} />
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Brand</h3>
              <div className="space-y-2">
                <Checkbox label="Sony" checked={filters.brand.sony} onChange={() => handleFilterChange('brand', 'sony')} />
                <Checkbox label="Panasonic" checked={filters.brand.panasonic} onChange={() => handleFilterChange('brand', 'panasonic')} />
                <Checkbox label="Haier" checked={filters.brand.haier} onChange={() => handleFilterChange('brand', 'haier')} />
                <Checkbox label="Singer" checked={filters.brand.singer} onChange={() => handleFilterChange('brand', 'singer')} />
                <Checkbox label="Bravia" checked={filters.brand.bravia} onChange={() => handleFilterChange('brand', 'bravia')} />
                <Checkbox label="Walton" checked={filters.brand.walton} onChange={() => handleFilterChange('brand', 'walton')} />
                <Checkbox label="Samsung" checked={filters.brand.samsung} onChange={() => handleFilterChange('brand', 'samsung')} />
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                FOUND 376 RESULTS FOR <span className="text-blue-600">SMART TV</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select className="px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Selling</option>
              </select>
              
              {/* View Toggle */}
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded text-sm font-medium ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LedTvPage;
