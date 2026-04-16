import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const dishwashersProducts = [
  { id: 1, name: 'BOSCH 12 PLACE SETTINGS FULLY INTEGRATED', originalPrice: 800, price: 720, rating: 4.8, reviews: 156, discount: 10, image: '/placeholder-dishwasher1.png' },
  { id: 2, name: 'SAMSUNG 14 PLACE SETTINGS FREESTANDING', originalPrice: 950, price: 855, rating: 4.7, reviews: 134, discount: 10, image: '/placeholder-dishwasher2.png' },
  { id: 3, name: 'LG 10 PLACE SETTINGS COUNTERTOP', originalPrice: 500, price: 450, rating: 4.6, reviews: 198, discount: 10, image: '/placeholder-dishwasher3.png' },
  { id: 4, name: 'WHIRLPOOL 13 PLACE SETTINGS BUILT-IN', originalPrice: 750, price: 675, rating: 4.5, reviews: 112, discount: 10, image: '/placeholder-dishwasher4.png' },
  { id: 5, name: 'MIELE 16 PLACE SETTINGS PREMIUM', originalPrice: 1500, price: 1350, rating: 4.9, reviews: 67, discount: 10, image: '/placeholder-dishwasher5.png' },
  { id: 6, name: 'ELECTROLUX 12 PLACE SETTINGS SILENT', originalPrice: 850, price: 765, rating: 4.7, reviews: 89, discount: 10, image: '/placeholder-dishwasher6.png' },
  { id: 7, name: 'HAFFEELE 8 PLACE SETTINGS COMPACT', originalPrice: 400, price: 360, rating: 4.4, reviews: 234, discount: 10, image: '/placeholder-dishwasher7.png' },
  { id: 8, name: 'SIEMENS 14 PLACE SETTINGS ECO SILENCE', originalPrice: 1100, price: 990, rating: 4.8, reviews: 76, discount: 10, image: '/placeholder-dishwasher8.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Freestanding': false, 'Built-in': false, 'Countertop': false, 'Drawer': false },
  brand: { bosch: false, samsung: false, lg: false, whirlpool: false, miele: false, electrolux: false },
};

const DishwashersPage = () => {
  return (
    <SubcategoryPage
      title="Dishwashers"
      breadcrumb="Dishwashers"
      products={dishwashersProducts}
      filters={defaultFilters}
    />
  );
};

export default DishwashersPage;
