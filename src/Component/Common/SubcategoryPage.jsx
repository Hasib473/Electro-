import React, { useState } from 'react';
import { Link } from 'react-router';

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
    <div className="relative mb-4 flex justify-center items-center bg-gray-50 rounded-lg p-4 h-48">
      <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
        {product.discount}% off
      </span>
      <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-xs text-center">Product Image</span>
      </div>
    </div>

    <div className="flex flex-col flex-grow">
      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-1">
        {product.name}
      </h3>

      <div className="flex items-center gap-1 mb-3">
        <StarIcon />
        <span className="text-xs text-gray-600">
          {product.rating} ({product.reviews})
        </span>
      </div>

      <div className="flex flex-col items-end mb-4">
        <span className="text-xs text-gray-400 line-through">
          ${product.originalPrice}
        </span>
        <span className="text-sm font-bold text-gray-900">
          ${product.price}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <button className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-lg hover:border-red-300 hover:text-red-500 transition-colors duration-200 text-gray-400">
          <HeartIcon />
        </button>

        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
);

const SubcategoryPage = ({ title, breadcrumb, products, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterState, setFilterState] = useState(filters);
  const [sortBy, setSortBy] = useState('featured');

  const itemsPerPage = 6;

  // Filter products based on all active filters
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Apply price filter
    const minPrice = parseFloat(filterState.price.min);
    const maxPrice = parseFloat(filterState.price.max);
    
    if (!isNaN(minPrice)) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }
    if (!isNaN(maxPrice)) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }

    // Apply category filter
    const activeCategories = Object.entries(filterState.category || {})
      .filter(([_, checked]) => checked)
      .map(([key]) => key.toLowerCase());
    
    if (activeCategories.length > 0) {
      filtered = filtered.filter(product => 
        activeCategories.includes(product.category?.toLowerCase())
      );
    }

    // Apply brand filter
    const activeBrands = Object.entries(filterState.brand || {})
      .filter(([_, checked]) => checked)
      .map(([key]) => key.toLowerCase());
    
    if (activeBrands.length > 0) {
      filtered = filtered.filter(product => 
        activeBrands.includes(product.brand?.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt || b.dateAdded) - new Date(a.createdAt || a.dateAdded));
        break;
      case 'best-selling':
        filtered.sort((a, b) => (b.sales || 0) - (a.sales || 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (category, filter) => {
    setCurrentPage(1);
    setFilterState((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [filter]: !prev[category][filter],
      },
    }));
  };

  const handleSortChange = (e) => {
    setCurrentPage(1);
    setSortBy(e.target.value);
  };

  const handlePriceChange = (type, value) => {
    setCurrentPage(1);
    setFilterState((prev) => ({
      ...prev,
      price: { ...prev.price, [type]: value }
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
          <Link to="/category/home-appliances" className="hover:text-gray-700">Home Appliances</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-blue-600 font-medium">{breadcrumb}</span>
        </nav>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">FILTERS</h2>
              <button 
                onClick={() => {
                  setCurrentPage(1);
                  setFilterState(filters);
                  setSortBy('featured');
                }}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear All
              </button>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-black mb-3">Price, $</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterState.price.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterState.price.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            {filterState.category && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {Object.entries(filterState.category).map(([key, checked]) => (
                    <Checkbox key={key} label={key} checked={checked} onChange={() => handleFilterChange('category', key)} />
                  ))}
                </div>
              </div>
            )}

            {/* Brand Filter */}
            {filterState.brand && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Brand</h3>
                <div className="space-y-2">
                  {Object.entries(filterState.brand).map(([key, checked]) => (
                    <Checkbox key={key} label={key} checked={checked} onChange={() => handleFilterChange('brand', key)} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {title.toUpperCase()}
              </h1>
              <p className="text-sm text-gray-500">
                FOUND {filteredProducts.length} RESULTS
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select 
                className="px-4 py-2 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="best-selling">Best Selling</option>
                <option value="rating">Highest Rated</option>
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
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Found</h3>
              <p className="text-sm text-gray-500 text-center max-w-md">
                Try adjusting your filters or search criteria to find what you're looking for.
              </p>
            </div>
          )}

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

export default SubcategoryPage;
